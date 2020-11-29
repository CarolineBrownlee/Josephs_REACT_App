import useSound from 'use-sound';
import optimusPrimeSoundEfx from '../Images/i-am-optimus-prime.mp3'
import optimusPrime from "../Images/optimusPrime.jpg"

export const StickerChart = () => {

    const [playPrime] = useSound(optimusPrimeSoundEfx);

    return (
        <>  
            <img className="optimusPrimeSticker" style={{ width: '30%'}} src={optimusPrime} onClick={playPrime}  alt={"optimusPrime"} />
            <h1>Sticker Chart Component Framework </h1>
        </>
    )
}
