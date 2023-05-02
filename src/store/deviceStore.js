import {makeAutoObservable} from "mobx"


export class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "headphones"
      },
      {
        id: 2,
        name: "smartphones"
      }
    ]
    this._brands = [
      {
        id: 1,
        name: "Samsung"
      },
      {
        id: 2,
        name: "Apple"
      }
    ]
    this._devices = [
      {
        id: 1,
        name: "Samsung Note 9",
        rating: 5,
        price: 1500,
        img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800"
      },
      {
        id: 2,
        name: "Samsung Note 9",
        rating: 3,
        price: 1500,
        img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800"
      },
    ]
    makeAutoObservable(this)
  }

  setTypes(data) {
    this._types = data
  }

  setBrands(data) {
    this._brands = data
  }

  setDevices(data) {
    this._devices = data
  }

  get getTypes() {
    return this._types
  }

  get getBrands() {
    return this._brands
  }

  get getDevices() {
    return this._devices
  }
}