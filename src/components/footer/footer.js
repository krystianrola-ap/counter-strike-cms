import * as React from 'react';
import {footer} from "./footer.module.css"

const Footer = () => { 
    return (
      <footer className={footer}>
        © {new Date().getFullYear()}, Built with &nbsp; 
        <a href="https://www.gatsbyjs.com"> {" Gatsby "} </a>
        &nbsp;
        by Krystian Rola
      </footer>
    )
}

export default Footer;
