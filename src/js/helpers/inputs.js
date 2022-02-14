let login, password, avatar, button, picture, pictureHint, pictureHintErr, hintErrorLog, hintErrorPass, showPassword

export function getElems (shadow) {
  [login, password, avatar, button, picture, pictureHint, pictureHintErr, hintErrorLog, hintErrorPass, showPassword] = [
    'login', 
    'password',
    'avatar',
    'button',
    'picture',
    'pictureHint',
    'pictureHintErr',
    'hintErrorLog',
    'hintErrorPass',
    'showPassword'
  ].map(id => shadow.querySelector(`#${id}`))
}

export {
  login,
  password,
  avatar,
  button,
  picture,
  pictureHint,
  pictureHintErr,
  hintErrorLog,
  hintErrorPass,
  showPassword
}