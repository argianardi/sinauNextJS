import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import TableMessage from "@/components/TableMessage";

const Index = () => {
  const getMessages = async () => {
    const baseUrl = "http://localhost:3000/api/message";
    const { data } = await axios.get(baseUrl);
    return await data;
  };

  const { isLoading, error, data, isSuccess } = useQuery(
    "get-messages",
    getMessages,
    {
      staleTime: 5000,
      refetchInterval: 5000,
    }
  );

  if (isLoading) return <div>Loading.....</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Layout title="mama minta pulsa" subTitle="Modus Minta Pulsa">
      <Flex>
        <Box>
          {/* Request Pulsa Form  */}
          <Box w="md" border="1px" borderColor="gray.200" p={2} boxShadow="md">
            <Text
              fontSize="xl"
              fontWeight="bold"
              mb={4}
              pb={2}
              borderBottom="1px"
              borderColor="gray.200"
            >
              Request Pulsa
            </Text>
            <form>
              <FormControl pb={4}>
                <FormLabel
                  htmlFor="phoneNumber"
                  fontWeight="bold"
                  fontSize="xs"
                  letterSpacing="1px"
                  textTransform="uppercase"
                >
                  Phone Number
                </FormLabel>
                <Input name="phoneNumber" placeholder="Phone Number" />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel
                  htmlFor="name"
                  fontWeight="bold"
                  fontSize="xs"
                  letterSpacing="1px"
                  textTransform="uppercase"
                >
                  Message
                </FormLabel>
                <Textarea placeholder="Bullshit Message" />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>

              <Button mt={4} colorScheme="teal" type="submit">
                Send
              </Button>
            </form>
          </Box>

          {/* Message Table  */}
        </Box>
        <Box flex="1">{isSuccess && <TableMessage data={data} />}</Box>
      </Flex>
    </Layout>
  );
};

export default Index;
