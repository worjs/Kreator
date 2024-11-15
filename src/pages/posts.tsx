import Posts from 'components/features/posts';
import Body from 'components/layout/Body';
import { Header } from 'components/layout/Header';
import Wrapper from 'components/layout/Wrapper';

const PostsPage: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Posts" />
      <Body className="relative">
        <Posts />
      </Body>
    </Wrapper>
  );
};

export default PostsPage;
