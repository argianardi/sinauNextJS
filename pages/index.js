import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Grid, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <VStack spacing={8}>
          <h1 h="15vmin" pointerEvents="none">
            Logo
          </h1>
          <Text fontSize="6xl" fontWeight="900">
            React Query Example
          </Text>
          <SimpleGrid
            columns={1}
            spacing="8"
            p="10"
            textAlign="center"
            rounded="lg"
          >
            <Link href="/mama-minta-pulsa">
              <Box
                boxShadow="xs"
                p="6"
                rounded="md"
                bg="white"
                textAlign="center"
                borderColor="grey.10"
                borderWidth={1}
                _hover={{
                  bg: "gray.50",
                  borderWidth: "1px",
                  borderColor: "red.200",
                }}
              >
                {/* <Link
                  href="/mama-muda"
                  color="teal.500"
                  fontSize="xl"
                  display="block"
                > */}
                Goit
                {/* </Link> */}
              </Box>
            </Link>
          </SimpleGrid>
        </VStack>
      </Grid>
    </Box>
  );
}
