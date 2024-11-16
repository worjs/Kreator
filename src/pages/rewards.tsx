import Body from 'components/layout/Body';
import Wrapper from 'components/layout/Wrapper';
import { Header } from 'components/layout/Header';
import { Link } from 'react-router-dom';
import PATH from '../router/paths.ts';
import { useEffect, useState } from 'react';
import { isEthereumWallet } from '@dynamic-labs/ethereum';
import { getSigner } from '@dynamic-labs/ethers-v6';
import { KREToken__factory } from '../typechain';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

const RewardsPage = () => {
  const [balance, setBalance] = useState<string>('');
  const { primaryWallet } = useDynamicContext();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;

        const signer = await getSigner(primaryWallet);
        const kreToken = KREToken__factory.connect(
          '0x42705d3F7F9CfD7E0040E7077389E4ea15617Ec7',
          signer,
        );

        // balanceOf 함수 호출
        const balance = await kreToken.balanceOf(signer.getAddress());

        // 가져온 값 설정 (필요에 따라 형식 조정)
        setBalance(balance.toString());
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Wrapper>
      <Header title="My Rewards" />
      <Body className="flex flex-col items-center px-6">
        <p className="text-2xl font-semibold text-center mt-4">Total Rewards</p>
        <div className="relative mt-6 flex justify-center items-center">
          <p className="text-5xl font-bold relative">{`${balance} KRE`}</p>
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
