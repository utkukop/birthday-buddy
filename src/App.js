import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [dogumGunleri, setDogumGunleri] = useState( [
    { isim: 'Bertie Yates', yas: 29, img: 'https://picsum.photos/200/300' },
    { isim: 'Hester Hogan', yas: 32, img: 'https://picsum.photos/200/400' },
    { isim: 'Larry Little', yas: 36, img: 'https://picsum.photos/200/500' },
    { isim: 'Sean Walsh', yas: 34, img: 'https://picsum.photos/200/600' },
    { isim: 'Lola Gardner', yas: 29, img: 'https://picsum.photos/200/700' }
  ]);

  const hepsiniTemizle = () => {
  setDogumGunleri([]);

};

  return (
    <div className="App">
      <div className="dogum-gunu-karti">
        <h2>Bugün {dogumGunleri.length} doğum günü</h2>
        <ul>
          {dogumGunleri.map((kisi, index) => (
            <li key={index} className="dogum-gunu-oge">
              <img src={kisi.img} alt={kisi.isim} className="avatar"/>
              <div>
                <h3>{kisi.isim}</h3>
                <p>{kisi.yas} yaşında</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="temizle-btn" onClick={hepsiniTemizle}>Hepsini Temizle</button>
      </div>
    </div>
  );
}

export default App;
