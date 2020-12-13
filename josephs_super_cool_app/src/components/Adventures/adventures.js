import "./adventures.css"
import { josephLake } from "../Images/josephLake.jpg"


export const Adventures = () => {

    return (
        <>  
            <h1 className="title">Exploring Sunday Morning</h1>
            <p>This morning Mommy took me to the arboretum. I threw rocks in the lake and went to the bridge. We walked through a cave, visited the bridge, and saw sharks in Old Hickory Lake. Mommy gave me her tiny rosary. She held her big one. We prayed the Hail, Mary and the Our Father. When we left, we stopped at Starbucks, and I got a chocolate chip cookie dough cake pop.</p>
            <img className="josephLakePhoto" src={josephLake} alt={"Joseph at the lake."} />
        </>
    )
}
