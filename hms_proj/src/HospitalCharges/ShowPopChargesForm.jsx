/* eslint-disable react/prop-types */

import { ImCross } from "react-icons/im";


function ShowPopAddEditForm({ setIsShowForm, heading,data }) {




    return (

        <div className="fixed inset-0 flex items-top justify-center z-50 ">
        <div className="absolute inset-0 bg-black opacity-50 min-h-screen"></div>

        <div className="relative bg-white shadow-lg z-10 max-sm:w-[94%] max-md:w-[80%] md:w-[900px] h-fit mt-5 rounded-sm overflow-y-auto max-h-[90vh]">

                <div className="flex bg-blue-400 text-white  p-2 text-lg font-semibold justify-between items-center"><p >{ heading}</p><ImCross className="text-xs  right-4 top-4 hover:text-gray-600 cursor-pointer" onClick={() => setIsShowForm((pre) => !pre)} /></div>


                <form className="px-5 py-2 flex flex-col gap-3 ">

                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
                        <div className="flex flex-col ">
                            <label htmlFor="bedType" className="text-sm flex font-semibold">
                                Charge Type <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="bedType" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                <option>Select</option>
                                <option>Producers</option>
                                <option>Investigations</option>
                                <option>Supplier</option>
                                <option>Operation theatre</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="bedType" className="text-sm flex font-semibold">
                                Charge Category <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <select name="bedType" className="w-full outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm">
                                {/* <option>Loading...</option> */}
                                <option>Select</option>
                                <option>New Charge</option>

                            </select>
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="title" className="text-sm flex font-semibold">
                                Code <p className="text-red-500 pl-1 pb-1"> *</p>
                            </label>
                            <input type="text" name='title'  className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                        </div>

                    </div>



                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2">


                        <div>
                            <div className="flex flex-col ">
                                <label htmlFor="title" className="text-sm flex font-semibold">
                                    Standard Charge ($)<p className="text-red-500 pl-1 pb-1"> *</p>
                                </label>
                                <input type="text" name='title'  className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                            </div>



                            <div className="flex flex-col gap-0.5">
                                <label htmlFor="title" className="text-sm flex font-semibold">
                                    Description <p className="text-red-500 pl-1 pb-1"> *</p>
                                </label>
                                <textarea type="text" name='description'  className="outline-none border border-gray-300 focus:border-blue-400 pl-2 p-1 text-sm" />
                            </div>




                        </div>

                        <div className="flex flex-col gap-0.5 ">
                            <div className="flex  justify-between">    <h2 className="text-sm flex font-semibold">
                                Scheduled Charges For TPA <p className="text-red-500 pl-1 pb-1"> *</p>
                            </h2>

                                <p className="text-white  rounded border border-black bg-gray-500 text-xs font-bold self-center p-0.5 px-1 hover:bg-yellow-500 cursor-pointer">Apply to all</p>
                            </div>

                            <div className="flex gap-3 flex-col border items-end py-3 px-3">

                                <div className="flex gap-3 ">
                                    <label htmlFor="name1" className="text-sm ">
                                    piyansh
                                    </label>
                                    <input type="text" name='name1' className="outline-none border-b border-gray-300 focus:border-blue-400  pb-1 text-sm text-right " />
                                </div>
                                <div className="flex gap-3 ">
                                    <label htmlFor="name1" className="text-sm ">
                                    depeek
                                    </label>
                                    <input type="text" name='name1' className="outline-none border-b border-gray-300 focus:border-blue-400  pb-1 text-sm text-right" />
                                </div>


                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-400  w-fit  self-end px-3 text-white hover:bg-blue-800 py-0.5 rounded-sm mb-4">Save</button>
                </form>


            </div>
        </div>



    )
}

export default ShowPopAddEditForm;