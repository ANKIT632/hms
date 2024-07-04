/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { PiGenderIntersexBold } from "react-icons/pi";
import { FaDroplet } from "react-icons/fa6";
import { FaDrumSteelpan } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import EditPopPatientForm from "./EditPopPatientForm.component";


function PopUpPaitentDetails({ setIsShowPaitentDetails, setIsShowPaitentForm, data }) {



    const alertHandler = () => {
        alert("Are you sure to deactivate account?");
    }

    const [isShowPaitentEditForm, setIsShowPaitentEditForm] = useState(false);

    const handleAddNewPaitent = () => {

        setIsShowPaitentForm((pre) => !pre);
    }

    return (
        <>
            <div className="fixed inset-0 flex items-top justify-center z-50 ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="bg-white  shadow-lg z-10 max-sm:w-[94%] max-md:w-[80%] md:w-[750px] h-fit mt-5 rounded-sm ">

                    <div className="flex justify-between items-center px-2 bg-blue-500  h-12 text-sm  ">
                        <div className="flex bg-white  h-7 items-center text-xs font-semibold px-2 gap-1 rounded-sm md:px-4  hover:bg-btn-hover active:bg-gray-600 cursor-pointer hover:text-white" onClick={handleAddNewPaitent}>
                            <FaPlus /><p>New Patient</p></div>
                        <div className="flex gap-2.5 text-white text-xs">
                            <FaPen className="hover:text-gray-600 cursor-pointer" title="Edit" onClick={()=>setIsShowPaitentEditForm((pre)=>!pre)}/> <FaRegThumbsDown className="hover:text-gray-600 cursor-pointer" onClick={alertHandler} title="Disable" /> <ImCross className="hover:text-gray-600 cursor-pointer" title="Close" onClick={() => setIsShowPaitentDetails((pre) => !pre)} /></div>
                    </div>

                    <div className="text-gray-800 p-3 flex">
                        <div className="flex-[0.8]" >
                            <h1 className="pb-1 font-bold  text-2xl">{data?.name}</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1 text-xs font-semibold"><FaUserCircle title="Name" /> <p>{data?.name}</p></div>

                                <div className="flex gap-2 text-xs font-semibold">
                                    <div className="flex items-center gap-1 font-semibold "><PiGenderIntersexBold title="Gender" /> <p>{data.gender}</p></div>
                                    <div className="flex items-center gap-1 font-semibold"><FaDroplet title="Blood Group" /> <p>{data.bloodGroup}</p></div>
                                    <div className="flex items-center gap-1 font-semibold"><FaDrumSteelpan title="Marital Status" /> <p>{data.gender}</p></div>
                                </div>

                                <div className="flex items-center gap-1 text-xs font-semibold"><MdDateRange title="Age" /> <p>{data.dob}</p></div>

                                <div className="flex items-center gap-1 text-xs font-semibold "><FaPhoneSquareAlt title="Phone" /> <p>{data.phone}</p></div>
                                <div className="flex items-center gap-1 text-xs font-semibold"><MdEmail title="Email" /> <p>{data.email}</p></div>
                                <div className="flex items-center gap-1 text-xs font-semibold "><IoLocation title="Adress" /> <p>{data.address}</p></div>
                                <div className="flex items-center gap-1 text-xs "><p className=" font-bold">Any Known Allergies</p><p className="font-semibold">{data.anyAllergies}</p></div>
                                <div className="flex items-center gap-1 text-xs "><p className=" font-bold">Remarks</p><p className="font-semibold">{data.remarks}</p></div>

                            </div>
                        </div>


                        <div className="flex flex-[0.2] justify-end ">
                            <img src="" className="w-20 h-20 bg-gray-300" alt="Img" />
                        </div>
                    </div>
                </div>
            </div>

            {isShowPaitentEditForm && <EditPopPatientForm setIsShowPaitentEditForm={setIsShowPaitentEditForm} data={data}/>}
        </>
    )
}

export default PopUpPaitentDetails