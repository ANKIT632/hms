import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { useState } from "react";
import AddTimelineForm from "./AddTimelineForm.component";



function NavTimeline() {

  const [isShowForm, setIsShowForm] = useState(false);

  const [editFormShow, setEditFormShow] = useState(false);

  const data = [{
    title: "title 1",
    description: "description 1"
  }, {
    title: "title 2",
    description: "description 2"
  },
  {
    title: "title 3",
    description: "description 3"
  }];


  return (
    <div className="w-full ">
      <div className="flex justify-end  "> <p className="bg-blue-500 p-0.5 text-sm text-white px-3 hover:bg-blue-800 rounded-sm cursor-pointer active:bg-gray-700" onClick={() => setIsShowForm((pre) => !pre)}>Add</p></div>

      {data.map((data, idx) => {
        return <div className="flex items-center" key={idx}>
          <div className=" text-white w-fit flex flex-col items-center">
            <p className="bg-blue-700 text-[10px] p-1 rounded">05-07-2024</p>
            <p className="bg-gray-400 h-4 w-1" />
            <div className="bg-blue-700 w-fit p-1.5 rounded-full">
              <FaNewspaper className=" rounded-full  " />

            </div>
            <p className="bg-gray-400 h-20 w-1" />

          </div>

          <div className="flex-1 h-20 bg-gray-100 rounded-sm border border-gray-300">
            <div className="flex justify-between p-2  border-b border-gray-300">
              <p className="text-sm text-blue-400" >{data.title}</p>
              <div className="flex gap-3 text-xs items-center ">
                <RiDeleteBin5Line className="hover:text-blue-600 cursor-pointer" title="Delete" /> <FaPencilAlt className="hover:text-blue-600 cursor-pointer" title="Edit" onClick={() => setEditFormShow((pre) => !pre)} />
              </div>
            </div>
            <p className="p-2 font-normal text-sm">{data.description}</p>
          </div>

        </div>

      })
      }

      <div className="ml-[14px] p-2 bg-gray-200 w-fit rounded-full">
        <MdOutlineAccessTime />
      </div>


      {
        isShowForm && <AddTimelineForm heading={"Add Timeline"} setIsShowForm={setIsShowForm} />
      }

      {
        editFormShow && <AddTimelineForm heading={"Edit Timeline"} setIsShowForm={setEditFormShow} />
      }
    </div>
  )
}

export default NavTimeline;