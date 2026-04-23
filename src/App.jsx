import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PageLoading from './components/PageLoading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Categories = lazy(() => import('./pages/Categories'))
const ShopCategory = lazy(() => import('./pages/ShopCategory'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const BestSellers = lazy(() => import('./pages/BestSellers'))
const NewArrivals = lazy(() => import('./pages/NewArrivals'))
const Faqs = lazy(() => import('./pages/Faqs'))
const OrderProcess = lazy(() => import('./pages/OrderProcess'))
const PolicyPage = lazy(() => import('./pages/PolicyPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Suspense fallback={<PageLoading />}>
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
    </Suspense>
  )
}
