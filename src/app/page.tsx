import Header from './components/Header';
import Footer from './components/Footer';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
        <div className="m-10">
            <p>Cubes&Mods - Майнкрафт хостинг</p>
            <ol className="flex space-x-8 my-4 overflow-x-auto justify-center">
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
                        <p>Время аренды: 10ч.</p>
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
                    <h2 className="text-2xl m-3">Бесплатный</h2>
                    <div className="text-md">
                        <p>Ядра: 1шт.</p>
                        <p>ОЗУ: 1гб.</p>
                        <p>Время аренды: 10ч.</p>
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
                    <h2 className="text-2xl m-3">Бесплатный</h2>
                    <div className="text-md">
                        <p>Ядра: 1шт.</p>
                        <p>ОЗУ: 1гб.</p>
                        <p>Время аренды: 10ч.</p>
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
                    <h2 className="text-2xl m-3">Бесплатный</h2>
                    <div className="text-md">
                        <p>Ядра: 1шт.</p>
                        <p>ОЗУ: 1гб.</p>
                        <p>Время аренды: 10ч.</p>
                        <p>Цена: 300руб.</p>
                    </div>
                    <button className="button mt-6">Купить</button>
                </li>
            </ol>
        </div>
        <Footer/>
    </div>
  );
}
