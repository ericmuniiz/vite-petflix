import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Components/Loading';
import './App.css'

function App() {

  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://api-petflix-yzoh.onrender.com/videos`);
      const data = await response.json();

      setVideo(data);
      setLoading(true);
      console.log(data);

    }

    fetchData()

  }, [])



  return (
    <>
    <div className='container'>
      <div className='header'>
        <div className='head1'><img src="https://image.roku.com/developer_channels/prod/e5d916201366e281798dd69ac5424bc24b495c84df810906db934bae8373798a.png" width={120} className='petlogo'/> </div>
        <div className='head2'> <img src="https://investnews.com.br/wp-content/uploads/2021/06/doge-1200x800.jpg" width={20} className='perfil'/></div>
      </div>
      
      
        <div className='videoContainer'>
        <div className='box1'><h1>VÍDEOS LEGAIS</h1></div>

        {video && (
        <>
        
          <div className='videoList'>
            
            {video.map((e) => (
              <>
              <Link to={e.id && `/Assistir/${e.id}`} key={e.id}>
                <img src={e.capa && e.capa} className='capa' alt={ e.nome && e.nome} />
              </Link>
              
              </>
            ))}
          </div>
          
        </>
      )}
      </div>
      {!loading && <Loading/>}
      </div>
    </>


  )
}

export default App