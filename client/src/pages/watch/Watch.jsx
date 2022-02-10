import { ArrowBackOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./watch.css";

export default function Watch() {
  const location = useLocation();
  const [movie, setMovie] = useState("");

  const movieId = location.pathname.split("/")[2];
  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axios.get(`/movies/find/${movieId}`, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM2NDBjMzY4Yjc0YzQ5ODcwMDNlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM5NTQ1OSwiZXhwIjoxNjQ0NjU0NjU5fQ.bez_RakHNuwrMGguuHNm9AU7Ug22h_WoVXYE_TzZl80",
          },
        });
        setMovie(res.data.video)
      } catch (error) {
        console.log(error);
      }
    };
    getVideo()
  });
  
  return (
    <div className="watch">
      <div className="back">
        <Link to="/" className="link">
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video
        className="watchVideo"
        autoPlay
        progress
        controls
        src={movie} //"https://firebasestorage.googleapis.com/v0/b/netflix-clone-mern-86c18.appspot.com/o/UNCHARTED%20-%20Official%20Trailer%20(HD)-eHp3MbsCbMg.mp4?alt=media&token=cd7fd06e-22ef-4048-be3e-033bee49d60b"
      ></video>
    </div>
  );
}
