from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from config.database import get_db_connection 
import psycopg2
from tms_file.tms_schemas.index import ClockingData
from typing import List

router = APIRouter(
    prefix="/clockingdata",
    tags=["clockingdata"],
    responses={401: {"user": "Not authorized"}}
)

@router.post("/clockingdata")
async def create_clockingdata(clockingdata: ClockingData, conn = Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            insert_query = "INSERT INTO tms.clockingdata (clockingdata_rno, license_rno, company_rno, status, clocktime, islock, terminal, employeeno, longitude, latitude, employee_rno) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(insert_query, (
                clockingdata.clockingdata_rno,
                clockingdata.license_rno,
                clockingdata.company_rno,
                clockingdata.status,
                clockingdata.clocktime,
                clockingdata.islock,
                clockingdata.terminal,
                clockingdata.employeeno,
                clockingdata.longitude,
                clockingdata.latitude,
                clockingdata.employee_rno
            ))
        conn.commit()
        return {"message": "Clocking data inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/clocking-data")
async def get_clocking_data(conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM tms.clockingdata"  # Add the columns you want to select
        cursor.execute(query)
        clocking_data = cursor.fetchall()
        cursor.close()
        return {"clockingdata": clocking_data}
    except psycopg2.Error as e:
        return {"error": str(e)}

@router.get("/get_clocking_data_by_rno/{clockingdata_rno}")
def get_clocking_data_by_rno(clockingdata_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM tms.clockingdata WHERE clockingdata_rno = %s"
        cursor.execute(query, (clockingdata_rno,))
        ck = cursor.fetchall()
        return {"clocking_data": ck}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

    
@router.get("/get_employee_information/{clockingdata_rno}")
def get_employee_information(clockingdata_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT employee_rno, employeeno FROM tms.clockingdata WHERE clockingdata_rno = %s"
        cursor.execute(query, (clockingdata_rno,))
        ck = cursor.fetchall()
        return {"Clocking_data": ck}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
@router.get("/get_location/{clockingdata_rno}")
def get_location(clockingdata_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT longitude, latitude FROM tms.clockingdata WHERE clockingdata_rno = %s"
        cursor.execute(query, (clockingdata_rno,))
        ck = cursor.fetchall()
        return {"Clocking_data": ck}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.put("/clockingdata/{clockingdata_rno}")
def update_clockingdata(clockingdata_rno: int, clockingdata: ClockingData, conn = Depends(get_db_connection)):
    try:
        cursor = conn.cursor()

        # Check if the clocking data exists
        query = "SELECT COUNT(*) FROM tms.clockingdata WHERE clockingdata_rno = %s"  # Hardcoded clockingdata_rno for testing
        cursor.execute(query, (clockingdata_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Clocking data not found")

        # Update the clocking data
        update_query = """
            UPDATE tms.clockingdata 
            SET clockingdata_rno=%s, company_rno=%s, employeeno=%s, employee_rno=%s, clocktime=%s
            WHERE clockingdata_rno=%s
        """
        cursor.execute(update_query, (clockingdata.clockingdata_rno, clockingdata.company_rno, clockingdata.employeeno, clockingdata.employee_rno, clockingdata.clocktime, clockingdata_rno))
        conn.commit()
        cursor.close()

        return {"message": "Clocking data updated successfully"}
    except TypeError as e:
        raise HTTPException(status_code=404, detail="Clocking data not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.delete("/clockingdata_delete/{clockindata_rno}")
def delete_user(license_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM tms.clockingdata WHERE license_rno = %s", (license_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="User not found")

        # Delete the user
        delete_query = "DELETE FROM tms.clockingdata WHERE license_rno = %s"
        cursor.execute(delete_query, (license_rno,))
        conn.commit()

        return {"message": "clocking data deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
    

    
    
    