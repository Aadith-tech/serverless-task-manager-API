import { useWindowWidth } from "../Hooks/useWindowWidth";
const Image = () => {
  const width = useWindowWidth();
  if (width < 768) {
    return (
      <div className="h-screen flex items-center justify-center p-6 text-red-600 font-extrabold text-xl">
        Mobile access is not allowed Please use laptop/desktop
      </div>
    );
  }
  return (
    <img
      src="/Cloud_project_1.png"
      alt="Architecture Diagram"
      className="max-w-full max-h-screen rounded-xl shadow-lg object-contain mt-10"
    />
  );
};

export default Image;
