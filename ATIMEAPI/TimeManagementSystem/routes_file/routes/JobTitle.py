from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection 
from routes_file.routes_schemas.index import jobtitle
from typing import List


router = APIRouter(
    prefix="/JobTitle",
    tags=["Jobtitle"],
    responses={401: {"user": "Not authorized"}}
)

def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0

@router.post("/jobtitle")
def create_jobtitle(jobtitle: jobtitle, conn = Depends(get_db_connection)):
    if not check_license(conn, jobtitle.license_rno):
        raise HTTPException(status_code=400, detail="License not found")

    # Check if the license is already associated with any department
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM jobtitle WHERE license_rno = %s"
    cursor.execute(query, (jobtitle.license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()

    if count > 0:
        raise HTTPException(status_code=400, detail="License already associated in job title")
    # Insert the department
    cursor = conn.cursor()
    insert_query = "INSERT INTO jobtitle (license_rno, jobtitle_rno, jobtitle) VALUES (%s, %s, %s)"
    try:
        cursor.execute(insert_query, (jobtitle.license_rno, jobtitle.jobtitle_rno, jobtitle.jobtitle))
        conn.commit()
        cursor.close()
        return {"message": "jobtitle inserted successfully"}
    except IntegrityError as e:
        return {"error": "Integrity Error: {}".format(str(e))}
    except Exception as e:
        return {"error": str(e)}

@router.get("/get_jobtitle" , operation_id="getjobtitle")
def get_jobtitle(conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM jobtitle"
        cursor.execute(query)
        jobtitle = cursor.fetchall()
        cursor.close()
        if not jobtitle:
            return {"jobtitle": []}
        return {"jobtitle": jobtitle}
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/get_jobtitle_by_rno/{jobtitle_rno}", response_model=List[jobtitle])
def get_jobtitle_by_rno(jobtitle_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM jobtitle WHERE jobtitle_rno = %s"
        cursor.execute(query, (jobtitle_rno,))
        licenses = cursor.fetchall()
        cursor.close()

        license_data = []
        for license in licenses:
            license_dict = dict(zip(jobtitle.__fields__.keys(), license))
            license_data.append(jobtitle(**license_dict))

        return license_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/jobtitle/{jobtitle_rno}")
def update_jobtitle(jobtitle_rno: int, jobtitle: jobtitle, conn = Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            # Check if the job title exists
            cursor.execute("SELECT COUNT(*) FROM jobtitle WHERE jobtitle_rno = %s", (jobtitle_rno,))
            count = cursor.fetchone()[0]
            if count == 0:
                raise HTTPException(status_code=404, detail="Job title not found")

            # Check if the license exists
            if not check_license(conn, jobtitle.license_rno):
                raise HTTPException(status_code=400, detail="License not found")

            # Update the job title
            update_query = "UPDATE jobtitle SET jobtitle_rno=%s, jobtitle=%s, license_rno=%s WHERE jobtitle_rno=%s"
            cursor.execute(update_query, (jobtitle.jobtitle_rno, jobtitle.jobtitle, jobtitle.license_rno, jobtitle_rno))
            conn.commit()

        return {"message": "Job title updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.delete("/jobtitle/{jobtitle_rno}")
def delete_jobtitle(jobtitle_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the job title exists
        cursor.execute("SELECT COUNT(*) FROM jobtitle WHERE jobtitle_rno = %s", (jobtitle_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Job title not found")

        # Delete the job title
        delete_query = "DELETE FROM jobtitle WHERE jobtitle_rno = %s"
        cursor.execute(delete_query, (jobtitle_rno,))
        conn.commit()

        return {"message": "Job title deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()    
            