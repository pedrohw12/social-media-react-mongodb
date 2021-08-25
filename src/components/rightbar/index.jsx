import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online';

const Rightbar = ({ profile }) => {
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

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
        {profile ? <></> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;