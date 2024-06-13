import { FiDownload } from 'react-icons/fi';
import { LuParkingSquare } from 'react-icons/lu';
import { FaRegMap } from 'react-icons/fa6';
const Statistics = () => {
  return (
    <div className="h-[393px] bg-pt-background flex flex-col justify-center items-center">
      <div className="h-[160px] flex flex-col justify-center w-[80%]  bg-white  rounded-[20px] ">
        <div className="flex justify-around">
          <div className='flex flex-row w-[190px] h-[61px] justify-center gap-2'>
            <div className='text-pt-red text-4xl'>
              <FiDownload />
            </div>
            <div>1
                <p>Nedladningar</p>
            </div>
          </div>
          <div className='flex flex-row w-[190px] h-[61px] justify-center gap-2'>
            <div className='text-pt-red text-4xl'>
              <LuParkingSquare />
            </div>
            <div>2
                <p>Parkeringsessioner</p>
            </div>
          </div>
          <div className='flex flex-row w-[190px] h-[61px] justify-center gap-2'>
            <div className='text-pt-red text-4xl'>
              <FaRegMap />
            </div>
            <div>3
                <p>Parkeringplatser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
