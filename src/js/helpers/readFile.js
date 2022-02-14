import { pictureHint, pictureHintErr } from '../helpers/index'

export function readFile (file, elem) {
  if (!(file instanceof File)) return console.warn('Invalid file')

  if (elem?.nodeType !== 1) return console.warn('Invalid elem')

  if (file.type.indexOf('image')) {
    pictureHint.classList.remove('success')
    pictureHint.classList.add('error')
    return
  } else {
    pictureHint.classList.add('success')
    pictureHint.classList.remove('error')
  }
    

  const reader = new FileReader
  
  reader.onload = function (event) {
    elem.src = event.target.result
  }

  reader.readAsDataURL(file)
}