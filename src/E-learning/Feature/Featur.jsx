import { Activity, CalendarCheck2, SlidersHorizontal, UserPlus } from 'lucide-react'
import './index.css'

const Featur = () => {
  return (
    <div className='feature'>
        <div className="contante">
         <h1>Features you need</h1>
        <div className="alignement">
       <div className="featureCadre">
          <label><Activity/></label>
          <span>Create personal learning paths</span>
          <p>and assign them to users based on role or job function – automatically!</p>
       </div>
       <div className="featureCadre">
          <label><UserPlus/></label>
          <span>Assign user roles, permission, and assignments</span>
          <p>in just a few clicks. Change them as often as you need.</p>
       </div>
       <div className="featureCadre">
          <label><SlidersHorizontal/></label>
          <span>Quickly build customised telecom training</span>
          <p> in an immersive, fully-branded learning environment.</p>
       </div>
       <div className="featureCadre">
          <label><CalendarCheck2/></label>
          <span>Engage your learners</span>
          <p>with leaderboards, certificates, awards, and challenges to make learning fun.</p>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Featur
