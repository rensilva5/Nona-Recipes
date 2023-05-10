import React from "react";
import Traditional from "../components/Traditional";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      opacity={{ opacity: 0 }}
      exit={{ op: 0 }}
      transition={{ dutation: 0.5 }}
    >
      <Traditional />
      <Veggie />
    </motion.div>
  );
}

export default Home;
