import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="mb-4 border-b bg-light-orange-500 border-b-light-orange-700 dark:bg-dark-gray-500 dark:border-zinc-700">
      <div className="w-11/12 mx-auto flex items-center justify-between py-6 lg:w-10/12">
        <h1 className="font-extrabold lg:text-xl">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
