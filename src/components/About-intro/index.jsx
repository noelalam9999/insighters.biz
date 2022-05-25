import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                At INSIGHTERS we help you define and sharpen your vision and then help you bring it to life in a way that connects emotionally with your audience. Founded in 2023, our one-stop Digital Marketing Agency helps bring brands into the spotlight
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                We’re passionate about helping you find your creative voice. We guide our clients through the minefields of modern business, helping them thrive in a fast-changing world. In so doing, we leverage each company’s unique strengths to build a personalized roadmap to success. Talk to us about what we can do for you.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
