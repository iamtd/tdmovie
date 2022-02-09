const subtitlesConvert = (url) =>
  `https://srt-to-vtt.vercel.app?url=${encodeURIComponent(url)}`

export default subtitlesConvert
