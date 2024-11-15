import Body from 'components/layout/Body';
import Wrapper from 'components/layout/Wrapper';
import PATH from 'router/paths';
import PostDetails from 'components/features/post-details';
import { Header } from 'components/layout/Header';
import { useMatch, useNavigate } from 'react-router-dom';
import { usePosts } from 'states/posts.state';
import { useEffect } from 'react';

const PostDetailsPage: React.FC = () => {
  const match = useMatch(PATH.POST_DETAILS);
  const id = Number(match?.params.id);
  const posts = usePosts();
  const post = posts?.find((p) => p.id === id);
  console.log(id, post, posts);
  const nav = useNavigate();

  useEffect(() => {
    if (!posts) return;
    if (!post) nav(PATH.POSTS);
  }, [id]);

  return !posts ? null : post ? (
    <Wrapper>
      <Header title="Post" />
      <Body>
        <PostDetails post={post} />
      </Body>
    </Wrapper>
  ) : null;
};

export default PostDetailsPage;
