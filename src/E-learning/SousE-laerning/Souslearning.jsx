import { GraduationCap } from 'lucide-react'
import './index.css'

const Souslearning = () => {
  return (
    <div className='souslearne'>
       <div className="lefte">
        <div className="campte">
        <GraduationCap/>
        </div>
          <h1>Standardise training and unify your telecom teams</h1>
          <span>Ensure your telecom staff receive the right training no matter where they’re located. 
            LearnRight lets you centralise your telecom training so your training materials, 
            outcomes, and reports are all under one roof. And if you need to update your materials, 
            you can make changes across locations in just a few clicks.</span>
       </div>
       <div className="rigth">
        <img src="/web/image/lerne.png" alt="" />
       </div>
    </div>
  )
}

export default Souslearning
