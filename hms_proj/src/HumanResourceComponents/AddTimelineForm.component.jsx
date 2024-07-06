/* eslint-disable react/prop-types */
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaCloudUploadAlt } from "react-icons/fa";

function AddTimelineForm({setIsShowForm,heading}) {


    const [title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [description, setDescription] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    return (

        <div className="fixed inset-0 flex items-top justify-center z-50 ">
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <div className="bg-white  shadow-lg z-10 max-sm:w-[94%] max-md:w-[80%] md:w-[750px] h-fit mt-5 rounded-sm ">
            <div className="flex bg-blue-400 text-white justify-center p-2 text-lg font-semibold relative"><p >{heading}</p><ImCross className="text-xs absolute right-2 hover:text-gray-600 cursor-pointer" onClick={()=>setIsShowForm((pre)=>!pre)}/></div>
                <form className="p-2 flex flex-col gap-3 ">

              <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm flex">
                        Title <p className="text-red-500 pl-1 pb-1"> *</p>
                    </label>
                    <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
             </div>


             <div className="flex flex-col">
                    <label htmlFor="data" className="text-sm flex">
                        Data <p className="text-red-500 pl-1 pb-1"> *</p>
                    </label>
                    <input type="text" name='data' value={data} onChange={e => setData(e.target.value)} className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
             </div>

             <div className="flex flex-col">
                    <label htmlFor="Description" className="text-sm pb-1">
                    Description 
                    </label>
                    <textarea type="text" name='description'  value={description} onChange={e => setDescription(e.target.value)} className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
             </div>

             
             <div >
             <p className="text-sm mb-1">Attach Document</p>
             <div className=" border flex items-center py-3  justify-center  text-gray-800 text-sm ">
             
                    <FaCloudUploadAlt className="text-lg text-gray-500" />
                    <label htmlFor='profileImg' className="text-gray-500">
                      Drop a file here or click
                    </label>
                    <input type='file' id='profileImg' name="profileImg" className='hidden' />
                
                  </div>   
               </div>

                  <div><label htmlFor="visible" className="text-sm pb-1">Visible to this person </label>
                  
                        <input type="checkbox" name="visible" checked={isVisible} onChange={e => setIsVisible(e.target.checked)} />
                        </div>

                          

                  <button  className="bg-blue-400 w-fit  self-end px-3 text-white hover:bg-blue-800 py-0.5 rounded-sm mb-3">Save</button> 
                </form>


            </div>
        </div>



    )
}

export default AddTimelineForm;