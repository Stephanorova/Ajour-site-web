import './index.css'
import Accord from '../Accord/Accord';
import Pecpnws from '../Pecpnews/Pecpnws';


const SousNews = () => {


  return (
  <div className="sousnewse">
   <div className="accord">
    <Pecpnws/>
   </div>
   <div>
    <Accord/>
   </div>
    <div className="techniciens">
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="flex flex-col md:flex-row gap-8 ml-[-3rem]">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col items-center">
         <div className="photohaute">
         <img
            src="/web/image/Capture2-removebg-preview.png"
            alt="Huawei Logo"
            class="w-[120px] h-[100px] "
          />
           <img
              src="/web/image/ok.jpg"
              alt="Training Session 1"
               class="w-[140px] h-[90px]"
            />
         </div>
        
          
          {/* Training Images */}
          <div className="grid grid-cols-1 gap-4 mb-6">
           
            <img
              src="/web/image/terrain.jpg"
              alt="Training Session 2"
              class="w-[300px] h-[180px]"
            />
          </div>

          {/* Date Banner */}
          <div className="w-[300px] bg-red-800 text-white py-2 px-4 text-center rounded-md mb-4">
            MAY 30, 2024
          </div>

          {/* Title */}
          <h1 className="w-[300px] text-[17px] font-bold text-blue-800 text-left">
            TechSkills Learning Institute Partners with Huawei to Deliver Certified Training Programs in Madagascar
          </h1>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 pr-4 space-y-7 mr-5">
        <div className="interlocu">
          <p className="text-gray-800">
            We at TechSkills Learning Institute are thrilled to announce our partnership with Huawei, following a successful audit process that has officially recognized us as a trusted training provider in Madagascar.
          </p>

          <p className="text-gray-800">
            This partnership comes after Huawei's thorough evaluation of our training capabilities, including our curriculum, training environment, and the professional expertise of our teaching team. As a result, TechSkills Learning Institute is now authorized to deliver Huawei-certified training courses, providing a unique opportunity for professionals in Madagascar to gain qualifications that meet international standards.
          </p>

          <p className="text-gray-800">
            Our Huawei-approved courses will enable learners to gain industry-relevant certifications and deepen their understanding of the latest technologies in the telecommunications sector. With these certifications, professionals will have a competitive edge in the job market and contribute to the growth and modernization of Madagascar's ICT industry.
          </p>

          <p className="text-gray-800">
            Stay tuned for updates on our upcoming Huawei-certified training sessions, and don't miss the chance to enhance your skills with training that meets the highest standards.
          </p>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className="technicines">
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8 p-[60px]">
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Colonne gauche - Logo NOKIA et Photos */}
            <div className="space-y-4">
              {/* Grand titre NOKIA */}
              <div className="responsivenokia">
              <h1 className="text-[#124191] text-4xl font-bold tracking-wider font-times">
                NOKIA
              </h1>

              {/* Section des photos */}
              <div className="space-y-1">
                {/* Grande photo principale */}
                
                  <img 
                    src="/web/image/avecvazaha.jpg" 
                    alt="Main meeting" 
                    className="imageNokia"
                  />
               

                {/* Conteneur flex pour les deux photos en dessous */}
                <div className="imageflex">
                  <div >
                    <img 
                      src="/web/image/menuback.jpg" 
                      alt="Team meeting 1" 
                      className="imageNokiabas"
                    />
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/web/image/mivory.jpg" 
                      alt="Team meeting 2" 
                      className="imageNokiabas"
                    />
                  </div>
                </div>
                </div>
                {/* Date */}
                <div className="date">
                <div className="bg-red-900 text-white w-[380px] text-center py-2 rounded-md">
                  AUGUST 08, 2024
                </div>

                {/* Titre de l'annonce */}
                <h2 className="text-blue-900 w-[380px] text-[15px] font-bold">
                  TechSkills Learning Institute Receives Approval from Nokia Following Training Audit
                </h2>
                </div>
              </div>
            </div>

            {/* Colonne droite - Contenu */}
         
            <div className="md:w-1/0 pr-4 space-y-[2.5rem]">
            <div className="interlocuteur">
                <p className="text-gray-800">
                  October 08, 2024 - TechSkills Learning Institute is pleased to announce that Nokia, a prominent global provider of telecommunications equipment and services, has completed an audit of our training programs and approved our certification process.
                </p>

                <p className="text-gray-800">
                  The audit evaluated our training methodologies, course content, and the qualifications of our instructors. This recognition affirms TechSkills' commitment to delivering high-quality education and training in the telecommunications sector.
                </p>

                <p className="text-gray-800">
                  "We are honored to have our training programs approved by Nokia and to share together an unique goal, which is 'To save lives'" said Tsihoarana Rakotoniana, General Manager of TechSkills Learning Institute.
                </p>

                <p className="text-gray-800">
                  "This approval reflects our dedication to providing the highest standards of training and certification for professionals in Madagascar."
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SousNews
