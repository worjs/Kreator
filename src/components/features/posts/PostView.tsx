import { Post } from 'states/posts.state';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface PostViewProps {
  post: Post;
  to: string;
}
export const PostView = ({ post, to }: PostViewProps) => {
  return (
    <Link
      to={to}
      className="rounded-2xl overflow-hidden bg-bg cursor-pointer shadow-sm"
    >
      <img
        src={post.imageUrls[0]}
        className="aspect-[3] object-cover object-center bg-white w-full"
      />

      <div className="p-4">
        <p className="text-xs font-light text-neutral-900">@{post.author}</p>
        <p className="text-sm text-primary font-semibold mt-1">{post.title}</p>

        <div className="mt-1">
          <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
            {post.tag}
          </span>
        </div>

        <p className="text-xs font-light text-neutral-600 my-3 h-8">
          {post.contents.slice(0, 80) + '...'}
        </p>
        <div className="flex justify-between">
          <p className="text-[10px] text-neutral-500"> 2 hours ago</p>
          <div className="flex gap-1">
            <FaRegHeart size={14} />
            <p className="text-[10px] text-neutral-600">{post?.likes ?? 0}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
