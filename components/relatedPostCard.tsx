import React from "react";
import Image from "next/image";

type RelatedPostCardProps = {
  imageUrl: string;
  heading: string;
  description: string;
};

const relatedPostCard: React.FC<RelatedPostCardProps> = ({
  imageUrl,
  heading,
  description,
}) => {
  return (
    <div className="flex flex-col border rounded-3xl overflow-hidden font-sans hover:shadow-md">
      <Image
        className="w-full flex-1"
        src={imageUrl}
        alt={heading}
        width={400}
        height={225}
      />
      <div className="pt-6 px-6">
        <h2 className="text-2xl mb-2">{heading}</h2>
        <p className="text-neutralGray h-16">{description}</p>
      </div>
      <div className="p-6 self-end">
        <svg
          className="w-6 h-6 text-blue-700 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </div>
    </div>
  );
};

export default relatedPostCard;
