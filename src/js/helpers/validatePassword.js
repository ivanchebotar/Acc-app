import sha256 from 'fast-sha256'

import { 
  userPass,
  userBtn
} from './index'

const hasher = new sha256.Hash()


export function validatePassword (password) {
  const array = sha256.hash(password)
  const digest = String.fromCharCode(...array)
  
  const testPass = localStorage.getItem('password')

  return digest == testPass
}