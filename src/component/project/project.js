import React from "react";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  return (
    <>
      <div id="Project" className="bg-[#202b35] text-white">
        {/* Project Header Text */}
        <p className="text-[25px] w-[80%] mx-auto pt-10 pb-6">
          My Some Recent Project
        </p>

        <div className="relative">
          <div className="w-[80%] mx-auto">
            {/* Project Image */}
            <img src={`/img/unsplash.jpg`} alt="project" />

            {/* Project Name & Link */}
            <div className="absolute flex flex-col items-center bottom-0 mx-auto w-[80%] bg-[#9883834a]">
              {/* Project Name */}
              <p className="">NextJs Educational Site</p>

              {/* Links github and live */}
              <div className="flex gap-6 items-center justify-center">
                {/* Github */}
                <p>
                  <BsGithub />
                </p>

                {/* Live */}
                <p>
                  <img
                    className="w-[25px]"
                    src="/img/live-icon.png"
                    alt="live"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
