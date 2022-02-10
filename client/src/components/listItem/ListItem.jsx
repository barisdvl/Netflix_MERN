import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./listItem.css";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM2NDBjMzY4Yjc0YzQ5ODcwMDNlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM5NTQ1OSwiZXhwIjoxNjQ0NjU0NjU5fQ.bez_RakHNuwrMGguuHNm9AU7Ug22h_WoVXYE_TzZl80",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);
  return (
    <div
      className="listItem"
      style={{
        left: isHovered && index * 225 - 50 + index * 2.5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay loop></video>
          <div className="itemInfo">
            <div className="itemIcons">
              <Link to={{ pathname: `/watch/${movie._id}` }} className="link">
                <PlayArrow className="itemIcon" />
              </Link>
              <Add className="itemIcon" />
              <ThumbUpAltOutlined className="itemIcon" />
              <ThumbDownAltOutlined className="itemIcon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="itemDescription">
              {movie.description.substring(0, 90)}
            </div>
            <div className="itemGenre">{movie.genre.title}</div>
          </div>
        </>
      )}
    </div>
  );
}
