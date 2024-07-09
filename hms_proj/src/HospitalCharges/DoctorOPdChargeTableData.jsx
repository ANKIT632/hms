/* eslint-disable react/prop-types */
import { IoMdMenu } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { useState } from "react";
import DoctorOpdChargeDetails from "./DoctorOpdChargeDetails";
import DoctorOpdChargeForm from "./DoctorOpdChargeForm";

function DoctorOpdChargeTableData({  data }) {

    const [isShowDetails, setIsShowDetails] = useState(false);
    const [isShowForm,setIsShowForm]=useState(false);

    return (
        <>
            <tr className=" hover:bg-gray-100 group h-[30px]">

                <td className=" pl-1 ">
                   

                    <div className="text-xs hidden max-md:group-hover:block ">

                        <div className="flex gap-1 text-gray-700 ">
                            <div className="p-0.5 cursor-pointer bg-white">
                                <IoMdMenu onClick={() => setIsShowDetails((pre) => !pre)} title="Show" />
                            </div>
                            <div className="p-0.5 cursor-pointer bg-white">
                                <FaPencil onClick={() => setIsShowForm((pre) => !pre)} title="Edit" />
                            </div>
                            <div className="p-0.5 cursor-pointer bg-white">
                                <RiDeleteBinFill title="Delete" />
                            </div>
                        </div>
                    </div>

                    <div className=" text-[13px] pl-1 max-md:group-hover:hidden" >
                    xyz
                    </div>
               
                </td>

           

                <td className="text-xs hidden md:group-hover:block  pr-2 ">
                    <div className="flex gap-1  text-gray-700 pt-1.5 justify-end ">
                        <div className="p-0.5  cursor-pointer bg-white">
                            <IoMdMenu onClick={() => setIsShowDetails((pre) => !pre)} title="Show" />
                        </div>
                        <div className="p-0.5 cursor-pointer bg-white">
                            <FaPencil onClick={() => setIsShowForm((pre) => !pre)} title="Edit" />
                        </div>
                        <div className="p-0.5 cursor-pointer bg-white">
                            <RiDeleteBinFill title="Delete" />
                        </div>
                    </div>
                </td>

                <td className=" text-[13px] text-right md:group-hover:hidden max-xs:hidden pr-2">
                    {"xyz"}
                </td>



            </tr>

            { isShowDetails && <DoctorOpdChargeDetails setIsShowDetails={setIsShowDetails} />}

            {isShowForm && <DoctorOpdChargeForm setIsShowForm={setIsShowForm} heading={"Edit Charge"}/>}
        </>
    )
}

export default DoctorOpdChargeTableData;