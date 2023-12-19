import axios from 'axios';

export default defineEventHandler(async (event) => {
  // try {
  //   const response = await axios.get('https://fortune.line.me/contents/horoscope/');

  //   return response.data;
  // } catch (error: any) {
  //   console.error(`エラーが発生しました: ${error.message}`);
  //   return error;
  // }
  return { message: 'Hello, World!' };
});
