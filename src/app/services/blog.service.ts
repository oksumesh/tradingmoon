import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts = [
    { id: 1, title: 'How to Trade Forex', description: 'Learn how to start trading forex...', content: 'Full blog post content...' },
    { id: 2, title: 'Understanding the Stock Market', description: 'Basics of the stock market...', content: 'Full blog post content...' }
  ];

  constructor() {}

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }
}