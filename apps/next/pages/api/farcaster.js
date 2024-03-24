import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import fs from 'fs'
// make sure to set your NEYNAR_API_KEY .env
const client = new NeynarAPIClient("F7AF4262-1483-4692-8AC3-6D7A484692FF");


export default async function handler(req, res) {
	let cursor = null
	let json = { users: [] }
	for (let i = 0; i < 10; i++) {
		const response = await client.fetchActiveUsersInSingleChannel('new-york', true, { limit: 100, cursor })
		console.log(`response ${i}`, response)
		json.users = json.users.concat(response.users)
		cursor = response.next.cursor
	}
	fs.writeFileSync('users.json', JSON.stringify(json, null, 2))
	// console.log('response!', response )
	res.status(200).json(json)
}