import './App.css';
import MiddleSection from './components/navbar1/MiddleSection';
import Navbar from './components/navbar/Navbar';
import Ad from './components/advertisment/Ad';
import Category from './components/dropdown_btn/Category';
import Profile from './components/azuki_profile/Profile';
import Loadmore from './components/loading/Loadmore';
import Newsletter from './components/newsletr/Newsletter';
import Footer from './components/footer/Footer';
export default function App() {
  return (
    <main>
    <div className="middle-sec"><MiddleSection /> </div>
       <div className="nav-bar"><Navbar/></div>
        <Ad />
      <Ad />
       <div className="cat-sec"><Category /></div> 
       <div className="cat-sec"><Profile /></div> 
       <div className="cat-sec"><Profile /></div> 
       <div className="cat-sec"><Profile /></div> 
       <div className="cat-sec"><Profile /></div> 
       <div className="cat-sec"><Profile /></div> 
      <Loadmore />
      <Newsletter />
      <Footer />
    
    </main>
  );
}
