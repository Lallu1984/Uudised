
import { Link } from "react-router-dom";

function Blogs({postitused}) {

    return (
        <div className="home">
            <div className="container-fluid p-2 bg-primary text-white text-center">
                <h1>Blogipostitused</h1>
                <div className="postitused-wrapper">
                    {postitused.map((post) => {
                        return (
                            <div key={post.id} className="post-details">
                                {post.title} <Link to={"/blogs/" + post.id} >vaata</Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Blogs