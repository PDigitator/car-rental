import Button from 'components/Button';
import * as s from 'components/SearchBar/SearchBar.styled';

const SearchBar = () => {
  const onClick = () => {};
  return (
    <s.SearchBarWrap>
      <p>SearchBar</p>
      <Button
        name="search"
        type="submit"
        text="Search"
        onClick={onClick}
      ></Button>
    </s.SearchBarWrap>
  );
};

export default SearchBar;
