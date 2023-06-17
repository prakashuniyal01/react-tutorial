
import { RouterProvider } from "react-router-dom"
import { Footer, Navbar } from "./components"
import { APP_ROUTER } from "./routes"



export const App = () =>{
  return (
    <>    
      <Navbar/>
      <section className="container">
        <RouterProvider router={APP_ROUTER} />
      </section>
      <Footer/>
    </>
  )
}