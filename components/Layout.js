import {
  Box,
  Code,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ children, title, subTitle }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW={{ xl: "1200" }} h="100h">
        <Flex pt={10} pb={24}>
          <Box>
            <Heading>{title}</Heading>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              {subTitle}
            </Text>
          </Box>
          <Spacer />
        </Flex>

        <Box pb={20}>{children}</Box>

        <Box
          style={{ backgroundColor: "white" }}
          position="fixed"
          bottom="0"
          left="0"
          zIndex="sticky"
          borderTop="1px"
          borderColor="gray.200"
          py={2}
          w="full"
        >
          <footer>
            <Container maxW={{ xl: "1200px" }}>
              <Flex>
                <Box>
                  <span>React Query Example</span>
                </Box>
                <Spacer />
                <Box>
                  <Link href="https://github.com/argianarid" isExternal mx={4}>
                    {/* <Icon as={FaGithub} w={6} h={6} color="#24292e" /> */}
                  </Link>
                  <Link href="https://www.youtube.com/sastranababan" isExternal>
                    {/* <Icon as={FaYoutube} w={6} h={6} color="#c4302b" /> */}
                  </Link>
                  <Code ml={4}>Argian Ardi</Code>
                </Box>
              </Flex>
            </Container>
          </footer>
        </Box>
      </Container>
    </div>
  );
};

export default Layout;
