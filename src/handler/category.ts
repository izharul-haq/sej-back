import { singleton } from 'tsyringe';
import { Category } from '~/model/category';
import CategoryService from '~/service/category';

@singleton()
class CategoryHandler {
  constructor(private categoryService: CategoryService) {}

  public getAll = async (): Promise<Category[]> => {
    const categories = await this.categoryService.getAll();

    return categories;
  };
}

export default CategoryHandler;
