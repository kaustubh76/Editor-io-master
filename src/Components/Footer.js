import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        Copywrite © {year} | Made with <i className="far fa-heart"></i>
        by&nbsp;
        <Link
            href="https://www.linkedin.com/in/kaushtubh-agrawal-650b40229/"
            target={"_blank"}
            className="underline"
          >
        {" "}
        Kaushtubh Agrawal
        </Link>
        
      </Container>
      
    </div>
  );
}

export default Footer;
