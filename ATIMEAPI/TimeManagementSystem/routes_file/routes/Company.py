from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection
from routes_file.routes_schemas.index import Company
from typing import List

router = APIRouter(
    prefix="/Company",
    tags=["company"],
    responses={401: {"user": "Not authorized"}}
)

def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0

@router.post("/company")
def create_company(company: Company, conn=Depends(get_db_connection)):
    if not check_license(conn, company.license_rno):
        raise HTTPException(status_code=400, detail="License not found")

    # Check if the license is already associated with any company
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM company WHERE license_rno = %s"
    cursor.execute(query, (company.license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()

    if count > 0:
        raise HTTPException(status_code=400, detail="License already associated with a company")

    # Insert the company
    cursor = conn.cursor()
    insert_query = """
        INSERT INTO company (
            company_rno, license_rno, companyname, regno, address1, address2, address3, contactno,
            town, state, country, postcode, createdby, createdon, modifiedby, modifiedon
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
        )
    """
    try:
        cursor.execute(
            insert_query,
            (
                company.company_rno, company.license_rno, company.companyname, company.regno,
                company.address1, company.address2, company.address3, company.contactno,
                company.town, company.state, company.country, company.postcode, company.createdby,
                company.createdon, company.modifiedby, company.modifiedon
            )
        )
        conn.commit()
        cursor.close()
        return {"message": "Company inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Integrity Error: {}".format(str(e)))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/get_companies", response_model=List[Company])
def get_companies(conn=Depends(get_db_connection)):
    try:
        query = "SELECT * FROM company"
        cursor = conn.cursor()
        cursor.execute(query)
        companies_data = cursor.fetchall()
        cursor.close()

        companies = []
        for company_data in companies_data:
            company_dict = dict(zip(Company.__fields__.keys(), company_data))

            # Check if regno is None, if so, replace it with an empty string
            if company_dict['regno'] is None:
                company_dict['regno'] = ""

            companies.append(Company(**company_dict))

        return companies
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
# @router.get("/get_companies_by_rno")
# def get_companies_by_rno(company_rno: int = None, conn=Depends(get_db_connection)):
#     cursor = conn.cursor()
#     try:
#         if company_rno:
#             query = "SELECT * FROM company WHERE company_rno = %s"
#             cursor.execute(query, (company_rno))
#         else:
#             query = "SELECT * FROM company"
#             cursor.execute(query)
        
#         companies = cursor.fetchall()
#         cursor.close()
#         if not companies:
#             return {"companies": []}
#         return {"companies": companies}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/get_companies_by_rno/{company_rno}")
def get_companies_by_rno(company_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT * FROM company WHERE company_rno = %s"
        cursor.execute(query, (company_rno,))
        companies = cursor.fetchall()
        return {"Company": companies}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
    

@router.get("/get_addresses/{company_rno}")
def get_addresses(company_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT company_rno, address1, address2, address3, town, state, country, postcode FROM company WHERE company_rno = %s"
        cursor.execute(query, (company_rno,))
        companies = cursor.fetchall()
        return {"Company": companies}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.get("/get_liscense/{company_rno}")
def get_liscense(company_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT l.license_rno, l.registerno, l.registerdate, l.ispayroll, l.istms, l.noofemployees, l.email, l.refcode, l.startdate, l.isactive, l.islock FROM license l LEFT JOIN company c ON c.license_rno = l.license_rno WHERE c.company_rno = %s"
        cursor.execute(query, (company_rno,))
        companies = cursor.fetchall()
        return {"Company": companies}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()


# @router.get("/get_licenses", response_model=List[License])
# def get_licenses(conn=Depends(get_db_connection)):
#     cursor = conn.cursor()
#     try:
#         query = "SELECT * FROM license"
#         cursor.execute(query)
#         licenses = cursor.fetchall()
#         cursor.close()
#         if not licenses:
#             return []
#         return [
#             License(
#                 license_rno=license[0],
#                 company_rno=license[1]
#             ) for license in licenses
#         ]
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# @app.get("/get_contacts", response_model=List[Contact])
# def get_contacts(conn=Depends(get_db_connection)):
#     cursor = conn.cursor()
#     try:
#         query = "SELECT * FROM contact"
#         cursor.execute(query)
#         contacts = cursor.fetchall()
#         cursor.close()
#         if not contacts:
#             return []
#         return [
#             Contact(
#                 contact_rno=contact[0],
#                 company_rno=contact[1],
#                 contactno=contact[2]
#             ) for contact in contacts
#         ]
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

    
@router.put("/company/{company_rno}")
def update_company(company_rno: int, company: Company, conn = Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the company exists
        query = "SELECT COUNT(*) FROM company WHERE company_rno = %s"
        cursor.execute(query, (company_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Company not found")

        # Check if the license exists
        if not check_license(conn, company.license_rno):
            raise HTTPException(status_code=400, detail="License not found")

        # Update the company
        update_query = "UPDATE company SET license_rno=%s, companyname=%s, regno=%s, address1=%s, address2=%s, address3=%s, contactno=%s, town=%s, state=%s, country=%s, postcode=%s, modifiedby=%s, modifiedon=%s WHERE company_rno=%s"
        cursor.execute(update_query, (company.license_rno, company.companyname, company.regno, company.address1, company.address2, company.address3, company.contactno, company.town, company.state, company.country, company.postcode, company.modifiedby, company.modifiedon, company_rno))
        conn.commit()
        cursor.close()
        return {"message": "Company updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/companies/{company_rno}")
def delete_company(company_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the company exists
        cursor.execute("SELECT COUNT(*) FROM company WHERE company_rno = %s", (company_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Company not found")

        # Delete the company
        delete_query = "DELETE FROM company WHERE company_rno = %s"
        cursor.execute(delete_query, (company_rno,))
        conn.commit()

        return {"message": "Company deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()

