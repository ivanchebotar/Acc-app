import { origin } from '../configs/index'

export const validateLogin = async (login) => {
	const { error } = await (await fetch(`${origin}/user/${login}`)).json()
	return !!error
}