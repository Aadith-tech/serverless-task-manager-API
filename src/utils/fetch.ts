import { type TaskData, type ID } from "../types/type";

const fetchTasks = async (userID: string | number) => {
  if (!userID) throw new Error("ID must be provided");

  const URL = `https://7sxmgk0f8e.execute-api.us-east-1.amazonaws.com/dev/users/${userID}/tasks`;
  try {
    const response = await fetch(URL);
    console.log("Response Status:", response.status);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const createTasks = async (taskData: TaskData) => {
  if (taskData.userID == null) throw new Error("ID must be provided"); // Checks for null or undefined

  const URL = `https://7sxmgk0f8e.execute-api.us-east-1.amazonaws.com/dev/users/${taskData.userID}/tasks`;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    console.log("Response Status:", response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const fetchSpecificTasks = async ({ userID, taskID }: ID) => {
  if (!userID || !taskID) throw new Error("ID must be provided");

  const URL = `https://7sxmgk0f8e.execute-api.us-east-1.amazonaws.com/dev/users/${userID}/tasks/${taskID}`;
  try {
    const response = await fetch(URL);
    console.log("Response Status:", response.status);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const deleteTask = async ({ userID, taskID }: ID) => {
  if (!userID || !taskID) throw new Error("ID must be provided");

  const URL = `https://7sxmgk0f8e.execute-api.us-east-1.amazonaws.com/dev/users/${userID}/tasks/${taskID}`;

  try {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response Status:", response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export { createTasks, fetchTasks, fetchSpecificTasks, deleteTask };
