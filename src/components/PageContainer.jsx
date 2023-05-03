import { Children } from "react";
import "../styles/main.css";

function PageContainer() {
  return (
    <div className="hero">
      <div className="container">{...Children}</div>
    </div>
  );
}

export default PageContainer;
