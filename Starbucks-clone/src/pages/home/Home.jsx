import { Navbar } from "../../components/extends/navbar/Navbar"
import { Footer } from "../../components/extends/footer/Footer"
import { HomeContainerCard } from "../../models/HomeContainer/HomeContainerCard"

export const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="h-266">
        <div className="flex justify-center">
          <HomeContainerCard
            image = "https://djftrby1k8irl.cloudfront.net/s3fs-public/2025-12%2FBanner%20Red%20Velvet.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
            text = "¡Ho - Ho - Hola Red Velvet!"
            textcolor = "#fff"
            backgroundcolor="#dc3545"
          />
        </div>
        <div className="mt-15 flex justify-center">
          <HomeContainerCard
            image = "https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2F5%20Banner%20Reclutamiento%20704x600%20copy_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max"
            text = "Unite a algo más grande"
            textcolor = "#00754a"
            backgroundcolor="#d8ebe5"
            isReversed={true}
          />
        </div>
      </main>
      <Footer/>
    </>

  )
}