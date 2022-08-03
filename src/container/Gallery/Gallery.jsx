import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import {BsInstagram, BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';

import './Gallery.css';

const  Gallery = () => {
  const scrollRef= React.useRef(null);
   const scroll=(direction)=>{
    const {current}=scrollRef;

    if(direction==='left'){
      current.scrollLeft-=316;
    }else{
      current.scrollLeft +=316;
    }
   }
 
   const galleryImages=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  return(
  <div className=" app__gallery flex__center">
    <div className="app__gallery-content">
    <SubHeading title="Instagram"/>
    <h1 className="headtext__cormorant"> Photo Gallery</h1>
    <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <button className="custom__button" type="button">View More </button>
    </div>

    <div className="app__gallery_images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className="app__gallery-img_card flex__center" key={`gallery_image-${index+1}`}>
          <img src={image} alt="gallery"/>
          <BsInstagram className="gallery__image-icon"/>
            </div>
          ))}
          </div>
          <div className="app__gallery-images_arrows">
      <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')} />
      <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')} />

    </div>
    </div>




  </div>
);
}

export default Gallery;
