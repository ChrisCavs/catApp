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

  saveGif: (e, cb) => {
    let parsedData

    const title = e.target
      .firstElementChild
      .value

    const url = document.querySelector('.gif-container img')
      .attributes
      .src
      .value

    if (title === '') alert("You must put a name in for this gif!")
    
    const currentStorage = window.localStorage.getItem('data')

    currentStorage
      ? parsedData = JSON.parse(currentStorage)
      : parsedData = {}
    
    parsedData[title] = url
    window.localStorage.setItem('data', JSON.stringify(parsedData))
    cb()
  }
}

export default ApiUtil