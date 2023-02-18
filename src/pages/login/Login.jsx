import { Flex, Heading } from "@chakra-ui/react";
import LoginForm from "../../components/loginForm/LoginForm";
import { formContainerStyle, mainFlexStyle } from "./styles/Login";

const Login = () => {
  return (
    <Flex {...mainFlexStyle}>
      <Flex {...formContainerStyle}>
        <Heading>LOGIN</Heading>
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default Login;
