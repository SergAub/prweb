import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image
                src="/Logo.jpg"
                alt="Logo"
                layout="responsive"
                width={1920}
                height={700}
                className="object-cover"
            />
            <nav className="bg-backgroundDark px-10 py-6 shadow-md flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li className="hover:text-hover active:text-click"><Link href="/">Главная</Link></li>
                    <li className="hover:text-hover active:text-click"><Link href="/">Тарифы</Link></li>
                    <li className="hover:text-hover active:text-click"><Link href="/">Свой тариф</Link></li>
                    <li className="hover:text-hover active:text-click"><Link href="/">О нас</Link></li>
                </ul>
                <div className="space-x-4">
                    <Link href="/"
                          className="button">Вход</Link>
                    <Link href="/"
                          className="button">Регистрация</Link>
                </div>
            </nav>
        </header>
    );
}