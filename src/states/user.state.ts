import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  profileImg: string;
}
export const $user = new BehaviorSubject<User | null>(null);

const defaultUser: User = {
  name: 'LisaFan',
  profileImg: '/assets/profile/1.png',
};

export const registerUser = (user: User) => {
  $user.next(user);
};

export const useUser = (): User => {
  const [user, setUser] = useState<User>(defaultUser);
  useEffect(() => {
    $user.subscribe((u) => setUser(u ?? defaultUser));
  }, []);
  return {
    name: user.name,
    profileImg: user.profileImg,
  };
};
