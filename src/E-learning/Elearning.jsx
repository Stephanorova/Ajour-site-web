import { Check } from 'lucide-react'
import './index.css'
import Souslearning from './SousE-laerning/Souslearning'
import Featur from './Feature/Featur'
import Pub from '../Accueil/Pub/Pub'

const Elearning = () => {

  return (
    <>
    <div className='learning'>
        <div className="row">
           <h1>Telecom online training with a flexible</h1>
           <h1>learning management system</h1>
           <span>Telecom hasn’t been the same in decades. What about your staff training?</span>
   
        <div className="rounde">
          <div className="chek">
            <div className="chekleft">
            <label ><Check/></label>
               <p>Offer training for you</p>
            </div>
            <div className="checkCenter">
            <label ><Check/></label>
            <p>Create courses</p>
            </div>
            <div className="ChekRigth">
            <label ><Check/></label>
            <p>Global, Cours support 7d/7</p>
            </div>
          </div>
          </div>
        </div>
    </div>
       <div className="souslearning">
         <Souslearning/>
       </div>
      <div className="feartures">
        <Featur/>
      </div>
      <div className="feartures">
        <Pub/>
      </div>
    </>
  )
}

export default Elearning
