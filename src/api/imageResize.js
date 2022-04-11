const imageResize = (url, width) =>
  `https://images.weserv.nl/?url=${encodeURIComponent(
    url
  )}&w=${width}&fit=outside`

export default imageResize
