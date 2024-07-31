from typing import Optional
from datetime import datetime
from pydantic import BaseModel

class Company(BaseModel):
    company_rno: int
    license_rno: int
    companyname: str
    regno: str
    address1: str
    address2: Optional[str] = None
    address3: Optional[str] = None
    contactno: str
    town: str
    state: str
    country: str
    postcode: str
    createdby: str
    createdon: datetime
    modifiedby: Optional[str] = None
    modifiedon: Optional[datetime] = None

