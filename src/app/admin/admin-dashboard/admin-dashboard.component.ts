import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  posts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

  editPost(id: number): void {
    console.log(`Edit post with ID: ${id}`);
    // Logic to edit the post (navigate to an edit page or open a modal)
  }

  deletePost(id: number): void {
    console.log(`Delete post with ID: ${id}`);
    // Logic to delete the post
  }
}
