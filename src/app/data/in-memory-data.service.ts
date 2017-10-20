import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const login = [
      { id: 1, account: 'iulius', password: '123456', username: 'Iulius', email: ''},
      { id: 2, account: 'chaos', password: '654321', username: 'Chaos', email: ''},
    ];
    return {login};
  }
}
