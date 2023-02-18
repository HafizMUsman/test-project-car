import {
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";
import PrimaryInput from "../../components/primaryInput/PrimaryInput";
import { headingTextStyle } from "../../components/primaryInput/styles/PrimaryInput";
import { addCarSchema } from "../../helper/validation";
import { formContainerStyle, mainContainerStyle } from "./styles/AddCar";

const AddCar = () => {
  const [selectedCity, setSelectedCity] = useState("LAHORE");
  const [selectedRange, setSelectedRange] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleImageChange = (event) => {
    const selectedFile = URL.createObjectURL(event.target.files[0]);

    setSelectedImages([...selectedImages, selectedFile]);
  };
  const removeImage = (index) => {
    const images = [...selectedImages];
    images.splice(index + 1, 1);
    setSelectedImages(images);
  };

  return (
    <Flex {...mainContainerStyle}>
      <Flex {...formContainerStyle}>
        <Heading>ADD CAR</Heading>
        <Formik
          initialValues={{
            carModel: "",
            price: 0,
            phoneNumber: "",
            city: "LAHORE",
          }}
          validationSchema={addCarSchema}
          onSubmit={(values) => handleSubmit(values)}>
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Flex
                flexDir={{ sm: "column", lg: "row" }}
                gap={{ lg: "1em" }}
                mt="1em">
                <PrimaryInput
                  heading="Car Model"
                  placeholder="Car Model"
                  onChange={handleChange("carModel")}
                  onBlur={handleBlur("carModel")}
                  value={values.carModel}
                  error={errors.carModel}
                  mianContainerStyle={{ minW: "30%" }}
                />

                <PrimaryInput
                  heading="Price"
                  placeholder="Price"
                  onChange={handleChange("price")}
                  onBlur={handleBlur("price")}
                  value={values.price}
                  type="number"
                  error={errors.price}
                  mianContainerStyle={{ minW: "30%" }}
                />

                <PrimaryInput
                  heading="Phone Number"
                  placeholder="Phone Number"
                  onChange={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  value={values.phoneNumber}
                  type="number"
                  error={errors.phoneNumber}
                  mianContainerStyle={{ minW: "30%" }}
                />
              </Flex>

              <Flex
                flexDir={{ sm: "column", lg: "row" }}
                gap={{ lg: "1em" }}
                mt="1em">
                <Flex flexDir="column" minW="30%">
                  <Text {...headingTextStyle}>Range on Pictures</Text>
                  <Select
                    placeholder="Select option"
                    backgroundColor="white"
                    value={selectedRange}
                    onChange={(event) => {
                      setSelectedRange(event.target.value);
                    }}>
                    {[...Array(10)].map((_, index) => {
                      return (
                        <option key={index} value={index + 1}>
                          {index + 1}
                        </option>
                      );
                    })}
                  </Select>
                </Flex>

                <Flex flexDir="column">
                  <Text {...headingTextStyle}>City</Text>
                  <RadioGroup
                    onChange={(value) => {
                      setSelectedCity(value);
                      handleChange("city")(value);
                      console.log(value);
                    }}
                    onTouchStart={(event) => {
                      event.preventDefault();
                    }}
                    value={selectedCity}>
                    <Flex flexDir="row" gap=".5em" mt=".5em">
                      <Radio value="KARACHI">Karachi</Radio>
                      <Radio value="LAHORE">Lahore</Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </Flex>

              <Flex maxW="50%" flexDir="column" mt="1em">
                <Input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  variant="unstyled"
                  maxW="40%"
                />

                <Flex mt="1em" gap="1em" width="100%" flexWrap="wrap">
                  {selectedImages.map((url, index) => (
                    <Flex key={url}>
                      <Text
                        zIndex={1}
                        position="absolute"
                        color="red"
                        mt="-2"
                        cursor="pointer"
                        onClick={(url) => removeImage(url, index)}>
                        x
                      </Text>
                      {console.log("wha", url)}
                      <Image
                        src={url}
                        alt="Selected Image"
                        width="6em"
                        height="6em"
                      />
                    </Flex>
                  ))}
                </Flex>
              </Flex>

              <Button onClick={handleSubmit}>Login</Button>
            </>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default AddCar;
