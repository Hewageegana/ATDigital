import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/footer.css'
import logo from '../Assets/Logo/ATDigital.png'



export default function Footer() {
    return (
        <footer>
            <div className='footerContainer'>
                <div className='footerSubContainer'>
                    <div className='div1'>
                        <div className='footerLogo'>
                            <img src={logo} alt='logo' />
                            <div className='texts'><p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p></div>

                        </div>
                    </div>
                    <div className='div2'>
                        <div className='footerHead1'>
                            <h3>Our Technologies</h3>
                        </div>
                        <div className='technologyListView'>
                            <ul>
                                <li>ReactJS</li>
                                <li>Gatsby</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                                <li>GraphQL</li>
                                <li>Laravel</li>
                            </ul>
                        </div>
                    </div>
                    <div className='div3'>
                        <div className='footerHead2'>
                            <h3>Our Services</h3>
                        </div>
                        <div className='technologyListView'>
                            <ul>
                                <li>ReactJS</li>
                                <li>Gatsby</li>
                                <li>NextJS</li>
                                <li>NodeJS</li>
                                <li>GraphQL</li>
                                <li>Laravel</li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className='footerHr'>
                    <hr style={{ height: 4, backgroundColor: '#FFFFFF' }} />
                    <div className='footerTerms'><h5>Privacy Policy | Terms & Conditions</h5></div>


                </div>


            </div>

        </footer>
    );
}

