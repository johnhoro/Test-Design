import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  let [active, setActive] = useState(0);
  let history = useHistory();

  function handleActive(id) {
    if (id === 0) {
      props.dispatch({ type: "dashboard", payload: "dashboard" });
      setActive(id);
      history.push("/");
    } else if (id === 1) {
      props.dispatch({ type: "order", payload: "order" });
      setActive(id);
      history.push("/order");
    } else if (id === 2) {
      props.dispatch({ type: "configuration", payload: "configuration" });
      setActive(id);
      history.push("/configuration");
    }
  }
  return (
    <>
      <header className="flex justify-bw align-center">
        <nav className="flex align-center">
          <img src="/brand-logo.png" alt="#" />
          <ul className="flex align-center">
            {["Dashboard", "Orders", "Configuration"].map((elm, i) => (
              <li
                key={i}
                className={active === i ? `active` : ``}
                onClick={() => handleActive(i)}
              >
                {elm}
              </li>
            ))}
          </ul>
        </nav>
        <div className="profile flex align-center justify-center">
          <p>KS</p>
        </div>
      </header>
    </>
  );
}

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage,
  };
}

export default connect(mapStateToProps)(Header);
