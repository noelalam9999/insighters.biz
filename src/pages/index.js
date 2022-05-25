import React from "react";
import AboutUs1 from "../components/About-us1";
import BlogsTwoColumnSlider from "../components/Blogs-two-column-slider";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import IntroWithSlider1 from "../components/Intro-with-slider1";
import Navbar from "../components/MainNavbar";
import Numbers1 from "../components/Numbers";
import Services1 from "../components/Services1";
import SkillsCircle from "../components/Skills-circle";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import Works1Slider from "../components/Works1-slider";
import LightTheme from "../layouts/Light";
import appData from "../data/app.json";
import BlcSec from "../components/MainBlc-sec";
import NumbersWithVideo from "../components/MainNumbers-with-video";
import PortfolioCustomColumn from "../components/MainPortfolio-custom-column";
import ContactWithMap from "../components/Contact-with-map";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
     <BlcSec/>
     <NumbersWithVideo/>
     <PortfolioCustomColumn column={3} filterPosition="left"/>
        <CallToAction theme="light" />
        <div className="map" id="ieatmaps">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9325327810957!2d90.36525411498135!3d23.749785184589676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb6c1c2fd6ecbd9c!2sINSIGHTERS!5e0!3m2!1sen!2sbd!4v1649399808012!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Homepage1;
