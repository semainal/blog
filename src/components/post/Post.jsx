import "./post.css"
import {Link} from "react-router-dom"

export default function post() {
  return (
    <div className="post">
        <img className="postImg"
         src="https://images.pexels.com/photos/1661906/pexels-photo-1661906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            <Link to="/post/:postId" style={{textDecoration:"none", color:"inherit"}}>
            Lorem ipsum dolor sit amet.
            </Link>
            </span>
        <hr />
        <span className="postDate">
            1 hour ago
        </span>
   
    </div>

    <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem magni nihil porro autem suscipit sit laborum ipsam illum eius quis rem debitis eum quos, repellendus unde id. Blanditiis excepturi veniam velit aliquam consequatur magni nesciunt possimus, illum odit placeat provident dolor voluptas quidem, alias vitae voluptatibus doloremque ipsam tenetur eligendi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum quia, quod ex dolor, inventore excepturi minus in quasi cumque esse dolorem porro eveniet aliquid eius quo vitae facere architecto consequuntur? Mollitia doloremque ducimus quis laboriosam quo quibusdam qui veniam ipsam, dolorum harum enim neque voluptatibus vero corporis facere sequi!
    </p>
    </div>
  )
}
