from fastapi import FastAPI
from routes_file.routes import License, Company, JobTitle, Department, Employee, Users, users_password
from tms_file.tms import clocking_data, shiftdetail, shift_master, shiftsection, workcalender, wrkpattern, workpattern_details
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Include the routers
app.include_router(clocking_data.router)
app.include_router(shiftdetail.router)
app.include_router(shift_master.router)
app.include_router(shiftsection.router)
app.include_router(workcalender.router)
app.include_router(wrkpattern.router)
app.include_router(workpattern_details.router)
app.include_router(License.router)
app.include_router(Company.router)
app.include_router(JobTitle.router)
app.include_router(Department.router)
app.include_router(Employee.router)
app.include_router(Users.router)
app.include_router(users_password.router)

