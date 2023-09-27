import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './App.css'

function Video() {

  const [video, setVideo] = useState();
  const {id} = useParams()

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
          <div>
            <video width="750" height="500" controls >
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