import Image from "next/image";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      <div className="lg:fixed lg:flex justify-center items-center lg:h-screen h-96 lg:inset-y-0 start-0 end-1/2 bg-blue-950">
        <div className="lg:w-1/2 h-full flex justify-center items-center">
          <Image
            className="w-96"
            src="/imgs/logo.png"
            alt="logo"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 lg:flex hidden"></div>
        <div className="lg:w-1/2 w-full">
          <div className="flex justify-center items-center  p-10">
            <div className="p-5 lg:w-full sm:w-3/4 w-full h-full flex items-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
