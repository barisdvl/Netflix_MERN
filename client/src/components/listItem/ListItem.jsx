import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";

import "./listItem.css";

export default function ListItem(index) {
  const [isHovered, setIsHovered] = useState(false);

  const trailer =
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

  return (
    <div
      className="listItem"
      style={{
        left:
          isHovered &&
          Object.values(index) * 225 - 50 + Object.values(index) * 2.5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-2773-784.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW2fI1GNxeeslsl4jEqHUb8E1z-C2J2yJjshKn0HqEgKUlGOnWeS5GYJlnJ_M0iiGH9G_V5AfBVtvzGbmzkBDOvY30F-RrPPCaYy_N98OIU60CXl.jpg?r=c0c"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop></video>
          <div className="itemInfo">
            <div className="itemIcons">
              <PlayArrow className="itemIcon" />
              <Add className="itemIcon" />
              <ThumbUpAltOutlined className="itemIcon" />
              <ThumbDownAltOutlined className="itemIcon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="itemDescription">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </div>
            <div className="itemGenre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
