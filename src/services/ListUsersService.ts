import { getCustomRepository } from 'typeorm';

import { classToPlain } from 'class-transformer';
import { UsersRepositories } from '../repositories/UsersRepositories';

class ListUsersService {
  async execute(): Promise<Record<string, void>> {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUsersService };
