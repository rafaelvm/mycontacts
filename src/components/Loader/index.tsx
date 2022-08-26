import { FunctionComponent } from "react";
import { Overlay } from "./styles";
import ReactDOM from "react-dom";

const Loader: FunctionComponent = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader"></div>
    </Overlay>,
    document.getElementById("loader-root")
  );
};

export default Loader;
