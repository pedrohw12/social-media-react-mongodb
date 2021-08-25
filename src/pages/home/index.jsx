import './home.css';

import Topbar from '../../components/topbar';
import Sidebar from '../../components/sidebar';
import Feed from '../../components/feed';
import Rightbar from '../../components/rightbar';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;