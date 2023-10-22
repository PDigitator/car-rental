import PropTypes from 'prop-types';

import CarsGalleryItem from 'components/CarsGalleryItem';
import { List } from 'components/CarsGallery/CarsGallery.styled';

const CarsGallery = ({ data }) => {
  return (
    <List>
      {data.map(element => (
        <li key={element.id}>
          <CarsGalleryItem element={element} />
        </li>
      ))}
    </List>
  );
};

CarsGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      //   webformatURL: PropTypes.string.isRequired,
      //   largeImageURL: PropTypes.string.isRequired,
      //   tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CarsGallery;
