const ApiUtil = {
  getGif: (cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      `http://api.giphy.com/v1/gifs/random?tag=cats&rating=g&api_key=zbK6F5n3BnL6tX8XDSb2LICh5g0Zme4L`
    )

    xhr.onload = () => {
      cb(JSON.parse(xhr.response))
    }

    xhr.onerror = () => {
      cb('er')
    }

    xhr.send()
  },

  saveGif: (e) => {
    const title = e.target
      .firstElementChild
      .value

    const url = document.querySelector('.gif-image')
      .attributes
      .src

    const currentStorage = window.localStorage.getItem('data')
    
    if (currentStorage) {
      const parsedData = JSON.parse(currentStorage)
      parsedData[title] = url
    } else {
      const parsedData = {title: url}
    }
    
    window.localStorage.setItem('data', JSON.stringify(parsedData))
  }
}

export default ApiUtil