import Section from 'components/Section';
import CatalogContent from 'components/CatalogContent';

const CatalogPage = () => {
  return (
    <Section title="Car rental catalog">
      <p>FilterBar</p>
      <CatalogContent />
    </Section>
  );
};

export default CatalogPage;
