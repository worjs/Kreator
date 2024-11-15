import { Link } from 'react-router-dom';
import PATH from 'router/paths';
import { useUser } from 'states/user.state';

interface UserProfileProps {
  postLen: number;
}
export const UserProfile = ({ postLen }: UserProfileProps) => {
  const user = useUser();
  return (
    <div className="flex-col flex-center py-12">
      <img src={user.profileImg} className="w-32 h-32" />
      <p className="text-neutral-700 text-2xl mt-8">@{user.name}</p>
      <p className="text-sm text-primary mt-1"> {postLen} posts</p>

      <div className="flex gap-4 w-80 mt-8 ">
        <Link to={PATH.REWARDS} className="flex-1 text-center btn-secondary">
          My Rewards
        </Link>
        <Link to={PATH.CREATE} className="flex-1 text-center btn-primary">
          Create New
        </Link>
      </div>
    </div>
  );
};
