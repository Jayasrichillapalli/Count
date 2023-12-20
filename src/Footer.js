import React from 'react';
import './index.css';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="row">
        <div className="col-sm">
          <h6 className='middle'>Get to know us</h6 >
          <ul>
            <p>About us</p>
            <p>Careers</p>
            <p>Pre-releases</p>
          </ul>
        </div>
        <div className="col-sm">
          <h6  className='middle'>Connect with us</h6 >
          <ul>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </ul>
        </div>
        <div className="col-sm">
          <h6  className='middle'>Let us help you</h6>
          <ul>
            <p>COVID-19 and Amazon</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
