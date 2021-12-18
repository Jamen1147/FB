import repositories from '../repositories';
import UserService from './user';

class Services {
  readonly user: UserService;

  constructor() {
    this.user = new UserService(repositories.user);
  }
}

const services = new Services();
export default services;
