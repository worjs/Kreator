const PATH = {
  HOME: '/',
  REGISTER: '/register',
  WELCOME: '/welcome',
  CREATE: '/create',
  POSTS: '/posts',
  POST_DETAILS: '/posts/:id',
  MY_PAGE: '/mypage',
  REWARDS: '/rewards',
  DONATION: '/donation',
  DONATION_STATUS: '/stars/:id/donation-status',
  DONATION_RANKING: '/ranking',
  SHOP: '/shop',
  PRODUCT_DETAIL: '/shop/:id',
} as const;
export default PATH;
