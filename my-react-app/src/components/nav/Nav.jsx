import {useState, useEffect} from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50);
    }

    if (scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  return (
    <div className='NavWrapper'>
        <div className='container'>
            <div className={`UpperNav-item ${isSticky ? 'hide-upper' : ''}`}>
               <div className='price-section'>
                 <li>NSE ₹1,441.60 (-0.50%)</li>
                 <li> BSE ₹1,439.60 (-0.63%)</li>
               </div>
             <div className='NavItem-Section'>
               <li><a>eB2B</a><i className="fas fa-chevron-down" style={{fontSize: '12px'}}></i></li>
               <li><a>Fraud Alert</a></li>
               <li><a>Contact Us</a></li>
             </div>
            </div>

             <div className='marginBottom'></div>

            <div className={`MainNav ${isSticky ? 'sticky' : ''}`}>
              <ul>
                <li className='nav-item-dropdown'>
                  <a>About</a>
                  <i className="fas fa-chevron-down"></i>
                  <div className='d-content'>
                     <div id='child-content'>
                        <div className='child-c-1'>
                         <span>About</span>
                         <a>Our History</a>
                         <a>Founder Chairman</a>
                         <a>Chairman & Managing Director</a>
                         <a>Board of Directors</a>
                         <a>Board of Committees</a>
                         <span>Awards</span>
                       </div>
                       <div className='child-c-2'>
                         <span>Our Impact</span>
                         <a>Corporate Social Responsibility</a>
                         <a>RF Founder-Chairperson</a>
                         <a>Reliance Foundation</a>
                         <span>Products & Brands</span>
                       </div>
                       <div className='child-c-3'>
                         <span>Innovation</span>
                         <a>Research & Technology Development</a>
                         <a>JioGenNext</a>
                         <a>Manufacturing Locations</a>
                       </div>
                     </div>
                  </div>
                </li>

                <li className='nav-item-dropdown'>
                 <a>Business</a>
                 <i className="fas fa-chevron-down"></i>
                   <div className='d-content'>
                     <div id='child-content-2'>
                        <div className='child-c-1'>
                         <span>Our Businesses</span> <br/>
                         <span>Energy</span><br/>
                         <a>Oil aand Gas Exploration & Production</a>
                         <a>Refining & Marketing</a> <br />
                         <span>Petrochemicals</span> <br/>
                         <a>Textiles</a>
                         <a>Polymers</a>
                         <a>Fibre Intermediates</a>
                         <a>Aromatics</a>
                         <a>Elastomers</a>
                         <a>Reliance Composites Solutions</a>
                       </div>
                       <div className='child-c-2'>
                         <span>Retail</span>
                         <a>Investor Relations</a> <br/>
                         <span>Digital Services Jio</span>
                         <a>Investor Relations</a><br/>
                         <span>New Energy &7 New Materials</span><br/>
                         <a>Reliance Bioenergy</a><br/>
                         <span>Media & Entertainment</span>
                       </div>
                     </div>
                  </div>
                 </li>


                <li><a>Sustainability</a> <i className="fas fa-chevron-down"></i></li>
                <li><a>Investors</a> <i className="fas fa-chevron-down"></i></li>
                <li><a>Careers</a> <i className="fas fa-chevron-down"></i></li>
                <li><a>New & Media</a> <i className="fas fa-chevron-down"></i></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav