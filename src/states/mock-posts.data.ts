import { Post } from './posts.state';

// TODO: DATA MOCKS
export const MockPosts: Post[] = [
  {
    id: 0,
    author: 'LilieS2',
    title: 'Lisa Vogue Interview 24.09.18 Translation',
    contents:
      'Lisa talked about the concept of the "New Woman" that she pursues...',
    imageUrls: [
      '/assets/posts/1-1.png',
      '/assets/posts/1-2.png',
      '/assets/posts/1-3.png',
    ],
    price: 5,
    tag: 'Lisa',
    likes: 1214,
  },
  {
    id: 2,
    author: 'Lelole',
    title: 'Lisa New Music video Symbols & Story',
    contents:
      'The various props used in Lisa’s new song connect to her previous works...',
    imageUrls: ['/assets/posts/1-3.png'],
    price: 5,
    tag: 'LISA',
    likes: 3421,
  },
  {
    id: 3,
    author: 'LisaFangin',
    title: 'BLACKPINK LISA Fan-Art',
    contents: 'No Description',
    imageUrls: ['/assets/posts/image 8.png'],
    price: 5,
    tag: 'LISA',
    likes: 0,
  },
  {
    id: 4,
    author: 'KosmeticK',
    title: "In-Depth Analysis of Lisa's Makeup Style",
    contents: "Let's explore the key makeup secrets of Lisa...",
    imageUrls: ['/assets/posts/post_4.jpg'],
    price: 5,
    tag: 'LISA',
    likes: 5,
  },
  {
    id: 5,
    author: 'skadi',
    title: "5 Idols I'd Love to see Perform with Lisa",
    contents:
      'Karina, Lee Youngji, Natty, BIBI, and Jihyo—What would their performances be like?',
    imageUrls: ['/assets/posts/post_3.jpg'],
    price: 5,
    tag: 'LISA',
    likes: 2,
  },
];
