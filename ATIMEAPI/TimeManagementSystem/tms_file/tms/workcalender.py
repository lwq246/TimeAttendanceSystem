from fastapi import FastAPI, APIRouter, Depends, HTTPException
from pydantic import BaseModel
from datetime import time, date, datetime
from typing import Optional
import psycopg2
from psycopg2 import IntegrityError
from decimal import Decimal
from tms_file.tms_schemas.index import WorkCalendar


app = FastAPI()

# Assuming get_db_connection returns a valid connection object
def get_db_connection():
    # Your database connection logic here
    conn = psycopg2.connect(
        database="easydb",
        user="postgres",
        password="admin123%",
        host="103.6.244.135",
        port="5432"
    )
    return conn

router = APIRouter(
    prefix="/WorkCalender",
    tags=["work calender"],
    responses={401: {"user": "Not authorized"}}
)

@router.post("/work_calendar")
def create_wrkcalendar(wrkcalendar: WorkCalendar, conn=Depends(get_db_connection)):
    try:
        # Check if the license is already associated with any employee
        cursor = conn.cursor()
        query = "SELECT COUNT(*) FROM tms.wrkcalendar WHERE license_rno = %s"
        cursor.execute(query, (wrkcalendar.license_rno,))
        count = cursor.fetchone()[0]

        if count > 0:
            raise HTTPException(status_code=400, detail="License already associated ")
        insert_query = """
        INSERT INTO tms.wrkcalendar(wrkcalendar, license_rno, company_rno, employee_rno, calendardate, shfmst_rno_1, 
    shfmst_rno_2, shf_1_start, shf_1_end, shf_2_start, shf_2_end, isprayday, isholiday, islock, isflexibleshift, isabsent, 
    isleave, isoutstation, shf_1_meal_start, shf_1_meal_end, shf_2_meal_start, shf_2_meal_end, earlyotmins, lateoutotmins, earlyottime, 
    lateoutottime, totalotmins, totalottime, earlyot_remark, lateinot_remark, ot10xmin, ot15xmin, ot20xmin, ot25xmin, ot30xmin, shf_1_mealtimemins, 
    shf_1_mealtime, shf_1_graceperiod, earlyin, latein, earlyout, lateout, shf_1_wrkmins, shf_1_wrktime, shf_1_finalwrkmins, 
    shf_1_finalwrktime, earlyintime, lateintime, earlyouttime, lateouttime, teatimemin, teatimetime, sectionwrkmin, sectionwrktime, 
    offdayrate, holidayrate, isrestday, isoffday, wrksec_start, wrksec_end, wk10xmin, wk15xmin, wk20xmin, wk25xmin, wk30xmin, 
    wk10x, wk15x, wk20x, wk25x, wk30x, isapprv10x, isapprv15x, isapprv20x, isapprv25x, isapprv30x, apprv10time, apprv15time, apprv20time, 
    apprv25time, apprv30time, apprv10mins, apprv15mins, apprv20mins, apprv25mins, apprv30mins, isapprvwk10x, isapprvwk15x, isapprvwk20x, 
    isapprvwk25x, isapprvwk30x, apprvwk10xtime, apprvwk15xtime, apprvwk20xtime, apprvwk25xtime, apprvwk30xtime, apprvwk10xmin, 
    apprvwk15xmin, apprvwk20xmin, apprvwk25xmin, shf_1_pray_start, shf_1_pray_end, pray_earlyoutmin, pray_lateinmin, isalternate, 
    wrk_start, wrk_end, apprvot10time, apprvot15time, apprvot20time, apprvot25time, apprvot30time, ot10xtime, ot15xtime, ot20xtime, ot25xtime, ot30xtime, holiday_rno  
        ) VALUES (
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s,
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s,
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s, %s, %s, %s, 
            %s, %s, %s, %s, %s
        )
        """
        cursor.execute(insert_query, (
    wrkcalendar.wrkcalendar, 
    wrkcalendar.license_rno, 
    wrkcalendar.company_rno, 
    wrkcalendar.employee_rno, 
    wrkcalendar.calendardate,  
    wrkcalendar.shfmst_rno_1, 
    wrkcalendar.shfmst_rno_2, 
    wrkcalendar.shf_1_start,
    wrkcalendar.shf_1_end, 
    wrkcalendar.shf_2_start, 
    wrkcalendar.shf_2_end, 
    wrkcalendar.isprayday, 
    wrkcalendar.isholiday, 
    wrkcalendar.islock, 
    wrkcalendar.isflexibleshift, 
    wrkcalendar.isabsent, 
    wrkcalendar.isleave, 
    wrkcalendar.isoutstation, 
    wrkcalendar.shf_1_meal_start, 
    wrkcalendar.shf_1_meal_end, 
    wrkcalendar.shf_2_meal_start, 
    wrkcalendar.shf_2_meal_end, 
    wrkcalendar.earlyotmins, 
    wrkcalendar.lateoutotmins, 
    wrkcalendar.earlyottime, 
    wrkcalendar.lateoutottime, 
    wrkcalendar.totalotmins, 
    wrkcalendar.totalottime, 
    wrkcalendar.earlyot_remark, 
    wrkcalendar.lateinot_remark, 
    wrkcalendar.ot10xmin, 
    wrkcalendar.ot15xmin, 
    wrkcalendar.ot20xmin, 
    wrkcalendar.ot25xmin, 
    wrkcalendar.ot30xmin, 
    wrkcalendar.shf_1_mealtimemins, 
    wrkcalendar.shf_1_mealtime, 
    wrkcalendar.shf_1_graceperiod, 
    wrkcalendar.earlyin, 
    wrkcalendar.latein, 
    wrkcalendar.earlyout, 
    wrkcalendar.lateout, 
    wrkcalendar.shf_1_wrkmins, 
    wrkcalendar.shf_1_wrktime, 
    wrkcalendar.shf_1_finalwrkmins, 
    wrkcalendar.shf_1_finalwrktime, 
    wrkcalendar.earlyintime, 
    wrkcalendar.lateintime, 
    wrkcalendar.earlyouttime, 
    wrkcalendar.lateouttime, 
    wrkcalendar.teatimemin, 
    wrkcalendar.teatimetime, 
    wrkcalendar.sectionwrkmin, 
    wrkcalendar.sectionwrktime, 
    wrkcalendar.offdayrate, 
    wrkcalendar.holidayrate, 
    wrkcalendar.isrestday, 
    wrkcalendar.isoffday, 
    wrkcalendar.wrksec_start, 
    wrkcalendar.wrksec_end, 
    wrkcalendar.wk10xmin, 
    wrkcalendar.wk15xmin, 
    wrkcalendar.wk20xmin, 
    wrkcalendar.wk25xmin, 
    wrkcalendar.wk30xmin, 
    wrkcalendar.wk10x, 
    wrkcalendar.wk15x, 
    wrkcalendar.wk20x, 
    wrkcalendar.wk25x, 
    wrkcalendar.wk30x, 
    wrkcalendar.isapprv10x, 
    wrkcalendar.isapprv15x, 
    wrkcalendar.isapprv20x, 
    wrkcalendar.isapprv25x, 
    wrkcalendar.isapprv30x, 
    wrkcalendar.apprv10time, 
    wrkcalendar.apprv15time, 
    wrkcalendar.apprv20time, 
    wrkcalendar.apprv25time, 
    wrkcalendar.apprv30time, 
    wrkcalendar.apprv10mins, 
    wrkcalendar.apprv15mins, 
    wrkcalendar.apprv20mins, 
    wrkcalendar.apprv25mins, 
    wrkcalendar.apprv30mins, 
    wrkcalendar.isapprvwk10x, 
    wrkcalendar.isapprvwk15x, 
    wrkcalendar.isapprvwk20x, 
    wrkcalendar.isapprvwk25x, 
    wrkcalendar.isapprvwk30x, 
    wrkcalendar.apprvwk10xtime, 
    wrkcalendar.apprvwk15xtime, 
    wrkcalendar.apprvwk20xtime, 
    wrkcalendar.apprvwk25xtime, 
    wrkcalendar.apprvwk30xtime, 
    wrkcalendar.apprvwk10xmin, 
    wrkcalendar.apprvwk15xmin, 
    wrkcalendar.apprvwk20xmin, 
    wrkcalendar.apprvwk25xmin, 
    wrkcalendar.shf_1_pray_start, 
    wrkcalendar.shf_1_pray_end, 
    wrkcalendar.pray_earlyoutmin, 
    wrkcalendar.pray_lateinmin, 
    wrkcalendar.isalternate, 
    wrkcalendar.wrk_start, 
    wrkcalendar.wrk_end, 
    wrkcalendar.apprvot10time, 
    wrkcalendar.apprvot15time, 
    wrkcalendar.apprvot20time, 
    wrkcalendar.apprvot25time, 
    wrkcalendar.apprvot30time, 
    wrkcalendar.ot10xtime, 
    wrkcalendar.ot15xtime, 
    wrkcalendar.ot20xtime, 
    wrkcalendar.ot25xtime, 
    wrkcalendar.ot30xtime, 
    wrkcalendar.holiday_rno
        ))
        conn.commit()
    except IntegrityError:
        raise HTTPException(status_code=400, detail="Integrity error: Duplicate entry")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error occurred: {e}")
    finally:
        if conn:
            conn.close()


