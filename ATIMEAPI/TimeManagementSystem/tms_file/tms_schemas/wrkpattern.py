from pydantic import BaseModel

class WorkPattern(BaseModel):
    wrkpattern_rno: int
    license_rno: int
    company_rno: int
    patterncode: str
    description: str
    pattern_type: str
    fromdayofmonth: int
    todayofmonth: int