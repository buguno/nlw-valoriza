import { getCustomRepository } from 'typeorm';

import { classToPlain } from 'class-transformer';
import { TagsRepositories } from '../repositories/TagsRepositories';

class ListTagsService {
  async execute(): Promise<Record<string, void>> {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
