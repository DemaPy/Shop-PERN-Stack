import {makeAutoObservable} from "mobx"


export class DeviceStore {
  constructor() {
    this._types = [
      // {
      //   id: 1,
      //   name: "headphones"
      // },
      // {
      //   id: 2,
      //   name: "smartphones"
      // },
      // {
      //   id: 3,
      //   name: "lenses"
      // },
      // {
      //   id: 4,
      //   name: "camera body"
      // },
    ]
    this._brands = [
      // {
      //   id: 1,
      //   name: "Samsung"
      // },
      // {
      //   id: 2,
      //   name: "Apple"
      // },
      // {
      //   id: 3,
      //   name: "Lenovo"
      // },
      // {
      //   id: 4,
      //   name: "Sony"
      // },
    ]
    this._devices = [
      // {
      //   id: 1,
      //   name: "Samsung Galaxy Note 9",
      //   rating: 5,
      //   price: 1500,
      //   img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800",
      //   description: [
      //     {
      //       id: 1,
      //       title: "Memory RAM",
      //       description: "8 GB"
      //     },
      //     {
      //       id: 2,
      //       title: "Screen",
      //       description: "6.8, 3088 x 1440px, Dynamic AMOLED 2X"
      //     },
      //     {
      //       id: 3,
      //       title: "Memory",
      //       description: "256 GB"
      //     },
      //     {
      //       id: 4,
      //       title: "Accumulator",
      //       description: "5000 mAh"
      //     },
      //     {
      //       id: 5,
      //       title: "Camera",
      //       description: "Rear 200 Mpx + 12 Mpx + 2x10 Mpx, Front 12 Mpx"
      //     },
      //   ]
      // },
      // {
      //   id: 2,
      //   name: "IPhone 12 pro",
      //   rating: 3,
      //   price: 1500,
      //   img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800"
      // },
      // {
      //   id: 3,
      //   name: "Lenovo I-740",
      //   rating: 3,
      //   price: 1500,
      //   img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800"
      // },
      // {
      //   id: 4,
      //   name: "Sony a6400",
      //   rating: 3,
      //   price: 1500,
      //   img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800"
      // },
      // {
      //   id: 5,
      //   name: "Sigma 35mm 1.4 DG/DN",
      //   rating: 3,
      //   price: 1500,
      //   img: "https://files.refurbed.com/ii/samsung-galaxy-note-9-1635510798.jpg?t=resize&h=600&w=800"
      // },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    this._activePage = 1
    this._totalCountItems = 0
    this._limit = 3

    makeAutoObservable(this)
  }

  setActivePage(page) {
    this._activePage = page
  }

  setLimit(limit) {
    this._limit = limit
  }

  setTotalCount(count) {
    this._totalCountItems = count
  }

  setSelectedType(type) {
    this.setActivePage(1)
    this._selectedType = type
  }

  setSelectedBrand(brand) {
    this.setActivePage(1)
    this._selectedBrand = brand
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

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }

  get activePage() {
    return this._activePage
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get limit() {
    return this._limit
  }

  get totalCount() {
    return this._totalCountItems
  }
}