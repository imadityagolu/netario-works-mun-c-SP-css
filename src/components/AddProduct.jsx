import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { IoMdArrowRoundBack, IoIosCheckmarkCircle, IoIosArrowBack, IoIosArrowForward, IoMdBarcode, IoIosRadioButtonOff, IoIosClose } from "react-icons/io";
import { MdImageSearch } from "react-icons/md";
import { BsStars } from "react-icons/bs";

function AddProduct() {

  const [currentStep, setCurrentStep] = useState(1);

  // Toggle for Advance section
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  // Toggle for Price Include GST
  const [isToggled2, setIsToggled2] = useState(false);
  const handleToggle2 = () => {
    setIsToggled2(!isToggled2);
  };

  // Toggle states for variant buttons
  const variantButtons = useMemo(() => [
  "Color",
  "Size",
  "Expire",
  "Material",
  "Model",
  "Weight",
  "Skin Type",
  "Packing Type",
  "Flavour",
  "Gender",
], []);
  const [variantToggles, setVariantToggles] = useState(
    variantButtons.reduce((acc, button) => ({ ...acc, [button]: false }), {})
  );

  // Set Color as active by default when entering step 4
  useEffect(() => {
    if (currentStep === 4) {
      setVariantToggles(
        variantButtons.reduce(
          (acc, button) => ({ ...acc, [button]: button === "Color" }),
          {}
        )
      );
    }
  }, [currentStep, variantButtons]);

  // Toggle handler for variant buttons (exclusive toggling)
  const toggleVariantContent = (button) => {
    setVariantToggles(
      variantButtons.reduce(
        (acc, btn) => ({ ...acc, [btn]: btn === button ? !variantToggles[button] : false }),
        {}
      )
    );
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Render the appropriate section based on currentStep
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="overflow-auto h-[603px]">
            <div>
              {/* General Information heading */}
              <div className="mt-5 pl-5">
                <h1 className="flex text-xl gap-2 items-center ml-2">
                  <IoMdArrowRoundBack className="flex items-center text-2xl" />
                  Add New Products
                </h1>
              </div>

              {/* Tools */}
              <div className="mt-5 mb-10">

                {/* Progress bar */}
                <div className="px-50 flex justify-center">
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="w-110 text-center ml-15">
                  <b>General Information</b>
                  <p className="text-sm text-gray-500">
                    Basic info + Categories + Supplier + Inventory + Product Type
                  </p>
                </div>

                {/* Form */}
                <div className="mt-5 px-30">
                  <div className="border-1 border-gray-200 rounded-xl bg-white px-20">

                    {/* Item Type */}
                    <div className="flex gap-1 mt-5">
                      <h1>Item Type</h1>
                      <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                    </div>

                    {/* items button */}
                    <div className="flex gap-5">
                      <div>
                        <input type="radio" id="goods" name="goods" value="goods" /> Goods
                      </div>
                      <div>
                        <input type="radio" id="services" name="goods" value="services" /> Services
                      </div>
                    </div>

                    {/* Product Name and SKU */}
                    <div className="flex mt-5 justify-between gap-5">
                      <div>
                        <label>Product Name</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter New Product name"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-90"
                        />
                      </div>
                      <div>
                        <label>SKU</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter SKU"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-90"
                        />
                      </div>
                    </div>

                    {/* Barcode */}
                    <div className="flex mt-5 justify-between gap-5">
                      <div>
                        <label>Barcode</label>
                        <br />
                        <div className="flex border-1 border-gray-200 rounded-md text-left gap-2 w-90 items-center">
                          <input
                            type="text"
                            placeholder="Enter 12 Digit Code"
                            className="px-3 py-1 text-left w-80"
                          />
                          <IoMdBarcode className="text-xl" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-end">
                          <label className="text-right text-blue-500">Generate Barcode</label>
                        </div>
                        <div className="flex border-1 border-gray-200 rounded-md text-left gap-2 w-90 items-center">
                          <input
                            type="text"
                            placeholder="Enter 12 Digit Code"
                            className="px-3 py-1 text-left w-80"
                          />
                          <IoMdBarcode className="text-xl" />
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="flex mt-5 justify-between gap-5">
                      <div>
                        <label>Category</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                      <div>
                        <label>Sub Category</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Brand - manufacturer */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <label>Brand/Manufacturer</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Product Type */}
                    <div className="flex gap-1 mt-5 justify-between w-60">
                      <h1>Product Type</h1>
                      <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                    </div>

                    {/* product button */}
                    <div className="flex gap-5">
                      <div>
                        <input type="radio" id="simple" name="type" value="simple" /> Simple
                      </div>
                      <div>
                        <input type="radio" id="variant" name="type" value="variant" /> Variant
                      </div>
                      <div>
                        <input type="radio" id="bundle" name="type" value="bundle" /> Bundle
                      </div>
                    </div>

                    {/* Select Supplier */}
                    <div className="flex mt-5 justify-between gap-5">
                      <div>
                        <label>Select Supplier</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                      <div>
                        <label>Supplier SKU</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Warehouse */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <label>Warehouse/Location</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Advance */}
                    <div className="mt-5 items-center mb-5">

                      {/* advance toggling */}
                      <div className="flex gap-1 items-center">
                        <h1>Advance</h1>
                        <label className="items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={isToggled}
                            onChange={handleToggle}
                          />
                          <div className="relative w-8 h-5 bg-gray-300 rounded-full transition-all duration-400">
                            <div
                              className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow transition-transform duration-400 ${
                                isToggled ? "translate-x-3" : ""
                              }`}
                            ></div>
                          </div>
                        </label>
                      </div>

                      {isToggled && (
                        <div className="mt-5">

                          {/* Lead Time */}
                          <div className="flex mt-5 justify-between gap-5">
                            <div>
                              <div className="flex justify-between w-90">
                                <label>Lead Time</label>
                                <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                              </div>
                              <select
                                name="category"
                                id="category"
                                className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                              >
                                <option value="">Select Category</option>
                              </select>
                            </div>
                            <div>
                              <div className="flex justify-between w-90">
                                <label>Recorder Level</label>
                                <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                              </div>
                              <select
                                name="category"
                                id="category"
                                className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                              >
                                <option value="">Select Category</option>
                              </select>
                            </div>
                          </div>

                          {/* Initial Stock */}
                          <div className="flex mt-5 gap-5">

                            {/* initial stock quantity*/}
                            <div>
                              <label>Initial Stock Quantity</label>
                              <br />
                              <select
                                name="category"
                                id="category"
                                className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                              >
                                <option value="">Select Category</option>
                              </select>
                            </div>

                            {/* Track */}
                            <div className="ml-17">
                              <div className="flex justify-between w-50">
                                <h1>Track</h1>
                                <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                              </div>
                              <div className="flex justify-around w-50">
                                <div className="flex gap-5 w-50">
                                  <div>
                                    <input type="radio" id="serialno" name="track" value="serialno"/> Serial No.
                                  </div>
                                  <div>
                                    <input type="radio" id="batchno" name="track" value="batchno"/> Batch No.
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Status */}
                            <div className="ml-7">
                              <div className="flex justify-between w-30">
                                <h1>Status</h1>
                                <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                              </div>
                              <div className="flex justify-around w-30">
                                <div className="flex gap-5 w-30">
                                  <div>
                                    <input type="checkbox" id="returnable" name="status" value="returnable"/> Returnable
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="overflow-auto h-[603px]">
            <div>

              {/* Pricing & Tax heading */}
              <div className="mt-5 pl-5">
                <h1 className="flex text-xl gap-2 items-center ml-2">
                  <IoMdArrowRoundBack className="flex items-center text-2xl" />
                  Pricing & Tax
                </h1>
              </div>

              {/* Tools */}
              <div className="mt-5 mb-10">

                {/* Progress bar */}
                <div className="px-50 flex justify-center">
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosRadioButtonOff className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="w-100 text-center ml-72">
                  <b>Pricing & Tax</b>
                  <p className="text-sm text-gray-500">All Price and tax-related</p>
                </div>

                {/* Form */}
                <div className="mt-5 px-30">
                  <div className="border-1 border-gray-200 rounded-xl bg-white px-20">
                    {/* Purchase Price */}
                    <div className="flex mt-10 justify-between">
                      <div>
                        <label>Purchase Price</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter New Product name"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-90"
                        />
                      </div>
                      <div>
                        <label>Selling Price</label>
                        <br />
                        <input
                          type="text"
                          placeholder="Enter SKU"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-90"
                        />
                      </div>
                    </div>

                    {/* Wholesale */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <label>Wholesale Price / Bulk Price</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <label>Quantity</label>
                        <br />
                        <input
                          type="text"
                          placeholder="In no."
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-90"
                        />
                      </div>
                      <div>
                        <label>Unit</label>
                        <br />
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* Discount Price */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <div className="flex justify-between">
                          <label>Discount Price</label>
                          <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter New Product name"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-90"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label>Discount Period</label>
                          <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                        </div>
                        <div className="flex gap-4">
                          <input
                            type="date"
                            placeholder="From"
                            className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-45"
                          />
                          <input
                            type="date"
                            placeholder="To"
                            className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-40"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Tax Rate */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <div className="flex justify-between">
                          <label>Tax Rate</label>
                          <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                        </div>
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-90"
                        >
                          <option value="">Select Category</option>
                        </select>
                      </div>
                    </div>

                    {/* HSN / SAC */}
                    <div className="flex mt-5 justify-between">
                      <div>
                        <div className="flex justify-between">
                          <label>HSN / SAC</label>
                          <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                        </div>
                        <select
                          name="category"
                          id="category"
                          className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-45"
                        >
                          <option value="" className="text-gray-200">
                            HSN Code
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Price Include GST */}
                    <div className="mt-5 items-center mb-5">
                      <div className="flex gap-1 items-center">
                        <h1>Price Include GST</h1>
                        <label className="items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={isToggled2}
                            onChange={handleToggle2}
                          />
                          <div className="relative w-8 h-5 bg-gray-300 rounded-full transition-all duration-400">
                            <div
                              className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow transition-transform duration-400 ${
                                isToggled2 ? "translate-x-3" : ""
                              }`}
                            ></div>
                          </div>
                        </label>
                      </div>

                      {isToggled2 && (
                        <div className="flex mt-5 justify-between">
                          <div>
                            <div className="flex justify-between">
                              <label>GST Rate</label>
                              <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                            </div>
                            <select
                              name="category"
                              id="category"
                              className="border-1 border-gray-200 rounded-md px-1 py-1 text-left w-45"
                            >
                              <option value="" className="text-gray-200">
                                0%
                              </option>
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="overflow-auto h-[603px]">
            <div>
              {/* Description & Media heading */}
              <div className="mt-5 pl-5">
                <h1 className="flex text-xl gap-2 items-center ml-2">
                  <IoMdArrowRoundBack className="flex items-center text-2xl" />
                  Description & Media
                </h1>
              </div>

              {/* Tools */}
              <div className="mt-5 mb-10">
                {/* Progress bar */}
                <div className="px-50 flex justify-center">
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosRadioButtonOff className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="w-110 text-center ml-121">
                  <b>Description & Media</b>
                  <p className="text-sm text-gray-500">Image + Description + Documents + SEO</p>
                </div>

                {/* Form top */}
                <div className="mt-5 px-30">
                  <div className="border-1 border-gray-200 rounded-xl bg-white px-20 pb-10">
                    {/* Description box */}
                    <div>
                      <div className="flex justify-between mt-10">
                        <label>Description</label>
                        <p className="border-1 border-gray-200 text-gray-300 rounded-xl px-1">?</p>
                      </div>
                      <textarea
                        placeholder="Write description about products..."
                        className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-full h-20"
                      />
                    </div>

                    {/* Image box */}
                    <div className="mt-5 border-2 border-dashed border-gray-200 rounded-md py-10">
                      <div className="flex justify-center items-center w-full">
                        <MdImageSearch className="text-blue-500 text-6xl" />
                      </div>
                      <div className="flex justify-center items-center w-full ml-10">
                        <label>Drag your image here, or </label>
                        <input type="file" placeholder="browse" className="text-blue-500" />
                      </div>
                      <div className="flex justify-center items-center w-full">
                        <label className="text-gray-300">Support JPEG, PNG, JPG</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form bottom */}
                <div className="mt-5 px-30">
                  <div className="border-1 border-gray-200 rounded-xl bg-white px-20 pb-10">
                    {/*SEO Meta Title */}
                    <div className="flex mt-10 justify-between">
                      <div>
                        <div className="flex justify-between">
                          <label>SEO Meta Title</label>
                          <p className="border-1 border-gray-200 rounded-xl px-1">?</p>
                        </div>
                        <input
                          type="text"
                          placeholder="Add Title"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-70"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <label>SEO Meta Description</label>
                          <p className="border-1 border-gray-200 rounded-xl px-1">?</p>
                        </div>
                        <input
                          type="text"
                          placeholder="Write description"
                          className="border-1 border-gray-200 rounded-md px-3 py-1 text-left w-120"
                        />
                      </div>
                    </div>

                    {/* AI Keywords */}
                    <div className="mt-5 border-1 border-gray-200 rounded-md py-2 px-3 bg-blue-100">
                      <div className="w-full flex">
                        <BsStars className="text-blue-500 text-xl" />
                        <p>AI Keywords</p>
                      </div>
                      <div className="w-full">
                        <label className="text-gray-400 text-sm">
                          Based on your input data we've identified 5 keywords that may be a good fit
                          for your product.
                        </label>
                      </div>
                      <div className="flex gap-2 overflow-scroll overflow-y-hidden overflow-x-hidden mt-1 w-full">
                        <div>
                          <div className="flex place-content-center items-center gap-1 border-1 border-gray-300 rounded-2xl px-2 bg-white">
                            <IoIosCheckmarkCircle /> Fittings <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="flex place-content-center items-center gap-1 border-1 border-gray-300 rounded-2xl px-2 bg-blue-500 text-white">
                            <IoIosCheckmarkCircle className="text-white" /> Hinges{" "}
                            <IoIosClose className="text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="flex place-content-center items-center gap-1 border-1 border-gray-300 rounded-2xl px-2 bg-white w-55">
                            <IoIosCheckmarkCircle /> Construction hardware <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="flex place-content-center items-center gap-1 border-1 border-gray-300 rounded-2xl px-2 bg-white w-50">
                            <IoIosCheckmarkCircle /> Door and Windows <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="flex place-content-center items-center gap-1 border-1 border-gray-300 rounded-2xl px-2 bg-white">
                            <IoIosCheckmarkCircle /> Buildings <IoIosClose />
                          </div>
                        </div>
                        <div>
                          <div className="flex place-content-center items-center gap-1 border-1 border-gray-300 rounded-2xl px-2 bg-white">
                            <IoIosCheckmarkCircle /> Blocks <IoIosClose />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Type Keywords"
                          className="border-1 border-gray-300 rounded-md px-3 py-1 text-left w-full bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="overflow-auto h-[603px]">
            <div>
              {/* Variants Heading */}
              <div className="mt-5 pl-5">
                <h1 className="flex text-xl gap-2 items-center">
                  <IoMdArrowRoundBack className="flex items-center text-2xl" />
                  Variants
                </h1>
              </div>

              {/* Tools */}
              <div className="mt-5 mb-10">
                {/* Progress bar */}
                <div className="px-50 flex justify-center">
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosCheckmarkCircle className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                    <button className="border-1 w-50"></button>
                  </div>
                  <div className="flex items-center">
                    <IoIosRadioButtonOff className="text-white border-1 border-green-400 rounded-xl bg-green-500" />
                  </div>
                </div>

                {/* Details of progress bar */}
                <div className="w-110 text-center ml-173">
                  <b>Variants</b>
                  <p className="text-sm text-gray-500">Product Type & Variants</p>
                </div>

                {/* Form */}
                <div className="mt-5 px-30">
                  {/* Buttons */}
                  <div className="flex">
                    {variantButtons.map((button, index) => (
                      <button
                        key={button}
                        className={`border-1 no-border-bottom border-gray-400 px-1 ${
                          index === 0 ? "rounded-tl-lg" : ""
                        } ${variantToggles[button] ? "border-1 border-white bg-white text-black no-bottom-border" : "bg-gray-300 text-gray-600"}`}
                        onClick={() => toggleVariantContent(button)}
                      >
                        {button}
                      </button>
                    ))}
                    <button className="border-1 border-gray-400 px-1 rounded-tr-lg">
                      <p className="text-blue-500">+ Add More</p>
                    </button>
                  </div>

                  {/* Button Content */}
                  <div className="bg-white px-15 py-5 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                    {variantButtons.map((button) =>
                      variantToggles[button] ? (
                        <div key={button} className="mt-5">
                          Select {button}
                          <div className="mt-2 px-5">
                            <select
                              name={`variant-${button.toLowerCase()}`}
                              id={`variant-${button.toLowerCase()}`}
                              className="border-1 border-gray-200 rounded-md px-1 py-2 text-left w-full"
                            >
                              <option value="">Select {button}</option>
                            </select>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* stepping */}
      {renderStep()}

      {/* Buttons */}
      <div className="flex gap-3 justify-center py-3 bg-gray-100 border-1 border-gray-300">
        {currentStep === 1 ? (
          <Link
            to="/Inventory"
            className="border-1 border-blue-600 px-5 py-2 bg-white text-blue-600 rounded-lg flex items-center gap-1"
          >
            <IoIosArrowBack className="text-xl" /> Previous
          </Link>
        ) : (
          <button
            className="border-1 border-blue-600 px-5 py-2 bg-white text-blue-600 rounded-lg flex items-center gap-1"
            onClick={handlePrevious}
          >
            <IoIosArrowBack className="text-xl" /> Previous
          </button>
        )}

        <button className="border-1 border-blue-600 px-5 py-2 bg-white text-blue-600 rounded-lg">
          Save as draft
        </button>
        <button className="border-1 border-blue-600 px-5 py-2 text-white bg-blue-600 rounded-lg">
          Save
        </button>

        {currentStep < 4 && (
          <button
            className="border-1 border-blue-600 px-4 py-2 bg-white text-blue-600 rounded-lg flex items-center gap-1"
            onClick={handleNext}
          >
            Next <IoIosArrowForward className="text-xl" />
          </button>
        )}
      </div>

    </>
  );
}

export default AddProduct;