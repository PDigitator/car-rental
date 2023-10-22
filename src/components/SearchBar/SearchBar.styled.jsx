import styled from 'styled-components';

import { staticTheme } from 'theme';

const SearchBarWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 74px;
  width: 705px;

  margin: 0 auto 50px;
  background-color: ${staticTheme.colors.bgInput};
`;
export { SearchBarWrap };
