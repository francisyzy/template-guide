import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa";

const BackButton = ({ href, children = "Back" }) => {
  return (
    <Link href={href}>
      <a className="inline-flex items-baseline px-sm py-xs border rounded-md space-x-base text-gray-500 text-sm">
        <FaChevronLeft className="h-3"></FaChevronLeft>
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default BackButton;
