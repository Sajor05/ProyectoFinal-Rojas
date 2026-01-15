import "./CategoryListContainer.css"
import { useParams, Link } from "react-router-dom";
import { CategoryList } from "./components/CategoryList";
import { useCategories } from "../../hooks/CategoryHook.jsx"
import { ProductCard } from "../ProductCard/ProductCard.jsx"; 
import { Navbar } from "../../components/extends/navbar/Navbar.jsx";


export function CategoryListContainer() {
  const categories = useCategories();
  const { category, subCategory } = useParams();

  if (!categories || categories.length === 0) return <div>Cargando...</div>;

  if (!category) {
    return (
      <div className="px-88">
        <header className="font-bold mt-8 px-10 md:px-20">
          <p className="text-[18px]">¡Disfrútalos!</p>
          <h1 className="text-[26.731px] leading-tight">
            Conoce nuestras bebidas y alimentos de <span className="block">temporada</span>
          </h1>
        </header>

        <div>
          {categories.map((cat, i) => (
            <section className="px-10 md:px-20 mt-8" key={i}>
              <div className=" py-6 border-b border-gray-200 mb-4">
                <span className="text-[18px] font-bold">{cat.mainCategory}</span>
              </div>
              
              <CategoryList 
                items={cat.categories} 
                baseUrl={`/menu/${cat.mainCategory}`} 
              />
            </section>
          ))}
        </div>
      </div>
    );
  }

  const selectedCategory = categories.find(c => c.mainCategory === category);
  if (!selectedCategory) return <div>Categoría principal no encontrada</div>;

  if (category && !subCategory) {
    return (
      <div className="px-10 md:px-20 mt-8">
        <div className="text-sm text-gray-500 mb-4">
            <Link to="/menu">Menú</Link> / {category}
        </div>
        <h2 className="text-[24px] font-bold mb-6">{category}</h2>
        
        <CategoryList 
            items={selectedCategory.categories} 
            baseUrl={`/menu/${category}`} 
        />
      </div>
    );
  }

  if (category && subCategory) {
    const selectedSub = selectedCategory.categories.find(
        s => s.title === subCategory
    );

    if (!selectedSub) return <div>Subcategoría no encontrada</div>;

    return (
      <div>
        <Navbar/>
        <div className="px-88">
          <div className="text-sm text-gray-500 mb-4 mt-8">
              <Link to="/menu">Menú</Link> / <Link to={`/menu/${category}`}>{category}</Link> / {subCategory}
          </div>
          <h2 className="text-[24px] font-bold mb-6">{subCategory}</h2>          
        </div>


        {selectedSub.categories && selectedSub.categories.map((group, index) => (
            <div key={index} className="mb-10 px-88">
              <div className="itemlist-category-title-container py-4">
                {group.mainCategory && (
                      <h3 className="text-[20px] font-bold">
                          {group.mainCategory}
                      </h3>
                )}                
              </div>

                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                    {group.products && group.products.map((prod, pIndex) => (
                        <ProductCard 
                            key={pIndex} 
                            data={prod} 
                            baseUrl={null} 
                        />
                    ))}
                </div>
            </div>
        ))}
      </div>
    );
  }
}