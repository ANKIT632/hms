import React from 'react'

function NotificationSetting() {
  const data = [{}, {}, {},{},{},{}];

  return (
    <div className='flex-[0.85] h-fit bg-white border border-gray-300 rounded-sm'>

      <h2 className='pl-2 pt-3 pb-1 text-lg border-b border-gray-300'>Notification Setting</h2>
      <div className='p-2'>
        <table className='w-full'>
          <thead className='border-b-2 border-gray-100'>
            <tr>
              <th className='pt-2 pb-1 md:pr-3 text-left text-sm font-medium  '>Event</th>
              <th className='px-3 pt-2 pb-1 md:pr-3 text-left text-sm font-medium  '>	Option</th>
              <th className='px-3 pt-2 pb-1 text-left text-sm font-medium  '>Sample Message</th>
            </tr>
          </thead>
          <tbody className='bg-white  '>
            { data?.map((data,idx) =>{ return(
              <tr key={idx} className='border-b '>

                <td className='  py-2 text-sm  md:pr-3 align-top'>OPD Patient Registration</td>

                <td className='  px-3 py-2  text-sm md:flex md:gap-2 md:pr-3 align-top'>
                <div className=''>
                  <div className='flex gap-1 '>
                    <input type='checkbox' />
                    <label>Email</label>
                  </div>
                  <div className='flex gap-1'>
                    <input type='checkbox' />
                    <label>SMS</label>
                  </div>
                  </div> 
                </td>

                <td className='px-3 py-2 text-sm align-top'>Dear Edward Thomas your OPD registration is successful at Smart Hospital with Patient Id: 4612 and OPD No: 54545</td>
              </tr>
            )})}


          </tbody>
        </table>
        
        <div className='flex justify-end  mt-3'>
          <div className='  px-3 py-0.5 bg-blue-500 hover:bg-blue-800 w-fit text-white rounded-sm cursor-pointer active:bg-blue-950'>save</div>
          </div>
        
      </div>
    </div>
  )
}

export default NotificationSetting;