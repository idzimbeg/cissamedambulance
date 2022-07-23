import { HeaderTitleLayout } from 'components/Layouts';
import { t } from 'i18next';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';

import { symbol } from 'consts/consts';

export function HomePage() {
  return (
    <HeaderTitleLayout title={t('touristMedicalOffice')} description={t('slogan')}>
      <div className="mt-2 md:mx-32 text-lg">
        <>{t('introText')}</>
      </div>
      <div className="xl:mt-5 justify-center items-center flex">
        <div className="w-[400px] my-50 mx-auto xl:mx-0">
          <img className="object-contain" src={symbol} alt="symbol" />
        </div>
        <div className="text-lg">
          <>{`${t('workSchema')} ${t('workingHours')}`}</>
          <br />
          <BsWhatsapp />
          <>{`${t('contact')} ${t('phone')}`}</>
          <br />
          <HiOutlineMailOpen />
          <>{t('email')}</>
          <br />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default HomePage;
