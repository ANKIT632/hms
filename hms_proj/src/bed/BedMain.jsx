import  { useState } from 'react';

import Floor from './Floor';
import BedType from './BedType';
import  BedGroup from './BedGroup';
import Bed from './Bed';
import BedStatus from './BedStatus';

export const BedMain = () => {

  const [activeTab, setActiveTab] = useState('bedStatus');


  const COMPONENTS = {
    bedStatus: BedStatus,
    bed: Bed ,
    bedType: BedType ,
    bedGroup: BedGroup ,
    floor: Floor 
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

            <li className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='bedStatus')?" font-bold text-blue-700":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp("bedStatus")}>Bed Status List</li>
            
            <li  className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='bed')?" font-bold text-blue-700":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp('bed')}>Bed</li>

            <li  className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='bedType')?" font-bold text-blue-700":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp('bedType')}>Bed Type</li>

            <li  className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='bedGroup')?" font-bold text-blue-700":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp('bedGroup')}>Bed Group</li>

            <li  className={`text-sm  p-2 border-b border-gray-300 cursor-pointer  ${(activeTab==='floor')?" font-bold text-blue-700":" hover:text-blue-400 font-medium"} `} onClick={()=>handleActiveComp('floor')}>Floor</li>
          </ul>
      
      {/* right */}
     
          <ActiveComponent/>
  
      </div>
    </div>
  );
};

export default BedMain;
