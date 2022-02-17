import { 
  userName,
  userPass,
  userBtn,
  getUserDetails
} from "../helpers";

import { 
  hintErrorLogIn
} from '../helpers/'

// console.log(hintErrorLogIn)

export async function userNameCallBack (event) {
  const response = await getUserDetails(event.target.value)
  if (response) {
    const { password, avatar } = response
    localStorage.setItem('password', password)
    localStorage.setItem('avatar', avatar)
    userPass.disabled = false
    userName.style.borderColor = '#090'
  } else {
    userBtn.disabled = true
    userName.style.borderColor = '#f00'
  }

  if (this.userName = response) {
    hintErrorLogIn.classList.remove('active')
  } else {
    hintErrorLogIn.classList.add('active')
  }
}