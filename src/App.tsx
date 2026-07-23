import "./App.css";
import { Modal } from "./OverlayModal/Modal";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "green",
      }}
    >
      <Modal />
      <div></div>
    </div>
  );
}

export default App;
