import { HeaderTitleLayout } from 'components/Layouts';
import { symbol } from 'consts/consts';
import Map from 'map/Map';

export function HomePage() {
  return (
    <HeaderTitleLayout
      title="Explore study paths"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    >
      <div className="flex xl:mt-20 justify-between flex-wrap">
        <div className="flex flex-col justify-between xl:max-w-3xl">
          <Map />
        </div>
        <div className="w-[400px] my-auto mx-auto xl:mx-0">
          <img className="object-contain" src={symbol} alt="symbol" />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default HomePage;
