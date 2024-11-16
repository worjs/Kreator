import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  profileImg: string;
  purchasedPostIds: string[]; // 추가된 필드
}
export const $user = new BehaviorSubject<User | null>(null);

const defaultUser: User = {
  name: 'LisaFan',
  profileImg: '/assets/profile/1.png',
  purchasedPostIds: [], // 기본값 추가
};

export const registerUser = (user: User) => {
  $user.next(user);
};

export const useUser = (): User => {
  const [user, setUser] = useState<User>(defaultUser);
  useEffect(() => {
    const subscription = $user.subscribe((u) => setUser(u ?? defaultUser));
    return () => subscription.unsubscribe(); // 구독 해제 추가
  }, []);
  return {
    name: user.name,
    profileImg: user.profileImg,
    purchasedPostIds: user.purchasedPostIds, // 반환 객체에 추가
  };
};
