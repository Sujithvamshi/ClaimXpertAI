import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Constants } from "../Constants";

const PolicyDetails = () => {
  const [policy, setPolicy] = useState(null);
  const [claim, setClaim] = useState("");
  useEffect(() => {
    fetchPolicyDetails();
  }, []);
  const fetchPolicyDetails = async () => {
    const token = localStorage.getItem("jwt");
    console.log(token);
    const policyResponse = await fetch(Constants.API + "/claim/" + claim, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!policyResponse.ok) {
      throw new Error("Failed to fetch policy details");
    }

    const policyData = await policyResponse.json();
    setPolicy(policyData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-scroll pt-96 pb-10 bg-gray-100">
      <input
        className="w-96 p-2 text-xl border border-black rounded mb-4 bg-zinc-800"
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter Claim Id"
      ></input>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-white shadow-lg rounded-lg w-96 border border-gray-300"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Claim Details</h2>
        <button
          onClick={fetchPolicyDetails}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mb-4"
        >
          Fetch Claim Details
        </button>
        {policy ? (
          <div className="space-y-2">
            {Object.entries(policy).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex justify-between border-b pb-2"
              >
                <span className="font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}:
                </span>
                <span>{value as React.ReactNode}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Click the button to fetch policy details.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PolicyDetails;
