import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// async function test() {
//   try {
//     const data = await fetchData<object>(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// test();
