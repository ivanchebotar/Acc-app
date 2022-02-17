let userName, userPass, userBtn, hintErrorLogIn, hintErrorPass, showPasswordIn

export function getElemsIn (shadow) {
  [userName, userPass, userBtn, hintErrorLogIn, hintErrorPass, showPasswordIn] = [
    'login', 
    'password',
    'button',
    'hintErrorLogIn',
    'hintErrorPass',
    'showPasswordIn'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  userName,
  userPass,
  userBtn,
  hintErrorLogIn,
  hintErrorPass,
  showPasswordIn
}
