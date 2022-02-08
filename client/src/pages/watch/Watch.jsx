import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.css";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="watchVideo"
        autoPlay
        progress
        controls
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      ></video>
    </div>
  );
}
