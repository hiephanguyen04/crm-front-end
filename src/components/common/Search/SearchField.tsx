import { SearchIcon } from "@/assets/icons";
import "./SearchField.scss";

interface SearchFieldProps {
  value: string;
  onSearch: (value: string) => void;
  placeholder: string;
  className?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({
  value,
  onSearch,
  placeholder,
  className,
}) => {
  return (
    <div className={`search-field ${className}`}>
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
