import Wrapper from 'components/layout/Wrapper';
import Body from 'components/layout/Body';
import PATH from 'router/paths';
import { Header } from 'components/layout/Header';
import { TextInput } from 'components/materials/TextInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'states/user.state';

const RegisterPage = () => {
  const [nickname, setNickname] = useState<string>('');
  const nav = useNavigate();
  const onRegister = () => {
    registerUser({ name: nickname, profileImg: '/assets/profile/1.png' });
    nav(PATH.WELCOME);
  };

  return (
    <Wrapper>
      <Header title="Sign up" />
      <Body className="flex-col flex-center px-6">
        <p className="text-5xl">Create Your Profile</p>

        <img
          className="mt-12 w-56 border-primary border rounded-full"
          src="assets/illust/register.png"
        />

        <div className="mt-20 w-full">
          <p className="text-xl">Nickname</p>
          <TextInput
            className="mt-2 w-full"
            value={nickname}
            setValue={setNickname}
            placeholder="LisaFan"
            onEnter={() => setNickname('LisaFan')}
          />
        </div>

        <button onClick={onRegister} className="btn-primary w-full mt-8">
          Next
        </button>
      </Body>
    </Wrapper>
  );
};

export default RegisterPage;
