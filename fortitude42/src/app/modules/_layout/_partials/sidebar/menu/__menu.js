import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const _menu_item = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-kt-menu-trigger="click" className={`menu-item menu-accordion ${isOpen ? 'show' : ''}`}  >
        {/* begin:Menu link */}
        <span className="menu-link">
            <span className="menu-icon">
                <i className={`ki-duotone ${icon} fs-2`}>
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                </i>
            </span>
            <Link to={`/${title}`} className="menu-title"> {/* Wrap the title in a Link */}
          {title}
        </Link>
            <span className="menu-arrow" onClick={handleToggle}></span>
        </span>
        {/* end:Menu link */}
        {/* begin:Menu sub */}
        <div className={`menu-sub menu-sub-accordion ${isOpen ? 'show' : ''}`} style={isOpen ? {} : { display: 'none', overflow: 'hidden' }}>
            {children}
        </div>
        {/* end:Menu sub */}
    </div>
  );
};

export default _menu_item;