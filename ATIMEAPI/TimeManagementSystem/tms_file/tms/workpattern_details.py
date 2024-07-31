from fastapi import FastAPI, APIRouter, Depends, HTTPException
from pydantic import BaseModel
import psycopg2
from psycopg2 import IntegrityError
from tms_file.tms_schemas.index import WorkPattern_detail

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
    prefix="/WorkPatternDetail",
    tags=["work pattern detail"],
    responses={401: {"user": "Not authorized"}}
)
    
@router.post("/create_wrkptern_detail/")
async def create_workpattern_detail(wpdetail: WorkPattern_detail, conn=Depends(get_db_connection)):
    try:
        if conn is None:
            raise HTTPException(status_code=500, detail="Database connection is not available.")
        with conn.cursor() as cursor:
            insert_query = """
                INSERT INTO tms.wrkpattern_detail(
                    wrkpattern_detail_rno, wrkpattern_rno, license_rno, company_rno, weekday, shf_rno,
                    wrk_rno, allwrule_rno, ot_rno, dayinmonth, isrestday, isoffday, isflexibleshift
                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (
                wpdetail.wrkpattern_detail_rno, wpdetail.wrkpattern_rno, wpdetail.license_rno, 
                wpdetail.company_rno, wpdetail.weekday, wpdetail.shf_rno, wpdetail.wrk_rno, 
                wpdetail.allwrule_rno, wpdetail.ot_rno, wpdetail.dayinmonth, wpdetail.isrestday, 
                wpdetail.isoffday, wpdetail.isflexibleshift
            ))
            
        conn.commit()
        return {"message": "Work pattern details inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.get("/get_workpattern/details")
async def get_workpattern_detail(conn=Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM tms.wrkpattern_detail"
            cursor.execute(query)
            WorkPattern_detail = cursor.fetchall()
            return {"workpattern_detail": WorkPattern_detail}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/get_workpattern_details_by_rno/{wrkpattern}")
async def get_workpattern_details_by_rno(wrkpattern_detail_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM tms.wrkpattern_detail WHERE wrkpattern_detail_rno=%s"
        cursor.execute(query, (wrkpattern_detail_rno,))
        WorkPattern = cursor.fetchall()
        return {"work_pattern": WorkPattern}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
@router.get("/get_wrkpattern_shifts/{wrkpattern}")
async def get_workpattern_shifts(wrkpattern_detail_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT shf_rno, wrk_rno, allwrule_rno, ot_rno FROM tms.wrkpattern_detail WHERE wrkpattern_detail_rno=%s"
        cursor.execute(query, (wrkpattern_detail_rno,))
        WorkPattern = cursor.fetchall()
        return {"work_pattern": WorkPattern}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
            
    
    
@router.put("/update_workpattern_detail/{wrkpattern_detail_rno}")
def update_workpattern(wrkpattern_detail_rno: int, wpdetail: WorkPattern_detail, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT COUNT(*) FROM tms.wrkpattern_detail WHERE wrkpattern_detail_rno = %s"
        cursor.execute(query, (wrkpattern_detail_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Work pattern detail not found")

        update_query = """
            UPDATE tms.wrkpattern_detail
            SET wrkpattern_rno=%s, license_rno=%s, company_rno=%s, weekday=%s, shf_rno=%s,
                wrk_rno=%s, allwrule_rno=%s, ot_rno=%s, dayinmonth=%s, isrestday=%s, isoffday=%s, isflexibleshift=%s
            WHERE wrkpattern_detail_rno=%s
        """
        cursor.execute(update_query, ( 
            wpdetail.wrkpattern_rno, wpdetail.license_rno, wpdetail.company_rno, 
            wpdetail.weekday, wpdetail.shf_rno, wpdetail.wrk_rno, wpdetail.allwrule_rno, 
            wpdetail.ot_rno, wpdetail.dayinmonth, wpdetail.isrestday, wpdetail.isoffday, 
            wpdetail.isflexibleshift, wrkpattern_detail_rno  # Add wrkpattern_detail_rno for WHERE clause
        ))
        
        conn.commit()
        return {"message": "Work pattern detail updated successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.delete("/delete_workpattern_detail/{wrkpattern_detail_rno}")
def delete_workcalendar(wrkpattern_detail_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM tms.wrkpattern_detail WHERE wrkpattern_detail_rno = %s", (wrkpattern_detail_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="work pattern detail not found")

        delete_query = "DELETE FROM tms.wrkpattern_detail WHERE wrkpattern_detail_rno = %s"
        cursor.execute(delete_query, (wrkpattern_detail_rno,))
        conn.commit()

        return {"message": "work pattern detail deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()

           