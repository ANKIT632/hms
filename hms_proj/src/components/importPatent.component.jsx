import { FaDownload } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import ParseCsv from 'papaparse';

function ImportPatent() {



    const data = 
        [{
            name: 'Sample Data',
            guardian: 'Sample Data',
            gender: 'Sample',
            ageYear: 'Sample',
            ageMonth: 'Sample',
            bloodGroup: 'Sample',
            maritalStatus: 'Sample',
            phone: 'Sample Data',
            email: 'Sample Data',
            address: 'Sample Data',
            remarks: 'Sample',
            knownAllergies: 'Sample Data',
        },]


        const csv = ParseCsv.unparse(data);

        const downloadSampleData = () => {
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'sample_data.csv';
          link.click();
        };

    return (

        <div className=" m-2 bg-white border">
            <div className="px-4 py-1.5 flex  bg-white justify-between  border-b ">
                <h2 className="text-[17px] ">Patient</h2>

                <div className="flex  w-fit items-center  bg-blue-400 rounded-sm px-2   gap-2 hover:bg-btn-hover active:bg-gray-600 cursor-pointer text-white " onClick={downloadSampleData}>

                    <FaDownload className=" text-xs " />
                    <p className="text-[13px]">Download Sample Data</p>

                </div>
            </div>




            <div className="mx-4 pb-5 mb-4 text-[13px]  border-b border-gray-200  mt-6">
                <p>1. Your CSV data should be in the format below. The first line of your CSV file should be the column headers as in the table example. Also make sure that your file is UTF-8 to avoid unnecessary encoding problems.</p>
                <p>
                    2. For patient "Gender" use Male, Female value.
                </p>

                <p>3. For patient "Blood Group" use O+, A+, B+, AB+, O-, A-, B-, AB- value.</p>

                <p>
                    4. For Age column "Age (year)" and "Age (month)" make sure that is numbers only.
                </p>

                <p>
                    5. For patient "Marital Status" user Single, Married, Widowed, Separated, Not Specified value.
                </p>

            </div>

            <div className=" w-full overflow-y-hidden overflow-x-scroll">
                <table className="table-auto m-2 ">
                    <thead className="border-b-2 text-gray-800">
                        <tr className=" text-left">

                            <th >
                                <div className="mx-4 my-2 w-fit font-semibold text-sm ">
                                    <p className="text-red-600 text-right ">*</p>
                                    <p>Parent</p>   </div></th>

                            <th className="px-4 py-2 font-semibold text-sm ">Guardian</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Gender</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Age (Year)</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Age (Month)</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Blood Group</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Marital Status</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Phone</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Email</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Address</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Remarks</th>
                            <th className="px-4 py-2 font-semibold text-sm ">Known Allergies</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {data.map((item) => (
                            <tr key={item.name} className="border-b">
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.guardian}</td>
                                <td className="px-4 py-2">{item.gender}</td>
                                <td className="px-4 py-2">{item.ageYear}</td>
                                <td className="px-4 py-2">{item.ageMonth}</td>
                                <td className="px-4 py-2">{item.bloodGroup}</td>
                                <td className="px-4 py-2">{item.maritalStatus}</td>
                                <td className="px-4 py-2">{item.phone}</td>
                                <td className="px-4 py-2">{item.email}</td>
                                <td className="px-4 py-2">{item.address}</td>
                                <td className="px-4 py-2">{item.remarks}</td>
                                <td className="px-4 py-2">{item.knownAllergies}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <div className="flex flex-col justify-end m-4 gap-1">
                    <div className="flex gap-1">
                        <p className="text-[13px] font-semibold">Select CSV File </p>
                        <p className="text-red-500">*</p></div>
                    <div className="flex gap-1 md:justify-between max-md:flex-col cursor-pointer ">

                        <div className="max-md:w-full border flex items-center gap-1 py-1 justify-center  w-[500px] text-gray-500  ">
                            <FaCloudUploadAlt />
                            <input type='file' id='file' className='hidden' />
                            <label htmlFor='file' className="text-sm">
                                Drop a file here or click
                            </label>
                        </div>

                        <div className="flex items-center text-sm  gap-1 w-fit bg-blue-400 font-semibold text-white px-3 py-0.5 rounded-sm hover:bg-btn-hover cursor-pointer self-end max-md:mt-8">
                            <FaUpload />
                            <p >Import</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ImportPatent;