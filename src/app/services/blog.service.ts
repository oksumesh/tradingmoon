import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts = [
    { id: 1, title: 'How to Trade Forex', description: 'Learn how to start trading forex...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg' },
    { id: 2, title: 'Understanding the Stock Market', description: 'Basics of the stock market...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  },
    { id: 3, title: 'How to Trade Forex', description: 'Learn how to start trading forex...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  },
    { id: 4, title: 'Understanding the Stock Market', description: 'Basics of the stock market...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  },
    { id: 5, title: 'How to Trade Forex', description: 'Learn how to start trading forex...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  },
    { id: 6, title: 'Understanding the Stock Market', description: 'Basics of the stock market...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  },
    { id: 7, title: 'How to Trade Forex', description: 'Learn how to start trading forex...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  },
    { id: 8, title: 'Understanding the Stock Market', description: 'Basics of the stock market...', content: 'Full blog post content...',image:'https://www.apple.com/newsroom/images/2024/09/the-iphone-16-lineup-airpods-4-apple-watch-series-10-arrive-around-the-world/tile/Apple-Regent-Street-London-hero-240920-lp.jpg.landing-gradient-large.jpg'  }
  ];

  constructor() {}

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}