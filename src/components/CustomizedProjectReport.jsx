import React from 'react';

const CustomizedProjectReport = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-5">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-10">
        Customized Project Report
      </h1>
      <div className="bg-white shadow-lg  rounded-lg w-11/12 lg:w-10/12 flex flex-col md:flex-row p-5 md:p-10 space-y-5 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 pr-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
            Why Choose Us
          </h2>
          <div className="space-y-8">
            {/* Item 1 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">✅</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Fully Customized
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
                Customized Bankable Project report to meet all financial
                requirements.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
            {/* Item 2 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">⏰</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Quick Delivery
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
                You will get customized reports from professionals in minimum
                time.
              </p>
              <hr className="mt-4 border-gray-300" />
            </div>
            {/* Item 3 */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="text-gray-500 text-xl">📞</div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  End to End Support
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
                You can reach our support team via phone or email throughout the
                report development life cycle.
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
            Benefits For Joining Us
          </h2>
          <div className="space-y-8">
            {[1, 2, 3, 4, 5].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-start">
                  <div className="text-lg font-bold mr-3 text-green-600">{item}.</div>
                  <p className="text-gray-600">
                    {[
                      "A team of highly experienced professionals comprising of Chartered Accountants Company Secretary.",
                      "Detailed technical and viability study reports for all major sectors of the economy, like food processing.",
                      "Project reports and finance proposals as per industry parameters and accepted by all financial institutions.",
                      "Detailed knowledge and guidance of various subsidy schemes and bank schemes.",
                      "Providing complete knowledge of the loan process, loan file preparation, and assistance during the processing of the loan.",
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
