import React from 'react';
import { useAuth } from '../../auth/core/AuthProvider';
//Master Layout
import { Link } from 'react-router-dom';
import MasterPage from '../../modules/_layout/_default';
const MainSettingPage = () => {
    const { logout } = useAuth();

    return (
        <MasterPage>
            <div className="d-flex flex-column flex-column-fluid p-4" >

                {/* begin::Toolbar */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* begin::Toolbar container */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* begin::Page title */}
                        <h2>Setting</h2>
                    </div>
                </div>

              </div>
              <div className="w-full flex-column">
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                <Link to={`/branch-setting`} className='menu-title d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center' style={{ height: "25vh" }}> {/* Wrap the title in a Link */}
                 
                   
                      <h2>Branch Setting</h2>
                    
                
                  </Link>
                  <Link to={`/department-setting`} className='menu-title d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center' style={{ height: "25vh" }}> {/* Wrap the title in a Link */}
                  
                    
                      <h2>Department Setting</h2>
                   
                
                  </Link>
                  <Link to={`/public-holiday-setting`} className='menu-title d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center' style={{ height: "25vh" }}> {/* Wrap the title in a Link */}
                 
                      <h2>Public Holiday Setting</h2>
                  
             
                  </Link>
            
                </div>
                <div className='row w-full  justify-content-center column-gap-10 mb-8'>
                <Link to={`/branch-setting`} className='menu-title d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center' style={{ height: "25vh" }}> {/* Wrap the title in a Link */}
                 
                   
                      <h2>Branch Setting</h2>
                    
                
                  </Link>
                  <Link to={`/department-setting`} className='menu-title d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center' style={{ height: "25vh" }}> {/* Wrap the title in a Link */}
                  
                    
                      <h2>Department Setting</h2>
                   
                
                  </Link>
                  <Link to={`/public-holiday-setting`} className='menu-title d-flex flex-column align-items-center col-3 border rounded border-secondary justify-content-center' style={{ height: "25vh" }}> {/* Wrap the title in a Link */}
                 
                      <h2>Public Holiday Setting</h2>
                  
             
                  </Link>
            
                </div>
                
                

                
              </div>
              
        
      
           
        </MasterPage>
    );
};

export default MainSettingPage;
