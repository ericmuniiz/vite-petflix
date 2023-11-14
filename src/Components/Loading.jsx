import { Player } from '@lottiefiles/react-lottie-player';
import "../App.css"

function Loading(){

    return(
        <>
        <div className='load_container'>
        <Player
          src="https://lottie.host/3d5e86ec-5709-4eef-b633-01509342cf3b/AaRmJeuK36.json" 
          loop autoplay
          speed={5} 
          style={{ height: "300px", width: "300px"}}
        />
        </div>  
        </>
    )
         
}

export default Loading;