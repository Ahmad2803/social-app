import './profile.scss'

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts'


const Profile = () => {


  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " alt="" className="cover" />
        <img src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='http://github.com'>
            <GitHubIcon fontSize='large'/>
            </a>
            <a href='http://LinkedIn.com'>
            <LinkedInIcon fontSize='large'/>
            </a>
          </div>
          <div className="center">
            <span>Sam Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Wiz.jxs</span>
              </div>
              
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile 
