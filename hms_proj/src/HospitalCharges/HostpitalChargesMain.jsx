import  { useState } from 'react';
import DoctorOpdCharge from './DoctorOpdCharge';
import Charges from './Charges';
import ChargesCategory from './ChargesCategory';


export const HospitalChargesMain = () => {

  const [activeTab, setActiveTab] = useState('charges');


  const COMPONENTS = {
    charges: Charges,
    chargeCategory: ChargesCategory ,
    doctorOpdCharge: DoctorOpdCharge ,
  };


  const handleActiveComp=(active)=>{
      setActiveTab(active);
  }


  const ActiveComponent=COMPONENTS[activeTab];

  return (
    <div className=" bg-slate-200 min-h-[100vh] p-4 " >
      <div className=' flex max-md:flex-col gap-4'>
      
      {/* left */}
          <ul className='bg-white md:flex-[0.15] max-md:flex-1 h-fit'>

            <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='charges')?" font-bold text-blue-500":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp("charges")}>Charges</li>
            
            <li  className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='chargeCategory')?" font-bold text-blue-500":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp('chargeCategory')}>Charge Category</li>

            <li  className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='doctorOpdCharge')?" font-bold text-blue-500":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp('doctorOpdCharge')}>Doctor OPD Charge</li>

          
          </ul>
      
      {/* right */}
     
          <ActiveComponent/>
  
      </div>
    </div>
  );
};

export default HospitalChargesMain;
