import { GrKey } from "react-icons/gr";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import NavAttendance from "./NavAttendance.component";
import NavDocument from "./NavDocument.component";
import NavPayroll from "./NavPayroll.component";
import NavProfile from "./NavProfile.component";
import NavTimeline from "./NavTimeline.component";
import NavLeaves from "./NavLeave.component";
import RightMenuBar from './RightMenuBar.component';

function UserProfile() {

  const [navState, setNavState] = useState('profile');
  const [isShowMenue, setIsShowMenue] = useState(false)

  const NAV_COMPONENTS = {
    profile: NavProfile,
    payroll: NavPayroll,
    leaves: NavLeaves,
    attendance: NavAttendance,
    document: NavDocument,
    timeline: NavTimeline,
  };

  const ActiveNavComponent = NAV_COMPONENTS[navState];


  const handlerNavState = (nav) => {
    setNavState(nav);
  }

  return (
    <>
      <div className='min-h-[100vh] w-full bg-gray-100 py-4 px-3 flex max-md:flex-col gap-3 relative'>


        {/*  left*/}
        <div className=" md:flex-[0.3]   bg-white relative border h-fit ">

          <div className="flex flex-col justify-center p-2 items-center gap-3">
            <dev >
              <img src="https://hms.demandhourly.com/uploads/staff_images/no_image.png" alt="img" className="h-24 rounded-full" />
              <p className="text-[20px] ">Super Admin</p>

              <IoMdMenu className="absolute right-2 top-0 text-3xl hover:text-blue-500 cursor-pointer md:hidden" onClick={() => setIsShowMenue((pre) => !pre)} />
            </dev>

            <div className="flex gap-2 text-xs" ><GrKey className="text-green-400 cursor-pointer" title="Change password " /><FaPencilAlt className="cursor-pointer" title="Edit " /></div>
          </div>

          <div className="">
            <ul className="pb-7 p-2 text-[13px] ">

              <li className="flex justify-between border-t  py-2 font-bold"><p>Staff ID</p><p className="font-semibold text-blue-400">1</p></li>

              <li className="flex justify-between border-t  py-2 font-bold"><p>Role</p><p className="font-semibold text-blue-400">Super Admin</p></li>

              <li className="flex justify-between border-y  py-2 font-bold"><p>Designation</p><p className="font-semibold text-blue-400">{}</p></li>
             

              <li className="flex justify-between border-y  py-2 font-bold"><p>Department</p><p className="font-semibold text-blue-400">{}</p></li>
             

              <li className="flex justify-between border-y  py-2 font-bold"><p>EPF No</p><p className="font-semibold text-blue-400">{}</p></li>

           

              <li className="flex justify-between border-y  py-2 font-bold"><p>Basic Salary</p><p className="font-semibold text-blue-400">{}</p></li>

         
              <li className="flex justify-between border-y  py-2 font-bold"><p>Contract Type</p><p className="font-semibold text-blue-400">{}</p></li>

         
              <li className="flex justify-between border-y  py-2 font-bold"><p>Work Shift</p><p className="font-semibold text-blue-400">{}</p></li>

          
              <li className="flex justify-between border-y  py-2 font-bold"><p>Location</p><p className="font-semibold text-blue-400">{}</p></li>

              <li className="flex justify-between border-y  py-2 font-bold"><p>Date Of Joining</p><p className="font-semibold text-blue-400">01-01-1970</p></li>
            </ul>
          </div>

        </div>


        {/*right */}

        <div className="md:flex-[0.7] flex-1 h-fit bg-white border font-semibold">

          {/* nav-box */}
          <div className=" flex justify-between border-b w-full">
            <ul className="flex flex-wrap  overflow-y-hidden ">
              <li className={`p-2 text-sm cursor-pointer hover:text-gray-400 ${(navState === 'profile') ? "text-blue-400 border-x border-b-blue-500 border-b-2 " : " "}`} onClick={() => handlerNavState("profile")}>Profile</li>

              <li className={`p-2 text-sm cursor-pointer hover:text-gray-400 ${(navState === 'payroll') ? " text-blue-400 border-x border-b-blue-500 border-b-2 " : " "}`} onClick={() => handlerNavState("payroll")}>Payroll</li>

              <li className={`p-2 text-sm cursor-pointer hover:text-gray-400 ${(navState === 'leaves') ? " text-blue-400 border-x border-b-blue-500 border-b-2 " : " "}`} onClick={() => handlerNavState("leaves")}>Leaves</li>

              <li className={`p-2 text-sm cursor-pointer hover:text-gray-400 ${(navState === 'attendance') ? " text-blue-400 border-x border-b-blue-500 border-b-2 " : " "}`} onClick={() => handlerNavState("attendance")}>Attendance</li>

              <li className={`p-2 text-sm cursor-pointer hover:text-gray-400 ${(navState === 'document') ? " text-blue-400 border-x border-b-blue-500 border-b-2 " : " "}`} onClick={() => handlerNavState("document")}>Document</li>

              <li className={`p-2 text-sm cursor-pointer hover:text-gray-400 ${(navState === 'timeline') ? " text-blue-400 border-x border-b-blue-500 border-b-2 " : " "}`} onClick={() => handlerNavState("timeline")}>Timeline</li>
            </ul>

            <IoMdMenu className=" self-center mr-2 text-3xl hover:text-blue-500 cursor-pointer max-md:hidden" onClick={()=>setIsShowMenue((pre)=>!pre)}/>

          </div>

          <div className="p-3 ">
            {ActiveNavComponent && <ActiveNavComponent  />}
          </div>

        </div>

        {/* right menue bar */}

        {isShowMenue && <RightMenuBar setIsShowMenue={setIsShowMenue}/>}



      </div>
    </>


  )
}

export default UserProfile;