import { HeaderTitleLayout } from 'components/Layouts';
import { t } from 'i18next';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';

import { symbol } from 'consts/consts';

export function HomePage() {
  return (
    <HeaderTitleLayout title={t('touristMedicalOffice')} description={t('address')}>
      <div className="mt-4 md:mx-32 text-lg text-center">
        <>{t('introText')}</>
      </div>
      <div className="xl:mt-5 justify-center items-center flex flex-col">
        <div className="w-[200px] my-50 mx-auto xl:mx-0">
          <img className="object-contain" src={symbol} alt="symbol" />
        </div>
        <div className="text-2xl rounded-lg ring-2 ring-offset-2 ring-offset-secondary-main ring-secondary-light p-2">
          <>{`${t('workSchema')} ${t('workingHours')}`}</>
          <br />
          <BsWhatsapp />
          <>{`${t('contact')} ${t('phone')}`}</>
          <br />
          <HiOutlineMailOpen />
          <>{`${t('emailSchema')} ${t('email')}`}</>
          <br />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default HomePage;
