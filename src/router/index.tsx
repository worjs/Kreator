import { createBrowserRouter } from 'react-router-dom';
import PATH from './paths';
import HomePage from 'pages/home';
import RegisterPage from 'pages/register';
import WelcomePage from 'pages/welcome';
import CreatePage from 'pages/create';
import PostsPage from 'pages/posts';
import PostDetailsPage from 'pages/post-details';
import MyBoardPage from 'pages/mypage';
import RewardsPage from 'pages/rewards';
import DonationPage from '../pages/donation.tsx';
import DonationStatusPage from '../pages/dontationStatus.tsx';
import DonationRankingPage from '../pages/donationRanking.tsx';
import ShopPage from '../pages/shop.tsx';
import ProductDetailPage from '../pages/product-detail.tsx';

const router = createBrowserRouter([
  { path: PATH.HOME, element: <HomePage /> },
  { path: PATH.REGISTER, element: <RegisterPage /> },
  { path: PATH.WELCOME, element: <WelcomePage /> },
  { path: PATH.CREATE, element: <CreatePage /> },
  { path: PATH.POSTS, element: <PostsPage /> },
  { path: PATH.POST_DETAILS, element: <PostDetailsPage /> },
  { path: PATH.MY_PAGE, element: <MyBoardPage /> },
  { path: PATH.REWARDS, element: <RewardsPage /> },
  { path: PATH.DONATION, element: <DonationPage /> },
  { path: PATH.DONATION_STATUS, element: <DonationStatusPage /> },
  { path: PATH.DONATION_RANKING, element: <DonationRankingPage /> },
  { path: PATH.SHOP, element: <ShopPage /> },
  { path: PATH.PRODUCT_DETAIL, element: <ProductDetailPage /> },
]);

export default router;
