import PocketBase, {ListResult, RecordService} from "pocketbase"

import type {Collections} from "./types"


const pb = new PocketBase("http://localhost:8090")

const pocketbase = pb

export {pocketbase}

function getCollection<T extends keyof Collections>(name: T): RecordService {
  return pb.collection(name)
}

export async function getRecord<T extends keyof Collections>(
  collection: T,
  id: string,
): Promise<Collections[T] | null> {
  return getCollection(collection).getOne(id)
}

export async function getRecords<T extends keyof Collections>(
  collection: T,
): Promise<ListResult<Collections[T]> | null> {
  return getCollection(collection).getList(1, 50)
}
