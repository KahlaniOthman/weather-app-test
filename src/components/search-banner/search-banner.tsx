import './style.css'

type InputProps = {
  setSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
const SeachBanner: React.FC<InputProps> = ({setSearch}) => {
  return (
    <header className="search-box">
      <input
        type="text"
        className="search-bar"
        id="search-bar"
        placeholder="Search..."
        onKeyPress={setSearch}
      />
    </header>
  );
};

export default SeachBanner;
