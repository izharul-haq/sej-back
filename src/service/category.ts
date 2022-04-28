import { singleton } from 'tsyringe';
import { BaseInstance } from '~/api/base';
import { Category } from '~/model/category';

@singleton()
class CategoryService {
  constructor() {
    console.log('Category service created');
  }

  public async getAll(): Promise<Category[]> {
    const { data: response } = await BaseInstance.get<Category[]>('/fee-assessment-categories');

    return response;
  }
}

export default CategoryService;
