import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../utils/fetch";
import { useState } from "react";
const DeleteTask = () => {
  const [userID, setUserID] = useState("");
  const [taskID, setTaskID] = useState("");
  const [bool, setBool] = useState(false);

  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: deleteTask,
  });

  const handleClick = () => {
    setUserID("");
    setTaskID("");
    const payLoad = { userID, taskID };
    mutate(payLoad);
    setBool(true);
    const delay = (ms: number) =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(ms);
        }, ms),
      );

    delay(10000).then(() => {
      setBool(false);
    });
  };

  return (
    <>
      <div className="p-6 bg-white shadow-sm rounded-lg border border-gray-200 max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          🗑️ Delete Specific Task
        </h2>

        <div className="text-[0.8rem] text-gray-500 mb-3">
          <code className="bg-gray-100 px-2 py-1 rounded">
            https://7sxmgk0f8e.execute-api.us-east-1.amazonaws.com/dev/users/
            <span className="text-orange-600 font-semibold">
              {userID || "USER_ID"}
            </span>
            /tasks/
            <span className="text-orange-600 font-semibold">
              {taskID || "TASK_ID"}
            </span>
          </code>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">User ID</label>
          <input
            type="text"
            value={userID}
            placeholder="Enter User ID"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">Task ID</label>
          <input
            type="text"
            value={taskID}
            placeholder="Enter Task ID"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            onChange={(e) => setTaskID(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleClick}
            disabled={bool || !userID || !taskID}
            className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
              bool || !userID || !taskID
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-[#FF9900] hover:bg-orange-600"
            }`}
          >
            {bool ? "Wait for 10 sec..." : "Delete Task"}
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

export default DeleteTask;
