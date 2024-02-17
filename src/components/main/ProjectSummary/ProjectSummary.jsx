import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Projects from "../../../Data/Projects";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import spin from "../../../assets/Spinner-1.2s-499px.gif";

const ProjectSummary = () => {
  const { id } = useParams();
  const [project, setProject] = useState(Projects);

  useEffect(() => {
    const filtered = Projects.find((item) => item.id === parseInt(id));
    setProject(filtered);
  }, [id]);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{project.title}</h1>
      <Slider {...sliderSettings}>
        {project?.img?.map((image, index) => (
          <div key={index} className="mt-6">
            <div>
              <LazyLoadImage
                placeholderSrc={spin}
                src={image}
                className="project_image object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>

      <p className="text-neutral font-medium mt-10 mb-6">
        <span className="font-semibold text-white text-xl">Description: <br /> </span>
        {project.description}
      </p>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Features: </h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {project?.features?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Technologies: </h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {project?.technologies?.map((tech, index) => (
            <li key={index} className="text-neutral">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mt-8">
        <a href={project.liveLink} className="mr-4" target="blank">
            <PrimaryBtn>
                <span>Visit Now</span>
                <span><FaLink/></span>
            </PrimaryBtn>
        </a>
        <a href={project.codeLink} target="blank">
            <SecondaryBtn>
                <span>Source Code</span>
                <span><FaCode/></span>
            </SecondaryBtn>
        </a>

      </div>
    </div>
  );
};

export default ProjectSummary;
