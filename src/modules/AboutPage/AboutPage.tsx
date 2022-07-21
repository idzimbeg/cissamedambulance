import { HeaderTitleLayout } from 'components/Layouts';
import { symbol } from 'consts/consts';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();
  const menuOptions = [
    {
      id: '1',
      label: t('firstMenuEntry'),
    },
    {
      id: '2',
      label: t('secondMenuEntry'),
    },
    {
      id: '3',
      label: t('thirdMenuEntry'),
    },
    {
      id: '4',
      label: t('fourthMenuEntry'),
    },
    {
      id: '5',
      label: t('fifthMenuEntry'),
    },
    {
      id: '6',
      label: t('sixthMenuEntry'),
    },
    {
      id: '7',
      label: t('seventhMenuEntry'),
    },
    {
      id: '8',
      label: t('eightMenuEntry'),
    },
    {
      id: '9',
      label: t('ninthMenuEntry'),
    },
    {
      id: '10',
      label: t('tenthMenuEntry'),
    },
    {
      id: '11',
      label: t('eleventhMenuEntry'),
    },
  ];

  return (
    <HeaderTitleLayout title={t('touristMedicalOffice')} description={t('introText')}>
      <div className="flex xl:mt-20 justify-between flex-wrap">
        <div className="flex flex-col justify-between xl:max-w-3xl">
          {menuOptions.map((item) => (
            <div key={item.id}>
              <div className="text-primary-light text-base whitespace-nowrap">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="w-[400px] my-auto mx-auto xl:mx-0">
          <img className="object-contain" src={symbol} alt="symbol" />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default AboutPage;
