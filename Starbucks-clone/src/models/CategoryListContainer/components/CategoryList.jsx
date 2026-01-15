import { ProductCard } from "../../ProductCard/ProductCard";

export const CategoryList = ({ items, baseUrl }) => {
  if (!items) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
      {items.map((item, i) => (
        <ProductCard 
            key={i} 
            data={item} 
            baseUrl={baseUrl} 
        />
      ))}
    </div>
  );
};