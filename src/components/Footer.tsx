
import styled from 'styled-components'  
const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
         <div className="row">
         <div className="col-md-3 col-sm-6">
            <h4>Links</h4>
            <ul className="list-unstyled  text-decoration:none">
                <li><a href="/">Home</a></li>
                <li><a href="/cources">Cources</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
         </div>
         <div className="col-md-3 col-sm-6">
            <h4>EduWorld</h4>
            <ul className="list-unstyled">
                <li>Support</li>
                <li>FeedBack</li>
                <li>Contact</li>
            </ul>
         </div>
         <div className="col-md-3 col-sm-6">
            <h4>Contact</h4>
            <ul className="list-unstyled">
                <li>eduworld@gmail.com</li>
                <li>BTM Layout 2nd stage</li>
                <li>Bengaluru</li>
            </ul>
         </div>
         </div>
      
        <div className="footer-bottom">
          <p className="te  xt-xs-center ">
            &copy;{new Date().getFullYear()} Eduworld | All rights reserved
          </p>
        </div>
        </div>
        </div>
     
    </FooterContainer>
  )
}
export default Footer;

  const FooterContainer =styled.footer`

  .footer-middle{
    background:var(--mainDark);
    padding-top:3rem;
    color:white; 
  }
  .footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
  } 
  ul li a{
    color: var(--mainGrey);
    text-decoration: none;
  }
  ul li a:hover{
    color:var(--mainLightGrey); 
   
  }
  `;