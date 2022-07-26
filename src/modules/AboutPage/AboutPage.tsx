import { HeaderTitleLayout } from 'components/Layouts';
import { useTranslation } from 'react-i18next';
import Map from 'map/Map';
import { backgroundImage } from 'consts/consts';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <HeaderTitleLayout
      bg={<img className="w-full -my-5" src={backgroundImage} />}
      title={t('touristMedicalOffice')}
      description={t('accessibility')}
      className="mt-56 md:mt-8"
    >
      <Map />
    </HeaderTitleLayout>
  );
}

export default AboutPage;
