import { useNavigate } from "react-router-dom";
import ClaimImage from "./assets/claim.png";
import { TbFileDescription, TbListSearch } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={ClaimImage}
        alt="ClaimXpert"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-5xl font-thin mb-8 text-zinc-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Quick & Easy Insurance Claims
      </motion.p>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="btn transitions"
          onClick={() => navigate("/file-claim")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TbFileDescription className="mr-2" /> File Claim
        </motion.button>
        <motion.button
          className="btn transitions"
          onClick={() => navigate("/claims")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TbListSearch className="mr-2" /> Check Claim Status
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
