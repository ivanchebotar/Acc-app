import { picture } from '../helpers/index'

import { readFile } from '../helpers/readFile'

export const avatarCallback = function (event) {
  readFile(event.target.files[0], picture)
  // pictureHint.classList.add('hidden')
}