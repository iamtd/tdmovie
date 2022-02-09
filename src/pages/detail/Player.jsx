import React from 'react'
import ReactHlsPlayer from 'react-hls-player/dist'
import subtitlesConvert from '../../api/subtitles'

const Player = ({ mediaUrl, subtitles }) => {
  console.log(subtitles)
  return (
    <div>
      <ReactHlsPlayer
        className="detail__video"
        crossOrigin=""
        playsInline
        controls
        autoPlay={false}
        src={mediaUrl}
      >
        {subtitles
          ? subtitles.map((sub, i) => (
              <track
                key={i}
                kind="subtitles"
                src={subtitlesConvert(sub.subtitlingUrl)}
                srcLang={sub.languageAbbr}
                label={sub.language}
              />
            ))
          : null}
      </ReactHlsPlayer>
    </div>
  )
}

export default Player
