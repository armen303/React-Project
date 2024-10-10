import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/header/logo-all.svg";
import userAvatar from "../../assets/img/header/Ellipse.png";
import "./Header.scss";

const Header = () => {
  const [isVisible, setShowBlock] = useState(false);
  return (
      <header className="header">
        <div className="header-block d-f j-c-b a-i-c container">
          <div className="header-block__main d-f a-i-c">
            <Link className="header-block__main--logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <ul className="header-block__main--menu d-f j-c-b a-i-c">
              <li className="header-block__main--menu-item d-f a-i-c">
                <Link
                    className="header-block__main--menu-item__link active"
                    to="/product"
                >
                  WB Cabinet
                </Link>
                <i className="icon icon-caret header-block__main--menu-item__icon"></i>
                <ul className="header-block__main--menu-item__dropdown">
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Summary
                    </a>
                  </li>
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Sales and Orders
                    </a>
                  </li>
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Geography of Orders
                    </a>
                  </li>
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Connections
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-block__main--menu-item d-f a-i-c">
                <a className="header-block__main--menu-item__link" href="#">
                  Groups
                </a>
              </li>
              <li className="header-block__main--menu-item d-f a-i-c">
                <a className="header-block__main--menu-item__link" href="#">
                  Ozon
                </a>
                <i className="icon icon-caret header-block__main--menu-item__icon"></i>
                <ul className="header-block__main--menu-item__dropdown">
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Categories
                    </a>
                  </li>
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Search
                    </a>
                  </li>
                </ul>
              </li>
              <li className="header-block__main--menu-item d-f a-i-c">
                <a className="header-block__main--menu-item__link" href="#">
                  WB Cabinet
                </a>
                <i className="icon icon-caret header-block__main--menu-item__icon"></i>
                <ul
                    className="header-block__main--menu-item__dropdown"
                    data-dropdown-box
                >
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Categories
                    </a>
                  </li>
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Search
                    </a>
                  </li>
                  <li className="header-block__main--menu-item__dropdown--section">
                    <a
                        className="header-block__main--menu-item__dropdown--section-link"
                        href="#"
                    >
                      Supplier Ratings
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header-block__user d-f a-i-c">
            <div className="header-block__user--search d-f a-i-c">
              <input
                  className="input header-block__user--search-form focus"
                  type="text"
                  placeholder="Search category"
              />
              <button className="icon icon-loop header-block__user--search-icon"></button>
            </div>
            <div
                className="header-block__user--item cursor-pointer d-f a-i-c"
                onClick={() => setShowBlock(!isVisible)}
            >
              <div className="header-block__user--item-photo">
                <img src={userAvatar} alt="user" />
              </div>
              <i className="icon icon-arrow header-block__user--item-icon"></i>

              {isVisible && (
                  <div className="user-dropdown">
                    <div className="user-dropdown__name">
                      <span className="user-dropdown__name--circle d-f j-c-c a-i-c"></span>
                      <p className="user-dropdown__name--details">Alexey</p>
                      <span className="user-dropdown__name--info">
                    Subscription until 11.10.2021
                  </span>
                    </div>
                    <ul className="user-dropdown__list">
                      <li className="user-dropdown__list--item">
                        <a
                            href="#"
                            className="user-dropdown__list--item-main d-f a-i-c"
                        >
                          <i className="icon icon-coin user-dropdown__list--item-main__icon"></i>
                          <p className="user-dropdown__list--item-main__text">
                            Subscription and Invoices
                          </p>
                        </a>
                      </li>
                      <li className="user-dropdown__list--item">
                        <a
                            href="#"
                            className="user-dropdown__list--item-main d-f a-i-c"
                        >
                          <i className="icon icon-user user-dropdown__list--item-main__icon"></i>
                          <p className="user-dropdown__list--item-main__text">
                            Account
                          </p>
                        </a>
                      </li>
                      <li className="user-dropdown__list--item">
                        <a
                            href="#"
                            className="user-dropdown__list--item-main d-f a-i-c"
                        >
                          <i className="icon icon-history user-dropdown__list--item-main__icon"></i>
                          <p className="user-dropdown__list--item-main__text">
                            Request History
                          </p>
                        </a>
                      </li>
                      <li className="user-dropdown__list--item">
                        <a
                            href="#"
                            className="user-dropdown__list--item-main d-f a-i-c"
                        >
                          <i className="icon icon-door-open user-dropdown__list--item-main__icon"></i>
                          <p className="user-dropdown__list--item-main__text">
                            Logout
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
              )}
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
