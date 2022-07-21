import { HeaderTitleLayout } from 'components/Layouts';
import { symbol } from 'consts/consts';

export function WorkPage() {
  return (
    <HeaderTitleLayout
      title="Explore study paths"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    >
      <div className="flex xl:mt-20 justify-between flex-wrap">
        <div className="flex flex-col justify-between xl:max-w-3xl">
          <div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus quibusdam in, sequi
              veritatis vitae fugit velit possimus. Voluptatum amet corrupti qui? Quo nulla consequuntur voluptate, qui
              expedita vitae a.
            </p>
            <p>We Developed 3 paths:</p>
          </div>
          <div>
            <h2>Path 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus quibusdam in, sequi
              veritatis vitae fugit velit possimus. Voluptatum amet corrupti qui? Quo nulla consequuntur voluptate, qui
              expedita vitae a.
            </p>
          </div>
          <div>
            <h2>Path 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus quibusdam in, sequi
              veritatis vitae fugit velit possimus. Voluptatum amet corrupti qui? Quo nulla consequuntur voluptate, qui
              expedita vitae a.
            </p>
          </div>
          <div>
            <h2>Path 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus quibusdam in, sequi
              veritatis vitae fugit velit possimus. Voluptatum amet corrupti qui? Quo nulla consequuntur voluptate, qui
              expedita vitae a.
            </p>
          </div>
        </div>
        <div className="w-[400px] my-auto mx-auto xl:mx-0">
          <img className="object-contain" src={symbol} alt="symbol" />
        </div>
      </div>
    </HeaderTitleLayout>
  );
}

export default WorkPage;
