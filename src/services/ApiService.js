import works from './works.json'

export class ApiService {
  async getWorks() {
    return await works
  }
}
