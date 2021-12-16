import React from "react";
import ServicePage from "../../components/ServicePage";
import service_provide from "../../public/service_provide.png";
import hire_me_img from "../../public/service_hire_me.png";

const Index = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const long_text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit uthabitant eget ut nunc. Consequat quis senectus praesent vitae,nibh sit faucibus massa. Integer blandit quisque rutrum quismauris blandit amet. Et, mus fames fringilla nisi. Sit etiamegestas posuere id enim quis leo. Tortor consectetur egestasdapibus non.";
  const ServicePageData = [
    {
      PageHeading: "Service",
      heading: "What I do",
      content: { heading: text, body: long_text },
    },
    {
      heading: "Do you want to renovate your house or office ?",
      content: long_text,
      image: hire_me_img,
    },
    {
      heading: "What I provide",
      content: [
        { heading: "Service 1", body: long_text, image: service_provide },
        { heading: "Service 2", body: long_text, image: service_provide },
        { heading: "Service 3", body: long_text, image: service_provide },
        { heading: "Service 4", body: long_text, image: service_provide },
        { heading: "Service 5", body: long_text, image: service_provide },
        { heading: "Service 6", body: long_text, image: service_provide },
      ],
    },
  ];

  return (
    <div>
      <ServicePage data={ServicePageData} />
    </div>
  );
};

export default Index;
