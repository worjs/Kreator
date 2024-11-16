import PATH from 'router/paths';
import { IoMdSearch } from 'react-icons/io';
import { usePosts } from 'states/posts.state';
import { PostView } from './PostView';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = usePosts();
  return posts ? (
    <div className="px-6">
      <div className="bg-neutral-100 rounded-full p-4 mb-6">
        <IoMdSearch size={18} />
      </div>

      <p className="text-primary text-3xl font-semibold mb-4">Today's Best</p>
      <div className="grid grid-cols-2 gap-4">
        {posts
          .sort((a, b) => a.id - b.id)
          .map((p, i) => (
            <PostView to={String(p.id)} key={i} post={p} />
          ))}
      </div>

      <Link
        to={PATH.MY_PAGE}
        className="absolute shadow-lg bottom-12 right-12 bg-primary rounded-full w-16 h-16 flex-center text-2xl text-white"
      >
        MY
      </Link>
    </div>
  ) : null;
};

export default Posts;
