import React from "react";

interface DropdownItemProps {
  label: string;
  icon: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, icon }) => {
  return (
    <button
      type="button"
      className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
    >
      <i className={`${icon} mr-2`}></i>
      {label}
    </button>
  );
};

export default DropdownItem;
