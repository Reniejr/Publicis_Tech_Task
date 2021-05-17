import { eventsList } from "./data";
export const getEvents = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_URL);
    let result;
    if (response.ok) {
      result = await response.json();
    } else {
      result = eventsList;
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
