import React from "react";

const NavigationDots = ({ active }) => {
  console.log("active state ->", active);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          <h2>Hello</h2>
          // <a
          //   href={`#${item}`}
          //   key={item + index}
          //   className="app__navigation-dot"
          //   style={active === item ? { backgroundColor: "#313BAC" } : {}}
          // />
        )
      )}
    </div>
  );
};

export default NavigationDots;
