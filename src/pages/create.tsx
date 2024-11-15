import { Header } from 'components/layout/Header';
import React from 'react';
import Wrapper from 'components/layout/Wrapper';
import Body from 'components/layout/Body';
import CreatePost from 'components/features/create';

const CreatePage: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Create" />
      <Body className="flex flex-col px-6">
        <CreatePost />
      </Body>
    </Wrapper>
  );
};

export default CreatePage;
