import Logo from "../icons/Logo";
import Arrow from "../icons/arrow1";
import Arrow1 from "../icons/arrow";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className='text-xl bg-blue-500 font-bold grid grid-cols-8 items-center px-8 py-4'>
            
            <div className='col-span-1'></div>

           
            <div className='col-span-4 flex justify-between items-center'>
                
                <div className='h-auto w-auto'>
                    <Logo />
                </div>

               
                <div className='flex gap-6 items-center'>
                    <button className="flex items-center gap-1">
                        Products
                        <span className="flex items-center">
                            <Arrow />
                            <Arrow1 />
                        </span>
                    </button>

                    <button className="flex items-center gap-1">
                        Solutions
                        <span className='flex'>
                            <Arrow />
                            <Arrow1 />
                        </span>
                    </button>

                    <button className="flex items-center gap-1">
                        Resources
                        <span className='flex'>
                            <Arrow />
                            <Arrow1 />
                        </span>
                    </button>
                </div>
            </div>

           
            <div className='col-span-1 flex justify-center items-center'>
                <FaBars />
            </div>

            
            <div className='col-span-2 flex justify-end items-center gap-3'>
                <div>Sign in</div>
                <div>Contact</div>
            </div>
        </div>
    );
}
