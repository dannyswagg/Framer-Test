import { React } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Box5() {
  const controls = useAnimation();


  // Objects with key value pairs and unique keys

  // const btn = [
  //   {
  //     id: 1,
  //     name: "right",
  //   },
  //   {
  //     id: 2,
  //     name: "left",
  //   },
  //   {
  //     id: 3,
  //     name: "circle",
  //   },
  //   {
  //     id: 4,
  //     name: "square",
  //   },
  //   {
  //     id: 5,
  //     name: "stop",
  //   },
  // ];

  return (
    <div className="box-container">
      <button
        onClick={() => {
          controls.start({
            x: 1000,
            transition: { duration: 1 },
          });
        }}
      >
        right
      </button>
      <button
        onClick={() => {
          controls.start({
            x: 0,
            transition: { duration: 1 },
          });
        }}
      >
        left
      </button>
      <button
        onClick={() => {
          controls.start({
            borderRadius: "50%",
            transition: { duration: 1 },
          });
        }}
      >
        circle
      </button>
      <button
        onClick={() => {
          controls.start({
            borderRadius: 0,
            transition: { duration: 1 },
          });
        }}
      >
        square
      </button>
      <button
        onClick={() => {
          controls.stop();
        }}
      >
        stop
      </button>

      {/* {btn.map((btn) => (
        <button
          onClick={() => {
            control.start({
              x: 800,
              transition: { duration: 2 },
            });
          }}
          key={btn.id}
        >
          {btn.name}
        </button>
      ))} */}
      <motion.div className="box"
      animate={controls}
      ></motion.div>
    </div>
  );
}
