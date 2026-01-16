import Link from "next/link";
export default function Home(){

    return(
        
         <><div>
            <nav>
                <ul>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='contact'>Contact</Link>
                </ul>
            </nav>
        </div>
        <div className="h-screen flex justify-center items-center">
                <h1 className="font-bold text-3x1">
                    This is About page
                </h1>
            </div></>
    )
}