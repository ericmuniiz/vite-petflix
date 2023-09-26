import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
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
            <Link to={`/Assistir/${currentVideo}`}> <img src={video.mensagem[0].capa}/> </Link>
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