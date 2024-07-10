/* eslint-disable react/prop-types */

import { FaPencil } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";
import { useState } from "react";

import ShowPopCharegeCategoryForm from "./ShowPopCharegeCategoryForm";

function ChargeCategoryTableData({ data }) {

    const [isShowList, setIsShowList] = useState(false);
    const [isShowForm, setIsShowForm] = useState(false);



    return (
        <>
            <tr className=" hover:bg-gray-100  h-[30px]">

                <td className=" pl-1 ">
                    <div className="flex items-center gap-2">
                        <div className="xs:hidden h-fit border border-gray-300 rounded-sm bg-gray-100 p-1  text-[8px] cursor-pointer " onClick={() => setIsShowList((pre) => !pre)} >
                            {isShowList ? <TfiAngleUp /> : <TfiAngleDown />}
                        </div>

                        <div className=" text-[13px] pl-1 " >
                            xyz
                        </div>
                    </div>
                </td>

                <td className=" text-[13px] max-xs:text-right ">
                    {"xyz"}
                </td>
                <td className=" text-[13px] max-xs:hidden ">
                    {"xyz"}
                </td>


                <td className="text-xs  pr-2 max-xs:hidden">
                    <div className="flex gap-1  text-gray-700 pt-1.5 justify-end ">

                        <div className="p-0.5 cursor-pointer bg-white">
                            <FaPencil onClick={() => setIsShowForm((pre) => !pre)} title="Edit" />
                        </div>
                        <div className="p-0.5 cursor-pointer bg-white">
                            <RiDeleteBinFill title="Delete" />
                        </div>
                    </div>
                </td>


            </tr>

            {
                isShowList && <tr  >
                    <td colSpan={2} className=" text-left pb-1.5 pl-5 ">
                        <ul className="w-fit">

                            <li className=" flex gap-7 text-[13px] border-b py-1 justify-between"><span className="font-semibold "> Charge Type </span><span>{"Xtz"}</span></li>

                            <li className=" flex gap-7 text-[13px] justify-between py-1 "><span className="font-semibold "> Action </span>                    <div className="flex gap-1  text-gray-700 justify-end ">

                                <div className="p-0.5 cursor-pointer bg-white">
                                    <FaPencil onClick={() => setIsShowForm((pre) => !pre)} title="Edit" />
                                </div>
                                <div className="p-0.5 cursor-pointer bg-white">
                                    <RiDeleteBinFill title="Delete" />
                                </div>
                            </div></li>
                        </ul>
                    </td>
                </tr>
            }

     

            {isShowForm && <ShowPopCharegeCategoryForm setIsShowForm={setIsShowForm} heading={"Edit Charge Category"} data={data} />}
        </>
    )
}

export default ChargeCategoryTableData