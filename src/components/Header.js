import React from "react";
import { Link } from "react-router-dom";
import IconPath from "../images/icon.svg";
import { Route, Switch } from "react-router-dom";

// Заголовок сайта =========================================================
function Header({ btnLink, pathLink }) {
  return (
    <Switch>
      <Route exact path="/">
        <header className="header page__cover">
          <img className="logo" src={IconPath} alt="Логотип сайта" />
          <div className="header__auth">
            <Link to={pathLink} className="header__link">
              {btnLink}
            </Link>
          </div>
        </header>
      </Route>
      <Route path="/sign-up">
        <header className="header page__cover">
          <img className="logo" src={IconPath} alt="Логотип сайта" />
          <div className="header__auth">
            <Link to={pathLink} className="header__link">
              {btnLink}
            </Link>
          </div>
        </header>
      </Route>
      <Route path="/sign-in">
        <header className="header page__cover">
          <img className="logo" src={IconPath} alt="Логотип сайта" />
          <div className="header__auth">
            <Link to={pathLink} className="header__link">
              {btnLink}
            </Link>
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;

/*
   <Switch>
      <Route exact path="/">
        <header className="header page__cover">
          <img className="logo" src={IconPath} alt="Логотип сайта" />
          <div className="header__auth">
            <Link to={pathLink} className="header__link">
              {btnLink}
            </Link>
          </div>
        </header>
      </Route>
      <Route path="/sign-up">
        <header className="header page__cover">
          <img className="logo" src={IconPath} alt="Логотип сайта" />
          <div className="header__auth">
            <Link to={pathLink} className="header__link">
              {btnLink}
            </Link>
          </div>
        </header>
      </Route>
    </Switch>
    */
