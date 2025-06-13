import { Link } from "react-router-dom";
import { IoMdSettings, IoIosNotifications, IoIosCube, IoIosArrowForward, IoIosArrowDown, IoIosShare, IoIosAddCircle, IoMdArrowRoundBack } from "react-icons/io";

function Inventory() {
    return(
        <>
               
          {/*search bar & add product button*/}
          <div className='flex justify-around mt-5 px-5'>

            <input type="text" placeholder="🔍search..." className='border-1 border-gray-300 rounded-lg bg-gray-100 w-[75%] p-2'/>

            <button><IoIosShare  className='bg-blue-500 rounded-lg p-1 text-5xl text-gray-200' /></button>

            <Link to="/AddProduct" className='flex items-center bg-blue-500 px-4 py-1 rounded-lg gap-1'>
              <IoIosAddCircle  className='bg-blue-500 rounded-sm p-1 text-4xl text-gray-200' />
               <span className='text-white'>Add Product</span>
            </Link>

          </div>

          {/* back & all product heading */}
          <div className='mt-4 ml-2 px-5'>
          <h1 className='flex text-xl gap-2 items-center'>
            <IoMdArrowRoundBack className='flex items-center text-2xl' />
            All Products (981)</h1>
          </div>

          {/* tools */}
          <div className="mt-5 pl-7">

            {/* 1st row*/}
            <div className="flex gap-5">

              {/*left boxes*/}
              <div className="">

                {/*first 3*/}
                <div className="flex gap-5">
                <button className="border-1 border-gray-200 rounded-xl bg-white px-30 py-15"></button>
                <button className="border-1 border-gray-200 rounded-xl bg-white px-30 py-15"></button>
                <button className="border-1 border-gray-200 rounded-xl bg-white px-30 py-15"></button>
                </div>

                {/*second 3*/}
                <div className="flex gap-5 mt-5">
                <button className="border-1 border-gray-200 rounded-xl bg-white px-30 py-15"></button>
                <button className="border-1 border-gray-200 rounded-xl bg-white px-30 py-15"></button>
                <button className="border-1 border-gray-200 rounded-xl bg-white px-30 py-15"></button>
                </div>

              </div>

              {/*right box*/}
              <div className="">
                <button className="border-1 border-gray-200 rounded-xl bg-white px-47 py-32"></button>
              </div>

            </div>

            {/* 2nd row*/}
            <div className="mt-5">
                <button className="border-1 border-gray-200 w-[97%] rounded-xl bg-white px-30 py-30"></button>
            </div>
            
          </div>

        </>
    );
}

export default Inventory;