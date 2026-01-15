import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ data, baseUrl }) => {
  const title = data.title || data.name || "Sin título";
  const image = data.image || "https://placehold.co/150";

    return(
      <Link to="" className="flex flex-col cursor-pointer group">
        <div className="product-image-container mt-5 flex justify-center">
          <img 
              src={data.image} 
              alt={data.title} 
              className="product-image bg-[#1e3932] rounded-full p-4 w-36 h-36 object-cover transition-transform duration-300 group-hover:scale-110" 
          />
        </div>

        <div className="item-title-container text-center mt-4">
          <span className="item-title font-bold text-[16px] md:text-[18px]">
              {title}
          </span>
        </div>
      </Link>      
    )
};