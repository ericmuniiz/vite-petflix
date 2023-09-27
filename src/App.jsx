import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'


function App() {

  const [video, setVideo] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/videos`);
      const data = await response.json();

      setVideo(data);
      console.log(data);

    }

    fetchData()

  }, [])



  return (
    <>
      {video && (
        <>
          {video.map((e) => (
            <>
            <Link to={`/Assistir/${e.id}`} key={e.id}>
              <img src={e.capa} />
            </Link>
            <p>{e.nome}</p>
            </>
          ))}


        </>
      )}
    </>


  )
}

export default App