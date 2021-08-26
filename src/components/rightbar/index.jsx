import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online';

const Rightbar = ({ profile }) => {
  const userInformations = [
    { key: 'City', value: 'New York' },
    { key: 'From', value: 'Madrid' },
    { key: 'Relationship', value: 'Single' },
  ]

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt='birthday image' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friendas</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='advertising' />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((item) => (
            <Online user={item} />
          ))}
        </ul>
      </>
    );
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4>User information</h4>
        <div className='rightbarInfo'>
          {userInformations.map((item) => (
            <div className='rightbarInfoItem'>
              <span key={item.key} className='rightbarInfoKey'>{item.key}:</span>
              <span className='rightbarInfoValue'>{item.value}</span>
            </div>
          ))}
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          {Users.map((item) => (
            <div className='rightbarFollowing'>
              <img className='rightbarFollowingImg' src={item.profilePicture} alt='avatar' />
              <span className='rightbarFollowingName'>{item.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {!profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;