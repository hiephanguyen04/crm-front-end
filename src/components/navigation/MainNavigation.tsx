import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.scss";
import { ROUTES } from "@/constants";
import { ContactIcon, OpportunitiesIcon, TaskIcon } from "@/assets/icons";

const MainNavigation: React.FC = () => {
  return (
    <nav className="main-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to={ROUTES.CONTACTS}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="nav-icon">
              <ContactIcon />
            </span>
            <span className="nav-text">Contacts</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={ROUTES.OPPORTUNITIES}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="nav-icon">
              <OpportunitiesIcon />
            </span>
            <span className="nav-text">Opportunités</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={ROUTES.TASKS}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="nav-icon">
              <TaskIcon />
            </span>
            <span className="nav-text">Tâches</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
