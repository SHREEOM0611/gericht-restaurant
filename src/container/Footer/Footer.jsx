import React from 'react';

import { FooterOverlay,Newsletter } from '../../components';
import {FiInstagram,FiFacebook,FiLinkedin} from 'react-icons/fi';
import {images} from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
  
  <Newsletter/>
  <FooterOverlay/>
  <div className="app__footer-links">
<div className="app__footer-links_contact">
<h1 className="app__footer-headtext">Contact Us</h1>
<p className="p__opensans"> Address Lorem ipsum dolor sit amet, consectetur adipiscing</p>
<p className="p__opensans">+1 212-344-1230</p>
<p className="p__opensans">+1 212-344-1230</p>

   
</div>
<div className="app__footer-links_logo">
<img src={images.gericht}/>
<p className="p__opensans">"The best way to find yourself is to lose yourself intthe service of others."</p>
<img src={images.spoon} alt="spoon" className="spoon__img"  style={{marginTop:15}}/>
<div className="app__footer-links_icons">
<FiInstagram />
<FiFacebook />
<FiLinkedin />
</div>

   
</div>
<div className="app__footer-links_work">
<h1 className="app__footer-headtext">Working Hours</h1>
<p className="p__opensans" >Mon- Fri: </p>
<p className="p__opensans" >08:00am - 11:00pm</p>
<p className="p__opensans weekend" >Sat- Sun: </p>
<p className="p__opensans" >07:00am - 9:00pm</p>

   
</div>
  </div> 
  <div className="app__footer_copyright">
     <p className="p__opensans">2022 Gericht. All Rights Reserved</p>
  </div>
  </div>
);

export default Footer;
 