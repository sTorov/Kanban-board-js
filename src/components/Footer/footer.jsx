import React from "react";
import "./style.css";

function Footer(){
    return(
        <footer className="footer">
            <span className="footer__span">Active tasks: N</span>
            <span className="footer__span">Finished tasks: N</span>
            <span className="footer__span">Kanban board by sTorov, Year 2023</span>
        </footer>
    )
}

export default Footer;