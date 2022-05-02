import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import grey from "@material-ui/core/colors/grey";
import ViewListIcon from "@mui/icons-material/ViewList";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ color: "grey" }} />
        <img
          className="header__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="header__right">
        <div>
          <ViewListIcon style={{ color: "grey" }} />
        </div>
        <div>
          <AccountCircleIcon style={{ color: "grey" }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
