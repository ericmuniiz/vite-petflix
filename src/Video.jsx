import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './App.css'

function Video() {

  const [video, setVideo] = useState();
  const {id} = useParams();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 32) {
        event.preventDefault();
        const videoElement = document.getElementById('meuVideo');
        if (videoElement) {
          if (videoElement.paused) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        }
      }
    };

    // Adiciona o ouvinte de eventos quando o componente é montado
    document.addEventListener('keydown', handleKeyPress);

    // Remove o ouvinte de eventos quando o componente é desmontado
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); 

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/video/${id}`);
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
          <div className='container'>
            <video width="950" height="700" id='meuVideo' controls>
              <source src={video.link} type="video/mp4" />
            </video>
          </div>

        </>
      )}

      <div>
        <Link to="/Home"><p>Voltar</p></Link>
      </div>


      <div>

      </div>
    </>


  )
}

export default Video