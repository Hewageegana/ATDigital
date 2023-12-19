import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/main.css'

import computerIcon from "../Assets/images/computerIcon.png"
import searchIcon from "../Assets/images/searchIcon.png"
import homeIMG from "../Assets/images/home.png"

export default function home() {
  return (
    <div className="home">

      <div className='homeIMG'>
        <img className="homeImg" src={homeIMG} alt='home' />
      </div>
      <div className='container'>
        <div className="main-card">
          <h3 className='cardContent'>We crush your<br /> competitors, goals, and<br /> sales records - without<br /> the B.S.</h3>
          <button className='cardButton'>GET FREE CONSULTATION</button>
        </div>
      </div>


      <div className='cards'>
        <div className='container'>
          <div className='crd'>
            <div className='cardImage'>
              <img src={computerIcon} alt='com' />
            </div>
            <div className='cardBody'>
              <div className='cardHeader'>
                <h2>Web & Mobile App Development</h2>
              </div>
              <div className='cardContain'>
                <h5>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which
                  tailor content and engagement methods to respond to different intents shown by your potential customers
                  who interact with your business online.</h5>
                <button className='cardBtn'>LEARN MORE</button>
              </div>
            </div>
          </div>

          <div className='crd'>
            <div className='cardBody'>
              <div className='cardHeader'>
                <h2>Digital Strategy Consulting</h2>
              </div>
              <div className='cardContain'>
                <h5>Your digital strategy should complement the overall marketing strategy of the company. In online marketing,
                   each component will never work in isolation and every business needs a different mix. We provide a clear concept
                  and strategic overview to find the most efficient model for your business..</h5>
                <button className='cardBtn'>LEARN MORE</button>
              </div>
            </div>
            <div className='cardImage'>
              <img src={searchIcon} alt='com' />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

