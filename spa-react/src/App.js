import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import MYImages from './assets/image2.jpg';

function App() {
  let [name,setName] = useState("Brian");
 let [posts,setPosts] = useState([
  {
    id : 1,
    title : "First Post"
  },
  {
    id : 2,
    title : "Second Post"
  },
  {
    id : 3,
    title : "Third Post"
  }
  ]);

  console.log(posts);

  let changeName = () =>{
    setName('Aung Naing');
    console.log(name);
  }
  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      <button onClick={changeName}>change name</button>

      <h1>Posts</h1>
      <ul>
        {
          posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  )
//  let name = "Brian";

//  let changeName = () => {
//   name = "Aung Naing";
//   console.log(name);
//  }
//  return (
//   <div>
//     <h1>Hello {name}</h1>
//     <button onClick={changeName}>change name</button>
//   </div>
//  )



//  return (
//   <div className = "add">
//     <h1>Hello{name}</h1>
//     {/* 1st way - public folder way */}
//     {/* absolute path */}
//     {/* <img src="http://localhost:3000/image.jpg" /> */}

//     {/* relative path */}
//     {/* <img src="/image1.jpg" /> */}

//     {/* 2nd way import */}

//     {/* <img src={MYImages} /> */}
//   </div>
//  )
}

export default App;
