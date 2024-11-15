import Mypage from 'components/features/mypage';
import Body from 'components/layout/Body';
import Wrapper from 'components/layout/Wrapper';
import { Header } from 'components/layout/Header';

const MyBoardPage = () => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Mypage />
      </Body>
    </Wrapper>
  );
};

export default MyBoardPage;
