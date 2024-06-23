import Image from 'next/image';

import Member1 from '../../../public/images/member1.jpeg';
import MemberImage from "../../../public/images/memberImage.jpeg"


const OurTeam = () => {
  return (
    <div className="bg-pt-background h-[800px] flex flex-col">
      <div className="flex flex-col text-center justify-center p-12">
        <h3 className="text-3xl font-bold pb-6">Meet Our Team</h3>
        <p className="text-base font-normal">
          Each member brings a unige blend of expertise, and forward-thinking
          mindset.
        </p>
      </div>

      <div className="w-full flex flex-row pt-8 justify-around ">
        <div className="h-[430px] w-[296] bg-white rounded-[20px] boxShadow">
          <div className="relative flex justify-center h-4/5 w-[290px] ">
            <Image
              src={Member1}
              objectFit="cover"
              fill
              className="h-[340px]  w-[290px] rounded-t-[20px]"
              alt="teammember"
            ></Image>
          </div>
          <div className="flex flex-col justify-between h-1/5 pl-4 p-3">
            <h3 className="text-xl font-bold">Matilda Öhman</h3>
            <p className="text-base font-normal">CEO</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OurTeam;
