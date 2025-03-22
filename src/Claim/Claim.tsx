import { useState } from "react";
import { TbChevronLeft, TbFileUpload } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Claim() {
  const [formData, setFormData] = useState({
    name: "",
    policyNumber: "",
    claimAmount: "",
    description: "",
    document: null,
  });

  const navigate = useNavigate();

  const handleChange = (e: {
    target: { name: any; value: any; files?: any };
  }) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <motion.div
      className="max-w-xl w-full mx-auto mt-10 p-8 rounded-lg shadow-lg bg-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="mt-4 w-full flex items-center text-xl mb-8"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <TbChevronLeft /> Back to Home
      </motion.button>
      <h1 className="text-3xl font-bold mb-8 text-center text-zinc-800">
        Submit a Claim
      </h1>
      <form onSubmit={handleSubmit}>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-zinc-600 mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-zinc-600 mb-2">Policy Number:</label>
          <input
            type="text"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-zinc-600 mb-2">Claim Amount:</label>
          <input
            type="text"
            name="claimAmount"
            value={formData.claimAmount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-zinc-600 mb-2">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <label
            htmlFor="document"
            className="text-xl flex items-center justify-center hover:cursor-pointer border border-zinc-500 bg-zinc-200 rounded-lg p-4"
          >
            <TbFileUpload className="mr-2 w-10 h-10" />
            Upload Documents
          </label>
          <input
            type="file"
            id="document"
            name="document"
            accept="application/pdf"
            className="hidden"
            onChange={handleChange}
          />
        </motion.div>
        <motion.button
          type="submit"
          className="w-full bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-zinc-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
}
