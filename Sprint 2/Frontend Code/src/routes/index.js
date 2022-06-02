import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainLayout from '../components/common/main-layout';
import AboutMePage from '../pages/about-me-page';
import App from '../pages/app';
import BlogPage from '../pages/blog';
import BlogDetailsPage from '../pages/blog/blog-details-page';
import BlogList from '../pages/blog/blog-list';
import ContactPage from '../pages/contact';
import GalleryPage from '../pages/gallery-page';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<App/>}/>
          <Route path="gallery" element={<GalleryPage/>}/>
          <Route path="about-me" element={<AboutMePage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="blogs" element={<BlogPage/>}>
            <Route index element={<BlogList/>}/>
            <Route path=":blogId" element={<BlogDetailsPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes