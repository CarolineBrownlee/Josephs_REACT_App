import useSound from 'use-sound';
import optimusPrimeSoundEfx from '../Images/i-am-optimus-prime.mp3'
import optimusPrime from "../Images/optimusPrime.jpg"
import "./stickerchart.css"
import whiteTransformer from "../Images/whiteTransformer.jpg"
import whiteTransformerSoundEfx from '../Images/Megatron must be stopped.mp3'
import bulldozer from '../Images/bulldozerTransformer.jpeg'
import bulldozerSoundEfx from '../Images/autobots-3.mp3'


export const StickerChart = () => {

    const [playPrime] = useSound(optimusPrimeSoundEfx);
    const [playWhiteTransformer] = useSound(whiteTransformerSoundEfx);
    const [playBulldozerTransformer] = useSound(bulldozerSoundEfx);

    return (
        <>  
            <h1 className="title">My Sticker Collection for Being Awesome</h1>
            <img className="optimusPrimeSticker" style={{ width: '30%'}} src={optimusPrime} onClick={playPrime}  alt={"optimus prime"} />
            <img className="whiteTransformerSticker" style={{ width: '30%' }} src={whiteTransformer} onClick={playWhiteTransformer} alt={"white transformer"} />
            <img className="bulldozerSticker" style={{ width: '30%' }} src={bulldozer} onClick={playBulldozerTransformer} alt={"bulldozer transformer"} />
        </>
    )
}
