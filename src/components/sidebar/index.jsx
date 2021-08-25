import './sidebar.css';

// Components
import CloseFriend from '../closeFriend/closeFriend';

// Constants
import { sidebarOptions } from '../../constants/sidebarOptions';

// Data
import { Users } from '../../dummyData';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          {sidebarOptions.map((item, index) => (
            <li key={index} className='sidebarListItem'>
              {item.icon}
              <span className='sidebarListItemText'>{item.title}</span>
            </li>
          ))}
        </ul>

        <button className='sidebarButton'>Show more</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          {Users.map((user, index) => (
            <CloseFriend user={user} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;