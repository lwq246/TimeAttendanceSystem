from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import IntegrityError
from config.database import get_db_connection 
from typing import List
from psycopg2.extras import RealDictCursor
from routes_file.routes_schemas.index import ContactInformation,EmployeeBase,Employment_Information

router = APIRouter(
    prefix="/Employee",
    tags=["employee"],
    responses={401: {"user": "Not authorized"}}
)

def check_license(conn, license_rno):
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM license WHERE license_rno = %s"
    cursor.execute(query, (license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()
    return count > 0

@router.post("/employee")
def create_employee(employee: EmployeeBase, conn=Depends(get_db_connection)):
    if not check_license(conn, employee.license_rno):
        raise HTTPException(status_code=400, detail="License not found")

    # Check if the license is already associated with any employee
    cursor = conn.cursor()
    query = "SELECT COUNT(*) FROM employees WHERE license_rno = %s"
    cursor.execute(query, (employee.license_rno,))
    count = cursor.fetchone()[0]
    cursor.close()

    if count > 0:
        raise HTTPException(status_code=400, detail="License already associated in employee")

    # Insert the employee with the generated company_rno
    cursor = conn.cursor()
    insert_query = """
    INSERT INTO employees (
        license_rno, company_rno, employee_rno, employeeno, employee_firstname, employee_lastname,
        nric, birthdate, gender, contactno1, email, contactno2, address1, address2, address3,
        town, state, country, postcode, maritalstatus, nationality, race,
        joindate, resigndate, photo, isactive, createdby, createdon,
        modifiedby, modifiedon, aliasname) VALUES 
        (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s,  %s, %s,  %s)"""
    try:
        cursor.execute(insert_query, (
            employee.license_rno, 
            employee.company_rno, 
            employee.employee_rno, 
            employee.employeeno, 
            employee.employee_firstname,
            employee.employee_lastname, 
            employee.nric,
            employee.birthdate,
            employee.gender,
            employee.contactno1,
            employee.email,
            employee.contactno2, 
            employee.address1, 
            employee.address2, 
            employee.address3, 
            employee.town,
            employee.state, 
            employee.country, 
            employee.postcode, 
            employee.maritalstatus, 
            employee.nationality,
            employee.race, 
            employee.joindate, 
            employee.resigndate, 
            employee.photo, 
            employee.isactive,
            employee.createdby, 
            employee.createdon, 
            employee.modifiedby, 
            employee.modifiedon, 
            employee.aliasname
        ))
        conn.commit()
        return {"message": "Employee inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail="Integrity Error: {}".format(str(e)))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
    
@router.get("/get/employees", response_model=List[EmployeeBase], operation_id="getemployees")
def get_employees(conn=Depends(get_db_connection)):
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    try:
        query = "SELECT * FROM employees"
        cursor.execute(query)
        rows = cursor.fetchall()
        cursor.close()

        employees = []
        for row in rows:
            row_dict = dict(row)
            # Convert the photo field to string if it's not already
            if 'photo' in row_dict and isinstance(row_dict['photo'], memoryview):
                row_dict['photo'] = row_dict['photo'].tobytes().decode('utf-8')
            employees.append(row_dict)

        return employees
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/get_employee_by_rno/{employee_rno}", response_model=List[EmployeeBase])
def get_employee_by_rno(employee_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
       
        query = "SELECT * FROM employees WHERE employee_rno = %s"
        cursor.execute(query, (employee_rno,))
        
        employees = cursor.fetchall()
        cursor.close()

        employee_data = []
        for employee in employees:
            employee_dict = dict(zip(EmployeeBase.__fields__.keys(), employee))
            if isinstance(employee_dict.get("photo"), memoryview):
                employee_dict["photo"] = employee_dict["photo"].tobytes().decode('utf-8', 'ignore')
            employee_data.append(EmployeeBase(**employee_dict))

        return employee_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        conn.close()  # Ensure the connection is closed


@router.get("/get_audit_information/{employee_rno}")
def get_audit_information(employee_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT createdby,createdon,modifiedby,modifiedon FROM employees WHERE employee_rno = %s"
        cursor.execute(query, (employee_rno,))
        employees = cursor.fetchall()
        cursor.close()

        return employees
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/get_contact_information/{employee_rno}", response_model=List[ContactInformation])
def get_contact_information(employee_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT contactno1, email, contactno2, address1, address2, address3, town, state, country, postcode FROM employees WHERE employee_rno = %s"
        cursor.execute(query, (employee_rno,))
        employees = cursor.fetchall()
        cursor.close()

        employee_data = []
        for employee in employees:
            employee_dict = dict(zip(ContactInformation.__fields__.keys(), employee))
            employee_data.append(ContactInformation(**employee_dict))

        return employee_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@router.get("/get_employment_information/{employee_rno}", response_model=List[Employment_Information])
def get_employment_information(employee_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT company_rno, joindate, resigndate, isactive FROM employees WHERE employee_rno = %s"
        cursor.execute(query, (employee_rno,))
        employees = cursor.fetchall()
        cursor.close()

        employee_data = []
        for employee in employees:
            employee_dict = dict(zip(Employment_Information.__fields__.keys(), employee))
            employee_data.append(Employment_Information(**employee_dict))

        return employee_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/get_personal_information")
def get_personal_information(employee_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT employee_rno,company_rno,license_rno,employeeno,employee_firstname,employee_lastname,nric,birthdate,gender,maritalstatus,nationality,race,aliasname FROM employees WHERE employee_rno = %s"
        cursor.execute(query, (employee_rno,))
        employees = cursor.fetchall()
        cursor.close()

        return employees
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    
@router.put("/employee/{employee_rno}")
def update_employee(employee_rno: int, employee: EmployeeBase, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT COUNT(*) FROM employees WHERE employee_rno = %s"
        cursor.execute(query, (employee_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Employee not found")
        
        update_query = """ 
        UPDATE employees SET license_rno=%s, company_rno=%s, employeeno=%s, employee_firstname=%s, employee_lastname=%s,
        nric=%s, birthdate=%s, gender=%s, contactno1=%s, email=%s, contactno2=%s, address1=%s, address2=%s, address3=%s,
        town=%s, state=%s, country=%s, postcode=%s, maritalstatus=%s, nationality=%s, race=%s, joindate=%s, resigndate=%s, photo=%s, 
        isactive=%s, createdby=%s, createdon=%s, modifiedby=%s, modifiedon=%s, aliasname=%s WHERE employee_rno=%s
        """
        cursor.execute(update_query, (
            employee.license_rno, employee.company_rno,
            employee.employeeno, employee.employee_firstname,
            employee.employee_lastname, employee.nric,
            employee.birthdate, employee.gender,
            employee.contactno1, employee.email,
            employee.contactno2, employee.address1,
            employee.address2, employee.address3,
            employee.town, employee.state,
            employee.country, employee.postcode,
            employee.maritalstatus, employee.nationality,
            employee.race, employee.joindate,
            employee.resigndate, employee.photo,
            employee.isactive, employee.createdby,
            employee.createdon, employee.modifiedby,
            employee.modifiedon, employee.aliasname,
            employee_rno
        ))
        conn.commit()
        return {"message": "Employee updated successfully"}
    except HTTPException as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": str(e)}
    finally:
        cursor.close()

@router.delete("/employee/{employee_rno}")
def delete_employee(employee_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM employees WHERE employee_rno = %s", (employee_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="employee not found")

        # Delete the user
        delete_query = "DELETE FROM employees WHERE employee_rno = %s"
        cursor.execute(delete_query, (employee_rno,))
        conn.commit()

        return {"message": "employee deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()        