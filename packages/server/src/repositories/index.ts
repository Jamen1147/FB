import UserModel from '../models/User';
import UserRepository from './user';

class Repositories {
  readonly user: UserRepository;

  constructor() {
    this.user = new UserRepository(UserModel);
  }
}

const repositories = new Repositories();
export default repositories;
