export interface EmojiData {
  data: Datum[]
  set: Set[]
}

export interface Datum {
  contentTextMapHash: number
  icon: string
  id: number
  order: number
  setID: number
}

export interface Set {
  icon: string
  id: number
  nameTextMapHash: number
  order: number
}
