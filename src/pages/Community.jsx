import React from "react";
import { GoPlus } from "react-icons/go";


function Community() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] box-border my-6  bg-white">
        <div className="w-[100%] px-6 text-2xl  text-richblack-600">
          <ul className="flex gap-7">
            <li>
              <a href="#">Hello world</a>
            </li>
            <li>
              <a href="#">Hello world</a>
            </li>
            <li>
              <a href="#">Hello world</a>
            </li>
            <li>
              <a href="#">Hello world</a>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          {/* for search filters */}
          <div className="text-richblack-600">
            <ul className="flex gap-10">
              <li>
                <a href="#">Hot</a>
              </li>
              <li>
                <a href="#">Most Votes</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div class="w-92">
            <div class="relative w-full min-w-[200px] h-10 flex gap-4">
              <input
                class="outline outline-1 rounded-xl px-4 outline-gray-100"
                placeholder="search topics"
              />
              <button class="bg-[#777] hover:bg-[#888] text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                New
                <GoPlus />
              </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
