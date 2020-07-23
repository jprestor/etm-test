export default class NewsService {
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const res = await fetch('./assets/data/data.json');

        if (!res.ok) {
          reject(new Error(`Could not fetch ${url}, received ${res.status}`));
        }

        resolve(res.json());
      }, 500);
    });
  }
}
