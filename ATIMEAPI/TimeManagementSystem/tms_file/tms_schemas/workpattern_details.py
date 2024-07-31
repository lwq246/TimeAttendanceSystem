from pydantic import BaseModel

class WorkPattern_detail(BaseModel):
    wrkpattern_detail_rno: int
    wrkpattern_rno: int
    license_rno: int
    company_rno: int
    weekday: str
    shf_rno: int
    wrk_rno: int
    allwrule_rno: int
    ot_rno: int
    dayinmonth: int
    isrestday: bool
    isoffday: bool
    isflexibleshift: bool