import { passwordRule } from '../configs/index'

import { password, hintErrorPass } from '../helpers/index'

export const passwordCallback = function (event) {
  const response = Boolean(event.target.value.match(passwordRule))
  password.style.borderColor = response ? '#090' : '#f00'
  this.password = response ? hintErrorPass.classList.remove('active') : hintErrorPass.classList.add('active')
  
  button.disabled = response
}