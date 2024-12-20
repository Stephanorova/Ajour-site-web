import"./index.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { dataCenter } from "./Data2";

const imageSlider = [
  {
    id:1,
    image:"/web/image/1.jpg"
  },
  {
    id:2,
    image:"/web/image/2.jpg"
  },
  {
    id:3,
    image:"/web/image/3.jpg"
  },
  {
    id:4,
    image:"/web/image/4.jpg"
  },
  {
    id:5,
    image:"/web/image/5.jpg"
  },
  {
    id:6,
    image:"/web/image/6.jpg"
  },
  {
    id:7,
    image:"/web/image/7.jpg"
  },
  {
    id:8,
    image:"/web/image/8.jpg"
  },
  {
    id:9,
    image:"/web/image/9.jpg"
  },
  {
    id:10,
    image:"/web/image/10.jpg"
  },
  {
    id:11,
    image:"/web/image/11.jpg"
  },
  {
    id:12,
    image:"/web/image/12.jpg"
  },
  {
    id:13,
    image:"/web/image/13.jpg"
  },
  {
    id:14,
    image:"/web/image/14.jpg"
  },
]

const SousCourse = () => {

    
      // Composant flèche personnalisé pour la navigation
      const CustomArrow = ({ direction, onClick }) => (
        <span 
          onClick={onClick}
          className={`absolute ${direction === 'left' ? 'left-[-50px]' : 'right-[-50px]'} 
                     top-[6rem] z-10 
                     text-gray- p-4
                     transform ${direction === 'left' ? '-translate-x-1/2' : 'translate-x-1/2'}
                     hover:bg-navy-800 transition-colors`}
        >
          {direction === 'left' ? (
            <ChevronLeft className="w-6 h-6" />
          ) : (
            <ChevronRight className="w-6 h-6" />
          )}
        </span>
      );
    
      // Configuration du slider
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

      var settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    
  return (
    <div className="souscours">
    <div className="w-[61vw] mx-auto px-0 py-12 relative">
    <Slider {...settings} >
      {dataCenter.map((training) => (
        <div key={training.id} className="px-1" >
          <div className="imageslide">
          <div className="bg-gray-100 w-[200px] h-[260px] overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={training.image}
                alt={training.titre}
              />
            </div>
            <div className="titreCours">
            <div className="p-4">
              <h3 className="text-center text-navy-900 font-medium text-xs h-[50px]">
                {training.titre}
              </h3>
            </div>
            </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    <div className="calandar">
        <div className="nosCalandrier">
           <h1>Training Calendar</h1>
              <div className="cadre">
                <div className="cadreLeft">
                   <h2>2024</h2>
                   <img src="/SiteWebimage/calandar.png" alt="" />
                    <i>Installation & Commissioning of Telecommunications Network Equipment →</i>
                    <p><li> 04 Nov</li> </p>
                    <p><li> 09 Dec</li></p>
                    <i>Leadership, Configuration, and Commissioning of Telecommunications Network Equipment (LCCTNE) →</i>
                    <p><li> 04 Nov </li></p>
                    <p><li> 09 Dec</li></p>
                </div>
                <div className="cadreRigth">
                <div className="col-span-3 grid grid-cols-3 gap-1">
          {/* First Row */}
            <div className="bg-gray-100 p-3 w-[190px] h-[170px] ">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Work at Height and Fall Protection →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>11-12 Nov</li>
              <li>18-19 Nov</li>
              <li>25-26 Nov</li>
              <li>09-10 Dec</li>
              <li>16-17 Dec</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 w-[190px] h-[170px]">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Electrical Safety and Authorization (ESA) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>07-08 Nov</li>
              <li>14-15 Nov</li>
              <li>21-22 Nov</li>
              <li>05-06 Dec</li>
              <li>12-13 Dec</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 w-[190px] h-[170px]">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Risk Analysis (RA) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>02 Nov</li>
              <li>16 Nov</li>
              <li>23 Nov</li>
              <li>06 Dec</li>
              <li>14 Dec</li>
            </ul>
          </div>

          {/* Second Row */}
          <div className="bg-gray-100  p-4 w-[190px] h-[170px] ">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Defensive Driving (DD) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>19 Oct</li>
              <li>26 Oct</li>
              <li>02 Nov</li>
              <li>09 Nov</li>
              <li>16 Nov</li>
            </ul>
          </div>

          <div className="bg-gray-100  p-4 w-[190px] h-[170px] ">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Fire Safety (FS) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>13-14 Nov</li>
              <li>27-28 Nov</li>
              <li>06-07 Dec</li>
              <li>13-14 Dec</li>
            </ul>
          </div>

          <div className="bg-gray-100  p-4 w-[190px] h-[170px] ">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Fire Extinguisher Handling (FEH) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>13 Nov</li>
              <li>20 Nov</li>
              <li>27 Nov</li>
              <li>13 Dec</li>
            </ul>
          </div>

          {/* Third Row */}
          <div className="bg-gray-100  p-4 w-[190px] h-[170px] ">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Offroad Driving (OD) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>09-10 Nov</li>
              <li>16-17 Nov</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 w-[190px] h-[170px]">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Rope Rigging & Lifting →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>13 Nov</li>
              <li>20 Nov</li>
              <li>27 Nov</li>
              <li>06 Dec</li>
              <li>13 Dec</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 w-[190px] h-[170px]">
            <h3 className="text-[13px] font-medium text-blue-800 italic mb-2">
              Fall Protection & Rescue (FPR) →
            </h3>
            <ul className="list-disc pl-5 text-[12px]">
              <li>11-12-13 Nov</li>
              <li>15-16-20 Nov</li>
              <li>09-10-11 Dec</li>
              <li>16-17-18 Dec</li>
            </ul>
          </div>
        </div>
    </div>
 </div>
</div>
</div>
</div>
<div className="slideArchive">
<div className="w-[64vw] mt-auto h-auto relative">
  <h1 className="">Archives</h1>
   <Slider {...settings1}>
      {imageSlider.map((training) => (
        <div key={training.id} className="px-1">
          <div className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={training.image}
                alt={training.titre}
                className="imagecouresSlide"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </div>
</div>
  )
}

export default SousCourse
