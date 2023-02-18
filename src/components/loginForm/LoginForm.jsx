import { Button } from "@chakra-ui/react";
import { Formik } from "formik";
import { loginSchema } from "../../helper/validation";
import PrimaryInput from "../primaryInput/PrimaryInput";
import { mianContainerStyle } from "./styles/LoginForm";

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values) => handleSubmit(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <>
          <PrimaryInput
            heading="EMAIL"
            placeholder="Email"
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            type="email"
            error={errors.email}
            mianContainerStyle={mianContainerStyle}
          />

          <PrimaryInput
            heading="PASSWORD"
            placeholder="Password"
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            type="password"
            error={errors.password}
            mianContainerStyle={mianContainerStyle}
          />

          <Button onClick={handleSubmit}>Login</Button>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
