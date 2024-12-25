import React from 'react';

const CustomizedProjectReport = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-5 xs:px-2">
      <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-10 xs:text-3xl xs:pl-5">
        Customized Project Report
      </h1>
      <div className="bg-white shadow-lg  rounded-lg w-11/12 lg:w-10/12 flex flex-col md:flex-row p-5 md:p-10 space-y-5 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
            Benefits For Joining Us
          </h2>
          <div className="space-y-8">
            {/* Item 1 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">🛠️</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Fully Customized
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
              Tailors training programs to meet individual needs, allowing students to learn at their own pace and focus on specific career goals.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
            {/* Item 2 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">🚀</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Innovative Training
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
              Faculty provides advanced teaching methodologies, enhancing practical knowledge and skills for real-world applications.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
            {/* Item 1 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">💼</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Job Oriented
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
              Training focuses on equipping students with industry-relevant skills, ensuring career readiness.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
            {/* Item 3 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">📜</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                Government Certification
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
              Recognized certifications boost credibility, opening opportunities for government and private sector employment.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="hidden md:block w-[2px] bg-gray-300 mx-5"></div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 pl-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
          Why Choose Us
          </h2>
          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-start">
                  <div className="text-lg font-bold mr-3 text-green-600">{item}.</div>
                  <p className="text-gray-600">
                    {[
                      "Corporate Training customized training programs to enhance employee skills, productivity, and organizational performance in corporate settings.",
                      "Industry-Specific tailored training to meet the unique needs of various industries, boosting relevance and expertise.",
                      "Educational Programs comprehensive programs designed to provide knowledge and skills, promoting personal and professional development.",
                      "Physical Programs fitness and wellness programs designed to improve physical health, strength, and overall well-being.",
                      "Expertise and Experience benefit from professional trainers with extensive industry knowledge and proven track records.",
                    ][idx]}
                  </p>
                </div>
                <hr className={`mt-4 ${idx < 4 ? "border-gray-400" : "border-gray-200"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default CustomizedProjectReport;
