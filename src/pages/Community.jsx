import React from "react";
import { GoPlus } from "react-icons/go";


function Community() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%] box-border my-6  bg-white">
        <div className="w-[100%] px-6 text-2xl  text-richblack-600">
          <ul className="flex gap-7">
            <li>
              <a href="#">All categories</a>
            </li>
            <li>
              <a href="#">Programming</a>
            </li>
            <li>
              <a href="#">Java</a>
            </li>
            <li>
              <a href="#">Data Strutures</a>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          {/* for search filters */}
          <div className="text-richblack-600">
            <ul className="flex gap-10">
              <li>
                <a href="#">Most Upvote</a>
              </li>
              <li>
                <a href="#">Most Discuss</a>
              </li>
              {/* <li>
                <a href="#"></a>
              </li> */}
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

 {/* this is the discuss section to fetch data dynamiclly */}
<div className="flex container border-b border-blue-500 mt-5"  >
  <h3>This will add a border to the bottom of the div element. If you want to customize the border style, color, or width, you can use additional utility classes or define your own styles in your Tailwind CSS configuration.</h3>
  <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-3">Upvote</button>
  <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-2 mx-4 my-3 rounded">Reply</button>

</div>
<div className="flex container border-b border-blue-500 mt-5"  >
  <h3>This will add a border to the bottom of the div element. If you want to customize the border style, color, or width, you can use additional utility classes or define your own styles in your Tailwind CSS configuration.</h3>
  <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-3">Upvote</button>
  <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-2 mx-4 my-3 rounded">Reply</button>

</div>
<div className="flex container border-b border-blue-500 mt-5"  >
  <h3>This will add a border to the bottom of the div element. If you want to customize the border style, color, or width, you can use additional utility classes or define your own styles in your Tailwind CSS configuration.</h3>
  <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-3">Upvote</button>
  <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-2 mx-4 my-3 rounded">Reply</button>

</div>
<div className="flex container border-b border-blue-500 mt-5"  >
  <h3>This will add a border to the bottom of the div element. If you want to customize the border style, color, or width, you can use additional utility classes or define your own styles in your Tailwind CSS configuration.</h3>
  <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-3">Upvote</button>
  <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-2 mx-4 my-3 rounded">Reply</button>

</div>
<div className="flex container border-b border-blue-500 mt-5"  >
  <h3>This will add a border to the bottom of the div element. If you want to customize the border style, color, or width, you can use additional utility classes or define your own styles in your Tailwind CSS configuration.</h3>
  <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-3">Upvote</button>
  <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-2 mx-4 my-3 rounded">Reply</button>

</div>
<div className="flex container border-b border-blue-500 mt-5"  >
  <h3>This will add a border to the bottom of the div element. If you want to customize the border style, color, or width, you can use additional utility classes or define your own styles in your Tailwind CSS configuration.</h3>
  <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded my-3">Upvote</button>
  <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-2 mx-4 my-3 rounded">Reply</button>

</div>


 {/* end to this is the discuss section to fetch data dynamiclly */}

      </div>
    </div>
  );
}

export default Community;
