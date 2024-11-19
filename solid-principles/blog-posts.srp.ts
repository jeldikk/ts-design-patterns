// the main purpose of BlogPost is to manage the
// blog posts
// adding an extra responsibility(displaying the blog post), which is against to Single Responsibility principle
class BlogPost {
  constructor(public title: string, public content: string) {}

  createPost() {}

  updatePost() {}

  deletePost() {}

  //   displayHTML() {
  //     return `<h1>${this.title}</h1><p>${this.content}</p>`;
  //   }
}

class RenderBlogPost {
  constructor(public blogPost: BlogPost) {}

  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}
