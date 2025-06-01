import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

interface BreadcrumbItem {
  label: string;
  to: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = '/' }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2 text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 select-none">{separator}</span>}
            {index === items.length - 1 ? (
              <span className="font-semibold text-black" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="hover:underline hover:text-blue-600 text-black border-2 border-black px-3 py-1 bg-yellow-200 hover:bg-yellow-300 active:bg-orange-400 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
