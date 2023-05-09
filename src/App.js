import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Pictures from "./pages/Pictures";
import UUdised from "./pages/UUdised";
import './App.css';
import { useEffect, useState } from "react";
import Post from "./pages/Post";

function App() {

  
  const [postitused, setPostitused] = useState([
    {
      id: "tererere",
      title: 'Minu esimene blogipostitus',
      content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      `
    },
    {
      id: "ytyttytyty",
      title: 'Minu teine blogipostitus',
      content: `
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
      `
    }
  ])

  const spaceId = 'klerou3lybt5'
  const accessToken = 'Z6plcqAhtu64kuMoFHf6D24IAILRedDf7WK5zCGhFyY'
  const contentfulUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`

  useEffect(() => {
    const fetchPosts = async () => {
        const result = await fetch(contentfulUrl)
        const postsData = await result.json()
        
        const loadedPosts = postsData.items.map((record) => {
          return {
            id: record.sys.id,
            title: record.fields.pealkiri,
            content: record.fields.kirjeldus,
            richContent: record.fields.sisu
          }
        })
        console.log(loadedPosts)
        setPostitused(loadedPosts)
    }
    fetchPosts()
  },[contentfulUrl])


  return (
    <BrowserRouter>
    <div className="container-fluid p-5 bg-primary text-white text-center">
      <h1>Blogi leht</h1>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs/:postId" element={<Post postitused={postitused} />} />
          <Route 
          path="blogs" 
          element={<Blogs postitused={postitused} />} 
          >
            
            </Route>
          <Route path="Services" element={<Services />} />
          <Route path="Pictures" element={<Pictures />} />
          <Route path="UUdised" element={<UUdised />} />
          <Route path="Contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
