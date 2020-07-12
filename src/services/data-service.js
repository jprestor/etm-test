import { DataItem } from './types';

export class DataService {
  _getUrl = () => {
    return `https://test.octweb.ru/api/pages/index/`;
  };

  async _getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  }

  getData = () => {
    return this._getResource(this._getUrl());
  };

  // _transformData = (block: ResItem): any => {
  //   return {
  //     id: block.id, // mbid есть не у всех
  //     title: block.title,
  //   };
  // };
}
