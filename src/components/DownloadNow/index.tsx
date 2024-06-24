import Image from 'next/image';

const DownloadNow = () => {
  return (
    <div className="h-[724px] flex justify-center items-center">
      <div className='w-5/6 flex flex-col md:flex-row'>
        <div className="w-1/3"></div>
        <div className="w-1/3">
          <h3 className="font-bold text-4xl">Download now</h3>
          <p>
            The app is free to download for you as a user. However, your
            municipality must be registered as a customer with us for our app to
            be valid in your area. If our app is not available in your
            municipality, you are welcome to contact us or suggest us to your
            municipality!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadNow;
