## React Query:

1. Query --> http method GET
2. Mutation --> http method POST
3. Cache --> temporary storage

### Setup React Query

Berikut ini adalah langkah-langkah untuk setup Provider & DevTools React Query di Next.js:

1. Install React Query, dilakukan dengan command

   ```
   npm install react-query
   ```

2. Buka file `_app.js` yang tersimpan di direktori `pages/_app.js` dan setup provider React Query

   ```
   import "@/styles/globals.css";
   import { ChakraProvider, theme } from "@chakra-ui/react";
   import { QueryClient, QueryClientProvider } from "react-query";
   import { ReactQueryDevtools } from "react-query/devtools";
   const queryClient = new QueryClient();

   export default function App({ Component, pageProps }) {
        return (
            <QueryClientProvider client={queryClient}>
                <ChakraProvider resetCSS={true} theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            <ReactQueryDevtools />
            </QueryClientProvider>
        );
   }
   ```

## NextJS API

Untuk membuat API di Next.js, kita dapat menggunakan fitur Next.js yang disebut API Routes. Berikut adalah langkah-langkah untuk membuat API di Next.js:

1. Buat folder bernama `pages` di root directory.
2. Di dalam folder `pages` buat folder bernama `api`, kemudian di dalamnya buat file baru dengan nama bebas (di contoh `message.js`).
3. Di dalam file tersebut, kita dapat menambahkan kode untuk menangani fetching API, seperti ini:

   ```
   let messages = [];

   const addMessage = (data) => {
   console.log(data);
   const preData = {
       id: messages.length + 1,
       createdAt: new Date().toISOString(),
       status: "waiting",
   };
   const objData = typeof data == "string" ? JSON.parse(data) : data;
   const finalData = { ...preData, ...objData };
    messages = [...messages, finalData];
    return [finalData];
   };

   const updateStatus = (data) => {
   const find = messages.map((msg) => {
       if (msg.id == data.id) {
       msg.status = data.status;
       }
       return msg;
   });
   messages = find;
   return [
       {
       id: data.id,
       status: data.status,
       },
   ];
   };

   function handler(req, res) {
   let response = [];
   switch (req.method) {
       case "GET":
       response = messages;
       break;

       case "POST":
       response = addMessage(req.body);
       break;

       case "PUT":
       response = updateStatus(req.body);
       break;
   }

   setTimeout(() => {
       res.setHeader("Content-Type", "application/json");
       res.statusCode = 200;
       res.end(JSON.stringify(response));
   }, 2000);
   }

   export default handler;
   ```

   Code tersebut adalah sebuah program yang menggunakan Node.js untuk membuat server API. Ada tiga fungsi yang didefinisikan di dalamnya:

   - addMessage <br>
     Digunakan untuk menambah pesan ke dalam array messages. Fungsi ini memeriksa tipe data dari data yang diterima dan kemudian menambahkan beberapa properti ke dalam objek yang baru. Objek tersebut kemudian ditambahkan ke dalam array messages.
   - updateStatus <br>
     Digunakan untuk memperbarui status pesan yang telah ada di dalam array messages. Fungsi ini mencari pesan berdasarkan id-nya dan kemudian mengubah properti status-nya.
   - handler <br>
     Merupakan fungsi yang menangani permintaan dari klien. Fungsi ini memeriksa tipe permintaan yang diterima dan kemudian memanggil fungsi yang sesuai. Kemudian, fungsi handler mengirimkan balasan ke klien dengan header "Content-Type" yang disetel sebagai "application/json" dan kode status HTTP 200. Balasan berupa data dalam bentuk JSON yang diubah dari response. Terdapat setTimeout pada fungsi handler sehingga respon akan diberikan setelah 2 detik.

   Program ini menggunakan export default untuk mengekspor fungsi handler agar bisa digunakan di file lain.

4. Jalankan server Next.js Anda dengan perintah "npm run dev" atau "yarn dev" dan buka browser jalankan url `{baseUrl}/api/{namaFileUntukFetchAPI}`, di contoh: `http://localhost:3000/api/message.`
