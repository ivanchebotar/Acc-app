import { signInTemplate } from '../snippets'

import {
  userName,
  userPass,
  userBtn,
  hintErrorLog,
  hintErrorPass,
  showPasswordIn,
  getElemsIn
} from '../helpers'

import { userNameCallBack } from '../callbacks'

class SignIn extends HTMLElement {
  constructor () {
    super ()

    const shadow = this.attachShadow({ mode: 'closed' })
    this.container = shadow
      .appendChild(document.createElement('main'))
    this.container.innerHTML = signInTemplate

    getElemsIn(shadow)

    userName.onchange = userNameCallBack

    showPasswordIn.addEventListener('click', function () {
      showPasswordIn.classList.contains('active') ? (
        this.classList.remove('active'), 
        userPass.type = 'password'
      ) : (
        this.classList.add('active'), 
        userPass.type = 'text'
      )
    })
  }
}

customElements.define('sign-in', SignIn)

export default document.createElement('sign-in')
