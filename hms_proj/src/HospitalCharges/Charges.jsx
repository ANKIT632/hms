import { FaPlus } from "react-icons/fa";

import { ImCopy } from "react-icons/im";

import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { useState } from "react";

import * as XLSX from 'xlsx';
import ParseCsv from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import ShowPopAddForm from "./ShowPopChargesForm";
import axios from "axios";
import ChargeTrData from "./ChargeTableData";


export const Charges = () => {


    const [isShowForm, setIsShowForm] = useState(false);

    const [colFilterList, setColFilterList] = useState(false);

    const [colFilter, setColFilter] = useState({
        chargeCategory: true,
        chargeType: true,
        code: true,
        standardCharge: true

    });

    const setSpecificFilterTrue = (columnName) => {
        setColFilter((prevFilters) => ({
            ...prevFilters,
            [columnName]: !prevFilters[columnName]
        }));
    };

    const resetFilterHandler = () => {
        setColFilter({
            chargeCategory: true,
            chargeType: true,
            code: true,
            standardCharge: true
        })
    }


    const tableData = [
        {}, {}
    ];


    const len = 0;


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
        <div className='md:flex-[0.85] '>
            <div className=" bg-white    border border-gray-300">

                <div className="px-3 py-1 flex bg-white justify-between  ">
                    <h2 className="text-xl">Charges Details</h2>


                    <div className="flex mt-0.5  text-white  items-center  bg-blue-500 rounded-sm px-2   gap-1 hover:bg-btn-hover active:bg-gray-600 cursor-pointer h-6 " onClick={() => setIsShowForm((pre) => !pre)}>
                        <p className="text-[13px]">Add Charge</p>

                        <FaPlus className=" text-sm  " />

                    </div>

                </div>
                <hr className="w-[98%]  mx-auto border-t border-gray-300" />

                <div className="p-4 flex  md:justify-between max-md:flex-col-reverse  items-center max-md:gap-4 relative"  >
                    <input type="text" placeholder="Search..." className="outline-none font-semibold  border-b border-gray-300  text-sm focus:border-blue-400 w-fit max-md:max-w-[130px]" />

                    <div className="flex   border-b  border-gray-300  text-gray-600 ">
                        <div className="p-1 hover:bg-gray-200 active:bg-gray-400 cursor-pointer" onClick={copyTableData}>
                            <ImCopy className=" text-sm " title="Copy" />
                        </div>

                        <div className="p-1 hover:bg-gray-200 active:bg-gray-400 cursor-pointer " onClick={downloadExcelHandler}>
                            <FaRegFileExcel className=" text-sm " title="Excel" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 active:bg-gray-400 cursor-pointer" onClick={downloadCSVDataHandler}>
                            <FaRegFileAlt className=" text-sm " title="CSV" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 active:bg-gray-400 cursor-pointer" onClick={downloadPDFHandler}>
                            <FaRegFilePdf className=" text-sm " title="PDF" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 active:bg-gray-400 cursor-pointer">
                            <FaPrint className=" text-sm " title="Print" />
                        </div>
                        <div className="p-1 hover:bg-gray-200 active:bg-gray-400 cursor-pointer " onClick={() => setColFilterList((pre) => !pre)}>
                            <FaColumns className=" text-sm " title="Columns" />


                        </div>
                        {colFilterList && <ul className="absolute bg-gray-400 right-10 top-10 text-sm w-40 shadow-gray-300 shadow-lg font-medium mt-4 rounded-md">
                            <li className={`py-1 pl-4 active:bg-gray-100 cursor-pointer  ${colFilter.chargeCategory ? 'text-white' : 'bg-white text-black'}`} onClick={() => setSpecificFilterTrue('chargeCategory')}>Charge Category</li>

                            <li className={`py-1 pl-4 active:bg-gray-100 cursor-pointer  ${colFilter.chargeType ? 'text-white' : 'bg-white text-black'}`} onClick={() => setSpecificFilterTrue('chargeType')}>Charge Type</li>

                            <li className={`py-1 pl-4 active:bg-gray-100 cursor-pointer  ${colFilter.code ? 'text-white' : 'bg-white text-black'}`} onClick={() => setSpecificFilterTrue('code')}>Code</li>

                            <li className={`py-1 pl-4 active:bg-gray-100 cursor-pointer  ${colFilter.standardCharge ? 'text-white' : 'bg-white text-black'}`} onClick={() => setSpecificFilterTrue('standardCharge')}>Standard Charge ($)</li>

                            <li className="py-1 pl-4 cursor-pointer bg-white active:bg-gray-100" onClick={resetFilterHandler}>Restore visibility</li>
                        </ul>}
                    </div>
                </div>

                <div className=" px-3">
                    <table className="w-full  ">
                        <thead className="">
                            <tr className="border-b ">
                                {colFilter.chargeCategory && <th
                                    scope="col"
                                    className="text-left text-sm font-medium  pb-2 "
                                >
                                    Charge Category
                                </th>}
                                {colFilter.chargeType && <th
                                    scope="col"
                                    className="text-left text-sm font-medium  pb-2  "
                                >
                                    Charge Type
                                </th>}
                                {colFilter.code && <th
                                    scope="col"
                                    className="text-left text-sm font-medium  pb-2 "
                                >
                                    Code
                                </th>}

                                {colFilter.standardCharge && <th
                                    scope="col"
                                    className="text-right text-sm font-medium  pb-2 max-xs:hidden"
                                >
                                    Standard Charge ($)
                                </th>}

                            </tr>

                        </thead>

                        {(len === 0) ? <tbody className="border-b ">
                            {tableData.map((data, idx) => {
                                return <ChargeTrData key={idx} data={data} colFilter={colFilter} />
                            })
                            }
                        </tbody>


                            : <tbody className="border-b  "><tr className="w-full hover:bg-gray-100 m-2 ">
                                <th colSpan={8} className="text-xs text-red-200 "><p>No data Available in table</p>
                                    <img src="https://smart-hospital.in/shappresource/images/addnewitem.svg" className="w-full h-[200px] flex self-center py-2 mb-2" />
                                    <p className="text-green-700 mb-2">{"<-"} Add new record or search with different criteria.</p>
                                </th>
                            </tr>
                            </tbody>}
                    </table>
                </div>


                <div className="w-full p-2 flex max-md:flex-col max-md:items-center gap-1 md:justify-between">
                    <p className="text-[10px] ">Records: 0 to {len} of {len}</p>
                    <div className="text-xs flex items-center gap-1"><TfiAngleLeft className="text-[8px]" />{len > 0 && <p className=" py-0.5 px-2 text-center bg-gray-200 cursor-pointer">{1}</p>}<TfiAngleRight className="text-[8px]" /></div>
                </div>



            </div>


            {isShowForm && <ShowPopAddForm setIsShowForm={setIsShowForm} heading={"Add Charges"} />}


        </div>
    );
};

export default Charges;
