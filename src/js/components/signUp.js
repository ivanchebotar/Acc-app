import { signUpTemplate } from '../snippets/signUpTemplate'

import { avatarCallback } from '../callbacks/avatarCallback'

import {
  loginCallback,
  passwordCallback,
  submitCallback
} from '../callbacks'

import {
  login,
  password,
  avatar,
  button,
  picture,
  getElems,
  showPassword
} from '../helpers/inputs'

class SignUp extends HTMLElement {
	constructor () {
		super ()

		const shadow = this.attachShadow({ mode: 'closed' })
		shadow.appendChild(document.createElement('main'))
		  .innerHTML = this.template
    getElems(shadow)

    console.log(login, password, avatar, button, picture)
		
    avatar.onchange = avatarCallback

		login.onchange = loginCallback
  
    password.oninput = passwordCallback
   
    button.onclick = submitCallback

    showPassword.addEventListener('click', function () {
      showPassword.classList.contains('active') ? (
        this.classList.remove('active'), 
        password.type = 'password'
      ) : (
        this.classList.add('active'), 
        password.type = 'text'
      )
    })
	}
}

SignUp.prototype.template = signUpTemplate

customElements.define('sign-up', SignUp)

export default document.createElement('sign-up')
