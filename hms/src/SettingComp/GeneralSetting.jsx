import { FaPencilAlt } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import GeneralSettingEditForm from "./GeneralSettingEditForm";
import { useState } from "react";

function GeneralSetting() {
   
  const [isShowForm,setIsShowForm]=useState(false);

  return (
    <div className='flex-[0.85]   rounded-sm flex gap-4 w-full max-md:flex-col'>
      <div className=' md:flex-[0.75] flex-1 bg-white border border-gray-300 p-3'>

        <div className=" border-b pb-2 flex justify-between align-top">
          <h2 className='text-lg '>General Setting</h2>
          <div className='flex text-white bg-blue-400 text-xs items-center gap-1 px-2 rounded-sm  hover:bg-blue-800 active:bg-blue-950 cursor-pointer' onClick={()=>setIsShowForm((pre)=>!pre)}><FaPencilAlt /><p>Edit</p></div>
        </div>

        <div className='grid grid-cols-2 gap-6 border-b pb-3 w-full'>
          <ul className=''>
            <li className='text-sm font-medium py-1'> Hospital Name</li>
            <li className='text-sm font-medium py-1'>  Address</li>
            <li className='text-sm font-medium py-1'> Phone</li>
            <li className='text-sm font-medium py-1'> Email</li>
            <li className='text-sm font-medium py-1'> Hospital Code</li>
            <li className='text-sm font-medium py-1'> Language </li>
            <li className='text-sm font-medium py-1'> Language RTL Text Mode</li>
            <li className='text-sm font-medium py-1'> Timezone</li>
            <li className='text-sm font-medium py-1'> Date Format</li>
            <li className='text-sm font-medium py-1'> Time Format</li>
            <li className='text-sm font-medium py-1'> Currency</li>
            <li className='text-sm font-medium py-1'> Currency Symbol</li>
            <li className='text-sm font-medium py-1'> Credit Limit</li>
            <li className='text-sm font-medium py-1'> Doctor Restriction Mode</li>
            <li className='text-sm font-medium py-1'> Superadmin Visiblility</li>
          </ul>

          <ul className=''>
            <li className='text-sm  py-1'> Hospital Name</li>
            <li className='text-sm  py-1'>  Address</li>
            <li className='text-sm  py-1'> Phone</li>
            <li className='text-sm  py-1'> Email</li>
            <li className='text-sm  py-1'> Hospital Code</li>
            <li className='text-sm  py-1'> Language </li>
            <li className='text-sm  py-1'> Language RTL Text Mode</li>
            <li className='text-sm  py-1'> Timezone</li>
            <li className='text-sm  py-1'> Date Format</li>
            <li className='text-sm  py-1'> Time Format</li>
            <li className='text-sm  py-1'> Currency</li>
            <li className='text-sm  py-1'> Currency Symbol</li>
            <li className='text-sm  py-1'> Credit Limit</li>
            <li className='text-sm  py-1'> Doctor Restriction Mode</li>
            <li className='text-sm  py-1'> Superadmin Visiblility</li>
          </ul>
        </div>

        <div>
          <p className='text-sm font-medium py-3'>Current Theme</p>

          <div className='grid max-md:grid-cols-2 md:grid-cols-4 gap-3  '>

            <div className='  p-1.5  rounded-md border '>
              <img src='https://hms.demandhourly.com/backend/images/default.jpg' alt='img' className='w-full' />
            </div>

            <div className=' p-1.5  rounded-md border'><img src='https://hms.demandhourly.com/backend/images/default.jpg' className='w-full' alt='img' /></div>

            <div className=' p-1.5  rounded-md border'><img src='https://hms.demandhourly.com/backend/images/default.jpg' className='w-full' alt='img' /></div>

            <div className=' p-1.5  rounded-md border'><img src='https://hms.demandhourly.com/backend/images/default.jpg' className='w-full' alt='img' /></div>

          </div>
        </div>

      </div>

      {/* right */}
      <div className='md:flex-[0.25] flex-1 flex flex-col gap-2'>

        {/* 1 */}
        <div className=" border-b  flex justify-between align-top  bg-white border border-gray-300 py-3 pb-4 p-2 rounded-[5px]">
          <div className="w-24">
            <img src="https://hms.demandhourly.com/uploads/hospital_content/logo/0.png" className="" alt="img" /></div>

          <div className='flex text-white bg-blue-400 text-xs items-center gap-1 px-2 rounded-sm  hover:bg-blue-800 active:bg-blue-950 cursor-pointer py-1'><FaRegImage /><p>Edit Logo</p></div>
        </div>

        
          {/* 2 */}
          <div className=" border-b  flex justify-between align-top  bg-white border border-gray-300 py-3 pb-4 p-2 rounded-[5px]">
          <div className="w-24">
            <img src="https://hms.demandhourly.com/uploads/hospital_content/logo/0mini_logo.png" className="" alt="img" /></div>

          <div className='flex text-white bg-blue-400 text-xs items-center gap-1 px-2 rounded-sm  hover:bg-blue-800 active:bg-blue-950 cursor-pointer py-1'><FaRegImage /><p>Edit Small Logo</p></div>
        </div>

      </div>
      {
        isShowForm && <GeneralSettingEditForm setIsShowForm={setIsShowForm} />
      }
    </div>
  )
}

export default GeneralSetting;