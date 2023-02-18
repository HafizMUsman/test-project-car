import { Flex, Input, Text } from "@chakra-ui/react";
import {
  containerStyle,
  errorTextStyle,
  headingTextStyle,
  inputFieldStyle,
} from "./styles/PrimaryInput";

const PrimaryInput = (props) => {
  const {
    heading,
    placeholder,
    onChange,
    onBlur,
    value,
    type,
    error,
    mianContainerStyle,
  } = props;

  return (
    <Flex {...containerStyle} {...mianContainerStyle}>
      {heading && <Text {...headingTextStyle}>{heading}</Text>}
      <Input
        {...inputFieldStyle}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />
      {error && <Text {...errorTextStyle}>{error}</Text>}
    </Flex>
  );
};

export default PrimaryInput;
