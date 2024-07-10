/* eslint-disable react/prop-types */
import { IoMdMenu } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { useState } from "react";
import ShowPopChargesDetails from './ShowPopChargesDetails';
import ShowPopAddEditForm from "./ShowPopChargesForm";


function ChargeTrData({ data ,colFilter}) {

    const [isShowList, setIsShowList] = useState(false);
    const [isShowDetails, setIsShowDetails] = useState(false);
    const [isShowForm,setIsShowForm]=useState(false);

 

    return (
        <>
            <tr className=" hover:bg-gray-100 group h-[30px]">

               {colFilter.chargeCategory&&<td className=" pl-1 ">
                     <div className="flex items-center gap-2">
                    <div className="xs:hidden h-fit border border-gray-300 rounded-sm bg-gray-100 p-1  text-[8px] cursor-pointer " onClick={() => setIsShowList((pre) => !pre)} >
                        {isShowList ? <TfiAngleUp /> : <TfiAngleDown />}
                    </div>

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
                    </div>
                </td>}

                {colFilter.chargeType && <td className=" text-[13px]  ">
                    {"xyz"}
                </td>}

                {colFilter.code && <td className=" text-[13px]  ">
                    {"xyz"}
                </td>}
                

                {colFilter.standardCharge && <><td className="text-xs hidden md:group-hover:block  pr-2 ">
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
                </td></>}



            </tr>

            {
                isShowList && <tr >
                    <td colSpan={3} className=" text-[13px] text-left pb-1.5 pl-5 ">
                        <ul className="w-fit">

                            <li className=" flex gap-7 text-sm py-1 "><span className="font-semibold ">Standard Charge </span><span>{"Xtz"}</span></li>
                        </ul>
                    </td>
                </tr>
            }

            {isShowDetails && <ShowPopChargesDetails setIsShowDetails={setIsShowDetails} />}

            {isShowForm && <ShowPopAddEditForm setIsShowForm={setIsShowForm} heading={"Edit Charges"} data={data} />}
        </>
    )
}

export default ChargeTrData