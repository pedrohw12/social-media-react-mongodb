import './post.css';

import { useState } from 'react';
import { MoreVert } from '@material-ui/icons';

import { Users } from '../../dummyData';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={Users.filter((user) => user.id === post.userId)[0].profilePicture}
              alt='user avatar'
            />
            <span className='postUsername'>
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>

        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img className='postImg' src={post.photo} alt='post img' />
        </div>

        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='assets/like.png' alt='like icon' onClick={handleLike} />
            <img className='likeIcon' src='assets/heart.png' alt='like icon' onClick={handleLike} />
            <span className='postLikeCounter'>{like} pessoas gostaram</span>
          </div>

          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comentários</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Post;