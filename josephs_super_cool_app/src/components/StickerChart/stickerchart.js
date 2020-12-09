import useSound from 'use-sound';
import optimusPrimeSoundEfx from '../Images/i-am-optimus-prime.mp3'
import optimusPrime from "../Images/optimusPrime.jpg"
import "./stickerchart.css"
import whiteTransformer from "../Images/whiteTransformer.jpg"
import whiteTransformerSoundEfx from '../Images/Megatron must be stopped.mp3'
import bulldozer from '../Images/bulldozerTransformer.jpeg'
import bulldozerSoundEfx from '../Images/autobots-3.mp3'
import hotwheels from '../Images/transformerHotWheels.jpg'
import hotwheelsSoundEfx from '../Images/muscleCar.mp3'
import submarineSuperWings from '../Images/superwingsWilly.jpg'
import submarineSoundEfx from "../Images/submarine.mp3"
import santaCookie from '../Images/santaCookie.jpg'
import SantaCookieSoundEfx from "../Images/SantaCookieSound.mp3"
import jack from '../Images/jack.png'
import jackEfx from "../Images/This_Is_Halloween.mp3"


export const StickerChart = () => {

    const [playPrime] = useSound(optimusPrimeSoundEfx);
    const [playWhiteTransformer] = useSound(whiteTransformerSoundEfx);
    const [playBulldozerTransformer] = useSound(bulldozerSoundEfx);
    const [playHotWheels] = useSound(hotwheelsSoundEfx);
    const [playSubmarine] = useSound(submarineSoundEfx);
    const [playSantaCookie] = useSound(SantaCookieSoundEfx);
    const [playJack] = useSound(jackEfx);

    return (
        <>  
            <h1 className="title">My Sticker Collection for Being Awesome</h1>
            <img className="optimusPrimeSticker" src={optimusPrime} onClick={playPrime}  alt={"optimus prime"} />
            <img className="whiteTransformerSticker" src={whiteTransformer} onClick={playWhiteTransformer} alt={"white transformer"} />
            <img className="bulldozerSticker" src={bulldozer} onClick={playBulldozerTransformer} alt={"bulldozer transformer"} />
            <img className="hotWheelsSticker" src={hotwheels} onClick={playHotWheels} alt={"Hot Wheels"} />
            <img className="submarineSticker" src={submarineSuperWings} onClick={playSubmarine} alt={"submarine willy Super Wings"} />
            <img className="santaCookieSticker" src={santaCookie} onClick={playSantaCookie} alt={"santa craft"} />
            <img className="jackSticker" src={jack} onClick={playJack} alt={"Jack Skellington Image"} />
        </>
    )
}
