import CarsGalleryItem from 'components/CarsGalleryItem';
import * as s from './CarsGallery.styled';

const CarsGallery = ({ data }) => {
  return (
    <s.List>
      {data.map(element => (
        <s.Card key={element.id}>
          <CarsGalleryItem element={element} />
        </s.Card>
      ))}
    </s.List>
  );
};

export default CarsGallery;
