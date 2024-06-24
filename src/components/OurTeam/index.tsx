import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';

import Member1 from '../../../public/images/member1.jpeg';
import MemberImage from '../../../public/images/memberImage.jpeg';

type TeamMember = {
  image: StaticImageData;
  name: string;
  title: string;
};

const ourteam: TeamMember[] = [
  {
    image: Member1,
    name: 'Matila Öhman',
    title: 'CEO',
  },

  {
    image: MemberImage,
    name: 'Johan E. Bengtsson',
    title: 'CTO',
  },

  {
    image: MemberImage,
    name: 'Ingemar Öhman',
    title: 'Accountent',
  },

  {
    image: MemberImage,
    name: 'Fredrik Jodstam',
    title: 'Business Strategist',
  },
];

const OurTeam = () => {
  const d = useTranslations('ourTeam');

  return (
    <div className="bg-pt-background min-h-[800px] flex flex-col">
      <div className="flex flex-col text-center justify-center p-12">
        <h3 className="text-3xl font-bold pb-6">{d('pageTitle')}</h3>
        <p className="text-base font-normal">{d('pageSubtitle')}</p>
      </div>
      <div className=" relative h-full w-full md:w-[70%] xl:w-full flex self-center flex-col md:flex-row pt-8 pb-20 gap-20 items-center justify-center flex-wrap ">
        {ourteam.map((item, index) => (
          <div className="h-[430px] w-[296px] md:w-[256px] bg-white rounded-[20px] boxShadow">
            <div
              className="relative flex justify-center h-4/5 w-[296px] md:w-[256px] "
              key={index}
            >
              <Image
                src={item.image}
                style={{ objectFit: 'cover' }}
                className="h-[340px] w-[296px]  md:w-[256px] rounded-t-[20px]"
                alt="teammember"
              ></Image>
            </div>
            <div className="flex flex-col justify-between h-1/5 pl-4 p-3">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-base font-normal">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
