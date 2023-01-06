import React from "react";
// import meta from "./Mmeta.png";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer-controls">
        <div className="footer-control">
          <p className="bold">Learn</p>
          <p>Introduction</p>
          <p>Installation</p>
          <p>Migrating from v1 to v2</p>
        </div>
        <div className="footer-control">
          <p className="bold">Community</p>
          <p>
            <a href="/">
              Stack Overflow
              <i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
          <p>
            <a href="/">Feature Request</a>
          </p>
          <p>
            <a href="/">
              Discord<i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
          <p>
            <a href="/">Help</a>
          </p>
        </div>
        <div className="footer-control">
          <p className="bold">More</p>
          <p>
            <a href="/">Blog</a>
          </p>
          <p>
            <a href="/">Changelog</a>
          </p>
          <p>
            <a href="/">
              Github<i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
          <p>
            <a href="/">
              Twitter<i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
        </div>
        <div className="footer-control symbol">
          <p className="bold">Legal</p>
          <p>
            <a href="/">
              Privacy<i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
          <p>
            <a href="/">
              Terms<i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
          <p>
            <a href="/">
              Data Policy<i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
          <p>
            <a href="/">
              Cookie Policy
              <i className="fa fa-external-link fa-1x"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="footer_control logo-meta">
        {/* <img src={meta} alt="meta " width="70px" /> */}
        Meta Open Source
      </div>
      <div className="copyright">
        CopyRights &copy;2023 Meta Platforms, Inc. Built with Docusaurus.
      </div>
    </React.Fragment>
  );
}

export default Footer;
