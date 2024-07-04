/* eslint-disable react/prop-types */
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function PopUpAddPatientForm({setIsShowPaitentForm}) {

  const [formData, setFormData] = useState({
    name: '',
    guardianName: '',
    gender:'',
    dob:" ",
    age: '',
    bloodGroup: '',
    maritalStatus: '',
    phone: '',
    email: '',
    address: '',
    remarks: '',
    allergies: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value),
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const submitFormHandler=()=>{

  }

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50   ">
      <div className="absolute inset-0 bg-black opacity-50 "></div>

      <div className="bg-white  shadow-lg z-10 max-sm:w-[94%] max-md:w-[75%] md:w-[700px] lg:w-[850px] absolute-5 max-md:h-[99vh] overflow-y-auto">

        <div className="flex justify-between items-center px-4 bg-blue-400  h-10 text-white ">
          <p className="font-bold text-md">Add Patient</p>
          <div className="  text-xs hover:text-gray-500 cursor-pointer active:text-gray-600" onClick={()=>setIsShowPaitentForm((pre)=>!pre)}><ImCross /></div>
        </div>

        <form>
          <div className="m-2 flex flex-col gap-3">

            {/* 2.. 2..*/}
            <div className="flex max-md:flex-col gap-3 ">
              <div className="flex  flex-col flex-[0.5]">
                <label htmlFor="name" className="mb-1 font-semibold text-xs flex gap-1">
                  <p>Name</p> <p className="text-red-500">*</p>
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="pl-2  border border-gray-300 focus:border-blue-500  outline-none text-sm p-0.5" />
              </div>

              <div className="flex flex-col flex-[0.5]">
                <label htmlFor="guardianName" className="mb-1 font-semibold text-xs ">
                  Guardian Name
                </label>
                <input type="text" id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleChange} className=" pl-2 text-sm p-0.5 border border-gray-300 focus:border-blue-500  outline-none" />
              </div>
            </div>


            {/* 6..  6..*/}
            <div className="flex max-md:flex-col  gap-3  ">

              <div className="md:grid max-md:flex max-md:flex-col md:grid-cols-3 md:flex-[0.5] gap-3">

                <div className="flex flex-col ">
                  <label htmlFor="gender" className="mb-1 font-semibold text-xs ">
                    Gender
                  </label>
                  <select name="gender"
                    id="gender"
                    onChange={handleChange} className=" border border-gray-300 focus:border-blue-500  outline-none  text-sm pl-2 py-0.5" >

                    <option className="mb-1 font-semibold text-xs ">select</option>
                    <option className="mb-1 font-semibold text-xs ">male</option>
                    <option className="mb-1 font-semibold text-xs ">female</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dob" className="mb-1 font-semibold text-xs ">
                    Date Of Birth
                  </label>
                  <input type="date" id="dob" name="dob" value={formData.dob}  onChange={handleChange} className="pl-2 text-sm p-[1px] border border-gray-300 focus:border-blue-500  outline-none " />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="age" className="mb-1 font-semibold text-xs ">
                    Age
                  </label>

                  <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="pl-2 p-0.5 text-sm border border-gray-300 focus:border-blue-500  outline-none" />


                </div>
              </div>

              <div className="flex max-md:flex-col md:flex-[0.5]  gap-3 ">

                <div className="flex flex-col ">
                  <label htmlFor="bloodGroup" className="mb-1 font-semibold text-xs ">
                    Blood Group
                  </label>

                  <select onChange={handleChange} name="bloodGroup" id="bloodGroup" value={formData.bloodGroup} className=" border border-gray-300 focus:border-blue-500  outline-none mb-1 text-sm px-2 py-0.5"  >
                    <option className="mb-1 font-semibold text-xs ">Select</option>
                    <option className="mb-1 font-semibold text-xs ">O+</option>
                    <option className="mb-1 font-semibold text-xs ">A+</option>
                    <option className="mb-1 font-semibold text-xs ">B+</option>
                    <option className="mb-1 font-semibold text-xs ">AB</option>
                    <option className="mb-1 font-semibold text-xs ">O-</option>
                    <option className="mb-1 font-semibold text-xs ">A-</option>
                    <option className="mb-1 font-semibold text-xs ">B-</option>
                  </select>
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="maritalStatus" className="mb-1 font-semibold text-xs ">
                    Marital Status
                  </label>

                  <select onChange={handleChange} id="maritalStatus" name="maritalStatus" className=" md:w-[80px] border border-gray-300 focus:border-blue-500  outline-none mb-1 text-sm px-2 py-0.5  " >
                    <option className="mb-1 font-semibold text-xs ">Select</option>
                    <option className="mb-1 font-semibold text-xs ">Single</option>
                    <option className="mb-1 font-semibold text-xs ">Married</option>
                    <option className="mb-1 font-semibold text-xs ">Widowed</option>
                    <option className="mb-1 font-semibold text-xs ">Separated</option>
                    <option className="mb-1 font-semibold text-xs ">Not Specified</option>

                  </select>

                </div>

                <div className="flex flex-col cursor-pointer w-full">
                  <p htmlFor="profileImg" className="mb-1 font-semibold text-xs ">
                    Patient Photo
                  </p>
                  <div className=" border flex items-center gap-1 py-[3px] px-1 justify-center  text-gray-800 text-xs ">
                    <FaCloudUploadAlt className="text-lg text-gray-400" />
                    <label htmlFor='profileImg'>
                      Drop a file here or click
                    </label>
                    <input type='file' id='profileImg' name="profileImg" className='hidden' />
                
                  </div>

                </div>

              </div>
            </div>

            {/* 3..  3*/}

            <div className="md:flex gap-3">
              <div className="md:grid md:grid-cols-2 max-md:flex max-md:flex-col md:flex-[0.5] gap-3">
                <div className="flex flex-col ">
                  <label htmlFor="phone" className="mb-1 font-semibold text-xs ">
                    Phone
                  </label>
                  <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 focus:border-blue-500  outline-none" />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="email" className="mb-1 font-semibold text-xs ">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 focus:border-blue-500  outline-none" />
                </div>

              </div>


              <div className="flex flex-col md:flex-[0.5] max-md:mt-3">
                <label htmlFor="address" className="mb-1 font-semibold text-xs ">
                  Address
                </label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 focus:border-blue-500  outline-none" />
              </div>

            </div>

            {/* 2 1 */}
            <div className="flex max-md:flex-col gap-3">
              <div className="flex flex-col md:flex-[0.5]">
                <label htmlFor="remarks" className="mb-1 font-semibold text-xs ">
                  Remarks
                </label>
                <textarea type="text" id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} className="border border-gray-300 focus:border-blue-500  outline-none" />
              </div>

              <div className="flex flex-col  md:flex-[0.5]">
                <label htmlFor="allergies" className="mb-1 font-semibold text-xs ">
                  Any Known Allergies
                </label>
                <textarea type="text" id="allergies" name="allergies" value={formData.allergies} onChange={handleChange} className="border border-gray-300 focus:border-blue-500  outline-none" />
              </div>
            </div>

          </div>


          <div>

          </div>

          <div className="mb-3 mt-5 mx-2 flex justify-end "><button className="px-2 py-0.5 bg-blue-400 text-white text-sm rounded-sm hover:bg-blue-500" onClick={()=>submitFormHandler}>Save</button></div>

        </form>

      </div>
    </div>

  )
}

export default PopUpAddPatientForm;