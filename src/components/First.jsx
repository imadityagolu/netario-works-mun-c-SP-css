import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Porfile01 from '../images/profile.jpg';
import { IoMdSettings, IoIosNotifications, IoIosCube, IoIosArrowForward, IoIosArrowDown, IoIosShare, IoIosAddCircle, IoMdArrowRoundBack } from "react-icons/io";

function First() {

 const [isOpen1, setIsOpen1] = useState(false);
  const toggleContent1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
    <div className='fixed w-full'>

      {/*header*/}
      <div className='bg-gray-100 flex justify-between p-2'>

        {/*company name*/}
        <div>
        <h1 className='text-blue-500 font-bold'>MUN-C™</h1>
        </div>

        {/*options*/}
        <div className='flex gap-2'>
          <button><IoMdSettings className='bg-gray-200 rounded-sm p-1 text-2xl text-blue-500' /></button>
          <button><IoIosNotifications className='bg-gray-200 rounded-sm p-1 text-2xl text-blue-500' /></button>
          <button><img src={Porfile01} alt="profile image" className='w-6 rounded-sm'/></button>
        </div>

      </div>

      <hr className='text-gray-300'></hr>

      {/*pannel*/}
      <div className='bg-gray-300 w-[100%] h-[670px] flex'>

        {/*sidepannel*/}
        <div className='bg-gray-100 w-[20%] border-1 border-gray-300 h-[670px] pt-10 pl-8 pr-6'>

          {/*dashboard*/}
          <div className='flex justify-between'>
            <Link to="/" className='flex text-xl pb-3 gap-2 text-gray-500 items-center'><IoIosCube /> Dashboard </Link> <IoIosArrowForward className="text-2xl" />
          </div>

          {/*inventory*/}
          <div className=''>
           
            <div className='flex justify-between bg-gray'>
            <Link to="/Inventory" className='flex text-xl pb-3 gap-2 text-gray-500 items-center'><IoIosCube /> Inventory </Link> 
            <button onClick={toggleContent1} className='mt-[-15px]'>
              {isOpen1 ? (
                <IoIosArrowDown className="text-2xl" />
              ):(
                <IoIosArrowForward className="text-2xl" />
              )}
            </button>
            </div>

            {isOpen1 && (
              <div>
                <div className='flex justify-between px-5 rounded-lg pt-2 bg-blue-100'>
                  <Link to="/AddProduct" className='flex text-xl pb-3 gap-2 text-gray-500'>Add Products </Link>
                </div>
                <div className='flex justify-between px-5 rounded-lg pt-2'>
                  <Link to="/AddProduct" className='flex text-xl pb-3 gap-2 text-gray-500'>Dashboard </Link>
                </div><div className='flex justify-between px-5 rounded-lg pt-2 mb-4'>
                  <Link to="/AddProduct" className='flex text-xl pb-3 gap-2 text-gray-500'>Dashboard </Link>
                </div>
              </div>
            )}
          </div>

          {/*stocks*/}
          <div className='flex justify-between'>
            <h1 className='flex text-xl pb-3 gap-2 text-gray-500  items-center'><IoIosCube /> Stocks </h1> <IoIosArrowForward className="text-2xl" />
          </div>

          {/*sales*/}
          <div className='flex justify-between'>
            <h1 className='flex text-xl pb-3 gap-2 text-gray-500 items-center'><IoIosCube /> Sales </h1> <IoIosArrowForward className="text-2xl" />
          </div>

          {/*documents*/}
          <div className='flex justify-between'>
            <h1 className='flex text-xl pb-3 gap-2 text-gray-500 items-center'><IoIosCube /> Documents </h1> <IoIosArrowForward className="text-2xl" />
          </div>

          {/*return and audit*/}
          <div className='flex justify-between'>
            <h1 className='flex text-xl pb-3 gap-2 text-gray-500 items-center'><IoIosCube /> Return & Audit </h1> <IoIosArrowForward className="text-2xl" />
          </div>

          {/*report*/}
          <div className='flex justify-between'>
            <h1 className='flex text-xl pb-3 gap-2 text-gray-500 items-center'><IoIosCube /> Report </h1> <IoIosArrowForward className="text-2xl" />
          </div>
        </div>

        {/*main screen*/}
        <div className='w-[80%] overflow-auto'>

        {/*outlet changer*/}
        <div>
          <Outlet/>
        </div>

        </div>

      </div>

    </div>
    </>
  );
}

export default First;
