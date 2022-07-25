import { t } from 'i18next';
import { HeaderTitleLayout } from 'components/Layouts';
import { symbol } from 'consts/consts';

const menuOptions1 = [
  {
    id: '1',
    label: t('firstMenuEntry'),
  },
  {
    id: '2',
    label: t('eightMenuEntry'),
  },
  {
    id: '3',
    label: t('thirdMenuEntry'),
  },
  {
    id: '4',
    label: t('thirteenthMenuEntry'),
  },
  {
    id: '5',
    label: t('fifthMenuEntry'),
  },
  {
    id: '6',
    label: t('sixthMenuEntry'),
  },
];
const menuOptions2 = [
  {
    id: '1',
    label: t('seventhMenuEntry'),
  },
  {
    id: '2',
    label: t('secondMenuEntry'),
  },
  {
    id: '3',
    label: t('ninthMenuEntry'),
  },
  {
    id: '4',
    label: t('fourthMenuEntry'),
  },
  {
    id: '5',
    label: t('eleventhMenuEntry'),
  },
  {
    id: '6',
    label: t('twelfthMenuEntry'),
  },
  {
    id: '7',
    label: t('tenthMenuEntry'),
  },
];

export function WorkPage() {
  return (
    <HeaderTitleLayout title={t('touristMedicalOffice')} description={t('menuSchema')}>
      <div className="flex xl:mt-20 sm:mx-20 justify-between">
        <div className="flex flex-col justify-between xl:max-w-3xl text-center">
          {menuOptions1.map((item) => (
            <div
              className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 cursor-default ..."
              key={item.id}
            >
              <div className="m-2 text-lg ">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between text-center">
          {menuOptions2.map((item) => (
            <div
              className="transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 cursor-default ..."
              key={item.id}
            >
              <div className="m-2 text-lg">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="w-[400px] my-50 mx-auto xl:mx-0">
          <img className="object-contain" src={symbol} alt="symbol" />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default WorkPage;
