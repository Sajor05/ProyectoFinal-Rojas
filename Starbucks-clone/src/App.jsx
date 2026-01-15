import './App.css'
import { Home } from './pages/home/Home'
import { Menu } from './pages/menu/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HandleProducts } from './pages/handleProducts/HandleProducts'
import { ItemDetailContainer } from './models/itemDetailContainer/ItemDetailContainer'
import { CategoryListContainer } from './models/CategoryListContainer/CategoryListContainer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:title' element={<ItemDetailContainer/>} />
        <Route path='/admin' element={<HandleProducts/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/menu/:category" element={<CategoryListContainer/>} />
        <Route path='/menu/:category/:subCategory' element={<CategoryListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
