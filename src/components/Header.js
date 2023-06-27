import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import HeaderForm from "./HeaderForm";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
        <div className={classes.container}>
            <HeaderForm />
        </div>
        <div className={classes.button}>
         <HeaderCartButton />
        </div>
        </Fragment>
    );
  
};

export default Header;