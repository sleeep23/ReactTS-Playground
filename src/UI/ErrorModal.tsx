import React from "react";

interface IProps {
  title?: string;
  message?: string;
  onConfirm?: () => void;
}

function ErrorModal({ title, message, onConfirm }: IProps) {
  return (
    <div
      style={{
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0, 0.75)",
      }}
    >
      <div
        style={{
          position: "fixed",
          zIndex: "100",
          width: "80%",
          overflow: "hidden",
          top: "30vh",
          left: "10%",
        }}
      >
        <header
          style={{
            padding: "1rem",
            backgroundColor: "#1da447",
            color: "white",
          }}
        >
          Error: {title}
        </header>
        <div
          style={{ padding: "1rem", backgroundColor: "white", color: "black" }}
        >
          <p>{message}</p>
          <button type="button" onClick={onConfirm}>
            Go back to input
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
