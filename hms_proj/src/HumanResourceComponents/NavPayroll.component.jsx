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

function NavPayroll() {



  const tableData = [
  // {},{},{}
 
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

        <div className=" bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold rounded-[2px] md:w-40"><p className="text-sm ">Total Net Salary Paid</p><p className="text-gray-600">$0</p></div>

        <div className=" bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold  rounded-[2px]  md:w-40"><p className="text-sm ">Total Gross Salary</p><p className="text-gray-600">$0</p></div>

        <div className=" bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold  rounded-[2px]  md:w-40"><p className="text-sm ">Total Earning</p><p className="text-gray-600  md:w-40">$0</p></div>

        <div className=" bg-gray-100 p-2 pb-4 border border-gray-300 font-semibold  rounded-[2px]  md:w-40"><p className="text-sm ">Total Deduction</p><p className="text-gray-600 v">$0</p></div>

      </div>


      <div className="p-4 flex  md:justify-between max-md:flex-col-reverse  items-center max-md:gap-4 " >
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

      <div className=" px-2 overflow-y-hidden max-md:overflow-x-auto">
        <table className="w-full "  id="">
          <thead className="" >
            <tr className="border-b ">
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                PaySlip #
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
               Month-Year
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2 "
              >
                Data
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                Mode
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                Status
              </th>
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2  "
              >
                Net Salary {"($)"}
              </th>
          
              <th
                scope="col"
                className="text-left text-xs font-medium  pb-2   "
              >
                Action
              </th>
            </tr>

          </thead>

         { (len>0) ?<>  <tbody className="border-b">
            {tableData.map((data, idx) => {
              return <tr key={idx} className=" hover:bg-gray-100 ">
                <td className="text-[13px] ">

                  {101}
                </td>


                <td className=" text-blue-500 text-[13px] text-top cursor-pointer" >
                  {"mar"}
                </td>
                <td className=" text-[13px] ">
                  {"2/4/24"}
                </td>

                <td className=" text-[13px]  ">
                  {"home"}
                </td>
                <td className=" text-[13px]  ">
                  {"true"}
                </td>
                <td className=" text-[13px]  ">
                  {"74788"}
                </td>
                <td className=" text-[13px]  ">
                  <div className="flex gap-1">
                    <div className="p-0.5 bg-gray-100 cursor-pointer hover:bg-gray-200"> <IoMdMenu /></div>
                    <div className="p-0.5 bg-gray-100 cursor-pointer hover:bg-gray-200">   <HiDotsVertical /> </div>

                  </div>
                </td>

              </tr>
            })
            }
          </tbody>
</>
          :<tr className="w-full hover:bg-gray-100 m-2 ">
        <th colSpan={7}   className="text-xs text-red-200 "><p>No data Available in table</p>
        <img src="https://smart-hospital.in/shappresource/images/addnewitem.svg" className="w-full h-40 flex self-center py-2"/>
        <p className="text-green-700">{"<-"} Add new record or search with different criteria.</p>
        </th>
      </tr>}

        </table>
      </div>



        <div className="w-full p-2 flex max-md:flex-col max-md:items-center gap-1 md:justify-between">
          <p className="text-[10px] ">Records: 0 to {len} of {len}</p>
          <div className="text-xs flex items-center gap-1"><TfiAngleLeft className="text-[8px]" />{len>0&& <p className=" py-0.5 px-2 text-center bg-gray-200 cursor-pointer">{1}</p>}<TfiAngleRight className="text-[8px]" /></div>
        </div>
      
    </div>



  )
}

export default NavPayroll;