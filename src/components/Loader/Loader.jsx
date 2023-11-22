import { RotatingLines } from 'react-loader-spinner';

import { staticTheme } from 'theme';
import * as s from './Loader.styled';

const Loader = () => {
  return (
    <s.LoaderWrap>
      <RotatingLines
        strokeColor={staticTheme.colors.accent}
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </s.LoaderWrap>
  );
};

export default Loader;
