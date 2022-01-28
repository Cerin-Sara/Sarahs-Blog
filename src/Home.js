import { useState } from "react";

const Home = () => {
    const [blogs,setBlog] = useState([
        {title: "My New Website", body:"Lorem ipsum dolor ... ", author: "Sarah", id:1},
        {title: "Welcome On Board", body:"Lorem ipsum dolor ... ", author: "Mariah", id:2},
        {title: "Till Now", body:"Lorem ipsum dolor ... ", author: "Annie", id:3}
    ]);
    // const handleClick = () => {
    //     setName("Luigi");
    //     setAge(30);
    // }
    return ( 
        <div className="home">
           {blogs.map((blogs) => (
               <div className="blog-preview" key={blogs.id}>
                   <h2>{blogs.title}</h2>
                   <p>Written by {blogs.author}</p>
               </div>
           ))}
        </div>
    );
}
 
export default Home;