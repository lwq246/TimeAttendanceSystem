from pydantic import BaseModel

class department(BaseModel):
    license_rno: int
    department_rno: int
    department: str
