import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function ActivatePage() {
  const [searchparams, setSearchParams] = useSearchParams();
  console.log(...searchparams);
  const { activateUser } = useAuthContext();
  useEffect(() => {
    activateUser(searchparams.get("uid"), searchparams.get("token"));
  }, []);
  return <div>Bebring...</div>;
}

export default ActivatePage;
