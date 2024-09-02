import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        <div>
          <Typewriter
            words={["Hello, World!", "React Developer", "Auto Typing Effect"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
