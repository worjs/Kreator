import PATH from "router/paths";
import Wrapper from "components/layout/Wrapper";
import { DynamicWidget, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useIsLoggedIn();
  const nav = useNavigate();
  useEffect(() => {
    if (isLoggedIn) nav(PATH.REGISTER);
  }, [isLoggedIn]);

  return (
    <Wrapper>
      <div
        style={{
          backgroundImage: "url('/assets/bg/home-bg.png')",
          backgroundSize: "100% 100%",
        }}
        className="flex-1 h-screen relative"
      >
        <div className="absolute bottom-44 left-0 right-0 flex-center">
          <DynamicWidget
            buttonClassName="bg-red-500"
            innerButtonComponent={<div>Continue with Dynamic</div>}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
