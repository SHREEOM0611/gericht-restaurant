import React from 'react';
import {images} from '../../constants';

import {SubHeading} from '../../components';



const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
  <div className="app__wrapper_info">
    <SubHeading title="Contact" />
    <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find Us</h1>
    <div className="app__wrapper-content">
    <p className="p__opensans" style={{marginBottom:'2rem'}}>Address Lorem ipsum dolor sit amet, consectetur adipiscing</p>
    <p className="p__cormorant" style={{marginBottom:'3rem', color:'#DCCA87'}}>Opening Hours</p>
    <p className="p__opensans" >Mon- Fri: 10:00am - 9:00pm</p>
    <p className="p__opensans" >Sat- Sun: 10:00am - 9:00pm</p>
    </div>
    <button className="custom__button" type="button" style={{marginTop:'2rem'}}>View Us </button>

    
  </div>
  <div className="app__wrapper_img">
    <img src={images.findus} alt="image"/>
  </div>
   </div>

);

export default FindUs;
