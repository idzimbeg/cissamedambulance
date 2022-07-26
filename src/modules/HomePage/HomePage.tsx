import { HeaderTitleLayout } from 'components/Layouts';
import { email, hour, location, phone } from 'consts/consts';
import { t } from 'i18next';

export function HomePage() {
  return (
    <HeaderTitleLayout
      title={t('touristMedicalOffice')}
      description={t('address')}
      img={<img className="w-32 -my-5" src={location} />}
    >
      <div className="mt-4 md:mx-56 text-lg text-center mb-20">
        <>{t('introText')}</>
      </div>
      <div className="xl:mt-5 justify-center items-center flex flex-col">
        <div className="text-2xl rounded-lg flex flex-col text-center">
          <div className="mb-5 flex-col">
            <div className="w-28 mx-auto">
              <img src={hour} />
            </div>
            <div className="uppercase mb-4">{`${t('workSchema')}`}</div>
            <div>{`${t('workingHours')}`}</div>
          </div>
          <div className="mb-5 flex-col">
            <div className="w-28 mx-auto">
              <img src={phone} />
            </div>
            <div className="uppercase mb-2">{`${t('contact')}`}</div>
            <div>{`${t('phone')}`}</div>
            <div className="mb-5 flex-col">
              <div className="w-28 mx-auto">
                <img src={email} />
              </div>
              <div className="uppercase mb-4">{`${t('emailSchema')}`}</div>
              <div>{`${t('email')}`}</div>
            </div>
          </div>
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default HomePage;
