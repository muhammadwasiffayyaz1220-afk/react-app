import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Categories from './pages/Categories'
import ShopCategory from './pages/ShopCategory'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import BestSellers from './pages/BestSellers'
import NewArrivals from './pages/NewArrivals'
import Faqs from './pages/Faqs'
import OrderProcess from './pages/OrderProcess'
import PolicyPage from './pages/PolicyPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="categories" element={<Categories />} />
        <Route path="shop/:main" element={<ShopCategory />} />
        <Route path="shop/:main/:mid" element={<ShopCategory />} />
        <Route path="shop/:main/:mid/:leaf" element={<ShopCategory />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="best-sellers" element={<BestSellers />} />
        <Route path="new-arrivals" element={<NewArrivals />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="order-process" element={<OrderProcess />} />
        <Route path="privacy-policy" element={<PolicyPage kind="privacy" />} />
        <Route path="terms-of-service" element={<PolicyPage kind="terms" />} />
        <Route path="shipping-policy" element={<PolicyPage kind="shipping" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
