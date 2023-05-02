import { ReactNode, useState } from "react";

interface Props {
  // children: string;
  children: ReactNode;
  onClose: ()=> void;
}

const Alert = ({ children, onClose }: Props) => {
  const blueStyle: React.CSSProperties = { color: "blue" };
  const [alertDisplay, setAlertDisplay] = useState(true);

  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      style={blueStyle}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );


};

export default Alert;
