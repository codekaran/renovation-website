import React from "react";
import Image from "next/image";
import HiremeSection from "./HiremeSection";
import serviceHero from "../public/service-hero.png";
const url =
  "https://images.unsplash.com/photo-1618832515490-e181c4794a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVub3ZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const ServicePage = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-heading">Service</div>
        <div className="section">
          <div className="heading">What I do</div>
          <div className="content">
            <div className="sub-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
              habitant eget ut nunc. Consequat quis senectus praesent vitae,
              nibh sit faucibus massa. Integer blandit quisque rutrum quis
              mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam
              egestas posuere id enim quis leo. Tortor consectetur egestas
              dapibus non.
            </div>
          </div>
          <div className="hero-image">
            <Image src={serviceHero} alt="service-hero" />
          </div>
        </div>
      </div>

      {/* Hire me section */}
      <HiremeSection />

      {/* Service Section */}
      <div className="service-section">
        <div className="heading">What I provide</div>
        <div className="content">
          <div className="card">
            <div className="float">1</div>
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-body">
              <div className="sub-heading">Service 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
                habitant eget ut nunc. Consequat quis senectus praesent vitae,
                nibh sit faucibus massa. Integer blandit quisque rutrum quis
                mauris blandit amet
              </div>
            </div>
          </div>
          <div className="card">
            <div className="float">2</div>
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-body">
              <div className="sub-heading">Service 2</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
                habitant eget ut nunc. Consequat quis senectus praesent vitae,
                nibh sit faucibus massa. Integer blandit quisque rutrum quis
                mauris blandit amet
              </div>
            </div>
          </div>
          <div className="card">
            <div className="float">3</div>
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-body">
              <div className="sub-heading">Service 3</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
                habitant eget ut nunc. Consequat quis senectus praesent vitae,
                nibh sit faucibus massa. Integer blandit quisque rutrum quis
                mauris blandit amet
              </div>
            </div>
          </div>
          <div className="card">
            <div className="float">4</div>
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url + ")" }}
            />
            <div className="card-body">
              <div className="sub-heading">Service 4</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
                habitant eget ut nunc. Consequat quis senectus praesent vitae,
                nibh sit faucibus massa. Integer blandit quisque rutrum quis
                mauris blandit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
