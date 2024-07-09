/* eslint-disable react/prop-types */
import { useState } from "react";
import { ImCross } from "react-icons/im";


import { IoMdMenu } from "react-icons/io";
import { ImCopy } from "react-icons/im";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

import { HiDotsVertical } from "react-icons/hi";

import * as XLSX from 'xlsx';
import ParseCsv from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function ShowPopChargesDeatils({ setIsShowDetails }) {

    const tableData = [
        {},{},{}

    ];

    const len = tableData.length;

    // download function. 

    const copyTableData = () => {
        if (len === 0) { alert("not data found") }
        else {
            let grid = 'ID\tName\tAge\tGender\tAddress\tPhone\n';
            tableData.forEach(row => {
                grid += `${row.sno}\t${row.name}\t${row.age}\t${row.gender}\t${row.address}\t${row.phone}\n`;
            });
            navigator.clipboard.writeText(grid);
        }
    };

    const downloadExcelHandler = () => {
        if (len === 0) { alert("not data found") }
        else {
            const ws = XLSX.utils.json_to_sheet(tableData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            XLSX.writeFile(wb, "tableData.xlsx");
        }
    };


    const csv = ParseCsv.unparse(tableData);

    const downloadCSVDataHandler = () => {
        if (len === 0) { alert("not data found") }
        else {
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'sample_data.csv';
            link.click();
        }
    };


    const downloadPDFHandler = () => {
        if (len === 0) { alert("not data found") }
        else {
            const doc = new jsPDF();
            const columns = ["ID", "Name", "Age", "Gender", "Address", "Phone"];
            const data = tableData.map(item => [item.id, item.name, item.age, item.gender, item.address, item.phone]);
            doc.autoTable(columns, data);
            doc.save('tableData.pdf');
        }
    };





    return (

        <div className="fixed inset-0 flex items-top justify-center z-50 ">
            <div className="absolute inset-0 bg-black opacity-50 "></div>

            <div className="relative bg-white shadow-lg z-10 max-sm:w-[94%] max-md:w-[80%] md:w-[900px] h-fit mt-5 rounded-sm overflow-y-auto max-h-[90vh]  ">
                <div className="flex bg-blue-400 text-white justify-between items-center p-2 text-lg font-semibold "><p >{"Add "}</p><ImCross className="text-xs  right-4 top-4 hover:text-gray-600 cursor-pointer" onClick={() => setIsShowDetails((pre) => !pre)} /></div>

                {/* div1 */}

                <div className="p-4 text-sm grid grid-cols-2 gap-4 sm:grid-cols-1">

                    <ul>
                        <li className="flex justify-between "><p className="font-semibold"> Charge Type</p><p>	Procedures</p>
                        </li>
                        <li className="flex justify-between "><p className="font-semibold">Code</p><p>121</p>
                        </li>
                        <li className="flex justify-between "><p className="font-semibold"> Standard Charge ($)</p><p>	200</p>
                        </li>
                    </ul>

                    <ul>
                        <li className="flex justify-between "><p className="font-semibold"> 	Charge Category</p><p>	new charge</p>
                        </li>
                        <li className="flex justify-between "><p className="font-semibold">Description</p><p>dsgdfh</p>
                        </li>
                    </ul>

                </div>

                {/* div2 */}

                <div>

                    <div className="px-4 flex  md:justify-between max-md:flex-col-reverse  items-center max-md:gap-4 " >

                        <input type="text" placeholder="Search..." className="outline-none font-semibold  border-b border-gray-300  text-sm focus:border-blue-400 w-fit max-md:max-w-[130px]" />

                        <div className="flex   border-b  border-gray-300  text-gray-600 ">
                            <div className="p-1 hover:bg-gray-200 active:bg-gray-400" onClick={copyTableData}>
                                <ImCopy className="cursor-pointer text-sm " title="Copy" />
                            </div>

                            <div className="p-1 hover:bg-gray-200 active:bg-gray-400 " onClick={downloadExcelHandler}>
                                <FaRegFileExcel className="cursor-pointer text-sm " title="Excel" />
                            </div>
                            <div className="p-1 hover:bg-gray-200 active:bg-gray-400" onClick={downloadCSVDataHandler}>
                                <FaRegFileAlt className="cursor-pointer text-sm " title="CSV" />
                            </div>
                            <div className="p-1 hover:bg-gray-200 active:bg-gray-400" onClick={downloadPDFHandler}>
                                <FaRegFilePdf className="cursor-pointer text-sm " title="PDF" />
                            </div>
                            <div className="p-1 hover:bg-gray-200 active:bg-gray-400">
                                <FaPrint className="cursor-pointer text-sm " title="Print" />
                            </div>
                            <div className="p-1 hover:bg-gray-200 active:bg-gray-400" >
                                <FaColumns className="cursor-pointer text-sm " title="Columns" />
                            </div>
                        </div>



                    </div>

                </div>


                {/* div3 */}

                <div className=" p-5 overflow-y-hidden max-md:overflow-x-auto">
                    <table className="w-full " id="">
                        <thead className="" >
                            <tr className="border-b ">
                                <th
                                    scope="col"
                                    className="text-left text-sm font-semibold  pb-2  "
                                >
                                 Schedule Charge Name
                                </th>
                                <th
                                    scope="col"
                                    className="text-right text-sm font-semibold  pb-2  "
                                >
                                   Charge ($)
                                </th>

                            </tr>

                        </thead>

                       <tbody className="border-b  ">
                            {tableData.map((data, idx) => {
                                return <tr key={idx} className=" hover:bg-gray-100 py-1">
                                    <td className="text-[13px] ">

                                        {"deepak"}
                                    </td>


                                    <td className="  text-[13px] text-top cursor-pointer text-right py-1" >
                                        {"501"}
                                    </td>


                                </tr>
                            })
                            }
                        </tbody>
                     
                    </table>

                    <div className="w-full p-2 flex max-md:flex-col max-md:items-center gap-1 md:justify-between">
                    <p className="text-[10px] ">Records: 1 to {len} of {len}</p>
                    <div className="text-xs flex items-center gap-1"><TfiAngleLeft className="text-[8px]" />{len > 1 && <p className=" py-0.5 px-2 text-center bg-gray-200 cursor-pointer">{1}</p>}<TfiAngleRight className="text-[8px]" /></div>
                </div>

                </div>

            </div>
        </div>



    )
}

export default ShowPopChargesDeatils;