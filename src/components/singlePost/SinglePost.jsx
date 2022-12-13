
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">

            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/413707/pexels-photo-413707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="" 
                className="singlePostImg" />

                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
            
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sema</b></span>
                    <span className="singlePostDate">1 hour ago.</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias placeat, quidem voluptatum ratione incidunt perferendis natus harum? Aut, eos! Dolorum nisi impedit, atque quisquam fuga odio, quis autem dignissimos, sequi veniam saepe eaque reiciendis voluptatibus recusandae tenetur repudiandae. Dolor laborum beatae voluptate exercitationem quis ipsa provident consequatur? Alias, enim pariatur!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ex ipsa. Aspernatur, magnam obcaecati aliquam sit qui expedita hic neque aperiam nam eum totam unde libero ea iste deserunt voluptate facilis possimus voluptatum mollitia quis non. Repudiandae, asperiores totam provident architecto dicta, quibusdam molestias atque possimus, debitis reiciendis recusandae voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A nihil voluptatum blanditiis consectetur alias perspiciatis quibusdam quisquam nesciunt ipsum totam ipsam reprehenderit magnam numquam asperiores temporibus, unde nemo dolorem. Eligendi exercitationem explicabo animi corrupti aperiam eum doloribus. Quaerat, ducimus voluptatem! Minima quibusdam dolor fugiat exercitationem veritatis corporis sapiente suscipit quaerat?
                </p>


            </div>
        
        </div>
  )
}
