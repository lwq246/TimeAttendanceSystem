from fastapi import FastAPI, APIRouter, Depends, HTTPException
from pydantic import BaseModel
import psycopg2
from psycopg2 import IntegrityError
from tms_file.tms_schemas.index import WorkPattern


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
    prefix="/WorkPattern",
    tags=["work pattern"],
    responses={401: {"user": "Not authorized"}}
)

@router.post("/create_workpattern/")
async def create_workpattern(workpattern: WorkPattern, conn=Depends(get_db_connection)):
    try:
        if conn is None:
            raise HTTPException(status_code=500, detail="Database connection is not available.")
        
        with conn.cursor() as cursor:
            insert_query = """
                INSERT INTO tms.wrkpattern (wrkpattern_rno, license_rno, company_rno, patterncode, description, pattern_type, 
                fromdayofmonth, todayofmonth)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (
                workpattern.wrkpattern_rno, workpattern.license_rno, workpattern.company_rno,
                workpattern.patterncode, workpattern.description, workpattern.pattern_type,
                workpattern.fromdayofmonth, workpattern.todayofmonth
            ))
        
        conn.commit()
        return {"message": "Work pattern inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
app.include_router(router)


@router.get("/get_workpattern")
async def get_workpattern(conn=Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM tms.wrkpattern"
            cursor.execute(query)
            work_patterns = cursor.fetchall()
            # Get column names from cursor description
            column_names = [desc[0] for desc in cursor.description]
            # Process work_patterns if needed (e.g., convert to dictionary)
            processed_work_patterns = [dict(zip(column_names, pattern)) for pattern in work_patterns]
            return {"work_patterns": processed_work_patterns}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/get_workpattern_by_rno/{wrkpattern}")
async def get_workpattern_by_rno(wrkpattern_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM tms.wrkpattern WHERE wrkpattern_rno=%s"
        cursor.execute(query, (wrkpattern_rno,))
        WorkPattern = cursor.fetchall()
        return {"work_pattern": WorkPattern}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
@router.get("/get_pattern_duration/{wrkpattern}")
async def get_workpattern_duration(wrkpattern_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT wrkpattern_rno, fromdayofmonth, todayofmonth FROM tms.wrkpattern WHERE wrkpattern_rno=%s"
        cursor.execute(query, (wrkpattern_rno,))
        WorkPattern = cursor.fetchall()
        return {"work_pattern": WorkPattern}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
    
@router.put("/update_workpattern/{wrkpattern_rno}")
def update_workpattern(wrkpattern_rno: int, workpattern: WorkPattern, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT COUNT(*) FROM tms.wrkpattern WHERE wrkpattern_rno = %s"
        cursor.execute(query, (wrkpattern_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Work pattern not found")

        update_query = """
            UPDATE tms.wrkpattern
            SET license_rno=%s, company_rno=%s, patterncode=%s, description=%s, pattern_type=%s, 
                fromdayofmonth=%s, todayofmonth=%s
            WHERE wrkpattern_rno=%s
        """
        cursor.execute(update_query, (  
            workpattern.license_rno, workpattern.company_rno, workpattern.patterncode,
            workpattern.description, workpattern.pattern_type, workpattern.fromdayofmonth,
            workpattern.todayofmonth, wrkpattern_rno  # Add wrkpattern_rno for WHERE clause
        ))  
        
        conn.commit()
        return {"message": "Work pattern updated successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.delete("/delete_workpattern/{wrkpattern_rno}")
def delete_workcalendar(wrkpattern_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM tms.wrkpattern WHERE wrkpattern_rno = %s", (wrkpattern_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="work pattern not found")

        delete_query = "DELETE FROM tms.wrkpattern WHERE wrkpattern_rno = %s"
        cursor.execute(delete_query, (wrkpattern_rno,))
        conn.commit()

        return {"message": "work pattern deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()            


