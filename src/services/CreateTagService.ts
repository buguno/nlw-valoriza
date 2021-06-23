import { getCustomRepository } from 'typeorm';

import { TagsRepositories } from '../repositories/TagsRepositories';
import { Tag } from '../entities/Tag';

class CreateTagService {
  async execute(name: string): Promise<Tag> {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error('Incorrect name');
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists');
    }

    const tag = tagsRepositories.create({ name });
    await tagsRepositories.save(tag);

    return tag;
  }
}

export { CreateTagService };
