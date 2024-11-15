import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from 'components/layout/Wrapper';
import Body from 'components/layout/Body';
import { Header } from 'components/layout/Header';
import DonationRanking from '../components/features/donation-ranking/DonationRanking.tsx';
import PATH from '../router/paths.ts';

const DonationRankingPage: React.FC = () => {
  const nav = useNavigate();
  const rankings = [
    {
      rank: 1,
      star: { name: 'LISA', image: 'assets/stars/lisa.webp' },
      amount: 220249509,
    },
    {
      rank: 2,
      star: { name: 'BTS', image: 'assets/stars/BTS.jpeg' },
      amount: 198342989,
    },
    {
      rank: 3,
      star: { name: 'Jungkook', image: 'assets/stars/JungKook.jpg' },
      amount: 220249509,
    },
    {
      rank: 4,
      star: { name: 'BLACKPINK', image: 'assets/stars/blackpink.jpg' },
      amount: 220249509,
    },
    {
      rank: 5,
      star: { name: 'aespa', image: 'assets/stars/aespa.jpg' },
      amount: 220249509,
    },
    {
      rank: 6,
      star: { name: 'ive', image: 'assets/stars/ive.jpg' },
      amount: 220249509,
    },
  ];

  return (
    <Wrapper>
      <Header title="Star Donation Rankings" />
      <Body>
        <DonationRanking
          rankings={rankings}
          onReturn={() => nav(PATH.MY_PAGE)}
        />
      </Body>
    </Wrapper>
  );
};

export default DonationRankingPage;
