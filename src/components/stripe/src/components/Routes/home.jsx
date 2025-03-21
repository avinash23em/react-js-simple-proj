import Phone from "../icons/phone";
import Start from "../icons/startbg";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      
      <div className="absolute inset-0 -z-10">
        <Start className="w-full h-full object-cover" />
      </div>

      
      <div className="grid grid-cols-5 h-full">
        
        <div className="col-span-1"></div>

        
        <div className="col-span-2 flex flex-col justify-center pl-6">
          <h1 className="font-bold text-black text-4xl pb-6">
            Payments infrastructure <br />
            for the internet
          </h1>
          <p className="text-lg text-gray-700">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </div>

        
        <div className="col-span-2 flex items-center justify-center">
          <Phone  />
        </div>
      </div>
    </div>
  );
}
