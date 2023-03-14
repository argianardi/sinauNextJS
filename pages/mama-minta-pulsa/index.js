import Layout from "@/components/Layout";
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const Index = () => {
  return (
    <Layout title="mama minta pulsa" subTitle="Modus Minta Pulsa">
      <Flex>
        <Box>
          <Box w="md" border="1px" borderColor="gray.200" boxShadow="md">
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
        </Box>
        <Box flex="1">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Phone</Th>
                <Th>Message</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1/1/2021</Td>
                <Td>085267852222</Td>
                <Td>
                  Mama lagi di kantor polisi, kirim pulsa 10jt sekarang. CEPAT!
                </Td>
                <Td>
                  <Badge colorScheme="yellow">Waiting</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>1/1/2021</Td>
                <Td>08567832222</Td>
                <Td>
                  Mama lagi di kantor lurah, kirim pulsa 20jt sekarang. CEPAT!
                </Td>
                <Td>
                  <Badge colorScheme="green">success</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>1/1/2021</Td>
                <Td>085267852444</Td>
                <Td>
                  Mama lagi di mana mana, kirim pulsa 30jt sekarang. CEPAT !
                </Td>
                <Td>
                  <Badge colorScheme="red">failed</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>1/1/2021</Td>
                <Td>085267852444</Td>
                <Td>
                  Mama lagi di mana mana, kirim pulsa 30jt sekarang. CEPAT !
                </Td>
                <Td>
                  <Badge colorScheme="red">failed</Badge>
                </Td>
              </Tr>
              <Tr>
                <Td>1/1/2021</Td>
                <Td>085267852444</Td>
                <Td>
                  Mama lagi di mana mana, kirim pulsa 30jt sekarang. CEPAT !
                </Td>
                <Td>
                  <Badge colorScheme="red">failed</Badge>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Index;
