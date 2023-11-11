import './leftbar.scss'
import Videos from "../../assets/camera.png"
import Gaming from "../../assets/controller.png"
import Courses from "../../assets/elearning.png"
import Events from "../../assets/event.png"
import Friends from "../../assets/friends.png"
import Fund from "../../assets/fundraising.png"
import Memories from "../../assets/memory.png"
import Tutorials from "../../assets/online-learning.png"
import Market from "../../assets/online-shopping.png"
import Gallery from "../../assets/photo-album.png"
import Groups from "../../assets/teammate.png"

import Watch from "../../assets/video.png"
import Messages from "../../assets/chat.png"
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'


const LeftBar = () => {

    const {currentUser} = useContext(AuthContext)

    return (
        <div className='leftBar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt=""  />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt=""  />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt=""  />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt=""  />
                        <span>Memories</span>
                    </div>
                </div>

                <hr/>

                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt=""  />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt=""  />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt=""  />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt=""  />
                        <span>Messages</span>
                    </div>
                </div>

                <hr/>

                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Fundraising</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt=""  />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt=""  />
                        <span>Courses</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftBar
