import {
  login,
  password,
  button,
  hintErrorLog,
  validateLogin
} from '../helpers/index'

export const loginCallback = async function (event) {
  const response = await validateLogin(event.target.value)
  login.style.borderColor = response ? '#090' : '#f00'
  this.login = response ? hintErrorLog.classList.remove('active') : hintErrorLog.classList.add('active')

  button.disabled = !response
  password.disabled = !response
}