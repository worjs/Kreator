import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  profileImg: string;
  purchasedPostIds: number[]; // 추가된 필드
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

export const purchasePost = (postId: number) => {
  // 현재 유저 상태를 가져옴
  const currentUser = $user.getValue();
  if (currentUser) {
    // postId가 이미 추가되어 있는지 확인 후 추가
    if (!currentUser.purchasedPostIds.includes(postId)) {
      const updatedUser: User = {
        ...currentUser,
        purchasedPostIds: [...currentUser.purchasedPostIds, postId],
      };
      // 업데이트된 유저 상태를 전파
      $user.next(updatedUser);
    }
  } else {
    console.warn('No user is currently registered');
  }
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
