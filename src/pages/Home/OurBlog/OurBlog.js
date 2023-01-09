import React from "react";
import AboutoOurBlog from "../../../components/AboutOurBlog/AboutoOurBlog";
import "./ourBlog.css";
import IMG1 from "../../../Assets/Ellipse 9.png";
import IMG2 from "../../../Assets/Ellipse 8.png";
import IMG3 from "../../../Assets/Ellipse 28.png";
import IMG4 from "../../../Assets/Ellipse 26.png";
import IMG5 from "../../../Assets/Ellipse 27.png";
import BlogIMG1 from "../../../Assets/Vector-4.png";
import BlogIMG2 from "../../../Assets/Group 34.png";
import BlogIMG3 from "../../../Assets/Vector-5.png";
import BlogIMG4 from "../../../Assets/Vector-6.png";
import BlogIMG5 from "../../../Assets/Vector-8.png";
import BlogIMG6 from "../../../Assets/Vector-7.png";

import ClientIMG1 from "../../../Assets/Vector-3.png";
import BlogPostTime from "../../../components/BlogPostTime/BlogPostTime";

const OurBlog = () => {
  const blogDatas = [
    {
      id: 1,
      img: BlogIMG1,
      title: `How to start a company
    formation in Dubai`,
      time: "5 Minutes",
    },
    {
      id: 2,
      img: BlogIMG1,
      title: `How to start an Offshore
      company formation in Dubai`,
      time: "5 Minutes",
    },
    {
      id: 3,
      img: BlogIMG1,
      title: `SEO Dubai: Who benefits
      the most?`,
      time: "5 Minutes",
    },
  ];

  const clientCommnetsData = [
    {
      id: 1,
      commnet: `I am very happy with them. I’ll
  continue to use their services in
  future & highly recommend them
  to anyone,`,
      name: "Muhib Abrar",
      img: ClientIMG1,
    },
    {
      id: 2,
      commnet: `Rama has a high level of integrity,
      intellect, knowledge of his
      business, resourcefulness and
      humanity,`,
      name: "Colin Saldahna",
      img: ClientIMG1,
    },
    {
      id: 3,
      commnet: `Your advise was so complete that I
      actually realized how beneficial
      this would be to my clients and my
      business.`,
      name: "Mark Swann",
      img: ClientIMG1,
    },
  ];

  return (
    <section className="blog-container">
      <div className="blog-img1">
        <img src={IMG1} alt="" />
      </div>
      <div className="blog-grid">
        {/* left content */}
        <div className="left-content">
          <AboutoOurBlog>
            Read about our blogs for more information on our processes
          </AboutoOurBlog>
          <div className="blog-img2">
            <img src={IMG2} alt="" />
          </div>
          <div className="blog-contnet">
            {blogDatas.map((blogData) => (
              <BlogPostTime key={blogData.id} blogData={blogData} />
            ))}
          </div>
          <AboutoOurBlog>
            Satidfied We are When Our Customers Are Happy
          </AboutoOurBlog>

          <div className="clinets">
            <div className="blog-img4">
              <img src={IMG4} alt="" />
            </div>
            {clientCommnetsData.map((commnetData) => (
              <div key={commnetData.id} className="client-commnet">
                <div className="clinet-info">
                  <div>
                    <div className="client-img">
                      <img src={commnetData?.img} alt="" />
                    </div>
                  </div>

                  <p className="comment-desc">
                    <span className="clone">"</span> {commnetData?.commnet}
                    <span className="clone">"</span>
                  </p>
                </div>
                <div className="commnet-text">
                  <div className="">
                    <hr className="line" />
                  </div>
                  <h4 className="clinet-name">{commnetData?.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right content */}
        <div className="right-content">
          <AboutoOurBlog>
            Get to know the whole us and more of our services
          </AboutoOurBlog>

          <div className="blog-img3">
            <img src={IMG3} alt="" />
          </div>
          <div className="service-content">
            {/* service */}
            <div className="service-info">
              <h3 className="service-title">Services</h3>
              <p className="service-desc">Products</p>
              <p className="service-desc">Solutions</p>
              <p className="service-desc">Assurance</p>
              <p className="service-desc">FAQ</p>
              <p className="service-desc">Working at Varal-Singhania</p>
            </div>
            {/* Policies */}
            <div className="service-info">
              <h3 className="service-title">Policies</h3>
              <p className="service-desc">Privacy Policy</p>
              <p className="service-desc">Terms & Conditions</p>
            </div>
            {/* About */}
            <div className="service-info">
              <h3 className="service-title">About</h3>
              <p className="service-desc">About Us</p>
              <p className="service-desc">Contact Us</p>
            </div>
            {/* Address */}
            <div className="service-info">
              <h3 className="service-title">Address</h3>
              <p className="service-desc">608 One Lake Plaza, Cluster T,</p>
              <p className="service-desc">
                Al Sarayat Street, Jumeirah Lake Towers
              </p>
              <p className="service-desc">Dubai</p>
              <p className="service-desc">United Arab Emirates</p>
              <div className="address">
                <p className="service-desc">
                  Office Hours: Sunday to Thursday 8:30 AM to 6:30 PM [GMT+4]
                </p>
                <p className="service-desc">M: +971 55 794 2016</p>
                <p className="service-desc">O: +971 4 447 2061</p>
              </div>
            </div>
            {/* Subscribe Now */}
            <div className="service-info">
              <h3 className="service-title">Subscribe Now</h3>
              <p className="service-desc">
                Sunbscribe now to receive our Newsletters about amazing
                opportunities in Dubai
              </p>
            </div>
          </div>
          <div className="subscribe-now">
            <input
              type="email"
              placeholder="Enter email address
"
            />
            <img src={BlogIMG2} alt="" />
          </div>

          {/* social */}
          <div className="social">
            <div className="social-icon">
              <img src={BlogIMG3} alt="" />
              <img src={BlogIMG4} alt="" />
              <img src={BlogIMG5} alt="" />
              <img src={BlogIMG6} alt="" />
            </div>
            <div className="blog-img5">
              <img src={IMG5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
