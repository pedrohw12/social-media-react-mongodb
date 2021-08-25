import React from 'react';
import './profile.css'

// Components
import Topbar from '../../components/topbar';
import Sidebar from '../../components/sidebar';
import Feed from '../../components/feed';

export default function Profile() {
  return (
    <React.Fragment>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src='assets/post/3.jpeg' />
              <img className='profileUserImg' src='assets/person/7.jpeg' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Safak Kocaoglu</h4>
              <span className='profileInfoDesc'>Hello my friends!</span>
            </div>
          </div>

          <div className='profileRightBottom'>
            <Feed />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}