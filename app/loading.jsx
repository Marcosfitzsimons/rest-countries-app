import { GiWorld } from "react-icons/gi";

const loading = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-center items-center pt-4">
      <GiWorld className="text-6xl animate-spin" />
    </div>
  );
};

export default loading;
