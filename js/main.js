import ApiUtil from './apiUtil.js';

const appendToMain = (data) => {
  if (data === 'er') return

  const container = document.querySelector('.gif-container')
  const url = data.data.image_url
  container.innerHTML = `<img src='${url}'>`
}

const addListeners = () => {
  const newButton = document.querySelector('.new')
  const saveForm = document.querySelector('.controls-save')
  
  newButton.addEventListener('click', (e) => {
    ApiUtil.getGif(appendToMain)
  })

  saveForm.addEventListener('submit', (e) => {
    ApiUtil.saveGif(e)
  })
}

const populateSavedGifs = () => {
  
  const saved = document.querySelector('.saved')
  const savedData = window.localStorage.getItem('data')
  const savedGifs = JSON.parse(savedData)
  
  if (!savedGifs) return
  
  Object.keys(savedGifs).forEach(key => {
    saved.innerHTML += `
    <div class='saved-gif' data-src=${savedGifs[key]}>
    ${key}
    </div>
    `
  })
}

document.addEventListener('DOMContentLoaded', () => {
  addListeners()
  populateSavedGifs()
  ApiUtil.getGif(appendToMain)
})