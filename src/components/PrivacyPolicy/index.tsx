import { useTranslations } from 'next-intl';

const PrivacyPolicy = () => {
  const d = useTranslations('privacyPolicy');

  return (
    <div className="flex flex-col w-full items-center justify-center pb-20 pt-24">
      <div className='flex w-full pb-12 p-8 flex-col justify-start'>
      <h3 className="font-bold py-6 text-4xl">{d('privacyTitle')}</h3>
      <p>{d('date')}</p>
      </div>
      <div className="pt-10 w-5/6 md:w-2/4">
        <div>
          <h3 className="font-bold text-2xl">{d('privacyTitle')}</h3>
          <p className="pt-3 font-bold">{d('privacyDescription')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title2')}</h3>
          <p className="pt-3 ">{d('title2Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title3')}</h3>
          <p className="pt-3 ">{d('title3Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title4')}</h3>
          <p className="pt-3 ">{d('title4Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title5')}</h3>
          <p className="pt-3 ">{d('title5Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title7')}</h3>
          <p className="pt-3 ">{d('title7Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title8')}</h3>
          <div className="pt-3 pl-10 ">
            <li>{d('title8Description1')}</li>
            <li>{d('title8Description2')}</li>
            <li>{d('title8Description3')}</li>
            <li>{d('title8Description4')}</li>
          </div>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title9')}</h3>
          <p className="pt-3 ">{d('title9Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title10')}</h3>
          <p className="pt-3 ">{d('title10Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title11')}</h3>
          <p className="pt-3 ">{d('title11Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title12')}</h3>
          <p className="pt-3 ">{d('title12Description1')}</p>
          <li>{d('title12Description2')}</li>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title13')}</h3>
          <p className="pt-3 ">{d('title13Description')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title14')}</h3>
          <p className="pt-4">{d('title14Description1')}</p>
          <p className="pt-4">{d('title14Description2')}</p>
          <p className="pt-4">{d('title14Description3')}</p>
          <p className="pt-4">{d('title14Description4')}</p>
          <p className="pt-4">{d('title14Description5')}</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title15')}</h3>
          <p className="pt-3 ">{d('title15Description')}</p>
          <p className="pt-3 ">Parking Time Sweden AB</p>
          <p className="pt-1 ">{d('title15DescriptionAdress')}</p>
          <p className="pt-1 ">Nyköpingsvägen 52 611 50 NYKÖPING</p>
        </div>
        <div className="pt-8">
          <h3 className="font-bold text-2xl">{d('title16')}</h3>
          <p className="pt-5 ">{d('title16Description1')}</p>
          <p className="pt-1 ">{d('title16Description2')}</p>
          <p className="pt-1 ">{d('title16Description3')}</p>
          <p className="pt-1 ">{d('title16Description4')}</p>
          <div>
            <p className="pt-6">1. {d('title16Description5-1')}</p>
            <li className="pl-8 pt-4">{d('title16Description5-1-1')}</li>
            <p className="pt-2">2. {d('title16Description5-2')}</p>
            <li className="pl-8 pt-4">{d('title16Description5-2-1')}</li>
            <li className="pl-8 pt-1">{d('title16Description5-2-2')}</li>
            <p className="pl-12 pt-4">- {d('title16Description5-2-2-1')}</p>
            <p className="pl-12 pt-4">- {d('title16Description5-2-2-2')}</p>
          </div>
          <div>
            <p className="pt-6">3. {d('title16Description5-3')}</p>
            <li className="pl-8 pt-4">{d('title16Description5-3-1')}</li>
            <li className="pl-8 pt-4">{d('title16Description5-3-2')}</li>
          </div>
          <div>
            <p className="pt-6">4. {d('title16Description5-4')}</p>
            <li className="pl-8 pt-4">{d('title16Description5-4-1')}</li>
            <li className="pl-8 pt-4">{d('title16Description5-4-2')}</li>
            <div className="pl-12">
              <li>{d('title16Description5-4-2-1')}</li>
              <li>{d('title16Description5-4-2-2')}</li>
            </div>
          </div>
          <div>
            <p className="pt-6">5. {d('title16Description5-5')}</p>
            <li className="pl-8 pt-4">{d('title16Description5-5-1')}</li>
            <li className="pl-8 pb-4">{d('title16Description5-5-2')}</li>
            <p>{d('title16Description5-5-3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
