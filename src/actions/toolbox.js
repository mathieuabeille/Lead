export const FETCH_TOOLS = 'FETCH_TOOLS';


export function fetchTool() {
const promise = fetch('https://api.airtable.com/v0/appXKVgrd5Kyo6CGd/Growth?api_key=key5moHjnG9kz8y7w').then(
  response => response.json());
      return {
        type: FETCH_TOOLS,
        payload: promise
   };
}


