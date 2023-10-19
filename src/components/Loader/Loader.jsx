import { RotatingLines } from 'react-loader-spinner';

import { staticTheme } from 'theme';
import { LoaderWrap } from 'components/Loader/Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor={staticTheme.colors.accent}
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderWrap>
  );
};

export default Loader;
