import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./components/ItemDetail";
import { useCategories } from "../../hooks/CategoryHook";
import { Navbar } from "../../components/extends/navbar/Navbar";
import { Footer } from "../../components/extends/footer/Footer";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { title } = useParams();
  
  const categoriesData = useCategories();

  useEffect(() => {
    if (categoriesData && categoriesData.length > 0) {
      setLoading(true);
      
      const found = findProductInTree(categoriesData, decodeURIComponent(title));
      
      setProduct(found);
      setLoading(false);
    }
  }, [categoriesData, title]);

  if (loading) return <div className="text-center mt-10">Cargando producto...</div>;
  if (!product) return <div className="text-center mt-10">Producto no encontrado</div>;

  return (
    <>
      <Navbar/>
      <div className="container bg-[#1e3932]">
        <ItemDetail data={product} />
      </div>
      <p className="text-center mt-5 text-[18px] font-bold">{product.description}</p>
      <Footer/> 
    </>

  );
};

const findProductInTree = (nodes, targetTitle) => {
  for (const node of nodes) {
    if (node.title === targetTitle) {
      return node;
    }
    const children = node.categories || node.subCategory || node.products || node.productsCategories;
    
    if (children && Array.isArray(children)) {
      const foundInChildren = findProductInTree(children, targetTitle);
      if (foundInChildren) return foundInChildren;
    }
  }
  return null;
};