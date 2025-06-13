import { Link } from "react-router-dom";
import { IoMdArrowRoundBack, IoIosCheckmarkCircle, IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

function AddProduct() {
    return(
        <>

          {/* tools */}
          <div className="mt-25">

            {/* form */}
            <div className="mt-5 flex px-10 justify-center">
                <div className="border-1 border-gray-200 rounded-xl bg-white px-70 py-50 text-center">
                  <h1 className="text-gray-300">The product has been successfully added</h1>
                  <br></br>
                  <Link to="/AddProduct" className="bg-blue-600 rounded-2xl px-4 py-1 text-white">+ Add More Product</Link>
                </div>
            </div>


          </div>

        </>
    );
}

export default AddProduct;