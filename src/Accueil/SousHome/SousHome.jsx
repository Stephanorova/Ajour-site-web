import React from 'react';
import'./index.css'
import Ourvalues from '../Ourvalues/Ourvalues';
import Service from '../Ourservice/Service';
import About from '../AboutUS/AboutUs';
import Referance from '../Referance/Referance';
import Pub from '../Pub/Pub';
import{ useHistory } from "react-router-dom"
import { Link } from "react-scroll";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const SousHome = () => {

    const history = useHistory()

    
    var settings1 = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
       
    };
  return (
 <>
    <div className="bonneraison">
       <div className="menue">
          <div className="newsmenu" onClick={()=>history.push("/news")}>
            <div className="topnews">
              <h3>NEWS</h3>
               <Slider {...settings1}>
                 <div className="newsSlide">
                  <div className="becps">
                   <h4>BECP</h4>
                   <h5>BEYOND RECOGNITION</h5>
                    <p>SEPTEMBER 30, 2024</p>
                    <h6>PECB has signed a partnership agreement with TechSkills Learning</h6>
                 </div>      
              </div>
              <div className="newsSlide">
              <div className="becps">
                   <h4>HUAWEI</h4>
                    <p>MAY 30, 2024</p>
                    <h6>TechSkills Learning Institute Partners with Huawei to Deliver Certified Training Programs in Madagascar</h6>
                 </div>  
              </div>
              <div className="newsSlide">
              <div className="becps">
                   <h4>NOKIA</h4>
                    <p>AUGUST 08, 2024</p>
                    <h6>TechSkills Learning Institute Receives Approval from Nokia Following Training Audit</h6>
                 </div>  
              </div>
            </Slider>
            </div>  
           <label> <i class="fa fa-arrow-right"/></label>
          </div>
          <div className="menucenter">
            <div className="hautemenu">
            <Link spy={true} to="about" smooth={true} activeClass="activeClass">
               <div className="contact">
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>Contact</h3>
                  <h4>Us</h4>
                  </div>
               </div>
               </Link>
               <Link spy={true} to="about" smooth={true} activeClass="activeClass">
               <div className="view">
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>About</h3>
                  <h4>Us</h4>
                  </div>
               </div>
                  </Link>
            </div>
            <div className="basmenu">
            <div className="calandarsmenu" onClick={()=>history.push("/courses")}>
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>Training</h3>
                  <h4>calandar</h4>
                  </div>
               </div>
               <div className="viewsmenu" onClick={()=>history.push("/courses")}>
                  <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>View all</h3>
                  <h4>courses</h4>
                  </div>
               </div>
            </div>
          </div>
          <div className="menuleftes">
            <div className="logmenu" onClick={()=>history.push("/news")}>
            <span><i class='fa fa-plus icon'></i></span>
                  <div className="us">
                  <h3>Blog</h3>
                  </div>
            </div>
            <div className="historymenu" onClick={()=>history.push("/courses")}>
            <span><i class='fa fa-plus icon'></i></span>
                  <div className="us" >
                  <h3>History</h3>
                  <h4>archive</h4>
                  </div>
            </div>
          </div>
       </div>
    </div>
    <div className="slide" id='about'>
        <About/>
    </div>
    <div className="ourvalue">
        <Ourvalues/> 
    </div>
    <div className="service">
        <Service/> 
    </div>
    <div className="referenc">
        <Referance/>
    </div>
    <div className="pub">
        <Pub/> 
    </div>
</>
  )
}

export default SousHome
