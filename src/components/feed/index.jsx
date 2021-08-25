import './feed.css';

// Components
import Post from '../post';
import Share from '../share';

// Data
import { Posts } from '../../dummyData';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;