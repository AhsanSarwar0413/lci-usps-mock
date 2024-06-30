import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LinkButton from "../LinkButton";
import { GoPlus } from "react-icons/go";
import "./styles.css";

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('adhoc');
    return (
        <>
        <div className="navigation-wrapper">
            <div>
                <NavLink
                    className={`navigation-link ${activeLink === 'routine' ? 'active' : ''}`}
                    to="routine"
                    onClick={() => setActiveLink('routine')}
                >
                    Routine
                </NavLink>
                <NavLink
                    className={`navigation-link ${activeLink === 'periodic' ? 'active' : ''}`}
                    to="periodic"
                    onClick={() => setActiveLink('periodic')}
                >
                    Periodic
                </NavLink>
                <NavLink
                    className={`navigation-link ${activeLink === 'adhoc' ? 'active' : ''}`}
                    to="/"
                    onClick={() => setActiveLink('adhoc')}
                >
                    Ad hoc
                </NavLink>
            </div>
            {(activeLink === 'adhoc' ||  activeLink === 'periodic') && (
                <div>
                    <LinkButton>Export to Excel</LinkButton>
                </div>
            )}
        </div>
            {activeLink === 'adhoc' && (
                <div className="add-btn">
                    <LinkButton>
                        <GoPlus  color="white"/>
                        <span>Add</span>
                    </LinkButton>
                </div>
            )}
        </>
    );
};

export default Navigation;
