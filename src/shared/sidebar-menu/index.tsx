// components/SidebarMenu.tsx
import React from "react";

interface MenuItem {
  code: string;
  label: string;
}

interface SidebarMenuProps {
  items: MenuItem[];
  activeItem: string;
  onChange: (code: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  activeItem,
  onChange,
}) => {
  return (
    <div className="w-64 bg-blue-100 p-4 shadow-md">
      <ul className="space-y-1">
        {items.map(({ code, label }) => (
          <li key={code}>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                activeItem === code
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => onChange(code)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
