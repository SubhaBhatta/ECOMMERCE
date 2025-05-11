import React from "react";
import "../../assets/css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p> © 2025 MySite. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
