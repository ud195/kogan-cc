const fetch = require('node-fetch');

class ApiUtilities {

  // Method to fetch data given a URL
  async fetchData(url = '') {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        return await response.json();
      }
    } catch(error) {
      throw new Error(error);
    }
  }

  // A method to fetch data recursively until the api last page is reached.
  async fetchAll (url = '') {
    let nextUrl = url;
    let nextPage = '';
    const data = [];
    
    do {
      const result = await this.fetchData(nextUrl);
      nextPage = result.next;
      nextUrl = url.split('/api/')[0].concat(nextPage);
      data.push(...result.objects);
    } while (nextPage !== null);

    return data;
  }
}

module.exports = ApiUtilities;