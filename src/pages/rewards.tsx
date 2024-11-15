import Body from 'components/layout/Body';
import Wrapper from 'components/layout/Wrapper';
import { Header } from 'components/layout/Header';
import { Link } from 'react-router-dom';
import PATH from '../router/paths.ts';

const RewardsPage = () => {
  const price = 10;
  return (
    <Wrapper>
      <Header title="My Rewards" />
      <Body className="flex flex-col items-center px-6">
        <p className="text-2xl font-semibold text-center mt-4">Total Rewards</p>
        <div className="relative mt-6 flex justify-center items-center">
          <p className="text-5xl font-bold relative">{`${price} USDC`}</p>
        </div>
        <div className=" mt-8 space-x-3 w-full flex justify-between">
          <Link
            to={PATH.DONATION}
            className="btn-secondary w-full mt-8 text-center"
          >
            Build Up Donation
          </Link>
          <Link to={PATH.SHOP} className="btn-primary w-full mt-8 text-center">
            Shop
          </Link>
        </div>
      </Body>
    </Wrapper>
  );
};

export default RewardsPage;
