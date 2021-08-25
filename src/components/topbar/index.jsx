import './topbar.css';
import { makeStyles } from '@material-ui/core/styles';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    fontSize: 20,
    marginLeft: 10,
  }
}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>Lamasocial</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className={classes.searchIcon} />
          <input placeholder='Search for friend, post or video' className='searchInput' />
        </div>
      </div>

      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>10</span>
          </div>
        </div>
        <img src='/assets/person/1.jpeg' alt='foto de perfil' className='topbarImg' />
      </div>

    </div>
  );
}

export default Topbar;