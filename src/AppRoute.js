import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WishList from "./pages/WishList"
import Checkout from "./pages/CheckOut"
import NotFound from "./pages/NotFound"



const AppRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wish-list" element={<WishList/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/#" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRoute