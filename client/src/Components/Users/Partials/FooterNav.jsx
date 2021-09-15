import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faCartPlus, faBars} from '@fortawesome/free-solid-svg-icons';

const FooterNav = () =>{
    const [activeTab, setActiveTab] = useState(0);

  const tabs = [faHome, faUser, faCartPlus, faBars];

    return(
        <div className="footerNavbar">
        <div className="row g-0">
          {tabs.map((icon, i) => {
            const classes = ["col-3", "px-3"];
            if (i === activeTab) classes.push("activeTab");
            return (
              <div
                key={i}
                className={classes.join(" ")}
                onClick={() => setActiveTab(i)}
              >
                <h1 className="fontIcon pt-3 px-3">
                  <FontAwesomeIcon icon={icon} />
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    )
}

export default FooterNav