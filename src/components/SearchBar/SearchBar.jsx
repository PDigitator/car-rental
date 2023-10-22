import Button from 'components/Button';
import { SearchBarWrap } from 'components/SearchBar/SearchBar.styled';

const SearchBar = () => {
  const onClick = () => {};
  return (
    <SearchBarWrap>
      <p>SearchBar</p>
      <Button
        name="search"
        type="submit"
        text="Search"
        onClick={onClick}
      ></Button>
    </SearchBarWrap>
  );
};

export default SearchBar;
