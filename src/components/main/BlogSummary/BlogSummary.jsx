import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import Blogs from "../../../Data/Blogs";
import spin from "../../../assets/Spinner-1.2s-499px.gif";

const BlogSummary = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState({});
  const url = window.location.href;

  useEffect(() => {
    const current_blog = Blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  return (
    <div className="mt-20">
      <h1 className="text-center text-4xl">{blog.title}</h1>
      <div className="text-center my-8">
        <LazyLoadImage
          placeholderSrc={spin}
          src={blog.img}
          alt="Blog Main Image"
          className="main_blog_image"
        />
      </div>
      <div className="flex items-center justify-between flex-wrap mt-16 mb-4">
        <span>
          <strong className="text-primary">Srikant Sahu</strong>
        </span>
        <span>
          <strong className="text-primary">{blog.date}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 lg:col-span-3">
          {blog?.description?.split("\n").map((data, index) => (
            <React.Fragment key={index + 1}>
              <p className="text-neutral text-justify">{data}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="md:col-span-2 lg:col-span-1 px-4 py-6 rounded shadow-xl">
          <div>
            <h4 className="text-lg font-medium mb-3">Other :</h4>
            <p className="flex items-center gap-3">
              <span>
                <SiInstagram />
              </span>
              <a
                href={blog.insagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-600 hover:underline flex items-center"
              >
                <span>Instagram</span>
                <FiExternalLink />
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <SiLinkedin />
              </span>
              <a
                href={blog.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-600 hover:underline flex items-center"
              >
                <span>LinkedIn</span> <FiExternalLink />
              </a>
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral my-6" />
          <h4 className="text-lg font-medium mb-3">Share :</h4>
          <div className="flex items-center gap-4 flex-wrap">
            <EmailShareButton url={url} title="Srikant Sahu ">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url} title="Srikant Sahu ">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Srikant Sahu ">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title="Srikant Sahu ">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title="Srikant Sahu ">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>
          <div className="w-full h-[1px] bg-neutral my-6" />
          <h4 className="text-lg font-medium mb-3">Tags: </h4>
          <div>
            {blog?.tags?.map((tag) => (
              <button
                key={tag}
                className="bg-gray-300 text-white bg-opacity-40 px-2 py-0 m-1 rounded"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSummary;
