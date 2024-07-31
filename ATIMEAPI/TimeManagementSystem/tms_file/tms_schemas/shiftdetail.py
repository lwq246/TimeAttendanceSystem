from pydantic import BaseModel
from datetime import time
from typing import Optional


class ShiftDetail(BaseModel):
    shfmst_rno: int
    shfdet_rno: int
    sectioncode: str
    start_from: time
    start_actual: Optional[time] = None 
    start_to: time
    end_from: time
    end_actual: Optional[time] = None
    end_to: time
    graceperiod_latein: Optional[time] = None
    graceperiod_earlyout: Optional[time] = None
    minothrsperday: time
    maxothrsperday: time
    isflexiblemeal: bool
    ismeallateinot: bool
    ismealearlyoutot: bool
    otrate_normal: int 
    otrate_off: int 
    otrate_rest: int
    otrate_holiday: int 
    extendot: time
    extotrate_normal: int 
    extotrate_off: int 
    extotrate_rest: int 
    extotrate_half: int 
    extotrate_holiday: int 
    extminothrsperday: Optional[time] = None
    extmaxothrsperday: Optional[time] = None
    minmeallateout: time
    minmealearlyin: time
    rounding: int
    isextendot: Optional[bool] = None
