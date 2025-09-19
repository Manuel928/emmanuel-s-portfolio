import React from "react";

const Experience = () => {
  return (
    <section className="dark:bg-[hsl(240,93%,3%)]" id="projects">
      <div className="mt-16">
        <div className="flex lg:gap-[20px] justify-end lg:p-[30px] p-[20px]">
          <div className="flex flex-col justify-center items-end gap-[10px] space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold text-2xl dark:text-white uppercase">
                ...Experience
              </h3>
              <div className="bg-blue-400 h-1"></div>
            </div>

            {/* Experience */}
            <div className="relative border-l-2 border-gray-300 dark:border-gray-600 ml-4">
              {/* Job 1 */}
              <div className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 top-0"></div>
                <h4 className="text-lg font-semibold mb-2 dark:text-white">
                  Frontend Engineer
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Ditrop Inc.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Sept 2025 - Present
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 pl-4">
                  <li>
                    Developed and maintained web applications using React and
                    Node.js.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to define project
                    requirements.
                  </li>
                  <li>
                    Implemented responsive design to enhance user experience
                    across devices.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="mb-10 ml-6">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5"></div>
                <h4 className="text-lg font-semibold mb-2 dark:text-white">
                  Frontend Engineer [Intern]
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Ditrop Inc.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  July 2025 - August 2025
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 pl-4">
                  <li>
                    Developed and maintained web applications using React and
                    Node.js.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to define project
                    requirements.
                  </li>
                  <li>
                    Implemented responsive design to enhance user experience
                    across devices.
                  </li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="mb-0 ml-6">
                <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 "></div>
                <h4 className="text-lg font-semibold mb-2 dark:text-white">
                  Frontend Engineer [Intern]
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  GoMyCode
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Feb 2025 - May 2025
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 pl-4">
                  <li>
                    Developed and maintained web applications using React and
                    Node.js.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to define project
                    requirements.
                  </li>
                  <li>
                    Implemented responsive design to enhance user experience
                    across devices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="left-heading">
            <h1
              className="hidden lg:block dark:text-white uppercase tracking-[0.8rem] font-semibold"
              style={{ writingMode: "vertical-lr" }}
            >
              Showcase
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
