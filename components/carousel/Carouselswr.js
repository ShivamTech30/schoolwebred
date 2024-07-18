import React from 'react';
import useSWR from 'swr';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css'


const Carouselswr = () => {
     
    const slides = [
        { title: "/images/is3.jpg ", description: 'Lorem ipsum' },
        { title: " /images/is5.jpg", description: 'Lorem ipsum' }, 
      ];

    return ( 

        <div className="container-fluid m-0 p-0">
            <div className="row m-0 p-0">
                <div className="col-lg-12 m-0 p-0 slider_home_mt">
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}   >
                        {slides.map((slide, index) => {
                            return <div class="carousel-inner" role="listbox"  key={index} >
                                <div className='carousel items1' role="listbox" style={{marginTop:"0px"}}>
                                    <img
                                        src={slide.title}
                                        height={500} width={1500}
                                        alt="sorry_no_img"
                                    />
                                </div>
                            </div>
                        })}
                    </Carousel> 
                </div> 
            </div>
        </div>
         
    )

}


export default Carouselswr