from fastapi import FastAPI, APIRouter, Depends, HTTPException
import psycopg2
from psycopg2 import IntegrityError
from tms_file.tms_schemas.index import ShiftMaster
from typing import List

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
    prefix="/ShiftMaster",
    tags=["ShiftMaster"],
    responses={401: {"user": "Not authorized"}}
)

@router.post("/create_shiftmaster/")
async def create_shiftdetail(shiftmaster: ShiftMaster, conn=Depends(get_db_connection)):
    try:
        if conn is None:
            raise HTTPException(status_code=500, detail="Database connection is not available.")
        
        with conn.cursor() as cursor:
            insert_query = """
            INSERT INTO tms.shiftmaster (license_rno, company_rno, shfmst_rno, shfcode, description, 
            restdaywrkrate, offdaywrkrate, holidaywrkrate, wrkcalc_earlytime_p, wrkcalc_lateintime_m, 
            wrkcalc_lateouttime_p, wrkcalc_earlyouttime_m, mealhrs_m, teahrs_m, isflexsibleshift, offsetlatein, 
            mealcaltype, minlateout, graceminus, absorbgracetime, incompletemeal, offsetfrom, offsetto, mealfixhrs, 
            teafixhrs, wrkrounding, late_everymin, late_deductmin, earlyout_everymin, earlyout_deductmin, isfixsection, 
            flex_dailyworkinghrstime, otrate_norma, otrate_off, otrate_rest, otrate_half, otrate_holiday, 
            extotrate_normal, extotrate_off, extotrate_rest, extotrate_half, extotrate_holiday, minothrsperday, 
            extminothrsperday, extmaxothrsperday, graceperiod_earlyout, extendot, otrounding, lateoutperiod, otmaxtime, 
            isdeductlatein, isdeductearlyout, iswrkomitot) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 
                    %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (
                shiftmaster.license_rno, shiftmaster.company_rno, shiftmaster.shfmst_rno, shiftmaster.shfcode,
                shiftmaster.description, shiftmaster.restdaywrkrate, shiftmaster.offdaywrkrate, 
                shiftmaster.holidaywrkrate, shiftmaster.wrkcalc_earlytime_p, shiftmaster.wrkcalc_lateintime_m,
                shiftmaster.wrkcalc_lateouttime_p, shiftmaster.wrkcalc_earlyouttime_m, shiftmaster.mealhrs_m,
                shiftmaster.teahrs_m, shiftmaster.isflexsibleshift, shiftmaster.offsetlatein, shiftmaster.mealcaltype,
                shiftmaster.minlateout, shiftmaster.graceminus, shiftmaster.absorbgracetime, shiftmaster.incompletemeal,
                shiftmaster.offsetfrom, shiftmaster.offsetto, shiftmaster.mealfixhrs, shiftmaster.teafixhrs,
                shiftmaster.wrkrounding, shiftmaster.late_everymin, shiftmaster.late_deductmin,
                shiftmaster.earlyout_everymin, shiftmaster.earlyout_deductmin, shiftmaster.isfixsection,
                shiftmaster.flex_dailyworkinghrstime, shiftmaster.otrate_norma, shiftmaster.otrate_off,
                shiftmaster.otrate_rest, shiftmaster.otrate_half, shiftmaster.otrate_holiday, 
                shiftmaster.extotrate_normal, shiftmaster.extotrate_off, shiftmaster.extotrate_rest,
                shiftmaster.extotrate_half, shiftmaster.extotrate_holiday, shiftmaster.minothrsperday,
                shiftmaster.extminothrsperday, shiftmaster.extmaxothrsperday, shiftmaster.graceperiod_earlyout,
                shiftmaster.extendot, shiftmaster.otrounding, shiftmaster.lateoutperiod, shiftmaster.otmaxtime, shiftmaster.isdeductlatein,
                shiftmaster.isdeductearlyout, shiftmaster.iswrkomitot)
            )
        
        conn.commit()
        
        return {"message": "Shift detail inserted successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/get_shiftmaster")
async def get_shift_master(conn=Depends(get_db_connection)):
    try:
        with conn.cursor() as cursor:
            query = "SELECT * FROM tms.shiftmaster"
            cursor.execute(query)
            shift_master = cursor.fetchall()
            return {"shift_master": shift_master}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    
@router.get("/get_shiftmaster/{shfmst_rno}")
async def get_shiftmaster(shfmst_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT * FROM tms.shiftmaster WHERE shfmst_rno=%s"
        cursor.execute(query, (shfmst_rno,))
        ShiftMaster = cursor.fetchall()
        return {"shiftmaster": ShiftMaster}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.get("/get_workrate/{shfmst_rno}")
async def get_workrate(shfmst_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT restdaywrkrate, offdaywrkrate, holidaywrkrate FROM tms.shiftmaster WHERE shfmst_rno=%s"
        cursor.execute(query, (shfmst_rno,))
        ShiftMaster = cursor.fetchall()
        return {"workrate": ShiftMaster}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.get("/get_work_calculation/{shfmst_rno}")
def get_work_calculation(shfmst_rno: int = None, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        query = "SELECT shfmst_rno, wrkcalc_earlytime_p,wrkcalc_lateintime_m,wrkcalc_lateouttime_p,wrkcalc_earlyouttime_m,mealhrs_m,teahrs_m,offsetlatein,mealcaltype,minlateout,graceminus,absorbgracetime,incompletemeal,offsetfrom,offsetto,mealfixhrs,teafixhrs,wrkrounding,late_everymin,late_deductmin,earlyout_everymin,earlyout_deductmin FROM tms.shiftmaster WHERE shfmst_rno = %s"
        cursor.execute(query, (shfmst_rno,))
        ShiftMaster = cursor.fetchall()
        return {"work_calculation": ShiftMaster}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

    
@router.get("/get_overtime_rates/{shfmst_rno}")
async def get_overtime_rate(shfmst_rno: int, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        query = "SELECT shfmst_rno, otrate_norma, otrate_off, otrate_rest, otrate_half, otrate_holiday, extotrate_normal, extotrate_off, extotrate_rest, extotrate_half, extotrate_holiday, minothrsperday, extminothrsperday, extmaxothrsperday, graceperiod_earlyout, extendot, otrounding, lateoutperiod, otmaxtime, isdeductlatein, isdeductearlyout, iswrkomitot FROM tms.shiftmaster WHERE shfmst_rno=%s"
        cursor.execute(query, (shfmst_rno,))
        ShiftMaster = cursor.fetchall()
        return {"overtime_rates": ShiftMaster}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if conn:
            conn.close()

@router.put("/update_shiftmaster/{shfmst_rno}")
def update_shiftmaster(shfmst_rno: int, shiftmaster: ShiftMaster, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the shift master exists
        query = "SELECT COUNT(*) FROM tms.shiftmaster WHERE shfmst_rno = %s"
        cursor.execute(query, (shfmst_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="Shift master not found")

        # Update the shift master
        update_query = """
            UPDATE tms.shiftmaster
            SET license_rno=%s, company_rno=%s, shfcode=%s, description=%s, restdaywrkrate=%s, 
            offdaywrkrate=%s, holidaywrkrate=%s, wrkcalc_earlytime_p=%s, wrkcalc_lateintime_m=%s, 
            wrkcalc_lateouttime_p=%s, wrkcalc_earlyouttime_m=%s, mealhrs_m=%s, teahrs_m=%s, 
            isflexsibleshift=%s, offsetlatein=%s, mealcaltype=%s, minlateout=%s, graceminus=%s, 
            absorbgracetime=%s, incompletemeal=%s, offsetfrom=%s, offsetto=%s, mealfixhrs=%s, 
            teafixhrs=%s, wrkrounding=%s, late_everymin=%s, late_deductmin=%s, earlyout_everymin=%s, 
            earlyout_deductmin=%s, isfixsection=%s, flex_dailyworkinghrstime=%s, otrate_norma=%s, 
            otrate_off=%s, otrate_rest=%s, otrate_half=%s, otrate_holiday=%s, extotrate_normal=%s, 
            extotrate_off=%s, extotrate_rest=%s, extotrate_half=%s, extotrate_holiday=%s, minothrsperday=%s, 
            extminothrsperday=%s, extmaxothrsperday=%s, graceperiod_earlyout=%s, extendot=%s, otrounding=%s, 
            lateoutperiod=%s, otmaxtime=%s, isdeductlatein=%s, isdeductearlyout=%s, iswrkomitot=%s
            WHERE shfmst_rno=%s
        """
        cursor.execute(update_query, (
            shiftmaster.license_rno, shiftmaster.company_rno, shiftmaster.shfcode, shiftmaster.description,
            shiftmaster.restdaywrkrate, shiftmaster.offdaywrkrate, shiftmaster.holidaywrkrate,
            shiftmaster.wrkcalc_earlytime_p, shiftmaster.wrkcalc_lateintime_m, shiftmaster.wrkcalc_lateouttime_p,
            shiftmaster.wrkcalc_earlyouttime_m, shiftmaster.mealhrs_m, shiftmaster.teahrs_m,
            shiftmaster.isflexsibleshift, shiftmaster.offsetlatein, shiftmaster.mealcaltype,
            shiftmaster.minlateout, shiftmaster.graceminus, shiftmaster.absorbgracetime, shiftmaster.incompletemeal,
            shiftmaster.offsetfrom, shiftmaster.offsetto, shiftmaster.mealfixhrs, shiftmaster.teafixhrs,
            shiftmaster.wrkrounding, shiftmaster.late_everymin, shiftmaster.late_deductmin,
            shiftmaster.earlyout_everymin, shiftmaster.earlyout_deductmin, shiftmaster.isfixsection,
            shiftmaster.flex_dailyworkinghrstime, shiftmaster.otrate_norma, shiftmaster.otrate_off,
            shiftmaster.otrate_rest, shiftmaster.otrate_half, shiftmaster.otrate_holiday,
            shiftmaster.extotrate_normal, shiftmaster.extotrate_off, shiftmaster.extotrate_rest,
            shiftmaster.extotrate_half, shiftmaster.extotrate_holiday, shiftmaster.minothrsperday,
            shiftmaster.extminothrsperday, shiftmaster.extmaxothrsperday, shiftmaster.graceperiod_earlyout,
            shiftmaster.extendot, shiftmaster.otrounding, shiftmaster.lateoutperiod, shiftmaster.otmaxtime,
            shiftmaster.isdeductlatein, shiftmaster.isdeductearlyout, shiftmaster.iswrkomitot,
            shfmst_rno  # This is the value for the WHERE clause
        ))
        
        conn.commit()
        return {"message": "Shift master updated successfully"}
    except IntegrityError as e:
        raise HTTPException(status_code=400, detail=f"Integrity Error: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))            


@router.delete("/delete_shiftmaster/{shfmst_rno}")
def delete_workcalendar(shfmst_rno: int, conn=Depends(get_db_connection)):
    cursor = conn.cursor()
    try:
        # Check if the user exists
        cursor.execute("SELECT COUNT(*) FROM tms.shiftmaster WHERE shfmst_rno = %s", (shfmst_rno,))
        count = cursor.fetchone()[0]
        if count == 0:
            raise HTTPException(status_code=404, detail="shift master not found")

        delete_query = "DELETE FROM tms.shiftmaster WHERE shfmst_rno = %s"
        cursor.execute(delete_query, (shfmst_rno,))
        conn.commit()

        return {"message": "shift master deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()            




