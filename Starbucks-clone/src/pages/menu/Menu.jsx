import { Navbar } from "../../components/extends/navbar/Navbar"
import { Footer } from "../../components/extends/footer/Footer"
import { CategoryListContainer } from "../../models/CategoryListContainer/CategoryListContainer"

export const Menu = () => {
  return (
    <>
        <Navbar/>
        <CategoryListContainer />
        <Footer/>
    </>
  )
}