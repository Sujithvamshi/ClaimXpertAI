import { useState } from "react";
import { TbChevronLeft, TbFileUpload } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Constants } from "../Constants";

export default function Claim() {
  const [claimDate, setClaimDate] = useState("");
  const [claimType, setClaimType] = useState("");
  const [policyId, setPolicyId] = useState(0);
  const [claimDescription, setClaimDescription] = useState("");
  const [patientAge, setPatientAge] = useState(0);
  const [patientGender, setPatientGender] = useState("");
  const [providerSpeciality, setProviderSpeciality] = useState("");
  const [patientIncome, setPatientIncome] = useState(0);
  const [claimAmount, setClaimAmount] = useState(0);
  const [patientMaritalStatus, setPatientMaritalStatus] = useState("");
  const [patientEmploymentStatus, setPatientEmploymentStatus] = useState("");
  const [providerLocation, setProviderLocation] = useState("");
  const [diagnosisCode, setDiagnosisCode] = useState("");
  const [procedureCode, setProcedureCode] = useState("");
  const [cluster, setCluster] = useState("");
  const [claimSubmissionMethod, setClaimSubmissionMethod] = useState("");
  const [document, setDocument] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Submit claim data first
      const token = localStorage.getItem("jwt");
      const formdata = {
        claimType: "Emergency",
        claimDate: "2024-07-04",
        claimAmount: 6769.09,
        claimDescription: "An insurance for health",
        policyId: "4",
        patientAge: "25",
        patientGender: "F",
        providerSpeciality: "Cardiology",
        patientIncome: 24263.98,
        patientMartialStatus: "Widowed",
        patientEmployementStatus: "Unemployed",
        providerLocation: "Powellside",
        diagnosisCode: "pl479",
        procedureCode: "pt354",
        cluster: "3",
        claimSubmissionMethod: "Phone",
      };
      const claimResponse = await fetch(Constants.API + "/submit/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formdata),
      });

      if (!claimResponse.ok) {
        throw new Error("Failed to submit claim");
      }

      const claimData = await claimResponse.json();
      const claimId = claimData.id;
      if (document) {
        const fileData = new FormData();
        fileData.append("file", document);
        fileData.append("claimId", claimId);

        const fileResponse = await fetch(Constants.API + "/upload", {
          method: "POST",
          body: fileData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!fileResponse.ok) {
          throw new Error("Failed to upload document");
        }
      }

      alert("Claim submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting claim");
    }
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
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Claim Type".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={claimType}
            onChange={(e) => setClaimType(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Claim Date".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="date"
            value={claimDate}
            onChange={(e) => setClaimDate(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Claim Amount".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="number"
            value={claimAmount}
            onChange={(e) => setClaimAmount(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Claim Description".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={claimDescription}
            onChange={(e) => setClaimDescription(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Policy Id".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="number"
            value={policyId}
            onChange={(e) => setPolicyId(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Patient Age".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="number"
            value={patientAge}
            onChange={(e) => setPatientAge(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Patient Gender".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={patientGender}
            onChange={(e) => setPatientGender(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Provider Specialty".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={providerSpeciality}
            onChange={(e) => setProviderSpeciality(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Patient Income".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="number"
            value={patientIncome}
            onChange={(e) => setPatientIncome(parseFloat(e.target.value))}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Martial Status".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={patientMaritalStatus}
            onChange={(e) => setPatientMaritalStatus(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Patient Employment Status".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={patientEmploymentStatus}
            onChange={(e) => setPatientEmploymentStatus(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Provider Location".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={providerLocation}
            onChange={(e) => setProviderLocation(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Diagnosis Code".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={diagnosisCode}
            onChange={(e) => setDiagnosisCode(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Procedure Code".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={procedureCode}
            onChange={(e) => setProcedureCode(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Cluster Code".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={cluster}
            onChange={(e) => setCluster(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <label className="block text-zinc-600 mb-2 capitalize">
            {"Claim Submission Method".replace(/([A-Z])/g, " $1").trim()}:
          </label>
          <input
            type="text"
            value={claimSubmissionMethod}
            onChange={(e) => setClaimSubmissionMethod(e.target.value)}
            className="w-full px-4 py-2 border border-zinc-300 rounded-lg bg-zinc-100"
          />
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <label
            htmlFor="document"
            className="text-xl flex items-center justify-center hover:cursor-pointer border border-zinc-500 bg-zinc-200 rounded-lg p-4"
          >
            <TbFileUpload className="mr-2 w-10 h-10" /> Upload Documents
          </label>
          <input
            type="file"
            id="document"
            name="document"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files) {
                setDocument(e.target.files[0]);
              }
            }}
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
