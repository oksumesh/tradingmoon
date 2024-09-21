import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    // Fetch the latest posts
    this.posts = this.blogService.getPosts();
  }
}
