import React from "react";
import Image from "next/image";

type ProductCardPops = {
  imageUrl: string;
  heading: string;
};
const productCard: React.FC<ProductCardPops> = ({ imageUrl, heading }) => {
  return (
    <div className="flex items-center justify-between border rounded-lg p-3 hover:shadow-lg">
      <div className="flex items-center">
        <Image
          className="inline-block"
          src={imageUrl}
          alt={heading}
          width={24}
          height={24}
        />
        <p className="ml-2 font-medium">{heading}</p>
      </div>
      <div>
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

export default productCard;
