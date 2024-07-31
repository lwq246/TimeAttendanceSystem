from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class License(BaseModel):
    license_rno: Optional[int]
    registerno: Optional[int]
    registerdate: Optional[datetime]
    ispayroll: Optional[bool]
    istms: Optional[bool]
    noofemployees: Optional[int]
    email: Optional[str]
    refcode: Optional[str]
    startdate: Optional[datetime]
    isactive: Optional[bool]
    islock: Optional[bool]

