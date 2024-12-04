import React from 'react'
import { Calendar, MapPin } from 'lucide-react';
import './index.css'



const Accord = () => {
  return (
    <div className="accorde">
      <div className="accorder">
        <div className="tontainer">
          <div className="titredate">
                OCTOBER 1ST, 2024 :
          </div>
              <h1 className="training">
                Enrollments Now Open for Wave 14 of "TELECOM TECHNICIAN" Training!"
              </h1>
           <div className="paragraphe">
            <p>
            We are excited to announce that registrations are now open for the 14th session of our "TELECOM TECHNICIAN" training program! If you're looking to kickstart your career in
            telecommunications and technology, this is your chance.
            </p>
            <p>
              Our mission is to empower individuals and organizations with the skills they
              need to thrive in dynamic and challenging work environments.
            </p>
            <div className="flex items-center mb-2">
                 <Calendar className="mr-2 text-red-800" size={20} />
                <span  className='text-black'>Start Date: November 4, 2024</span>
              </div>
              <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-red-800" size={20} />
             <span className='text-black'>Location: TechSkills Learning Institute</span>
             </div>
             <p>
                Don't miss the opportunity to gain valuable skills and become a certified technician in the field. Join us and take the first step towards a brighter future!
            </p>
            <p className='font-semibold text-black'>
          For more information, feel free to contact us!
      </p>
      </div>   
      </div>
        <div className="droite">
          <img src="/web/image/pecb.PNG" alt="Telecom Technician Training"/>
        </div>
    </div>
  </div>
  )
}

export default Accord
