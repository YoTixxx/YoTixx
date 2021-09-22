import "./Footer.scss";
import twitter from "../../../images/twitter.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"


const Footer = () =>{
    return(
<section className="">
    <footer className="footer">
        <div className="footer__top"></div>
        <div className="footer__bottom">
            <p>YoTixx</p>
            <p>© 2021 YoTixx. All rights reserved.</p>
            <div className="footer__bottom__images">
               <img src={facebook} alt="social media logo" className="footer-social-media"/> 
               <img src={instagram} alt="social media logo" className="footer-social-media"/> 
               <img src={twitter} alt="social media logo" className="footer-social-media"/> 

            </div>
        </div>

    </footer>
</section>
    )
}

export default Footer