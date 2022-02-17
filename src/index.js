import './styles/index.scss';
import SignUp from './js/components/signUp'
import SignIn from './js/components/signIn'

document.getElementById('form').appendChild(SignIn)

const signUpBtn = document.querySelector('.sign-up-btn')
const signInBtn = document.querySelector('.sign-in-btn')

const signInHold = document.querySelector('.sign-in-form')
const signUpHold = document.querySelector('.sign-up-form')

signUpBtn.addEventListener('click', function () {
  
  signUpHold.classList.remove('active')
  signInHold.classList.add('active')

  document.getElementById('form').innerHTML = ''
  document.getElementById('form').appendChild(SignUp)

})

signInBtn.addEventListener('click', function () {

  signUpHold.classList.add('active')
  signInHold.classList.remove('active')

  document.getElementById('form').innerHTML = ''
  document.getElementById('form').appendChild(SignIn)
})
