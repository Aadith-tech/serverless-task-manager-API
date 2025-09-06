import { useMutation } from "@tanstack/react-query";
import { fetchSpecificTasks } from "../utils/fetch";
import { useState } from "react";
const FetchSpecificTask = () => {
  const [userID, setUserID] = useState("");
  const [taskID, setTaskID] = useState("");
  const [bool, setBool] = useState(false);

  const { mutate, data, isPending, isError, error } = useMutation({
    mutationFn: fetchSpecificTasks,
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
          📄 Fetch Specific Task
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

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label className="text-sm text-gray-600 mb-1 md:mb-0 w-24">
              User ID:
            </label>
            <input
              type="text"
              value={userID}
              placeholder="Enter User ID"
              className="border border-gray-300 rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <label className="text-sm text-gray-600 mb-1 md:mb-0 w-24">
              Task ID:
            </label>
            <input
              type="text"
              value={taskID}
              placeholder="Enter Task ID"
              className="border border-gray-300 rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
              onChange={(e) => setTaskID(e.target.value)}
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleClick}
              disabled={bool || !userID || !taskID}
              className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${
                bool || !userID || !taskID
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-[#FF9900] hover:bg-orange-600"
              }`}
            >
              {bool ? "Wait for 10 sec..." : "Fetch Task"}
            </button>
          </div>
        </div>

        <div className="mt-6">
          {isPending && <p className="text-sm text-gray-500">Loading...</p>}
          {isError && (
            <p className="text-sm text-red-600">Error: {error.message}</p>
          )}
          {data && (
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto max-h-96 border border-gray-300 mt-4">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchSpecificTask;
