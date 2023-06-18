
import { RouterProvider } from "react-router-dom"
// import { Footer, Navbar } from "./components"
import { APP_ROUTER } from "./routes"
import { Footer } from "./components"



export const App = () =>{
  return (
    <>    
      <section className="container">
        <RouterProvider router={APP_ROUTER} />
      </section>
      <Footer/>
    </>
  )
}