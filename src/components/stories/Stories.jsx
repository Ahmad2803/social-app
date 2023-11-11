/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import './stories.scss'
import { AuthContext } from '../../context/authContext';



const Stories = () => {

    const {currentUser}= useContext(AuthContext)
    //Temp
    const stories = [
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/15449287/pexels-photo-15449287/free-photo-of-paintball-team-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            name: "Sarah Doe",
            img: "https://images.pexels.com/photos/7142987/pexels-photo-7142987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "Jane Doe",
            img: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            name: "Kim Doe",
            img: "https://images.pexels.com/photos/5750879/pexels-photo-5750879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];


    return (
        <div className='stories'>
        <div className="story">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories 