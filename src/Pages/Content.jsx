import React, { useEffect, useState } from "react";
import Title from "../Components/Contents/Title";
import Buttons from "../Components/Contents/Buttons";
import Pricing from "../Components/Contents/Pricing";
import Plan from "../Components/Contents/Plan";

function Content() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const [currentIndex, setCurrentIndex] = useState(0);
  const pricePerPage = 1;

  const handleNext = () => {
    if (currentIndex + pricePerPage < 3) {
      setCurrentIndex(currentIndex + pricePerPage);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - pricePerPage);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const plans = [
    {
      title: "free forever",
      name: "Free Starter",
      Des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      users: 8,
      storage: 3,
      services: "Email Support",
      note: "Lorem ipsum",
    },
    {
      title: "Lets connect",
      name: "Enterprise plan",
      Des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      users: 75,
      note: "Lorem ipsum",
    },
  ];
  const data = [
    {
      name: "Basic",
      price: 89.99,
      actualPrice: 9.99,
      users: 25,
      storage: 25,
      support: "Email Support",
    },
    {
      name: "Standard",
      price: 189.99,
      actualPrice: 99.99,
      users: 50,
      storage: 60,
      support: "Email+Chat Support",
    },
    {
      name: "Premium",
      price: 389.99,
      actualPrice: 199.99,
      users: 75,
      storage: 100,
      support: "Email+Chat+Whatsapp Support",
    },
  ];
  return (
    <div className="flex flex-col items-center p-[30px]">
      <div className="self-start">
        <Title />
      </div>

      <div
        className={`self-end mb-4 ${isSmallScreen ? "sm:w-full mt-5 " : ""}`}
      >
        <Buttons />
      </div>

      <div className="text-center mb-4 w-full">
        {isSmallScreen ? (
          <div className="flex justify-between">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              &lt; Prev
            </button>
            <div className="">
              {data
                .slice(currentIndex, currentIndex + pricePerPage)
                .map((item, index) => (
                  <Pricing key={index} item={item} />
                ))}
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex + pricePerPage >= 3}
            >
              Next &gt;
            </button>
          </div>
        ) : (
          <div className="flex justify-between ">
            {data.map((item, index) => (
              <Pricing key={index} item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="text-center sm:w-full md:w-full flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <Plan plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Content;
