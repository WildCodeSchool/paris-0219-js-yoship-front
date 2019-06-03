import React from 'react';
import YouTube from 'react-youtube';
// Project Section
class Media extends React.Component {

  render() {
    return (
      <div className='media'>
        <YouTube
          videoId="u9R8Mst7sk4"
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {

    event.target.pauseVideo();
  }
}

export default Media;


