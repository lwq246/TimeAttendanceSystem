from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection
from routes_file.routes_schemas.index import users
from typing import List
from sqlalchemy.sql import text
from pydantic import BaseModel


class EmailInformation(BaseModel):
    email: str
    password: str

router = APIRouter(
    prefix="/Users",
    tags=["users"],
    responses={401: {"user": "Not authorized"}}
)

@router.post("/login")
async def login(emailInformation: EmailInformation,  conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    query = 'SELECT up.password FROM users u JOIN users_password up ON u.users_rno = up.users_rno WHERE u.email = %s' # Using text() from SQLAlchemy
    cursor.execute(query, (emailInformation.email,))
    result = cursor.fetchone()
    if not result or result[0] != emailInformation.password:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return {"message": "Login successful"}

def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0




@router.post("/users")
def create_user(user: users, conn = Depends(get_db_connection)):
    if not check_license(conn, user.license_rno):
        raise HTTPException(status_code=400, detail="License not found")

    # Check if the license is already associated with any department
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM users WHERE license_rno = %s"
    cursor.execute(query, (user.license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()

    if count > 0:
        raise HTTPException(status_code=400, detail="License already associated with a user")

    # Insert the department
    cursor = conn.cursor()
    insert_query ="INSERT INTO users (users_rno, license_rno, username, email, passwordquestion, passwordanswer, IsApproved, LastActivityDate, LastLoginDate, LastPasswordChangedDate, IsLockedOut, LastLockedOutDate, FailedPasswordAttemptCount, FailedPasswordAnswerAttemptCount, Latitude, Longitude, createdon, LoweredEmail, picture, emailactivatelink ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"

    try:
        cursor.execute(insert_query, (user.users_rno, user.license_rno, user.username, user.email, user.passwordquestion, 
        user.passwordanswer, user.IsApproved, user.LastActivityDate, user.LastLoginDate, 
        user.LastPasswordChangedDate, user.IsLockedOut, user.LastLockedOutDate, user.FailedPasswordAttemptCount,user.FailedPasswordAnswerAttemptCount, 
        user.Latitude, user.Longitude, user.createdon, user.LoweredEmail, user.picture, user.emailactivatelink))
        conn.commit()
        cursor.close()
        return {"message": "User inserted successfully"}
    except IntegrityError as e:
        return {"error": "Integrity Error: {}".format(str(e))}
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/get/users")
def get_users(conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM users"
        cursor.execute(query)
        user = cursor.fetchall()
        cursor.close()
        if not user:
            return {"users": []}
        return user
    except Exception as e:
        return {"error": str(e)}
    



    
@router.get("/get_users_by_rno/{users_rno}")
def get_user_by_rno(user_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM Users WHERE users_rno = %s"
        cursor.execute(query, (user_rno,))
        user = cursor.fetchall()
        cursor.close()
        if not user:
            return {"users": []}
        return {"users": user}
    except Exception as e:
        return {"error": str(e)}
    
    
@router.get("/get_user_credential/{users_rno}")
def get_user_credential(user_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = """
        SELECT 
            users_rno, 
            passwordquestion, 
            passwordanswer, 
            "IsApproved", 
            "LastActivityDate", 
            "LastLoginDate", 
            "LastPasswordChangedDate", 
            "IsLockedOut", 
            "LastLockedOutDate",
            "FailedPasswordAttemptCount", 
            "FailedPasswordAnswerAttemptCount"  
        FROM Users 
        WHERE users_rno = %s
        """
        cursor.execute(query, (user_rno,))
        user = cursor.fetchall()
        cursor.close()
        if not user:
            return {"users": []}
        return {"users": user}
    except Exception as e:
        return {"error": str(e)}
@router.get("/get_user_information/{users_rno}")
def get_user_information(user_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = """SELECT users_rno, username, email, "LoweredEmail", picture, emailactivatelink, createdon FROM Users WHERE users_rno = %s"""
        cursor.execute(query, (user_rno,))
        user = cursor.fetchall()
        cursor.close()
        if not user:
            return {"users": []}
        return {"users": user}
    except Exception as e:
        return {"error": str(e)}
@router.get("/get_user_location/{users_rno}")
def get_user_location(user_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = """SELECT users_rno, "Latitude", "Longitude" FROM Users WHERE users_rno = %s"""
        cursor.execute(query, (user_rno,))
        user = cursor.fetchall()
        cursor.close()
        if not user:
            return {"users": []}
        return {"users": user}
    except Exception as e:
        return {"error": str(e)}


@router.put("/users/{users_rno}")
def update_users(users_rno: int, user: users, conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the department exists
        query = "SELECT COUNT(*) FROM users WHERE users_rno = %s"
        cursor.execute(query, (users_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="User not found")
        # Check if the license exists
        if not check_license(conn, users.license_rno):
            raise HTTPException(status_code=400, detail="License not found")
        
        # Update the department
        update_query = "UPDATE users SET users_rno, license_rno = %s, username = %s, email = %s, passwordquestion = %s, passwordanswer = %s, IsApproved = %s, LastActivityDate = %s, LastLoginDate = %s, LastPasswordChangedDate = %s, LastPasswordChangedDate= %s, IsLockedOut= %s, LastLockedOutDate= %s, FailedPasswordAttemptCount= %s,FailedPasswordAnswerAttemptCount= %s, Latitude= %s, Longitude= %s, createdon= %s, LoweredEmail= %s, picture= %s, emailactivatelink= %s"
        cursor.execute(update_query, (user.users_rno, user.license_rno, user.username, user.email, user.passwordquestion, 
        user.passwordanswer, user.IsApproved, user.LastActivityDate, user.LastLoginDate, user.LastPasswordChangedDate, 
        user.LastPasswordChangedDate, user.IsLockedOut, user.LastLockedOutDate, user.FailedPasswordAttemptCount,user.FailedPasswordAnswerAttemptCount, 
        user.Latitude, user.Longitude, user.createdon, user.LoweredEmail, user.picture, user.emailactivatelink))
        conn.commit()
        cursor.close()
        return {"message": "Users updated successfully"}
    except Exception as e:
        return {"error": str(e)}    
    
@router.delete("/users/{users_rno}")
def delete_user(users_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the department exists
        cursor.execute("SELECT COUNT(*) FROM users WHERE users_rno = %s", (users_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="User not found")

        # Delete the department
        delete_query = "DELETE FROM users WHERE users_rno = %s"
        cursor.execute(delete_query, (users_rno,))
        conn.commit()

        return {"message": "User deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()      