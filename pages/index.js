import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/HomePage";

const data = {
  hero: {
    greeting: "Hello,",
    name: "I&apos;m Ivan Smith",
    profession: "Professional renovator",
    intro:
      "Hey guys, have a look at my work and designs on my website.<br />Don&apos;t forget to look into my previous projects.",
    button1: "Hire me",
    button2: "My work",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  about: {
    heading: "About me",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit uthabitant eget ut nunc. Consequat quis senectus praesent vitae, nibhsit faucibus massa. Integer blandit quisque rutrum quis maurisblandit amet. Et, mus fames fringilla nisi. Sit etiam egestasposuere id enim quis leo. Tortor consectetur egestas dapibus non. Midiam etiam nunc ornare dui, vel odio. Placerat ultricies nisl risusrisus malesuada in massa fringilla amet. Diam risus mi, ut et,luctus risus lorem ac. Sapien purus varius semper morbi auctor atnon a. Hendrerit morbi at est commodo neque rutrum ssa. Morbi tortorlectus ellentesque a amet. Fames leo fames feugiat bibendum felisaugue est. Felis sem tristique.",
  },
  service: {
    heading: "Things I do",
    services: [
      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisrutrum viverra bibendum fringilla sed dolor. Neque portaelementum erat vitae cursus at. Volutpat,",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisrutrum viverra bibendum fringilla sed dolor. Neque portaelementum erat vitae cursus at. Volutpat,",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisrutrum viverra bibendum fringilla sed dolor. Neque portaelementum erat vitae cursus at. Volutpat,",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisrutrum viverra bibendum fringilla sed dolor. Neque portaelementum erat vitae cursus at. Volutpat,",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Service 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisrutrum viverra bibendum fringilla sed dolor. Neque portaelementum erat vitae cursus at. Volutpat,",
      },
    ],
  },
  gallery: {
    webView: [
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
    mobileView: [
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "4",
        row_start: "1",
        row_end: "6",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "4",
        col_end: "6",
        row_start: "1",
        row_end: "4",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "4",
        col_end: "6",
        row_start: "4",
        row_end: "6",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "6",
        row_start: "6",
        row_end: "10",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "3",
        row_start: "10",
        row_end: "13",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "3",
        row_start: "13",
        row_end: "15",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "3",
        col_end: "6",
        row_start: "10",
        row_end: "15",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "6",
        row_start: "15",
        row_end: "19",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "4",
        row_start: "19",
        row_end: "24",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "4",
        col_end: "6",
        row_start: "19",
        row_end: "22",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "4",
        col_end: "6",
        row_start: "22",
        row_end: "24",
      },
      {
        url: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=",
        col_start: "1",
        col_end: "6",
        row_start: "24",
        row_end: "28",
      },
    ],
  },
  testimonial: {
    heading: "Testimonials",
    testimonies: [
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
};

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | RENGEB</title>
      </Head>
      <HomePage data={data} />
    </Fragment>
  );
};

export default Home;

// export async function getStaticProps() {
//   return {
//     props: data,
//   };
// }
