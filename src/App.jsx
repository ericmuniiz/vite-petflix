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
    <div className='container'>
    <img src="PetLogo.png" width={120}/>
      {video && (
        <>
        <div className='videoContainer'>
        <div className='box1'><h1>VÍDEOS ENGRAÇADOS</h1></div>
          <div className='videoList'>
            
            {video.map((e) => (
              <>
              <Link to={`/Assistir/${e.id}`} key={e.id}>
                <img src={e.capa} className='capa'/>
                <p className='nomeVideo'>{e.nome}</p>
              </Link>
              
              </>
            ))}
          </div>
          </div>
        </>
      )}
      </div>
    </>


  )
}

export default App