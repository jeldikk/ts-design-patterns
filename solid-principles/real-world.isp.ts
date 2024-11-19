// creating posts
// commenting posts
// sharing posts

// Admin - who can create, comment & share
// Regular - who can comment and share

// I of SOLID means Interface Segregation principle, which mean

interface CreatePost {
  create(post: string): void;
}

interface CommentPost {
  comment(post: string): void;
}

interface SharePost {
  share(post: string): void;
}

class Admin implements CreatePost, CommentPost, SharePost {
  constructor() {}
  public comment(post: string) {
    console.log("commenting the post ", post);
  }
  public create(post: string) {
    console.log("creating the post ", post);
  }
  public share(post: string) {
    console.log("sharing the post ", post);
  }
}

class Regular implements CommentPost, SharePost {
  constructor() {}
  public comment(post: string): void {
    console.log("commenting the post ", post);
  }
  public share(post: string): void {
    console.log("sharing the post ", post);
  }
}

const admin = new Admin();
const regular = new Regular();

admin.create("I am Post");
// admin.
