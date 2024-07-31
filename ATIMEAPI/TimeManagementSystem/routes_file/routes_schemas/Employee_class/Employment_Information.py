from pydantic import BaseModel
from datetime import date
from typing import Optional

class Employment_Information(BaseModel):
    company_rno: Optional[int]
    joindate: Optional[date]
    resigndate: Optional[date]
    isactive: Optional[bool]