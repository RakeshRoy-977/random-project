import React from "react";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center mt-8 mb-4">
            Beaumont Vision 2035: Downtown Plan
          </h1>

          {/* Video */}
          <div className="flex justify-center">
            <video
              autoPlay
              controls
              className="shadow-lg rounded-lg"
              width="900"
              height="550"
            >
              <source
                src="Beaumont Downtown Plan_ Draft Video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Vision 2035: Get to Know the New Downtown Beaumont
          </h2>

          <div className="text-center w-[70vw] m-auto">
            <p className="text-lg font-medium mb-4">
              We Hope You’ll Be Spending a Lot of Time Here
            </p>
            <p className="">
              The City of Beaumont is completely reimagining downtown, but we
              need your help. This is your chance to help design a dream city
              with us. As a collaborative effort, it’s no small undertaking.
              While we want to see the vision come to fruition quickly (trust
              us, we’re as antsy as you are), but are taking the necessary steps
              not to rush things. We know we only have one chance to do it right
              so let’s make this an amazing place we’re excited about together.
              The City is doing its due diligence. We’re planning – extensively.
              Each and every step of the process has had a feasibility study,
              consultants, and experts weigh in. We’re looking at what other
              cities are doing while maintaining what makes us unique. We’re
              striving to be competitive in today's market while planning for
              the future. We're ready to share our collective vision with you
              but also want to know what you want to see. What would make you
              want to live, play, or work downtown? What would make you proud to
              call this home? This is your place to engage with us, provide
              feedback, and get updates on everything going on as we grow
              Beaumont – together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
