import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address")
    .matches(
      /^\S+@\S+$/,
      'Email must not contain spaces before or after the "@" symbol'
    ),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
});

export const addCarSchema = yup.object().shape({
  carModel: yup
    .string()
    .min(3, "Car model must be at least 3 characters")
    .required("Car model is required"),
  price: yup.number().required("Price is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, "Phone number must be exactly 11 digits")
    .required("Phone number is required"),
});
