from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection 
from routes_file.routes_schemas.index import department, getDepartmentName
from typing import List

router = APIRouter(
    prefix="/Department",
    tags=["Department"],
    responses={401: {"user": "Not authorized"}}
)

def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0    

@router.post("/department")
def create_department(department: department, conn = Depends(get_db_connection)):
    if not check_license(conn, department.license_rno):
        raise HTTPException(status_code=400, detail="License not found")

    # Check if the license is already associated with any department
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM department WHERE license_rno = %s"
    cursor.execute(query, (department.license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()

    if count > 0:
        raise HTTPException(status_code=400, detail="License already associated with a department")

    # Insert the department
    cursor = conn.cursor()
    insert_query = "INSERT INTO department (license_rno, department_rno, department) VALUES (%s, %s, %s)"
    try:
        cursor.execute(insert_query, (department.license_rno, department.department_rno, department.department))
        conn.commit()
        cursor.close()
        return {"message": "Department inserted successfully"}
    except IntegrityError as e:
        return {"error": "Integrity Error: {}".format(str(e))}
    except Exception as e:
        return {"error": str(e)}
        

@router.get("/get/departments" , operation_id="getdepartment")
def get_departments(conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM department"
        cursor.execute(query)
        departments = cursor.fetchall()
        cursor.close()
        if not departments:
            return {"departments": []}
        return {"departments": departments}
    except Exception as e:
        return {"error": str(e)}

@router.get("/get-departments-name" )
def get_departments_name(conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT department FROM department"
        cursor.execute(query)
        departments = cursor.fetchall()
        cursor.close()
        if not departments:
            return {"departments": []}
        return {"departments": departments}
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/get_department_by_rno/{department_rno}")
def get_department_by_rno(department_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM department WHERE department_rno = %s"
        cursor.execute(query, (department_rno,))
        departments = cursor.fetchall()
        return {"Department": departments}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.put("/department/{department_rno}")
def update_department(department_rno: int, department: department, conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the department exists
        query = "SELECT COUNT(*) FROM department WHERE department_rno = %s"
        cursor.execute(query, (department_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Department not found")
        # Check if the license exists
        if not check_license(conn, department.license_rno):
            raise HTTPException(status_code=400, detail="License not found")

        # Update the department
        update_query = "UPDATE department SET license_rno=%s, department=%s WHERE department_rno=%s"
        cursor.execute(update_query, (department.license_rno, department.department, department_rno))
        conn.commit()
        cursor.close()
        return {"message": "Department updated successfully"}
    except Exception as e:
        return {"error": str(e)}
    
@router.delete("/departments/{department_rno}")
def delete_department(department_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the department exists
        cursor.execute("SELECT COUNT(*) FROM department WHERE department_rno = %s", (department_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Department not found")

        # Delete the department
        delete_query = "DELETE FROM department WHERE department_rno = %s"
        cursor.execute(delete_query, (department_rno,))
        conn.commit()

        return {"message": "Department deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()    
