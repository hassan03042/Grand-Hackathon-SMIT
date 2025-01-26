import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

const WorkItem = ({ href, category, img, title, onImageClick }) => {
  return (
    <Link href="/" className="group">
      <div
        className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden
        bg-[#f4f4f4]"
      >
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>
        <div
          className="w-full h-full cursor-pointer"
          onClick={() => onImageClick(img)} // Trigger the modal on image click
        >
          <Image
            src={img}
            alt={title}
            fill
            priority
            quality={100}
            className=" group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
        </div>
        <button
          className="bg-blue-600 text-white rounded-full w-[48px] h-[48px] flex items-center justify-center
         -rotate-45 group-hover:rotate-0 transition-all duration-500"
        >
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
