import "./adventures.css"
import josephLake from "../Images/josephLake.jpg"
import josephPumpkin from "../Images/josephPumpkin.jpg"
import josephMommyLake from "../Images/josephMommyLake.jpg"
import josephLakeTwo from "../Images/josephLake2.jpg"


export const Adventures = () => {

    return (
        <>
            <h1 className="pageTitle">Journal of Adventures</h1>
            <div className="journalEntryContainer">
                <p className="title">Exploring Sunday Morning</p>
                <p className="date">December 12, 2020</p>
                <div className="photoContainer">
                    <img className="josephLakePhoto" src={josephLake} alt={"Joseph at the lake."} />
                    <img className="josephPumpkinPhoto" src={josephPumpkin} alt="Joseph with a pumpkin." />
                    <img className="josephMommyLake" src={josephMommyLake} alt={"Joseph and Mommy at the lake."} />
                    <img className="josephLakeTwo" src={josephLakeTwo} alt="Joseph at the lake." />
                </div>
                <p className="entry">This morning Mommy took me to the arboretum. I threw rocks in the lake and walked to the bridge. We walked through a cave and saw sharks in Old Hickory Lake. Mommy gave me her tiny rosary. She held her big one. We prayed the Hail, Mary and the Our Father. When we left, we stopped at Starbucks where I got a chocolate chip cookie dough cake pop.</p>
            </div>
        </>
    )
}
