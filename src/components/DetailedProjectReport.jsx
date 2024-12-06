
const DetailedProjectReport = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-5">
      <div className="bg-white shadow-lg rounded-lg w-11/12 lg:w-9/12 flex flex-col md:flex-row">
        {/* Left Section: YouTube Video */}
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
            Detailed Project Report
          </h1>
          <iframe
            className="w-full h-64 md:h-80 rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Section: Heading and Points */}
        <div className="w-full md:w-1/2 p-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            A Detailed Project Report Is A Complete Document Which Provides Details On...
          </h2>
          <ul className="space-y-4">
            {[
              "FOOD PROCESSING",
              "HORTICULTURE-ORGANIC FARMING",
              "CEMENT & ALLIED PRODUCTS",
              "DAIRY & MILK Product",
              "PAPER & ALLIED PRODUCTS",
              "PLASTIC & ALLIED PRODUCTS",
              "ANIMAL HUSBANDRY",
              "SMALL BUSINESS MODELS",
              "COLD STORAGE SOLUTION",
              "AGRI FOOD PROCESSING",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 text-lg mr-3">✔️</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectReport;
