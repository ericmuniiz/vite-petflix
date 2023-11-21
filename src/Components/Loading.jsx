import { Player } from '@lottiefiles/react-lottie-player';
import "../App.css"

function Loading(){

    return(
        <>
        <div className='load_container'>
        <Player
          src="https://lottie.host/d83bef4f-8778-4142-9299-8f1e9e35b22f/D3GMa8gvuV.json" 
          loop autoplay
          speed={1} 
          style={{ height: "200px", width: "200px"}}
        />
        </div>  
        </>
    )
         
}

export default Loading;