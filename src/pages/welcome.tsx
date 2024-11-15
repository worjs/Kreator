import Wrapper from 'components/layout/Wrapper';
import PATH from 'router/paths';
import { Link } from 'react-router-dom';
import { useUser } from 'states/user.state';

const WelcomePage = () => {
  const user = useUser();
  return (
    <Wrapper>
      <div className="flex flex-col px-6">
        <p className="text-center text-3xl mt-48">Hello, {user.name}!</p>
        {/* LINK to : TODO */}
        <Link to={PATH.CREATE} className="btn-primary text-center w-full mt-20">
          Create Now ✏️
        </Link>
        <Link to={PATH.POSTS} className="btn-secondary text-center w-full mt-5">
          ...or, check out others' K-reations! 👀
        </Link>
      </div>
    </Wrapper>
  );
};

export default WelcomePage;
