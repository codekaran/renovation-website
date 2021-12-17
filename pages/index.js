import React from "react";
import HomePage from "../components/HomePage";
import about_me from "../public/about_me.png";
import service_1 from "../public/service_1.png";
import service_2 from "../public/service_2.png";
import service_3 from "../public/service_3.png";
import service_4 from "../public/service_4.png";

const HomePageData = [
  {
    greeting: "Hello,",
    name: "I'm Ivan Smith",
    profession: "Professional renovator",
    intro:
      "Hey guys, have a look at my work and designs on my website. Don't forget to look into my previous projects",
    button: {
      hire_me: {
        icon: "",
        name: "Hire me",
      },
      my_work: {
        icon: "",
        name: "My work",
      },
    },
  },
  {
    heading: "About me",
    src: about_me,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut    habitant eget ut nunc. Consequat quis senectus praesent vitae, nibh sit faucibus massa. Integer blandit quisque rutrum quis mauris    blandit amet. Et, mus fames fringilla nisi. Sit etiam egestasposuere id enim quis leo. Tortor consectetur egestas dapibus non. Mi    diam etiam nunc ornare dui, vel odio. Placerat ultricies nisl risusrisus malesuada in massa fringilla amet. Diam risus mi, ut et,    luctus risus lorem ac. Sapien purus varius semper morbi auctor atnon a. Hendrerit morbi at est commodo neque rutrum massa. Morbi    tortor lectus pellentesque a amet. Fames leo fames feugiat bibendumfelis augue est. Felis sem tristique.",
  },
  {
    heading: "Things I do",
    services: [
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
    ],
  },
  {
    heading: "Work I have done",
    galleryData: [
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
    ],
  },
  {
    heading: "Testimonials",
    reviews: [
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
    ],
  },
];

const Home = () => {
  return (
    <div>
      <HomePage data={HomePageData} />
    </div>
  );
};
export default Home;
