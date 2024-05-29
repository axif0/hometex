import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";

import { TbToolsKitchen2 } from "react-icons/tb";

const KitchenDinning = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <div>
        <Link
          href="/Shop"
          className="inline-flex items-center text-black-300 hover:text-white hover:bg-black px-3 py-2 rounded-md text-sm font-medium group"
        >
          <TbToolsKitchen2 className="mr-2" />
          Kitchen | Dining 
          <button onClick={handleToggleDropdown} className="ml-2">
            <FaPlus />
          </button>
          <div
            className="w-full absolute  z-50 top-full left-0 transform rounded-md justify-center items-center p-2 group-hover:flex hidden border-teal-500"
            style={{ margin: "auto", left: 0, right: 0 }}
          >
            <div className="pl-6 justify-between bg-[#fff] text-black w-full whitespace-nowrap">
              <h5 className="text-xl">KITCHEN LINEN</h5>
              <hr className="mb-5" />
              <ul className="mb-5">
                <li className="py-1 text-gray-500">Oven Top Cover</li>
                <li className="py-1 text-gray-500">Oven Gloves</li>
                <li className="py-1 text-gray-500">Aprons</li>
                <li className="py-1 text-gray-500">Napkins</li>
              </ul>
              <hr className="mb-5" />
              <h5 className="text-xl">Dining</h5>
              <hr />
              <ul className="mb-5">
                <li className="py-1 text-gray-500">Chair Cover</li>
                <li className="py-1 text-gray-500">Fridge Top Cover</li>
                <li className="py-1 text-gray-500">Place Mat</li>
                <li className="py-1 text-gray-500">Table Cloth</li>
                <li className="py-1 text-gray-500">Table Runner</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default KitchenDinning;