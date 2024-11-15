import { usePosts } from 'states/posts.state';
import { useUser } from 'states/user.state';
import { PostView } from '../posts/PostView';
import { generatePath } from 'react-router-dom';
import PATH from 'router/paths';
import { UserProfile } from './UserProfile';

const Mypage = () => {
  const user = useUser();
  const posts = usePosts();

  if (!posts) return;
  const userPosts = posts.filter((p) => p.author === user.name);

  return (
    <div className="px-12">
      <UserProfile postLen={userPosts.length} />

      <hr className="mt-8 mb-16" />

      <div className="flex flex-col gap-4 pb-20">
        <p className="text-2xl text-primary font-semibold">My Posts</p>
        {userPosts.map((p, i) => (
          <PostView
            to={generatePath(PATH.POST_DETAILS, { id: String(p.id) })}
            post={p}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Mypage;
