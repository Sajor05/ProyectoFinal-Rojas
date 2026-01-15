import { useProducts } from "../../../hooks/ProductsHook.jsx";
import { ProductCard } from "../../../models/ProductCard/ProductCard.jsx"

export function ItemList({category}) {
  const products = useProducts()
  const filtredProducts = products.filter((p) => p.category.principalCategory === category)
  return (
    <div>
        <header>
            <span>{category}</span>
        </header>
        <div className="grid grid-cols-3">
            {filtredProducts.map((art,i) => (
                <ProductCard product = {art} key={i}/>
            ))}
        </div>        
    </div>

  )
}