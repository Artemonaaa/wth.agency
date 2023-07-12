export interface IProduct {
  id: string
  url: string
  width: number
  height: number
}

export interface IBreeds extends IProduct {
  id: string
}