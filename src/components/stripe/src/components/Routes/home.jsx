import Start from "../icons/startbg";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      <div className="absolute inset-0">
        <Start className="w-full h-full object-cover" />
      </div>

      
      <div className="relative z-10 text-white text-3xl font-bold flex justify-center items-center">
      <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
      </div>
    </div>
  );
}


