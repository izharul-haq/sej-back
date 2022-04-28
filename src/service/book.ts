import { singleton } from 'tsyringe';
import { BaseInstance } from '~/api/base';
import { Book } from '~/model/book';

@singleton()
class BookService {
  constructor() {
    console.log('Book service created');
  }

  public async getByCategory(id: number, page?: number, size?: number): Promise<Book[]> {
    let urlParam = `/fee-assessment-books?categoryId=${id}`;

    if (page !== undefined) urlParam += `&page=${page}`;
    if (size !== undefined) urlParam += `&size=${size}`;

    const { data: response } = await BaseInstance.get<Book[]>(urlParam);

    return response;
  }
}

export default BookService;
