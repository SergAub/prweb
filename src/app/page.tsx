"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import Image from "next/image";
import {
    useEffect,
    useState
} from "react";

export default function Home() {
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        const fetchText = async () => {
            const response = await fetch('/main.txt');
            const text = await response.text();
            setTextContent(text);
        };

        fetchText();
    }, []);

    return (
    <div>
      <Header/>
        <div className="m-10">
            <p className="mb-6">{textContent}</p>
            <ol className="flex space-x-8 my-4 p-4 overflow-x-auto justify-center">
                <li className="bg-backgroundDark shadow-md py-8 px-10 flex flex-col items-center">
                    <Image
                        src="/Placeholder.png"
                        alt="TariffLogo"
                        width={196}
                        height={196}
                    />
                    <h2 className="text-2xl m-3">Бесплатный</h2>
                    <div className="text-md">
                        <p>Ядра: 1шт.</p>
                        <p>ОЗУ: 1гб.</p>
                        <p>Время аренды: 24ч.</p>
                        <p>Цена: 300руб.</p>
                    </div>
                    <button className="button mt-6">Купить</button>
                </li>
                <li className="bg-backgroundDark shadow-md py-8 px-10 flex flex-col items-center">
                    <Image
                        src="/Placeholder.png"
                        alt="TariffLogo"
                        width={196}
                        height={196}
                    />
                    <h2 className="text-2xl m-3">Начальный</h2>
                    <div className="text-md">
                        <p>Ядра: 2шт.</p>
                        <p>ОЗУ: 2гб.</p>
                        <p>Время аренды: 360ч.</p>
                        <p>Цена: 500руб.</p>
                    </div>
                    <button className="button mt-6">Купить</button>
                </li>
                <li className="bg-backgroundDark shadow-md py-8 px-10 flex flex-col items-center">
                    <Image
                        src="/Placeholder.png"
                        alt="TariffLogo"
                        width={196}
                        height={196}
                    />
                    <h2 className="text-2xl m-3">Средний</h2>
                    <div className="text-md">
                        <p>Ядра: 6шт.</p>
                        <p>ОЗУ: 8гб.</p>
                        <p>Время аренды: 720ч.</p>
                        <p>Цена: 1500руб.</p>
                    </div>
                    <button className="button mt-6">Купить</button>
                </li>
                <li className="bg-backgroundDark shadow-md py-8 px-10 flex flex-col items-center">
                    <Image
                        src="/Placeholder.png"
                        alt="TariffLogo"
                        width={196}
                        height={196}
                    />
                    <h2 className="text-2xl m-3">Максимальный</h2>
                    <div className="text-md">
                        <p>Ядра: 8шт.</p>
                        <p>ОЗУ: 16гб.</p>
                        <p>Время аренды: 2160ч..</p>
                        <p>Цена: 3300руб.</p>
                    </div>
                    <button className="button mt-6">Купить</button>
                </li>
            </ol>
        </div>
        <Footer/>
    </div>
  );
}
