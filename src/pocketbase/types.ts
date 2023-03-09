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

export interface Collections {
  contracts: Contract
}
