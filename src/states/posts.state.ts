import { BehaviorSubject } from 'rxjs';
import { MockPosts } from './mock-posts.data';
import { useEffect, useState } from 'react';

export interface Post {
  id: number;
  author: string;
  title: string;
  contents: string;
  imageUrls: string[];
  price: number;
  tag: string;
  likes?: number;
}

const $posts = new BehaviorSubject<Post[]>(MockPosts);

export const addPost = (newPost: Omit<Post, 'id' | 'likes'>) => {
  const prev = $posts.getValue();
  $posts.next([
    ...prev,
    {
      id: prev.length + 1, // id starts with 1
      likes: 0,
      ...newPost,
    },
  ]);
};

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  useEffect(() => {
    $posts.subscribe((p) => {
      setPosts(p);
    });
  }, []);
  return posts;
};
