import React, { Component } from 'react';

import fb from '../assets/icons/fb-icon.png';
import insta from '../assets/icons/insta-icon.png';
import google from '../assets/icons/google-icon.png';
import linkedin from '../assets/icons/linkedin-icon.png';
import twitter from '../assets/icons/twitter-icon.png';
class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="top-footer-wrapper">
          <div className="container top-footer">
            <div className="col education-col">
              <h3>Education</h3>
              <p>Bsc.CSIT</p>
              <p>Himalaya College of Engineering</p>
            </div>

            <div className="col contact-col">
              <h3>Contact</h3>
              <p>linkin.suppu@gmail.com</p>
              <p>+977-9803922830</p>
              <ul className="social-media">
                <li>
                  <a href="https://www.facebook.com/linkin.supriya/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="fb" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/supriya_amatya/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="insta" /></a>
                </li>
                <li>
                  <a href="#!"><img src={google} alt="gplus" /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/supriya-amatya/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                </li>
                <li>
                  <a href="#!"><img src={twitter} alt="twitter" /></a>
                </li>
              </ul>
            </div>

            <div className="col address-col">
              <h3>Address</h3>
              <p>Shankhamul, New Baneshowr</p>
              <p>Minbhawan Marg, Kathmandu 44600</p>
            </div>

          </div>
        </div>

        <div className="bottom-footer-wrapper clearfix">
          <p className="copyright">© Copyright 2020, All Rights Reserved | Supriya Amatya.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;