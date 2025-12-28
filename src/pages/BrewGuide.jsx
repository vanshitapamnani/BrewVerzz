import { useEffect, useState } from "react";
import "../styles/explore.css";

function Guide() {
  const [selectedBrew, setSelectedBrew] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selectedBrew ? "hidden" : "auto";
  }, [selectedBrew]);

  return <div>This is the Guide section </div>;
}

export default Guide;
