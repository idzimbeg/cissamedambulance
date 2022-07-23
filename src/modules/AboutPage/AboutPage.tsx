import { HeaderTitleLayout } from 'components/Layouts';
import { useTranslation } from 'react-i18next';
import Map from 'map/Map';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <HeaderTitleLayout description={t('accessibility')}>
      <Map />
    </HeaderTitleLayout>
  );
}

export default AboutPage;
