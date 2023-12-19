import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/footer.css'
import logo from '../Assets/Logo/ATDigital.png'



export default function Footer() {
  return (
    <footer>
   <div className='container'>
    <div className='div1'>
        <div className='footerLogo'>
            <img src={logo} alt='logo'/>
        </div>
    </div>
    <div className='div2'></div>
    <div className='div3'></div>
   </div>
    </footer>
  );
}

