import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
 
 
const handleDragStart = (e) => e.preventDefault();
 
const items = [
  <div style={{marginRight:'5px'}}><img src="/images/g1.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g2.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g3.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g4.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g5.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g6.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g7.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g8.jpeg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g9.jpeg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,
  <div style={{marginRight:'5px'}}><img src="/images/g10.jpg" onDragStart={handleDragStart} className="yours-custom-class" style={{height:'12.5rem',width:'100%'}}/></div>,

];
 
const Schoolgallery = () => {
    const options = {

        responsiveClass: true,
        dots: false,
        smartSpeed: 1000,
          responsive: {
              0: {
                  items: 1,
              },
              400: {
                  items: 1,
              },
              600: {
                  items: 1,
              },
              700: {
                  items: 1,
              },
              1000: {
                  items: 5,
      
              }
          },
      };
  return (
      <div className='schoolgallery'>
          <h3>PINEGROVE SCHOOL GALLERY</h3>
        <AliceCarousel mouseTracking items={items} {...options}  />
        <button><FontAwesomeIcon icon={faFolder}/>&nbsp;View More</button>
      </div>
  );
}
export default Schoolgallery