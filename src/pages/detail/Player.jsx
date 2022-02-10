import React from 'react'
import ReactHlsPlayer from 'react-hls-player/dist'
import subtitleConvert from '../../api/subtitle'

const Player = ({ mediaUrl, subtitles }) => {
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
                src={subtitleConvert(sub.subtitlingUrl)}
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
