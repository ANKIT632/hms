import { FaPlus } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { ImCopy } from "react-icons/im";
import { FaRegFileExcel } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaColumns } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import { useState } from "react";

import PopUpAddPatientForm from "../components/PopUpAddPatientForm.component";
import UserTableDetails from "../components/userTableDetails.component";
import * as XLSX from 'xlsx';
import ParseCsv from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Patient() {

  const navigate = useNavigate();



  const [isShowPaitentForm, setIsShowPaitentForm] = useState(false);

 

  const tableData = [
    { sno: 1001, name: 'John Doe', age: 30, gender: 'Male', address: '123 Street', phone: '1234567890', guardianName: 'Tom Holland',bloodGroup:'O+',dob:"4-mar-2000",anyAllergies:"AFC",remarks:"ACD",email:"jhon@gmail.com" },
    { sno: 1002, name: 'mark', age: 25, gender: 'Female', address: '456 Avenue', phone: '0987654321', guardianName: 'Tom Holland',bloodGroup:'A+',dob:"5-mar-2002",nyAllergies:"ACC",remarks:"ACDE" ,email:"jhon@gmail.com" },

  ];



  const len = tableData.length;


  const navigateHandler = (path) => {
    navigate(path);
  }



  // download function. 

  const copyTableData = () => {
    if(len===0)
    {alert("not data found")}
   else{
    let grid = 'ID\tName\tAge\tGender\tAddress\tPhone\n';
    tableData.forEach(row => {
      grid += `${row.sno}\t${row.name}\t${row.age}\t${row.gender}\t${row.address}\t${row.phone}\n`;
    });
    navigator.clipboard.writeText(grid);}
  };

  const downloadExcelHandler = () => {
    if(len===0)
    {alert("not data found")}
   else{
    const ws = XLSX.utils.json_to_sheet(tableData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "tableData.xlsx");}
  };




  const csv = ParseCsv.unparse(tableData);

  const downloadCSVDataHandler = () => {
    if(len===0)
    {alert("not data found")}
   else{
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sample_data.csv';
    link.click();}
  };


  const downloadPDFHandler = () => {
    if(len===0)
    {alert("not data found")}
   else{
    const doc = new jsPDF();
    const columns = ["ID", "Name", "Age", "Gender", "Address", "Phone"];
    const data = tableData.map(item => [item.id, item.name, item.age, item.gender, item.address, item.phone]);
    doc.autoTable(columns, data);
    doc.save('tableData.pdf');}
  };




  return (
    <div className=" bg-slate-100 absolute h-full w-full">
      <div className=" bg-white m-4 flex-1 border border-gray-300">



        <div className="px-4 py-1.5 flex  max-md:flex-col bg-white justify-between  ">
          <h2 className="text-lg ">Patient List</h2>

          <div className="ml-2 mt-2 flex flex-wrap gap-1  text-white  w-fit">

            <div className="flex  items-center  bg-blue-500 rounded-sm px-2 py-1   gap-2 hover:bg-btn-hover active:bg-gray-600 cursor-pointer h-6" onClick={() => setIsShowPaitentForm(pre => !pre)}>
              <p className="text-[12px] ">Add New Patient</p>
              <FaPlus className=" text-xs " />
            </div>

            <div className="flex  items-center  bg-blue-500 rounded-sm px-2  py-1 gap-0.5  hover:bg-btn-hover active:bg-gray-600 cursor-pointer h-6 " onClick={() => navigateHandler("/patient/import")}>
              <FaUpload className=" text-xs  " />
              <p className="text-[12px]">import patient</p>

            </div>

            <div className="flex  items-center  bg-blue-500 rounded-sm px-2   py-1   hover:bg-btn-hover active:bg-gray-600 cursor-pointer h-6" onClick={() => navigateHandler("/patient/disablepatient")}>
              <IoMdMenu className=" text-xs " />
              <p className="text-[12px]">Disabled Patient List</p>

            </div>

          </div>
        </div>
        <hr className="w-[98%]  mx-auto border-t border-gray-300" />

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

        {len>=1? <>  <div className=" px-3 ">
          <table className="w-full  " id="">
            <thead className="">
              <tr className="border-b ">
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2 "
                >
                  Patient ID
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2  "
                >
                  Patient Name
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2 max-xxs:hidden "
                >
                  Age
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2 max-xs:hidden "
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2 max-sm:hidden "
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2 max-md:hidden "
                >
                  Guardian Name
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2 max-md:hidden "
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="text-left text-sm font-medium  pb-2  max-md:hidden "
                >
                  Action
                </th>
              </tr>

            </thead>

            <tbody className="border-b ">
              {tableData.map((data, idx) => {
                return <UserTableDetails key={idx} data={data} setIsShowPaitentForm={setIsShowPaitentForm}/>
              })
              }
            </tbody>
          </table>
        </div>

        <div className="w-full p-2 flex max-md:flex-col max-md:items-center gap-1 md:justify-between">
          <p className="text-[10px] ">Records: 1 to {len} of {len}</p>
          <div className="text-xs flex items-center gap-1"><TfiAngleLeft className="text-[8px]" /><p className=" py-0.5 px-2 text-center bg-gray-200 cursor-pointer">{1}</p><TfiAngleRight className="text-[8px]" /></div>
        </div>
        </>:<div className="h-[200px] bg-gray-100 m-2">
           <div className="flex justify-center max-xs:text-xs"><p>Not data Found</p></div>
         </div> }  
      </div>

   
      {isShowPaitentForm && <PopUpAddPatientForm setIsShowPaitentForm={setIsShowPaitentForm} />}



    </div>
  )
}

export default Patient;