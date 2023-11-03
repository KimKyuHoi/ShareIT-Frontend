import Question from "./Question";
import { motion } from "framer-motion";

export default function QuestionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6 }}
    >
      <Question />
    </motion.div>
  );
}
