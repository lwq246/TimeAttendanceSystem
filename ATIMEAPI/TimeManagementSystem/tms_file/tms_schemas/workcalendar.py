from pydantic import BaseModel
from datetime import time
from datetime import datetime, date
from decimal import Decimal



class WorkCalendar(BaseModel):
    wrkcalendar: int
    license_rno: int
    company_rno: int
    employee_rno: int
    calendardate: date
    yearof: int
    monthof: int
    dayof: int
    shfmst_rno_1: int
    shfmst_rno_2: int
    shf_1_start: datetime
    shf_1_end: datetime
    shf_2_start: datetime
    shf_2_end: datetime
    isprayday: bool
    isholiday: bool
    islock: bool
    isflexibleshift: bool
    isabsent: bool
    isleave: bool
    isoutstation: bool
    shf_1_meal_start: datetime
    shf_1_meal_end: datetime
    shf_2_meal_start: datetime
    shf_2_meal_end: datetime
    earlyotmins: int
    lateoutotmins: int
    earlyottime: time
    lateoutottime: datetime
    totalotmins: int
    totalottime: time
    earlyot_remark: str
    lateinot_remark: str
    ot10xmin: int
    ot15xmin: int
    ot20xmin: int
    ot25xmin: int
    ot30xmin: int
    shf_1_mealtimemins: int
    shf_1_mealtime: time
    shf_1_graceperiod: int 
    earlyin: int
    latein: int
    earlyout: int
    lateout: int
    shf_1_wrkmins: int
    shf_1_wrktime: time
    shf_1_finalwrkmins: int
    shf_1_finalwrktime: time
    earlyintime: time
    lateintime: time
    earlyouttime: time
    lateouttime: time
    teatimemin: int
    teatimetime: time
    sectionwrkmin: int
    sectionwrktime: time
    offdayrate: Decimal
    holidayrate: Decimal
    isrestday: bool
    isoffday: bool
    wrksec_start: datetime
    wrksec_end: datetime
    wk10xmin: int
    wk15xmin: int
    wk20xmin: int
    wk25xmin: int
    wk30xmin: int
    wk10x:time
    wk15x:time
    wk20x:time
    wk25x:time
    wk30x:time
    isapprv10x: bool
    isapprv15x: bool
    isapprv20x: bool 
    isapprv25x: bool
    isapprv30x: bool
    apprv10time: time
    apprv15time: time
    apprv20time: time
    apprv25time: time
    apprv30time: time 
    apprv10mins: int
    apprv15mins: int
    apprv20mins: int
    apprv25mins: int
    apprv30mins: int
    isapprvwk10x: bool
    isapprvwk15x: bool
    isapprvwk20x: bool
    isapprvwk25x: bool
    isapprvwk30x: bool
    apprvwk10xtime: time
    apprvwk15xtime: time
    apprvwk20xtime: time
    apprvwk25xtime: time
    apprvwk30xtime: time
    apprvwk10xmin: int
    apprvwk15xmin: int
    apprvwk20xmin: int
    apprvwk25xmin: int
    shf_1_pray_start: datetime
    shf_1_pray_end: datetime
    pray_earlyoutmin:int
    pray_lateinmin: int
    isalternate: bool
    wrk_start: datetime
    wrk_end: datetime
    apprvot10time: time
    apprvot15time: time
    apprvot20time: time
    apprvot25time: time
    apprvot30time: time
    ot10xtime: time
    ot15xtime: time
    ot20xtime: time
    ot25xtime: time
    ot30xtime: time
    holiday_rno: int