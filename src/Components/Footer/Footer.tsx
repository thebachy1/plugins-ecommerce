import react, { useState } from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__main-content">
          <div className="footer__idea">
            <h2>Our Idea</h2>
            <p>
              Good design at a fair price is our priority. We help developers
              worldwide.
            </p>
          </div>
          <div className="footer__promise">
            <h2>Our Promise</h2>
            <p>
              We try to give you the best possible service. If you have any
              complaints, please feel free to contact us at any time.
            </p>
          </div>
        </div>
        <p className="footer__copyright">
          © 2022, Plugins-web Powered by React
        </p>
      </div>
    </>
  );
}
