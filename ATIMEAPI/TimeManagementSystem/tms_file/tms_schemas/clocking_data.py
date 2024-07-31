from pydantic import BaseModel
from datetime import datetime

class ClockingData(BaseModel):
    clockingdata_rno: int
    license_rno: int
    company_rno: int
    status: str
    clocktime: datetime
    islock: bool
    terminal: str
    employeeno: str
    longitude: str
    latitude: str 
    employee_rno: int