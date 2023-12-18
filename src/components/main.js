import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/main.css'

import computerIcon from "../Assets/images/computerIcon.png"
import searchIcon from "../Assets/images/searchIcon.png"
import homeIMG from "../Assets/images/andy-kelly-0E_vhMVqL9g-unsplash 2.png"

export default function home() {
  return (
    <div className="home">
     <div className='homeIMG'>
      <img className="homeImg" src={homeIMG} alt='home'/>
     </div>
    </div>
  );
}

