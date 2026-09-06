import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";

type MovieSearchType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  movieResults: number;
};

const MovieSearch = ({
  setSearchValue,
  searchValue,
  movieResults,
}: MovieSearchType) => {
  const handleSearchInput = (
    input: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = input.target.value;
    setSearchValue(value);
  };

  return (
    <InputGroup className="max-w-sm my-5">
      <InputGroupInput
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => handleSearchInput(e)}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">{movieResults}</InputGroupAddon>
    </InputGroup>
  );
};

export default MovieSearch;
