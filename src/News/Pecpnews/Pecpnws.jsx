import { CalendarDays } from 'lucide-react'
import React from 'react'
import './index.css'

const Pecpnws = () => {
  return (
    <div className="bbc">
    <div className="flex flex-col bg-white p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row ml-[-3rem]">
        {/* Left Column */}
        <div className="mt-20 ml-[6rem]">
          <div className="text-6xl font-bold text-red-800 mb-4">
           <h1>PECB</h1> 
          </div>
          <div className="centrepecb">
          <span className="text-[26px]  text-black p-3 flex items-center justify-center mb-4">BEYOND RECOGNITION</span>
          <div className=" bg-red-800 text-white p-3 flex items-center justify-center rounded-full mb-4">
            <CalendarDays className="mr-2" />
            <span>SEPTEMBER 30, 2024</span>
          </div>
          </div>
          <div className="techskill">
          <h1 className="text-[33px] text-blue-800 mt-8 ">
            PECB has signed a partnership agreement with TechSkills Learning
          </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="colonerigth">
        <div className="w-100 pl-4 text-[13px] space-y-6 mt-20 p-5 ml-10">
          <p className="mb-4">
            September 30, 2024 - PECB is pleased to announce the establishment of a mutually
            beneficial partnership with TechSkills Learning, aimed at offering training programs
            in Madagascar. This partnership combines PECB's professional services with
            TechSkills Learning's capabilities to deliver training courses with expertise,
            satisfactory results, and an exceptional learning experience.
          </p>
          <p className="mb-4">
            "We are excited to begin this partnership with TechSkills Learning. It will allow us to
            increase national awareness of the importance of ISO standards. I am personally
            very pleased and confident to sign this agreement with TechSkills Learning," said
            Tim Rama, CEO of PECB. "Over the past few years, our partnership program has
            experienced phenomenal growth, and the initiatives specifically aimed at developing
            and maintaining voluntary partnerships have been a significant factor in our success.
            I am very satisfied that we have reached an agreement that is beneficial for both
            companies," concluded Mr. Rama.
          </p>
          <p className="mb-4">
            Tsihoarana Rakotoniana, General Manager of TechSkills Learning Institute:
            "We are very enthusiastic about this partnership with PECB, which will allow us to
            expand our training offerings to include internationally recognized programs that
            meet the highest standards. Together, we will raise awareness of the importance of
            ISO standards in Madagascar, and we firmly believe that this collaboration will open
            doors for our learners to position themselves in the international market while
            enhancing their local expertise."
          </p>
          <h2 className="font-bold mb-2">About PECB</h2>
          <p>
            PECB is a global provider of training, examination, and certification services,
            offering expertise in various fields including information security, information
            technology, business continuity, service management, risk management, quality
            management, safety, environment, and health. Through its network of partners,
            PECB provides education that enables professionals and organizations to
            demonstrate their commitment and competence to international standards. For
            more information, visit PECB's website.
          </p>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pecpnws
