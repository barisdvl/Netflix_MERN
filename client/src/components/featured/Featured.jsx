import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import("./featured.css");

export default function Featured({ type }) {
  const [genres, setGenres] = useState([]);
  const [content, setContent] = useState({});

  useEffect(() => {
    getGenres();
    getRandomContent(type);
  }, [type]);

  const getGenres = async () => {
    try {
      const res = await axios.get("/genres", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM2NDBjMzY4Yjc0YzQ5ODcwMDNlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM5NTQ1OSwiZXhwIjoxNjQ0NjU0NjU5fQ.bez_RakHNuwrMGguuHNm9AU7Ug22h_WoVXYE_TzZl80",
        },
      });
      setGenres(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomContent = async (type) => {
    try {
      const res = await axios.get(`/movies/random?type=${type}`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM2NDBjMzY4Yjc0YzQ5ODcwMDNlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDM5NTQ1OSwiZXhwIjoxNjQ0NjU0NjU5fQ.bez_RakHNuwrMGguuHNm9AU7Ug22h_WoVXYE_TzZl80",
        },
      });
      setContent(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {genres.map((genre) => {
              return (
                <option key={genre._id} value={genre._id}>
                  {genre.title}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <img
        className="featuredImg"
        src={content.img} //"https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVd8flsWvOa5z-h9CxJc5Y7-RezD3dGrMjwvdvpyKMANhvI0N2ww_mriwey71J_Ii9OsZKDaUGm1qspFcLecxmZQlr6u.jpg?r=d6a"
        alt=""
      />
      <div className="info">
        <img
          className="infoImg"
          src={content.imgTitle} //"https://i.ibb.co/7yk5gss/daredevil.png"
          alt=""
        />
        <span className="description">{content.description}</span>
        <div className="buttons">
          <Link to={{ pathname: `/watch/${content._id}`}} className="link">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>         
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
