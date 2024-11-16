import { useState } from 'react';
import { Post } from 'states/posts.state';
import { UnlockerButton } from './UnlockButton';
import { useUser } from 'states/user.state';

interface PostDetailsProps {
  post: Post;
}

const PostDetails = ({ post }: PostDetailsProps) => {
  const user = useUser();
  const [unlocked, setUnlocked] = useState<boolean>( user.purchasedPostIds.includes(post.id)  || post.author === user.name);

  return (
    <div className="px-6 pb-6 relative">
      <p className="mt-2 font-semibold text-2xl text-primary text-center">
        {post.title}
      </p>

      <div className="mt-2 text-center">
        <span
          className={`inline-block px-4 py-2 border rounded-full ${'bg-primary text-white'}`}
        >
          {post.tag}
        </span>
      </div>

      <p className="mt-4 text-sm font-light text-neutral-700 mb-6">
        {post.contents}
      </p>

      {post.imageUrls.slice(0, unlocked ? 999 : 1).map((src, i) => (
        <img className="w-full" src={src} key={i} />
      ))}

      <UnlockerButton
        post={post}
        unlocked={unlocked}
        setUnlocked={setUnlocked}
      />
    </div>
  );
};

export default PostDetails;
