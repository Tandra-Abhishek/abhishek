import { useState,useEffect } from "react";
import BlogList from "./blog-list";

const Home = () => {
  // let name ="abhishek"
  // const [name,setName]= useState('mario');
  // const handleClick = () =>{
  //     setName('lungi')
  // }
  // const handleClickAgain = (name)=>{
  //     console.log('hello' + name);
  // }

  const [blogs, setBlogs] = useState(null);


  useEffect(()=>{
  fetch(' http://localhost:3000/blogs')
  .then(res =>{
    return res.json();
  })
  .then(data => {
    
    setBlogs(data)
  });
  },[]);

  return (
    <div className="home">
      {/* <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button> */}
      {/* <button onClick={() => handleClickAgain('abhishek')} >Click me again</button> */}
       
       {blogs && <BlogList  blogs ={blogs}  />}
    </div>
  ); 
};

export default Home;
