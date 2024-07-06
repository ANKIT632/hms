
import { ImCopy } from "react-icons/im";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

import * as XLSX from 'xlsx';
import ParseCsv from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function NavPayroll() {



  const tableData = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}

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

    <div className=" bg-white  flex-1 w-full ">


      <div className=" py-1.5 flex flex-wrap  max-md:flex-col bg-white   gap-2">

        <div className="flex justify-between bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold rounded-[2px] md:w-40">
          <div >
            <p className="text-sm ">Total Present</p><p className="text-gray-600">0</p>
          </div>

          <IoMdCheckboxOutline className="text-5xl text-gray-400" />
        </div>

        <div className="flex justify-between bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold rounded-[2px] md:w-40">
          <div >
            <p className="text-sm ">Total Late</p><p className="text-gray-600">0</p>
          </div>

          <IoMdCheckboxOutline className="text-5xl text-gray-400" />
        </div>

        <div className="flex justify-between bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold rounded-[2px] md:w-40">
          <div >
            <p className="text-sm ">Total Absent</p><p className="text-gray-600">0</p>
          </div>

          <IoMdCheckboxOutline className="text-5xl text-gray-400" />
        </div>

        <div className="flex justify-between bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold rounded-[2px] md:w-40">
          <div >
            <p className="text-sm ">Total </p><p className="text-gray-600">0</p>
          </div>

          <IoMdCheckboxOutline className="text-5xl text-gray-400" />
        </div>


        <div className="flex justify-between bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold rounded-[2px] md:w-40">
          <div >
            <p className="text-sm ">Total Holiday</p><p className="text-gray-600">0</p>
          </div>

          <IoMdCheckboxOutline className="text-5xl text-gray-400" />
        </div>

      </div>


      <div className="p-4 flex max-md:flex-col  md:justify-between   md:items-center max-md:gap-4 " >
       
       <div className="flex gap-2">
       <label>Year</label>
       <select className="outline-none font-normal text-sm py-0.5 px-1 border border-gray-500 focus:border-blue-500">
        <option>
          {"2024"}
       </option>
       
       </select>
       </div>

        <div className="flex flex-col text-gray-600  gap-2 ">
         
         <div className="flex gap-1.5 text-sm text-black  self-end">
          <div className="flex gap-1 "><p>Present:</p> <p className="text-green-600">P</p></div>

          <div className="flex gap-1 "><p>Late:</p> <p className="text-yellow-800">L</p></div>

          <div className="flex gap-1"><p>Absent:</p> <p className="text-red-900">A</p></div>

          <div className="flex gap-1"><p>Holiday:</p> <p className="text-black">H</p></div>
         </div>

         <div className="flex w-fit  border-b  border-gray-300 self-center ">
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

      <div className=" px-2 overflow-y-hidden max-md:overflow-x-auto">
        <table className="w-full " id="">
          <thead className="" >
            <tr className="border-b ">
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                <p>Date | </p>
                <p>Month</p>
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                jan
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2 "
              >
                Feb
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                Mar
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                April
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                May
              </th>

              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Jun
              </th>


              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Jul
              </th>


              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Aug
              </th>


              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Sep
              </th>


              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Oct
              </th>


              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Nov
              </th>


              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Dec
              </th>

            </tr>

          </thead>
          <tbody className="border-b ">
            {tableData.map((data, idx) => {
              return <tr key={idx} className=" hover:bg-gray-100 ">
                <td className="text-[13px] ">

                  {idx + 1}
                </td>


                <td className=" text-blue-500 text-[13px] text-top cursor-pointer" >
                  { }              </td>
                <td className=" text-[13px] ">
                  { }
                </td>

                <td className=" text-[13px]  ">
                  { }               </td>
                <td className=" text-[13px]  ">
                  { }               </td>
                <td className=" text-[13px]  ">
                  { }                </td>


                <td className=" text-[13px]  ">
                  { }               </td>
                <td className=" text-[13px]  ">
                  { }               </td>
                <td className=" text-[13px]  ">
                  { }                </td>


                <td className=" text-[13px]  ">
                  { }               </td>
                <td className=" text-[13px]  ">
                  { }               </td>
                <td className=" text-[13px]  ">
                  { }                </td>

                <td className=" text-[13px]  ">
                  { }                </td>


              </tr>
            })
            }
          </tbody>


        </table>
      </div>


    </div>



  )
}

export default NavPayroll;