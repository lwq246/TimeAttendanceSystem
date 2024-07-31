from fastapi import FastAPI, APIRouter, Depends, HTTPException
from pydantic import BaseModel
from datetime import time
from typing import Optional
import psycopg2
from psycopg2 import IntegrityError
from tms_file.tms_schemas.index import ShiftSection

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
    prefix="/shiftsection",
    tags=["shiftsection"],
    responses={401: {"user": "Not authorized"}}
)

class ShiftSection(BaseModel):
    sectioncode: str
    description: str


@router.post("/create_shiftsection/")
async def create_shiftsection(shiftsection: ShiftSection, conn=Depends(get_db_connection)):
    try:
        if conn is None:
            raise HTTPException(status_code=500, detail="Database connection is not available.")
        
        with conn.cursor() as cursor:
            insert_query = """
            INSERT INTO tms.shiftsection (sectioncode, description) VALUES (%s, %s)
            """
            cursor.execute(insert_query, (
                shiftsection.sectioncode, shiftsection.description
            ))
            conn.commit()
        return {"message": "Shift section inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

app.include_router(router)


@router.get("/get_shiftsection")
async def get_ShiftSection(conn=Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM tms.shiftsection"
            cursor.execute(query)
            ShiftSection = cursor.fetchall()
            return {"shiftsection": ShiftSection}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/get_shiftsection_by_rno/{shfdet_rno}")
async def get_ShiftSection_by_rno(sectioncode: str, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM tms.shiftsection WHERE sectioncode = %s"
        cursor.execute(query, (sectioncode,))
        ShiftDetail = cursor.fetchall()
        return {"shiftsection": ShiftDetail}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
    
@router.put("/shiftsection_update/{sectioncode}")
def update_shiftsection(sectioncode: str, shiftsection: ShiftSection, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        # Check if the shift section exists
        query = "SELECT COUNT(*) FROM tms.shiftsection WHERE sectioncode = %s"
        cursor.execute(query, (sectioncode,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Shift section not found")
        # Update the shift section
        update_query = """
        UPDATE tms.shiftsection
        SET sectioncode = %s, description = %s WHERE sectioncode = %s
        """
        cursor.execute(update_query, (shiftsection.sectioncode, shiftsection.description, sectioncode))
        conn.commit()

        return {"message": "Shift section updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()

@router.delete("/shiftsection_delete/{sectioncode}")
def delete_shiftsection(sectioncode: str, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the shift section exists
        cursor.execute("SELECT COUNT(*) FROM tms.shiftsection WHERE sectioncode = %s", (sectioncode,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Shift section not found")

        # Delete the shift section
        delete_query = "DELETE FROM tms.shiftsection WHERE sectioncode = %s"
        cursor.execute(delete_query, (sectioncode,))
        conn.commit()

        return {"message": "Shift section deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()

    