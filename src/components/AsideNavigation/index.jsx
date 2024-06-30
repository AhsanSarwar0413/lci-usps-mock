import "./styles.css";
import logo from "../../assets/logo.png"
import { PiBookOpenTextFill } from "react-icons/pi";
import { MdChevronRight } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";
import Geometry from "../../assets/geometry.png";
const AsideNavigation = () => {
    return (
        <div className="side-navigation-wrapper">
            <div className="side-nav-content">
                <div className="side-nav-logo">
                    <img src={logo} alt="uspc-logo" />
                </div>
                <nav className="aside-nav">
                    <ul>
                        <li>
                            <div className="nav-item-wrapper">
                                <img src={Geometry} alt="geometry" />
                                Overview
                            </div>
                        </li>
                        <li>
                            <div className="nav-item-wrapper child-arrow-nav">
                                <div>
                                    <PiBookOpenTextFill color="white" size="20"/>
                                    User Management
                                </div>
                                <div>
                                    <MdChevronRight color="white" />
                                </div>
                            </div>
                        </li>
                        <li className="has-child">
                            <div className="nav-item-wrapper">
                                <div className="child-arrow-nav">
                                    <div>
                                        <img src={Geometry} alt="geometry" />
                                        Supervisor
                                    </div>
                                    <div>
                                        <MdChevronRight color="white" />
                                    </div>
                                </div>
                            </div>
                            <div className="child-expand">
                                    <ul>
                                        <li>Facility Schedule</li>
                                        <li>Manage Custodians</li>
                                        <li>Manual Work Recrod</li>
                                        <li>My Facilities</li>
                                        <li>Work Certifications</li>
                                        <li>4776 Notes</li>
                                    </ul>
                            </div>
                        </li>
                        <li>
                            <div className="nav-item-wrapper child-arrow-nav">
                                <div>
                                    <BiBarChartSquare color="white" size="20"/>
                                    Reports
                                </div>
                                <div>
                                    <MdChevronRight color="white" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AsideNavigation;
