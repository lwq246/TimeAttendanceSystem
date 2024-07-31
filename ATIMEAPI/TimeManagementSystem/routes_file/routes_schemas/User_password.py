from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class users_password(BaseModel):
    license_rno: int
    users_rno: int
    usrpwd_rno: int
    password: str
    createdon: datetime
    passwordresetlink: Optional[str]