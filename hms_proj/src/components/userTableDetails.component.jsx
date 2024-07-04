/* eslint-disable react/prop-types */
import { useState } from 'react'
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import PopUpPaitentDetails from "./PopUpPaitentDetails.component";


function UserTableDetails({ data,setIsShowPaitentForm }) {

  const [isShowList, setIsShowList] = useState(false);
  const [isShowPaitentDetails, setIsShowPaitentDetails] = useState(false);


  return (
    <>
      <tr className=" hover:bg-gray-100 ">
        <td className="p-1 flex gap-1 items-center">

          <div className="h-fit border border-gray-300 rounded-sm bg-gray-100 p-1 md:hidden text-[8px] cursor-pointer" onClick={() => setIsShowList((pre) => !pre)} >
            {isShowList ? <TfiAngleUp /> : <TfiAngleDown />}
          </div>
          <p className="text-[13px]">{data.sno}</p>

        </td>


        <td className=" text-blue-500 text-[13px] text-top cursor-pointer" onClick={() => setIsShowPaitentDetails((pre) => !pre)}>
          {data.name}
        </td>
        <td className=" text-[13px] max-xxs:hidden">
          {data.age}
        </td>

        <td className=" text-[13px] max-xs:hidden ">
          {data.gender}
        </td>
        <td className=" text-[13px] max-sm:hidden ">
          {data.phone}
        </td>
        <td className=" text-[13px] max-md:hidden ">
          {data.guardianName}
        </td>
        <td className=" text-[13px] max-md:hidden ">
          {data.address}
        </td>
        <td className=" text-[13px]  max-md:hidden">
          <div className="flex gap-1">
            <div className="p-0.5 bg-gray-100 cursor-pointer hover:bg-gray-200" onClick={() => setIsShowPaitentDetails((pre) => !pre)}> <IoMdMenu /></div>
            <div className="p-0.5 bg-gray-100 cursor-pointer hover:bg-gray-200">   <HiDotsVertical /> </div>

          </div>
        </td>

      </tr>

      {isShowList && <tr >
        <td colSpan={4} className="pl-7 ">
          <ul className="w-fit">

            <li className="border-b flex gap-7 text-[13px] py-1 xxs:hidden"><span className="font-semibold ">Age </span><span>{data.age}</span></li>

            <li className="border-b flex gap-7  text-[13px] py-1 xs:hidden "><span className="font-semibold">Gender </span><span>{data.gender}</span></li>

            <li className="border-b flex gap-7  text-[13px] py-1 sm:hidden"><span className="font-semibold">Phone </span><span>{data.phone}</span></li>


            <li className="border-b flex gap-1 text-[13px] py-1 md:hidden"><span className="font-semibold">Guardian Name </span><span>{data.guardianName}</span></li>

            <li className="border-b flex gap-7 text-[13px] py-1 md:hidden"><span className="font-semibold">Address </span><span>{data.address}</span></li>

            <li className="border-b flex items-center gap-8 text-[13px] py-1 md:hidden"><span className="font-semibold">Action </span><span>  <div className="flex gap-1">
              <div className="p-0.5 cursor-pointer " onClick={() => setIsShowPaitentDetails((pre) => !pre)} > <IoMdMenu /></div>
              <div className="p-0.5 cursor-pointer ">   <HiDotsVertical /> </div>
            </div></span></li>

          </ul>
        </td>
      </tr>}
      
      {isShowPaitentDetails && <PopUpPaitentDetails setIsShowPaitentDetails ={setIsShowPaitentDetails} setIsShowPaitentForm={setIsShowPaitentForm}  data={data}/>}
    </>
  )
}

export default UserTableDetails;