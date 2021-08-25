import './share.css';

// Constants
import { shareOptions } from '../../constants/shareOptions';

const Share = () => {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img className='shareProfileImg' src='assets/person/1.jpeg' alt='avatar profile' />
          <input placeholder='O que você está pensando?' className='shareInput' />
        </div>

        <hr className='shareHr' />

        <div className='shareBottom'>
          <div className='shareOptions'>
            {shareOptions.map((item, index) => (
              <div key={index} className='shareOption'>
                {item.icon}
                <span className='shareOptionText'>{item.title}</span>
              </div>
            ))}
          </div>

          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;