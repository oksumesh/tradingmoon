import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    // Get all blog posts
    this.posts = this.blogService.getPosts();
  }
}
