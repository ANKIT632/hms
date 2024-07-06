/* eslint-disable react/prop-types */
import React from 'react'
import { ImCross } from "react-icons/im";

function RightMenuBar({setIsShowMenue}) {

    const [activeStaff,setActiveStaff]=React.useState('admin');

    const staffProfileSnap=
     { admin: [{},{},{},],
     accountant:[{},{}],
     doctor:[{}]
    }
  
    


     const handleActiveStaff=(staff)=>{
         setActiveStaff(staff)
     }


  return (

    <div className='w-[240px]  shadow-xl shadow-gray-600  fixed right-0 z-50 h-full bg-white top-0'>
      <div className='flex justify-between text-white bg-orange-400 p-2'><p className='font-semibold text-lg'>Staff</p> <ImCross className="text-xs self-center  hover:text-black cursor-pointer" onClick={()=>setIsShowMenue((pre)=>!pre)}/> </div>

    
         <div className='flex overflow-x-scroll overflow-y-hidden text-sm'>
         <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'admin' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('admin')}>Admin</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'accountant' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('accountant')}>Accountant</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'doctor' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('doctor')}>Doctor</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'pharmacist' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('pharmacist')}>Pharmacist</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'pathologist' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('pathologist')}>Pathologist</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'radiologist' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('radiologist')}>Radiologist</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'superAdmin' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('adsuperAdminmin')}>SuperAdmin</p>

            <p className={"p-2.5 self-center border-r border-black cursor-pointer text-white " + (activeStaff === 'receptionist' ? 'bg-black ' : 'active:bg-gray-600 hover:bg-white hover:text-black bg-gray-700 ')} onClick={()=>handleActiveStaff('receptionist')}>Receptionist</p>


         </div>

         <ul>
           {staffProfileSnap[activeStaff]?.map((staff,index)=>{
                return(
                    <li key={index} className='p-1 px-2 border-b border-gray-300'>

                      <div className='flex items-center gap-3'><img src="https://hms.demandhourly.com/uploads/staff_images/no_image.png" className='h-6 rounded-full'/> <p className='text-sm font-medium'>xyz</p></div>
                    </li>
                )
            
           })}
         </ul>
   

    </div>

  
  )
}

export default RightMenuBar;