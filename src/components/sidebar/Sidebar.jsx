import { useEffect } from "react";
import { useState } from "react"
import "./sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async () =>
    {
      const res = await axios.get("/categories")
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className="sidebarImg" src="https://images.pexels.com/photos/52718/angel-wings-love-white-52718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Tempora exercitationem odit dolorum rem inventore cumque eius dignissimos obcaecati voluptas incidunt? Animi modi qui fugit placeat consequuntur, 
            deleniti hic doloribus ratione ex aut ducimus iste id cumque voluptate amet perferendis. Perspiciatis consequatur sint quis. Aspernatur voluptatem, voluptatum maiores nesciunt perspiciatis beatae!</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map((c)=>(
              <Link to={`/?cat=${c.name}`} className="link">
               <li className="sidebarListItem">{c.name}</li></Link>
             
            ))
          }
          
          
        </ul>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
       <div className="sidebarSocial">
       <i className="sidebarIcon fa-brands fa-facebook"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      <i className="sidebarIcon fa-brands fa-linkedin"></i>
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
       </div>

        </div>
    </div>
  )
}
