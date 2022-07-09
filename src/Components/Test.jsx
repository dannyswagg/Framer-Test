import { React } from "react";
import { motion, useAnimation} from "framer-motion";

export default function Box1() {
  const controls = useAnimation();

  return (
    <div className="box-container">
        <button onClick={() => {
            controls.start({
                x: "100%",
                backgroundColor: "#f00",
                transition: { duration: 1 },
              })
        }}> Yolo</button>
      <motion.div className="box"
      animate={controls}
      ></motion.div>
    </div>
  );
}
