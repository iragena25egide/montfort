import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Message from './message';
import Experience from './experience';
import Gallery from './gallery';
import Footer from './footer';
import GalleryPage from './galleryPage';
import ContactUs from './contactUs';
import AboutUs from './aboutUs';
import History from './history';
import MissionVision from './values';
import Staff from './staff';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
        <Header />
        <Home />
        <Message />
        <Experience />
        <Gallery />
        <Footer />
        </>
      }/>
       <Route path='/gallery' element={
        <>
        <Header />
        <GalleryPage />
        <Footer />
        </>
      }/>
       <Route path='/about-us' element={
        <>
        <Header />
        <AboutUs />
        <Footer />
        </>
      }/>
       <Route path='/contact-us' element={
        <>
        <Header />
        <ContactUs />
        <Footer />
        </>
      }/>
       <Route path='/staff' element={
        <>
        <Header />
       <Staff />
        <Footer />
        </>
      }/>
       <Route path='/mission-vision' element={
        <>
        <Header />
        <MissionVision />
        <Footer />
        </>
      }/>
       <Route path='/history' element={
        <>
        <Header />
       <History />
        <Footer />
        </>
      }/>
  
    </Routes>
    </BrowserRouter>
  )
}

export default App
