import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Холодильник',
      },
      {
        id: 2,
        name: 'Смартфоны',
      },
      {
        id: 3,
        name: 'Телевизоры',
      },
      {
        id: 4,
        name: 'Пылесосы',
      },
    ];
    this._brands = [
      {
        id: 1,
        name: 'Samsung',
      },
      {
        id: 2,
        name: 'Apple',
      },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro%20max/825ba5c5f35acea402daa6cd3833b2c6-800x700h.jpg.webp',
      },
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro%20max/825ba5c5f35acea402daa6cd3833b2c6-800x700h.jpg.webp',
      },
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro%20max/825ba5c5f35acea402daa6cd3833b2c6-800x700h.jpg.webp',
      },
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro%20max/825ba5c5f35acea402daa6cd3833b2c6-800x700h.jpg.webp',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
