
function NavProfile() {
    return (
        <div className='flex flex-col gap-5 '>

            {/* box-1 */}
            <div className='border rounded border-gray-300 '>
                <ul className='p-2'>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Phone</p> <p className="text-blue-400"></p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Emergency Contact Number</p> <p className="text-blue-400"></p></li>

                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Email</p> <p className="text-blue-400">{"webseeder@admin.com"}</p></li>

                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p >Gender</p> <p className="text-blue-400">Male</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Blood Group</p> <p className="text-blue-400">{ }</p></li>

                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Date Of Birth</p><p className="text-blue-400">	01-01-1970</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Marital Status</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Father Name</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Mother Name</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Qualification</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Work Experience</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Specialization</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] mb-2 py-1  hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Note</p> <p className="text-blue-400">{ }</p></li>

                </ul>
            </div>

            {/* box-2 */}

            <div className='border rounded border-gray-300 pb-2'>
                <h3 className='bg-slate-100 p-1.5 font-semibold border-b border-gray-300'>Address</h3>

                <ul className='px-2 py-1'>

                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                        Current Address</p> <p className="text-blue-400">{ }</p></li>


                    <li className='text-[13px] mb-2 py-1  hover:bg-gray-100 pl-1 grid grid-cols-2'><p>Permanent Address</p> <p className="text-blue-400">{ }</p></li>

                </ul>

            </div>

            {/* box-3 */}

            <div className='border rounded border-gray-300'>
                <h3 className='bg-slate-100 p-1.5 font-semibold border-b border-gray-300'>Bank Account Details</h3>

                <ul className='px-2 pb-4'>


                    <li className='text-[13px] border-b mt-1 py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                        Account Title</p> <p className="text-blue-400">{ }</p></li>



                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                        Bank Name</p> <p className="text-blue-400">{ }</p></li>




                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                        Bank Branch Name</p> <p className="text-blue-400">{ }</p></li>



                    <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                        Bank Account Number</p> <p className="text-blue-400">{ }</p></li>

                    <li className='text-[13px] mb-2 py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                        IFSC Code</p> <p className="text-blue-400">{ }</p></li>



                </ul>

            </div>


            {/* Box 4 */}

            <div className='border border-gray-300 rounded '>
                <h3 className='bg-slate-100 p-1.5 font-semibold border-b border-gray-300'>Social Media Link</h3>

                <ul className='px-2 '>

              

                        <li className='text-[13px] border-b mt-1 py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>       Facebook URL</p> <p className="text-blue-400">{ }</p></li>


                        <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                            Twitter URL</p> <p className="text-blue-400">{ }</p></li>


                        <li className='text-[13px] border-b py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                            Linkedin URL</p> <p className="text-blue-400">{ }</p></li>

                        <li className='text-[13px] mb-3 py-1 hover:bg-gray-100 pl-1 grid grid-cols-2'><p>
                            IFSC Code</p> <p className="text-blue-400">{ }</p></li>
               



                </ul>

            </div>

        </div>
    )
}

export default NavProfile;