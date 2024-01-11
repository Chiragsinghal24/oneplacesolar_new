import { CiLinkedin } from "react-icons/ci";
import '../Components/newfile.css';
import { CgMail } from "react-icons/cg";

const ProfileCard = ({name,profile,imageurl,link,emailname}) => {
  return (
    <div className="home-container">
      <div className="profile-card">
        <div className="img">
          <img src={imageurl} alt="Profile" />
        </div>
        <div className="caption">
          <h3>{name}</h3>
          <p className="text-black">{profile}</p>
          <div className="social-links flex flex-row justify-center gap-2">
          <a href={`https://www.linkedin.com/in/${link}/`} target="_blank"><CiLinkedin size={36}/></a>
          <a href={`mailto:${emailname}@oneplacesolar.com/`} target="_blank"><CgMail size={36}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;





