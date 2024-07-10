/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from "react";
import { ImCross } from "react-icons/im";

function ShowPopCharegeCategoryForm({setIsShowForm,heading}) {





    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
 

    return (

        <div className="fixed inset-0 flex items-top justify-center z-50 ">
            <div className="absolute inset-0 bg-black opacity-50 "></div>

            <div className="bg-white  shadow-lg z-10 max-md:w-[90%] max-xs:w-[90%] md:w-[40%]  h-fit mt-5 rounded-sm ">

                <div className="flex bg-blue-400 text-white justify-between items-center p-2 text-lg font-bold "><p >{heading}</p><ImCross className="text-xs  right-4 top-4 hover:text-gray-600 cursor-pointer" onClick={() => setIsShowForm((pre) => !pre)} /></div>
                <form className="px-5 py-2 flex flex-col gap-3 ">

                    <div className="flex flex-col ">
                        <label htmlFor="title" className="text-sm flex font-semibold">
                            Name <p className="text-red-500 pl-1 pb-1"> *</p>
                        </label>
                        <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                    </div>

                    
          
                  

                <div className="flex flex-col gap-0.5">
                        <label htmlFor="title" className="text-sm flex font-semibold">
                            Description <p className="text-red-500 pl-1 pb-1"> *</p>
                        </label>
                        <textarea type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                    </div>

                 
                    <div className="flex flex-col ">
                            <label htmlFor="bedType" className="text-sm flex font-semibold">
                                Charge Type <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="bedType" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option >Select</option>
                                <option>Producers</option>
                                <option>Investigations</option>
                                <option>Supplier</option>
                                <option>Operation theatre</option>
                                <option>Other</option>
                            </select>
                        </div>
             

                    <button className="bg-blue-400  w-fit  self-end px-3 text-white hover:bg-blue-800 py-0.5 rounded-sm mb-4">Save</button>
                </form>


            </div>
        </div>



    )
}

export default  ShowPopCharegeCategoryForm;