@router.get("/get_workcalendar")
async def get_WorkCalendar(conn=Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM tms.wrkcalendar"
            cursor.execute(query)
            WorkCalender = cursor.fetchall()
            return {"wrkcalendar": WorkCalender}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.get("/get_workcalendar/{workcalendar}")
async def get_WorkCalendar(wrkcalendar: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM tms.wrkcalendar WHERE wrkcalendar=%s"
        cursor.execute(query, (wrkcalendar,))
        WorkCalender = cursor.fetchall()
        return {"work_calendar": WorkCalender}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
@router.get("/get_workcalendar_shift/{workcalendar}")
async def get_WorkCalendar_shift(wrkcalendar: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT wrkcalendar, shf_1_start, shf_1_end, shf_2_start, shf_2_end, shf_1_meal_start, shf_1_meal_end, shf_2_meal_start, shf_2_meal_end, shf_1_mealtimemins, shf_1_mealtime, shf_1_graceperiod, shf_1_wrktime, shf_1_finalwrktime, wrksec_start, wrksec_end, shf_1_pray_start, shf_1_pray_end, wrk_start, wrk_end, pray_earlyoutmin, pray_lateinmin FROM tms.wrkcalendar WHERE wrkcalendar=%s"
        cursor.execute(query, (wrkcalendar,))
        WorkCalender = cursor.fetchall()
        return {"work_calendar": WorkCalender}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
@router.get("/get_workcalendar_overtime/{workcalendar}")
async def get_WorkCalendar_overtime(wrkcalendar: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT wrkcalendar, earlyottime, lateoutottime, totalottime, wk10xmin, wk15xmin, wk20xmin, wk25xmin, wk30xmin, wk10x, wk15x, wk20x, wk25x, wk30x, isapprv10x, isapprv15x, isapprv20x, isapprv25x, isapprv30x, apprv10time, apprv15time, apprv20time, apprv25time, apprv30time, apprv10mins, apprv15mins, apprv20mins, apprv25mins, apprv30mins, isapprvwk10x, isapprvwk15x, isapprvwk20x, isapprvwk25x, isapprvwk30x, apprvwk10xtime, apprvwk15xtime, apprvwk20xtime, apprvwk25xtime, apprvwk30xtime, apprvwk10xmin, apprvwk15xmin, apprvwk20xmin, apprvwk25xmin FROM tms.wrkcalendar WHERE wrkcalendar=%s"
        cursor.execute(query, (wrkcalendar,))
        WorkCalender = cursor.fetchall()
        return {"work_calendar": WorkCalender}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()
            

@router.put("/update_wrkcalendar/{wrkcalendar}")
def update_wrkcalendar(wrkcalendar: int, workcalendar: WorkCalendar, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the license exists
        query = "SELECT COUNT(*) FROM tms.wrkcalendar WHERE wrkcalendar = %s"
        cursor.execute(query, (wrkcalendar,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="License not found")

        # Update the license
        update_query = """
            UPDATE tms.wrkcalendar
            SET wrkcalendar=%s, license_rno=%s, company_rno=%s, employee_rno=%s, calendardate=%s, yearof=%s,
    monthof=%s, dayof=%s, shfmst_rno_1=%s, shfmst_rno_2=%s, shf_1_start=%s, shf_1_end=%s, shf_2_start=%s, shf_2_end=%s, isprayday=%s,
    isholiday=%s, islock=%s, isflexibleshift=%s, isabsent=%s, isleave=%s, isoutstation=%s, shf_1_meal_start=%s, shf_1_meal_end=%s,
    shf_2_meal_start=%s, shf_2_meal_end=%s, earlyotmins=%s, lateoutotmins=%s, earlyottime=%s, lateoutottime=%s, totalotmins=%s,
    totalottime=%s, earlyot_remark=%s, lateinot_remark=%s, ot10xmin=%s, ot15xmin=%s, ot20xmin=%s, ot25xmin=%s, ot30xmin=%s, shf_1_mealtimemins=%s,
    shf_1_mealtime=%s, shf_1_graceperiod=%s, earlyin=%s, latein=%s, earlyout=%s, lateout=%s, shf_1_wrkmins=%s, shf_1_wrktime=%s,
    shf_1_finalwrkmins=%s, shf_1_finalwrktime=%s, earlyintime=%s, lateintime=%s, earlyouttime=%s, lateouttime=%s, teatimemin=%s,
    teatimetime=%s, sectionwrkmin=%s, sectionwrktime=%s, offdayrate=%s, holidayrate=%s, isrestday=%s, isoffday=%s, wrksec_start=%s,
    wrksec_end=%s, wk10xmin=%s, wk15xmin=%s, wk20xmin=%s, wk25xmin=%s, wk30xmin=%s, wk10x=%s, wk15x=%s, wk20x=%s, wk25x=%s,wk30x=%s,
    isapprv10x=%s, isapprv15x=%s, isapprv20x=%s, isapprv25x=%s, isapprv30x=%s, apprv10time=%s, apprv15time=%s, apprv20time=%s,
    apprv25time=%s, apprv30time=%s, apprv10mins=%s, apprv15mins=%s, apprv20mins=%s, apprv25mins=%s, apprv30mins=%s, isapprvwk10x=%s,
    isapprvwk15x=%s, isapprvwk20x=%s, isapprvwk25x=%s, isapprvwk30x=%s, apprvwk10xtime=%s, apprvwk15xtime=%s, apprvwk20xtime=%s,
    apprvwk25xtime=%s, apprvwk30xtime=%s, apprvwk10xmin=%s, apprvwk15xmin=%s, apprvwk20xmin=%s, apprvwk25xmin=%s, shf_1_pray_start=%s,
    shf_1_pray_end=%s, pray_earlyoutmin=%s, pray_lateinmin=%s, isalternate=%s, wrk_start=%s, wrk_end=%s, apprvot10time=%s, apprvot15time=%s,
    apprvot20time=%s, apprvot25time=%s, apprvot30time=%s, ot10xtime=%s, ot15xtime=%s, ot20xtime=%s, ot25xtime=%s, ot30xtime=%s,
    holiday_rno=%s,
        """
        cursor.execute(update_query, (
            workcalendar.wrkcalendar, workcalendar.license_rno, workcalendar.company_rno, workcalendar.employee_rno, workcalendar.calendardate,  
    workcalendar.shfmst_rno_1, workcalendar.shfmst_rno_2, workcalendar.shf_1_start, workcalendar.shf_1_end, workcalendar.shf_2_start, 
    workcalendar.shf_2_end, workcalendar.isprayday, workcalendar.isholiday, workcalendar.islock, workcalendar.isflexibleshift, workcalendar.isabsent, 
    workcalendar.isleave, workcalendar.isoutstation, workcalendar.shf_1_meal_start, workcalendar.shf_1_meal_end, workcalendar.shf_2_meal_start, 
    workcalendar.shf_2_meal_end, workcalendar.earlyotmins, workcalendar.lateoutotmins, workcalendar.earlyottime, workcalendar.lateoutottime, 
    workcalendar.totalotmins, workcalendar.totalottime, workcalendar.earlyot_remark, workcalendar.lateinot_remark, workcalendar.ot10xmin, 
    workcalendar.ot15xmin, workcalendar.ot20xmin, workcalendar.ot25xmin, workcalendar.ot30xmin, workcalendar.shf_1_mealtimemins, workcalendar.shf_1_mealtime, 
    workcalendar.shf_1_graceperiod, workcalendar.earlyin, workcalendar.latein, workcalendar.earlyout, workcalendar.lateout, workcalendar.shf_1_wrkmins, 
    workcalendar.shf_1_wrktime, workcalendar.shf_1_finalwrkmins, workcalendar.shf_1_finalwrktime, workcalendar.earlyintime, workcalendar.lateintime, 
    workcalendar.earlyouttime, workcalendar.lateouttime, workcalendar.teatimemin, workcalendar.teatimetime, workcalendar.sectionwrkmin, 
    workcalendar.sectionwrktime, workcalendar.offdayrate, workcalendar.holidayrate, workcalendar.isrestday, workcalendar.isoffday, workcalendar.wrksec_start, 
    workcalendar.wrksec_end, workcalendar.wk10xmin, workcalendar.wk15xmin, workcalendar.wk20xmin, workcalendar.wk25xmin, workcalendar.wk30xmin, 
    workcalendar.wk10x, workcalendar.wk15x, workcalendar.wk20x, workcalendar.wk25x, workcalendar.wk30x, workcalendar.isapprv10x, workcalendar.isapprv15x, 
    workcalendar.isapprv20x, workcalendar.isapprv25x, workcalendar.isapprv30x, workcalendar.apprv10time, workcalendar.apprv15time, workcalendar.apprv20time, 
    workcalendar.apprv25time, workcalendar.apprv30time, workcalendar.apprv10mins, workcalendar.apprv15mins, workcalendar.apprv20mins, workcalendar.apprv25mins, 
    workcalendar.apprv30mins, workcalendar.isapprvwk10x, workcalendar.isapprvwk15x, workcalendar.isapprvwk20x, workcalendar.isapprvwk25x, 
    workcalendar.isapprvwk30x, workcalendar.apprvwk10xtime, workcalendar.apprvwk15xtime, workcalendar.apprvwk20xtime, workcalendar.apprvwk25xtime, 
    workcalendar.apprvwk30xtime, workcalendar.apprvwk10xmin, workcalendar.apprvwk15xmin, workcalendar.apprvwk20xmin, workcalendar.apprvwk25xmin, 
    workcalendar.shf_1_pray_start, workcalendar.shf_1_pray_end, workcalendar.pray_earlyoutmin, workcalendar.pray_lateinmin, workcalendar.isalternate, 
    workcalendar.wrk_start, workcalendar.wrk_end, workcalendar.apprvot10time, workcalendar.apprvot15time, workcalendar.apprvot20time, 
    workcalendar.apprvot25time, workcalendar.apprvot30time, workcalendar.ot10xtime, workcalendar.ot15xtime, workcalendar.ot20xtime, 
    workcalendar.ot25xtime, workcalendar.ot30xtime, workcalendar.holiday_rno, workcalendar
        ))
        conn.commit()
        return {"message": "work calendar updated successfully"}
    except HTTPException as e:
        return {"error": str(e)}
    except Exception as e:
        return {"error": str(e)}
    finally:
        cursor.close()            


@router.delete("/workcalendar/{wrkcalendar}")
def delete_workcalendar(wrkcalendar: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM tms.wrkcalendar WHERE wrkcalendar = %s", (wrkcalendar,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Work calendar not found")

        # Delete the user
        delete_query = "DELETE FROM tms.wrkcalendar WHERE wrkcalendar = %s"
        cursor.execute(delete_query, (wrkcalendar,))
        conn.commit()

        return {"message": "Work Calendar deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()













