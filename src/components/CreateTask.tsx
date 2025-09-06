import { useMutation } from "@tanstack/react-query";
import { type TaskData } from "../types/type";
import { createTasks } from "../utils/fetch";
import { useState } from "react";

const CreateTask = () => {
  const [task, setTask] = useState<TaskData>({
    userID: "",
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });
  const [bool, setBool] = useState(false);
  const [result, setResult] = useState("");
  const [jsonError, setJsonError] = useState("");
  const [err, setError] = useState(false);

  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: createTasks,
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setResult(inputValue);
    setError(false);

    try {
      const parsedJson = JSON.parse(inputValue);

      setTask((prevTask) => ({
        ...prevTask,
        ...parsedJson,
      }));

      setJsonError("");
    } catch (err) {
      console.log(err);
      setError(true);
      setJsonError("Invalid JSON format");
    }
  };

  const handleClick = () => {
    setTask((prevTask) => ({
      ...prevTask,
      userID: "",
    }));

    mutate(task);
    setBool(true);

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    delay(10000).then(() => {
      setBool(false);
    });
  };

  return (
    <>
      <div className="p-6 bg-white shadow-sm rounded-lg border border-gray-200 max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📝 Create Task
        </h2>

        <div className="text-sm text-gray-500 mb-3">
          <code className="bg-gray-100 px-2 py-1 rounded">
            https://7sxmgk0f8e.execute-api.us-east-1.amazonaws.com/dev/users/
            <span className="text-orange-600 font-semibold">
              {task.userID || "USER_ID"}
            </span>
            /tasks
          </code>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">User ID</label>
          <input
            type="text"
            value={task.userID}
            placeholder="Enter User ID"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                userID: e.target.value,
              }))
            }
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">Task JSON</label>
          <textarea
            className="border border-gray-300 px-3 py-2 w-full h-40 resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm font-mono"
            placeholder='Enter task details as JSON (e.g., {"title": "Task", "description": "Description", "dueDate": "2025-12-31"})'
            value={result}
            onChange={handleChange}
          ></textarea>
          {jsonError && (
            <p className="text-red-500 mt-2 text-sm">{jsonError}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleClick}
            disabled={bool || !task.userID || !result || err}
            className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
              bool || !task.userID || !result || err
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-[#FF9900] hover:bg-orange-600"
            }`}
          >
            {bool ? "Wait for 10 sec..." : "Create Task"}
          </button>
        </div>

        <div className="mt-6">
          {isPending && <p className="text-gray-500">Loading...</p>}
          {isError && <p className="text-red-500">Error: {error.message}</p>}
          {data && (
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-y-auto max-h-96 border border-gray-300 mt-4">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateTask;
