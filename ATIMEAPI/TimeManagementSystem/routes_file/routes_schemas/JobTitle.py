from pydantic import BaseModel

class jobtitle(BaseModel):
    license_rno:int
    jobtitle_rno: int
    jobtitle: str
