import PocketBase from "pocketbase"

import type {Collections} from "./types"


const pb = new PocketBase("http://localhost:8090")

const pocketbase = pb

export {pocketbase}

function getCollection<T extends keyof Collections>(name: T) {
  return pb.collection(name)
}

export async function authWithPassword(username: string, password: string) {
  return getCollection("users").authWithPassword(username, password)
}

export function getAuthState() {
  return pocketbase.authStore
}

export async function getRecord<T extends keyof Collections>(collection: T, id: string) {
  return getCollection(collection).getOne(id)
}

export async function getRecords<T extends keyof Collections>(collection: T) {
  return getCollection(collection).getList(1, 50)
}
