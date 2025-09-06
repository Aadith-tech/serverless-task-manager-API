import FetchUserTasks from "./FetchUserTasks";
import CreateTask from "./CreateTask";
import FetchSpecificTask from "./FetchSpecificTask";
import DeleteTask from "./DeleteTask";
import SampleData from "./SampleData";
import { useWindowWidth } from "../Hooks/useWindowWidth";

const Home = () => {
  const width = useWindowWidth();
  if (width < 768) {
    return (
      <div className="h-screen flex items-center justify-center p-6 text-red-600 font-extrabold text-xl">
        Mobile access is not allowed Please use laptop/desktop
      </div>
    );
  }
  return (
    <>
      <div className="p-6 max-w-5xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-orange-400">
          Simple Serverless Task Manager API
        </h1>
        <div className="bg-red-500 text-white text-center py-2 px-4 text-sm font-medium shadow-md">
          🚨 This project runs on AWS Free Tier. Please avoid spamming requests
          to prevent throttling or unexpected charges.Also don't delete the
          sample data listed below.
        </div>
        <SampleData />
        <FetchUserTasks />
        <CreateTask />
        <FetchSpecificTask />
        <DeleteTask />
      </div>
    </>
  );
};

export default Home;
