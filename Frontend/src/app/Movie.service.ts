import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://localhost:8080/movie/allListMovie';
  urladd = 'http://localhost:8080/movie/createMovie';

  async getAllMovies(): Promise<Movie[]> {
    const data = await fetch(this.url);
    return await data.json();
  }

  async getAddMovies(adventure: Movie) {
    console.log(adventure); 
    try {
      const response = await fetch(this.urladd, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adventure)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
      return null; // hoặc trả về một giá trị mặc định
    }
  }

}
