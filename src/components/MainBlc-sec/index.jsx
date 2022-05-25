import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
    <section className="blc-sec section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb10">
              <div className="sub-title">
                <h6>WHO WE ARE</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title wow words chars splitting"
                  data-splitting
                >
                 We’ve been helping brands develop and define their voice since 2017. 
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                The times may have changed, but our love for creativity and problem-solving hasn&apos;t. We’re driven by technology and innovation to ensure we fulfill our key mission of helping our clients find their successful future. Get in touch so that we can kickstart your branding today.
                </p>
              </Split>
              {/* <Split>
                <Link href="/about/about-dark">
                  <a
                    className="simple-btn custom-font mt-20 wow words chars splitting"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlcSec;
