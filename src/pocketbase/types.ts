export interface Contract {
  id: string
  collectionId: string
  collectionName: string
  created: string
  updated: string
  landlord_id: string
  rental_property_id: string
  payed: boolean
  sign_date: string
  author_id: string
}

export interface User {
  id: string
  collectionId: string
  collectionName: string
  username: string
  verified: boolean
  emailVisibility: boolean
  email: string
  created: string
  updated: string
}

export interface Collections {
  contracts: Contract
  users: User
}
