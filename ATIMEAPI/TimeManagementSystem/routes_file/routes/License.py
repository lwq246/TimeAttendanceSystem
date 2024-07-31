from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection 
from routes_file.routes_schemas.index import License
from typing import List


router = APIRouter(
    prefix="/License",
    tags=["license"],
    responses={401: {"user": "Not authorized"}}
)

def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0

@router.post("/license")
def create_license(license: License, conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        if check_license(conn, license.license_rno):
            raise HTTPException(status_code=400, detail="License already registered")

        insert_query = "INSERT INTO license (license_rno, registerno, registerdate, ispayroll, istms, noofemployees, email, refcode, startdate, isactive, islock) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(insert_query, (license.license_rno, license.registerno, license.registerdate, license.ispayroll, license.istms, license.noofemployees, license.email, license.refcode, license.startdate, license.isactive, license.islock))
        conn.commit()
        cursor.close()
        return {"message": "License inserted successfully"}
    except IntegrityError as e:
        return {"error": "Integrity Error: {}".format(str(e))}
    except HTTPException as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": str(e)}
    
@router.get("/get_licenses")
def get_licenses(conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM license"
        cursor.execute(query)
        licenses = cursor.fetchall()
        cursor.close()
        if not licenses:
            return {"licenses": []}
        return {"licenses": licenses}
    except Exception as e:
        return {"error": str(e)}    
@router.get("/get_license_by_rno/{license_rno}", response_model=List[License])
def get_license_by_rno(license_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM license WHERE license_rno = %s"
        cursor.execute(query, (license_rno,))
        licenses = cursor.fetchall()
        cursor.close()

        license_data = []
        for license in licenses:
            license_dict = dict(zip(License.__fields__.keys(), license))
            license_data.append(License(**license_dict))

        return license_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/get_register_information/{license_rno}")
def get_register_information(license_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT registerno,registerdate FROM license WHERE license_rno = %s"
        cursor.execute(query, (license_rno,))
        licenses = cursor.fetchall()
        cursor.close()
        if not licenses:
            return {"licenses": []}
        return {"licenses": licenses}
    except Exception as e:
        return {"error": str(e)}    

@router.put("/license/{license_rno}")
def update_license(license_rno: int, license: License, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the license exists
        query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
        cursor.execute(query, (license_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="License not found")

        # Update the license
        update_query = """
            UPDATE license 
            SET license_rno=%s, registerno=%s, registerdate=%s, ispayroll=%s, 
                istms=%s, noofemployees=%s, email=%s, refcode=%s, startdate=%s, 
                isactive=%s, islock=%s 
            WHERE license_rno=%s
        """
        cursor.execute(update_query, (
            license.license_rno, license.registerno, license.registerdate, 
            license.ispayroll, license.istms, license.noofemployees, license.email, 
            license.refcode, license.startdate, license.isactive, license.islock, 
            license_rno
        ))
        conn.commit()
        return {"message": "License updated successfully"}
    except HTTPException as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": str(e)}
    finally:
        cursor.close()

@router.delete("/licenses/{license_rno}")
def delete_license(license_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the license exists
        cursor.execute("SELECT COUNT(*) FROM license WHERE license_rno= %s", (license_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="License not found")

        # Delete the license
        delete_query = "DELETE FROM license WHERE license_rno= %s"
        cursor.execute(delete_query, (license_rno,))
        conn.commit()

        return {"message": "License deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()        
    

