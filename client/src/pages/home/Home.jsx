import { useEffect, useState } from "react";
import axios from "axios";

import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";

import("./home.css");

export default function Home({ type }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get("/lists", {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, index) => {
        return <List key={index} list={list}/>;
      })}
      <div className="bottomHome">
        
      </div>
    </div>
  );
}
