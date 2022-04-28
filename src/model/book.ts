import { Chapter } from './chapter';

export interface Book {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: Chapter[];
  audio_length?: number;
}
