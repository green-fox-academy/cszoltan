/*
Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost
*/

import {BlogPost} from "./blog-post";

class Blog {
  blogs: BlogPost[] = [];

  delete(id: number) {
    this.blogs[id] = this.blogs[this.blogs.length - 1];
    this.blogs.pop();
  }

  update(id: number, blog: BlogPost){
    this.blogs[id] = blog;
  }
}

let blog1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04');

let blog2 = new BlogPost('Tim Urban', 'Wait but Why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10');

let blog3 = new BlogPost('William Turton', 'ne Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28');

let page = new Blog();

page.blogs.push(blog1);
page.blogs.push(blog2);
page.blogs.push(blog3);

page.delete(0);
page.update(1, blog3);
