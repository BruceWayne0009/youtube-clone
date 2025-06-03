import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId, categoryId} = useParams();

  return (
    <div className='play-container' >
        <PlayVideo videoId={videoId}/>
        <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video



// import React from 'react';
// import './Video.css';
// import PlayVideo from '../../Components/PlayVideo/PlayVideo';
// import Recommended from '../../Components/Recommended/Recommended';
// import { useParams } from 'react-router-dom';

// const Video = () => {
//   const { videoId, categoryId } = useParams();

//   console.log("Extracted videoId:", videoId); // Debugging

//   return (
//     <div className='play-container'>
//       {videoId ? <PlayVideo videoId={videoId} /> : <p>Video ID is missing</p>}
//       <Recommended />
//     </div>
//   );
// };

// export default Video;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import PlayVideo from '../../Components/PlayVideo/PlayVideo';
// import Recommended from '../../Components/Recommended/Recommended';
// import './Video.css';

// const Video = () => {
//   const { videoId, categoryId } = useParams();

//   console.log("Extracted videoId:", videoId);
//   console.log("Extracted categoryId:", categoryId); // Debugging

//   if (!videoId) {
//     return <p style={{ color: 'red' }}>Error: Video ID is missing.</p>;
//   }

//   return (
//     <div className='play-container'>
//       <PlayVideo videoId={videoId} />
//       <Recommended categoryId={categoryId} />
//     </div>
//   );
// };

// export default Video;

