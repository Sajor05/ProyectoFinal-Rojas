import "./ItemDetailContainer.css"
import { ItemList } from "./components/ItemList"

export function ItemListContainer({category}) {
  return (
      <section className="px-88 mt-8">
        <div className="itemlist-category-title-container py-6"><span className="text-[18px] font-bold">{category}</span></div>
        <ItemList category={category}/>
      </section>
  )
}