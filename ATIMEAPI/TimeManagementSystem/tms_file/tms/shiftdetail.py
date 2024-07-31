from fastapi import FastAPI, APIRouter, Depends, HTTPException
from pydantic import BaseModel
from datetime import time
from typing import Optional
import psycopg2
from psycopg2 import IntegrityError
from tms_file.tms_schemas.index import ShiftDetail


app = FastAPI()

# Assuming get_db_connection returns a valid connection object
def get_db_connection():
    # Your database connection logic here
    conn = psycopg2.connect(
        database="easydb",
        user="postgres",
        password="admin123%",
        host="103.6.244.135",
        port="5432"
    )
    return conn

router = APIRouter(
    prefix="/shiftdetail",
    tags=["shiftdetail"],
    responses={401: {"user": "Not authorized"}}
)

@router.post("/create_shiftdetail/")
async def create_shiftdetail(shiftdetail: ShiftDetail, conn=Depends(get_db_connection)):
    try:
        if conn is None:
            raise HTTPException(status_code=500, detail="Database connection is not available.")
        
        with conn.cursor() as cursor:
            insert_query = """
            INSERT INTO tms.shiftdetail (
                shfmst_rno, shfdet_rno, sectioncode, start_from, start_actual, start_to, 
                end_from, end_actual, end_to, graceperiod_latein, graceperiod_earlyout, 
                minothrsperday, maxothrsperday, isflexiblemeal, ismeallateinot, ismealearlyoutot, 
                otrate_normal, otrate_off, otrate_rest, otrate_holiday, extendot, extotrate_normal, 
                extotrate_off, extotrate_rest, extotrate_half, extotrate_holiday, extminothrsperday, 
                extmaxothrsperday, minmeallateout, minmealearlyin, rounding, isextendot
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 
                      %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (
                shiftdetail.shfmst_rno, shiftdetail.shfdet_rno, shiftdetail.sectioncode,
                shiftdetail.start_from, shiftdetail.start_actual, shiftdetail.start_to,
                shiftdetail.end_from, shiftdetail.end_actual, shiftdetail.end_to,
                shiftdetail.graceperiod_latein, shiftdetail.graceperiod_earlyout,
                shiftdetail.minothrsperday, shiftdetail.maxothrsperday, shiftdetail.isflexiblemeal,
                shiftdetail.ismeallateinot, shiftdetail.ismealearlyoutot, shiftdetail.otrate_normal,
                shiftdetail.otrate_off, shiftdetail.otrate_rest, shiftdetail.otrate_holiday,
                shiftdetail.extendot, shiftdetail.extotrate_normal, shiftdetail.extotrate_off,
                shiftdetail.extotrate_rest, shiftdetail.extotrate_half, shiftdetail.extotrate_holiday,
                shiftdetail.extminothrsperday, shiftdetail.extmaxothrsperday, shiftdetail.minmeallateout,
                shiftdetail.minmealearlyin, shiftdetail.rounding, shiftdetail.isextendot
            ))
            conn.commit()
        return {"message": "Shift detail inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

app.include_router(router)


@router.get("/get_shiftdetail")
async def get_ShiftDetail(conn=Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM tms.shiftdetail"
            cursor.execute(query)
            ShiftDetail = cursor.fetchall()
            return {"shiftdetail": ShiftDetail}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    
@router.get("/get_shiftdetail/{shfdet_rno}")
async def get_shiftdetail(shfdet_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM tms.shiftdetail WHERE shfdet_rno=%s"
        cursor.execute(query, (shfdet_rno,))
        ShiftDetail = cursor.fetchall()
        return {"shiftdetail": ShiftDetail}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.get("/get_rate/{shfdet_rno}")
async def get_rate(shfdet_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT shfmst_rno, otrate_normal, otrate_off, otrate_rest, otrate_half, otrate_holiday, extotrate_normal, extotrate_off, extotrate_rest, extotrate_half, extotrate_holiday FROM tms.shiftdetail WHERE shfdet_rno=%s"
        cursor.execute(query, (shfdet_rno,))
        ShiftDetail = cursor.fetchall()
        return {"shiftdetail": ShiftDetail}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
@router.get("/get_meal_period/{shfdet_rno}")
async def get_rate(shfdet_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT shfdet_rno, minmeallateout, minmealearlyin FROM tms.shiftdetail WHERE shfdet_rno=%s"
        cursor.execute(query, (shfdet_rno,))
        ShiftDetail = cursor.fetchall()
        return {"shiftdetail": ShiftDetail}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.put("/update_shiftdetail/{shfdet_rno}")
def update_shiftdetail(shfdet_rno: int, shiftdetail: ShiftDetail, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the shift detail exists
        query = "SELECT COUNT(*) FROM tms.shiftdetail WHERE shfdet_rno = %s"
        cursor.execute(query, (shfdet_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Shift detail not found")

        # Update the shift detail
        update_query = """
            UPDATE tms.shiftdetail
            SET shfmst_rno=%s, sectioncode=%s, start_from=%s, start_actual=%s, start_to=%s, 
                end_from=%s, end_actual=%s, end_to=%s, graceperiod_latein=%s, graceperiod_earlyout=%s, 
                minothrsperday=%s, maxothrsperday=%s, isflexiblemeal=%s, ismeallateinot=%s, ismealearlyoutot=%s, 
                otrate_normal=%s, otrate_off=%s, otrate_rest=%s, otrate_holiday=%s, extendot=%s, extotrate_normal=%s, 
                extotrate_off=%s, extotrate_rest=%s, extotrate_half=%s, extotrate_holiday=%s, extminothrsperday=%s, 
                extmaxothrsperday=%s, minmeallateout=%s, minmealearlyin=%s, rounding=%s, isextendot=%s
            WHERE shfdet_rno=%s
        """
        cursor.execute(update_query, (
                shiftdetail.shfmst_rno, shiftdetail.sectioncode,
                shiftdetail.start_from, shiftdetail.start_actual, shiftdetail.start_to,
                shiftdetail.end_from, shiftdetail.end_actual, shiftdetail.end_to,
                shiftdetail.graceperiod_latein, shiftdetail.graceperiod_earlyout,
                shiftdetail.minothrsperday, shiftdetail.maxothrsperday, shiftdetail.isflexiblemeal,
                shiftdetail.ismeallateinot, shiftdetail.ismealearlyoutot, shiftdetail.otrate_normal,
                shiftdetail.otrate_off, shiftdetail.otrate_rest, shiftdetail.otrate_holiday,
                shiftdetail.extendot, shiftdetail.extotrate_normal, shiftdetail.extotrate_off,
                shiftdetail.extotrate_rest, shiftdetail.extotrate_half, shiftdetail.extotrate_holiday,
                shiftdetail.extminothrsperday, shiftdetail.extmaxothrsperday, shiftdetail.minmeallateout,
                shiftdetail.minmealearlyin, shiftdetail.rounding, shiftdetail.isextendot,
                shfdet_rno  # Add shfdet_rno here for WHERE clause
            ))
        
        conn.commit()
        return {"message": "Shift detail updated successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))   


@router.delete("/delete_shiftdetail/{shfdet_rno}")
def delete_shiftdetail(shfdet_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM tms.shiftdetail WHERE shfdet_rno = %s", (shfdet_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="shift detail not found")

        # Delete the user
        delete_query = "DELETE FROM tms.shiftdetail WHERE shfdet_rno = %s"
        cursor.execute(delete_query, (shfdet_rno,))
        conn.commit()

        return {"message": "shift detail deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()