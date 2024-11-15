import { Post } from './posts.state';

// TODO: DATA MOCKS
export const MockPosts: Post[] = [
  {
    id: 1,
    author: 'LilieS2',
    title: 'Lisa Vogue Interview 24.09.18 Translation',
    contents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrls: [
      '/assets/posts/1-1.png',
      '/assets/posts/1-2.png',
      '/assets/posts/1-3.png',
    ],
    price: 5,
    tag: 'Lisa',
    likes: 123,
  },
];
