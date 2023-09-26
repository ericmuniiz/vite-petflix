import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [video, setVideo] = useState();
  const [currentVideo, setCurrentVideo] = useState(1)

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/video/${currentVideo}`);
      const data = await response.json();

      setVideo(data);
      console.log(data);

    }



    fetchData()

  }, [currentVideo])



  return (
    <>

      {video && (
        <>
          <div>
            <img src={video.mensagem[0].capa} alt="" />
            <video width="750" height="500" controls >
              <source src={video.mensagem[0].link} type="video/mp4" />
            </video>
          </div>

        </>
      )}

      <div>

      </div>


      <div>

      </div>
    </>


  )
}

export default App