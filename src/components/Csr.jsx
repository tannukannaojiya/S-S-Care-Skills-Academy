// // import React from 'react';

// // const CSRPage = () => {
// //   return (
// //     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
// //       <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 md:p-10">
// //         <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
// //           Corporate Social Responsibility
// //         </h1>
// //         <p className="text-gray-700 text-sm md:text-base leading-relaxed">
// //           For the upliftment of the social status and earning potential of youth, we arrange Technical/ Vocational Training under CSR Schemes of Corporates and other Organizations where the Training to the youth is provided. We have tied up with a renowned training Institute – S&S Care Skills Academy. “Care Skills Academy” is a pioneer academy who are mainly into training professionally the unemployed youth and employees of corporates, industries, governments and PSUs of central and state government. Sarthak arranges for such technical training through Care Skills Academy free of cost and the Training costs and other expenses are reimbursed by the Corporates and other organizations.
// //         </p>
// //         <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
// //           We not only make the youth employable but also assist them in getting an employment. This activity provides a permanent solution to the problems of youth from economically weaker section of the society and the very objective of CSR investment of the company is also met within a short duration. In true sense, this type of CSR activities really fulfils Hon’ble Prime Minister’s dream of a SKILLED INDIA. Till now we have provided Training under CSR Projects of corporates like Whirlpool, Konica Minolta, Amber Enterprises, DS Group, PTC India, Godrej, DCM Shriram and Tata Sky.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CSRPage;

// import React from 'react';
// import csr3 from '../assets/csr3.png'; // Replace with your image path

// const Csr = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen mx-6 my-6">
//       {/* Left Side - Image */}
//       <div className="w-full md:w-1/2 h-1/2 md:h-full">
//         <img
//           src={csr3}
//           alt="CSR"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       {/* Right Side - Content */}
//       <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-4 md:p-10">
//         <div className="max-w-2xl">
//           <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
//             Corporate Social Responsibility
//           </h1>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//             For the upliftment of the social status and earning potential of youth, we arrange Technical/ Vocational Training under CSR Schemes of Corporates and other Organizations where the Training to the youth is provided. We have tied up with a renowned training Institute – S&S Care Skills Academy. “Care Skills Academy” is a pioneer academy who are mainly into training professionally the unemployed youth and employees of corporates, industries, governments and PSUs of central and state government. Sarthak arranges for such technical training through Care Skills Academy free of cost and the Training costs and other expenses are reimbursed by the Corporates and other organizations.
//           </p>
//           <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
//             We not only make the youth employable but also assist them in getting an employment. This activity provides a permanent solution to the problems of youth from economically weaker section of the society and the very objective of CSR investment of the company is also met within a short duration. In true sense, this type of CSR activities really fulfils Hon’ble Prime Minister’s dream of a SKILLED INDIA. Till now we have provided Training under CSR Projects of corporates like Whirlpool, Konica Minolta, Amber Enterprises, DS Group, PTC India, Godrej, DCM Shriram and Tata Sky.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Csr;

import React from 'react';
import csr3 from '../assets/csr3.png'; // Replace with your image path

const Csr = () => {
  return (
    <div className="bg-gray-100 mx-5 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white m-5 rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full my-10 ml-5 md:w-1/2">
          <img
            src={csr3}
            alt="CSR Initiative"
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
        </div>
        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
            Corporate Social Responsibility
          </h1>
          <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed">
            For the upliftment of the social status and earning potential of youth, we arrange Technical/ Vocational Training under CSR Schemes of Corporates and other Organizations where the Training to the youth is provided. We have tied up with a renowned training Institute – S&S Care Skills Academy. “Care Skills Academy” is a pioneer academy who are mainly into training professionally the unemployed youth and employees of corporates, industries, governments and PSUs of central and state government. Sarthak arranges for such technical training through Care Skills Academy free of cost and the Training costs and other expenses are reimbursed by the Corporates and other organizations.
          </p>
          <p className="text-gray-700 text-justify text-sm md:text-base leading-relaxed mt-4">
            We not only make the youth employable but also assist them in getting an employment. This activity provides a permanent solution to the problems of youth from economically weaker section of the society and the very objective of CSR investment of the company is also met within a short duration. In true sense, this type of CSR activities really fulfils Hon’ble Prime Minister’s dream of a SKILLED INDIA. Till now we have provided Training under CSR Projects of corporates like Whirlpool, Konica Minolta, Amber Enterprises, DS Group, PTC India, Godrej, DCM Shriram and Tata Sky.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Csr;
