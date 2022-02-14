import { origin } from '../configs/index'

import {
  login,
  password,
  picture
} from '../helpers/index'

import sha256 from 'fast-sha256'

console.log(sha256)

const hasher = new sha256.Hash()

export const submitCallback = async (event) => {
  console.log(password.value)

  const array = sha256
    .hash(password.value)
  const digest = String.fromCharCode(...array)

  console.log(digest)
  const response = await fetch(`${origin}/user/${login.value}`, {
  	method: 'POST',
  	headers: {
  		'Content-Type': 'application/json'
  	},
  	body: JSON.stringify({
  		password: digest,
  		avatar: picture.src
  	})
  })

  console.log(await response.json())
  console.log(await (await fetch(`${origin}/users/all`)).json())
}