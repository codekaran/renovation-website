import React from "react";
import Image from "next/image";
import suitcase from "../public/Suitcase.svg";
import lightbulb from "../public/Lightbulb.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const url =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60";
const url2 =
  "https://images.unsplash.com/photo-1614213951697-a45781262acf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const galleryData = [
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "1",
    col_end: "10",
    row_start: "1",
    row_end: "10",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "10",
    col_end: "15",
    row_start: "1",
    row_end: "7",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "15",
    col_end: "23",
    row_start: "1",
    row_end: "9",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "1",
    col_end: "10",
    row_start: "10",
    row_end: "15",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "10",
    col_end: "15",
    row_start: "7",
    row_end: "15",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "15",
    col_end: "23",
    row_start: "9",
    row_end: "15",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "1",
    col_end: "14",
    row_start: "15",
    row_end: "23",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "14",
    col_end: "23",
    row_start: "15",
    row_end: "22",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "1",
    col_end: "7",
    row_start: "23",
    row_end: "31",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "7",
    col_end: "14",
    row_start: "23",
    row_end: "31",
  },
  {
    url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
    col_start: "14",
    col_end: "23",
    row_start: "22",
    row_end: "31",
  },
];
const responsive = {
  web: {
    breakpoint: { max: 4000, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};
const reviews = [
  {
    url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Robert jr.",
    review_msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
  },
  {
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Michael faraday",
    review_msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
  },
  {
    url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Robert jr.",
    review_msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
  },
  {
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Michael faraday",
    review_msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
  },
  {
    url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Robert jr.",
    review_msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
  },
  {
    url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Michael faraday",
    review_msg:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas posuere id enim quis leo. Tortor consectetur egestas dapibus non.",
  },
];
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="lightbulb">
          <Image src={lightbulb} alt="lightbulb" />
        </div>
        <div className="content">
          <div className="greeting">Hello,</div>
          <div className="name">I&apos;m Ivan Smith</div>
          <div className="profession">Professional renovator</div>
          <div className="intro">
            Hey guys, have a look at my work and designs on my website.
            <br />
            Don&apos;t forget to look into my previous projects.
          </div>
          <div className="buttons">
            <div className="btn">
              <Image src={suitcase} alt="Suitcase" />
              Hire me
            </div>
            <div className="btn2">My work</div>
          </div>
        </div>
        <div
          className="hero-image bg-img"
          style={{ backgroundImage: "url(" + url + ")" }}
        />
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="heading">About me</div>
        <div className="content">
          <div
            className="image bg-img"
            style={{ backgroundImage: "url(" + url2 + ")" }}
          />
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas
            posuere id enim quis leo. Tortor consectetur egestas dapibus non. Mi
            diam etiam nunc ornare dui, vel odio. Placerat ultricies nisl risus
            risus malesuada in massa fringilla amet. Diam risus mi, ut et,
            luctus risus lorem ac. Sapien purus varius semper morbi auctor at
            non a. Hendrerit morbi at est commodo neque rutrum massa. Morbi
            tortor lectus pellentesque a amet. Fames leo fames feugiat bibendum
            felis augue est. Felis sem tristique.
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section bg-yellow">
        <div className="heading">Things I do</div>
        <div className="content">
          <div className="card">
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url2 + ")" }}
            />
            <div className="card-body">
              <div className="title">Service 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rutrum viverra bibendum fringilla sed dolor. Neque porta
                elementum erat vitae cursus at. Volutpat,
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url2 + ")" }}
            />
            <div className="card-body">
              <div className="title">Service 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rutrum viverra bibendum fringilla sed dolor. Neque porta
                elementum erat vitae cursus at. Volutpat,
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url2 + ")" }}
            />
            <div className="card-body">
              <div className="title">Service 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rutrum viverra bibendum fringilla sed dolor. Neque porta
                elementum erat vitae cursus at. Volutpat,
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url2 + ")" }}
            />
            <div className="card-body">
              <div className="title">Service 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rutrum viverra bibendum fringilla sed dolor. Neque porta
                elementum erat vitae cursus at. Volutpat,
              </div>
            </div>
          </div>
          <div className="card">
            <div
              className="image bg-img"
              style={{ backgroundImage: "url(" + url2 + ")" }}
            />
            <div className="card-body">
              <div className="title">Service 1</div>
              <div className="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rutrum viverra bibendum fringilla sed dolor. Neque porta
                elementum erat vitae cursus at. Volutpat,
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="heading">Work I have done</div>
        <div className="content">
          {galleryData.map((image, key) => {
            return (
              <div
                key={key}
                className="image bg-img"
                style={{
                  backgroundImage: "url(" + image.url + ")",
                  gridColumnStart: image.col_start,
                  gridColumnEnd: image.col_end,
                  gridRowStart: image.row_start,
                  gridRowEnd: image.row_end,
                  border: "10px solid #ffffff",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="heading">Testimonials</div>
        <div className="content">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
          >
            {reviews.map((e, key) => {
              return (
                <div className="card" key={key}>
                  <div className="box">
                    <div className="user">
                      <div
                        className="profile bg-img"
                        style={{
                          backgroundImage: "url(" + e.url + ")",
                        }}
                      ></div>
                      <div className="name">{e.name}</div>
                    </div>
                    <div className="review">{e.review_msg}</div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
