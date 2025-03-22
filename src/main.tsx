import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Claims from "./Claim/Claims.tsx";
import Claim from "./Claim/Claim.tsx";
import ClaimDetails from "./Claim/ClaimDetails.tsx";
import "./index.css";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Login from "./Login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/file-claim" element={<Claim />} />
        <Route path="/claim/:id" element={<ClaimDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
