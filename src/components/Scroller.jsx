import React, { useEffect } from "react";
// import "./App.css"; // Import any additional styles if needed

const Scroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If reduced motion isn't preferred, add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const images = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
  ];

  return (
    <>
    {/* <div>
    <h1 className="text-white text-" >Infinite Scroll Animation</h1>
    </div> */}
    
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    
      <div
        className="scroller"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner flex gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Avatar ${index + 1}`}
              className="rounded-full shadow-md w-36 h-36"
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Scroller;
