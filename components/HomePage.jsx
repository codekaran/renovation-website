import React from "react";
import Image from "next/image";
import style from "./HomePage.module.css";
import about_me from "../public/about_me.png";
import service_1 from "../public/service_1.png";
import service_2 from "../public/service_2.png";
import service_3 from "../public/service_3.png";
import service_4 from "../public/service_4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const serviceData = [
  {
    img: service_1,
    name: "Service 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    img: service_2,
    name: "Service 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    img: service_3,
    name: "Service 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
  {
    img: service_4,
    name: "Service 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum viverra bibendum fringilla sed dolor. Neque porta elementum erat vitae cursus at. Volutpat,",
  },
];
const HomePage = () => {
  const AboutMeSection = () => {
    return (
      <div className={style.section}>
        <div className={style.section_heading}>About me</div>
        <div
          className={style.section_content}
          style={{
            padding: "0",
            paddingRight: "90px",
            paddingBottom: "100px",
            alignItems: "center",
          }}
        >
          <div className={style.image}>
            <Image src={about_me} alt="about_me_png" />
          </div>
          <hr className={style.verticalLine} />
          <div className={style.content_body} style={{ width: "50%" }}>
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
    );
  };
  const ThingsIDoSection = () => {
    return (
      <div
        className={style.section}
        style={{ background: "rgba(231, 223, 34, 0.1)" }}
      >
        <div className={style.section_heading}>Things I do</div>
        <div className={style.section_content} style={{ alignItems: "center" }}>
          {serviceData.map((service, key) => {
            return (
              <Card
                key={key}
                img={service.img}
                name={service.name}
                text={service.text}
              />
            );
          })}
        </div>
      </div>
    );
  };
  const Card = (props) => {
    return (
      <div className={style.card}>
        <div className={style.card_img}>
          <Image src={props.img} alt={props.name} />
        </div>
        <hr className={style.hr} />
        <div className={style.content_heading}>{props.name}</div>
        <div className={style.content_body} style={{ fontSize: "16px" }}>
          {props.text}
        </div>
      </div>
    );
  };
  const Gallery = () => {
    const imagedata = [
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
    const GalleryImage = (props) => {
      return (
        <div
          key={props.key}
          style={{
            backgroundImage: "url(" + props.url + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            gridColumnStart: props.col_start,
            gridColumnEnd: props.col_end,
            gridRowStart: props.row_start,
            gridRowEnd: props.row_end,
            border: "10px solid #ffffff",
          }}
        />
      );
    };
    return (
      <div className={style.section}>
        <div className={style.section_heading}>Work I have done</div>
        <div className={style.section_content} style={{ display: "block" }}>
          <div className={style.gallery}>
            {imagedata.map((image, key) => {
              return GalleryImage(image, key);
            })}
          </div>
        </div>
      </div>
    );
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ReviewCard = () => {
    return (
      <div className={style.review_card}>
        <div className={style.box}>
          <div className={style.user}>
            <div className={style.user_profile}></div>
            <div className={style.user_name}>Robert jr.</div>
          </div>
          <div className={style.review}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut
            habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh
            sit faucibus massa. Integer blandit quisque rutrum quis mauris
            blandit amet. Et, mus fames fringilla nisi. Sit etiam egestas
            posuere id enim quis leo. Tortor consectetur egestas dapibus non.
          </div>
        </div>
      </div>
    );
  };
  const Testimonials = () => {
    return (
      <div className={style.section}>
        <div className={style.section_heading}>
          <div style={{ display: "inline-block" }}>Testimonials</div>
          {/* If we want to add custom buttons for testimonial carousel */}
          <div className={style.carousel_buttons}>
            <div className={style.arrows}>{"<"}</div>
            <div className={style.arrows}>{">"}</div>
          </div>
        </div>
        <div className={style.section_content} style={{ display: "block" }}>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
          >
            <ReviewCard />
            <ReviewCard />
          </Carousel>
        </div>
      </div>
    );
  };
  return (
    <div>
      {AboutMeSection()}
      {ThingsIDoSection()}
      {Gallery()}
      {Testimonials()}
    </div>
  );
};

export default HomePage;
