from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection
from routes_file.routes_schemas.index import users_password
from typing import List
from psycopg2.extras import RealDictCursor
router = APIRouter(
    prefix="/Users_Password",
    tags=["users_password"],
    responses={401: {"user": "Not authorized"}}
)


def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0

@router.post("/users_password")
def create_user(user_password: users_password, conn=Depends(get_db_connection)):
    if not check_license(conn, user_password.license_rno):
        raise HTTPException(status_code=400, detail="License not found")

    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM users_password WHERE license_rno = %s"
    cursor.execute(query, (user_password.license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()

    if count > 0:
        raise HTTPException(status_code=400, detail="License already associated with a user password")

    cursor = conn.cursor()
    insert_query = "INSERT INTO users_password (license_rno, users_rno, usrpwd_rno, password, createdon, passwordresetlink ) VALUES (%s, %s, %s, %s, %s, %s)"
    try:
        cursor.execute(insert_query, (user_password.license_rno, user_password.users_rno, user_password.usrpwd_rno, user_password.password, user_password.createdon, user_password.passwordresetlink))
        conn.commit()
        cursor.close()
        return {"message": "User password inserted successfully"}
    except IntegrityError:
        raise HTTPException(status_code=400, detail="Integrity Error: Duplicate entry")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/get/users_password")
def get_users_password(conn=Depends(get_db_connection)):
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    try:
        query = "SELECT * FROM users_password"
        cursor.execute(query)
        users = cursor.fetchall()
        cursor.close()

        if not users:
            return []

        return users
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/get_user_password_by_rno/{usrpwd_rno}", response_model=List[users_password])
def get_user_password_by_rno(user_password_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM users_password WHERE usrpwd_rno = %s"
        cursor.execute(query, (user_password_rno,))
        users_passwords = cursor.fetchall()
        cursor.close()

        users_password_data = []
        for user_password in users_passwords:
            users_password_dict = dict(zip(users_password.__fields__.keys(), user_password))
            users_password_data.append(users_password(**users_password_dict))

        return users_password_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.put("/update/users_password/{usrpwd_rno}")
def update_users_password(usrpwd_rno: int, users_password: users_password, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user password entry exists
        query = "SELECT COUNT(*) FROM users_password WHERE usrpwd_rno = %s"
        cursor.execute(query, (usrpwd_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="User password entry not found")
        
        # Check if the license exists
        license_query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
        cursor.execute(license_query, (users_password.license_rno,))
        license_count = cursor.fetchone()[0]
        if license_count == 0:
            raise HTTPException(status_code=400, detail="License not found")
        
        # Update the user password entry
        update_query = """
        UPDATE users_password
        SET license_rno = %s, users_rno = %s, password = %s, createdon = %s, passwordresetlink = %s
        WHERE usrpwd_rno = %s
        """
        cursor.execute(update_query, (
            users_password.license_rno,
            users_password.users_rno,
            users_password.password,
            users_password.createdon,
            users_password.passwordresetlink,
            usrpwd_rno
        ))
        conn.commit()
        cursor.close()
        return {"message": "User password entry updated successfully"}
    except Exception as e:
        return {"error": str(e)}
    
@router.delete("/users_password/{users_rno}")
def delete_user(users_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the department exists
        cursor.execute("SELECT COUNT(*) FROM users_password WHERE users_rno = %s", (users_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="User not found")

        # Delete the department
        delete_query = "DELETE FROM users_password WHERE users_rno = %s"
        cursor.execute(delete_query, (users_rno,))
        conn.commit()

        return {"message": "User Password has deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()          

