import { singleton } from 'tsyringe';
import { Book } from '~/model/book';
import BookService from '~/service/book';

@singleton()
class BookHandler {
  constructor(private bookService: BookService) {}

  public getByCategory = async (id: number, page?: number, size?: number): Promise<Book[]> => {
    const books = await this.bookService.getByCategory(id, page, size);

    return books;
  };
}

export default BookHandler;
