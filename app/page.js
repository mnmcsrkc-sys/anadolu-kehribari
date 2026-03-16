"use client";
import { useState, useEffect } from 'react';
import { makaleVerisi } from '../icerik/makale1';

export default function Home() {
  const [acikMakale, setAcikMakale] = useState(null);

  useEffect(() => {
    if (acikMakale) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [acikMakale]);

  const makaleler = [makaleVerisi]; 
  const mansetMakale = makaleler[0];

  return (
    <div style={{ backgroundColor: '#FDFCF7', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'serif' }}>
      
      <div style={{ 
        padding: '60px 40px', 
        filter: acikMakale ? 'blur(15px)' : 'none', 
        opacity: acikMakale ? 0.3 : 1,
        transition: 'all 0.6s ease',
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        
        {/* HEADER: DOKUNMADIK, ESKİSİ GİBİ SADE */}
        <header style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <img 
            src="/muhur.PNG" 
            alt="Mühür" 
            style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #78350f' }} 
          />
          <div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#78350f', textTransform: 'uppercase', margin: '0' }}>
              Anadolu Kehribarı
            </h1>
            <p style={{ fontSize: '15px', color: '#4a4a4a', fontStyle: 'italic', margin: '5px 0 0 0' }}>
              "Anadolu'nun toprağından ve suyundan beslenmiş bir gözle, dünya siyasetine ve kıyamet insanlarına bakıyoruz."
            </p>
          </div>
        </header>

        <hr style={{ border: 'none', borderTop: '1px solid #d1d5db', marginBottom: '40px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '50px' }}>
          
          {/* SOL KUTUCUK: SADECE BURAYI DÜZENLEDİK */}
          <section>
            <div 
              onClick={() => setAcikMakale(mansetMakale)}
              style={{ 
                backgroundColor: '#fef3c7', 
                padding: '30px', 
                border: '1px solid #d1d5db',
                boxShadow: '10px 10px 0px #e5e7eb',
                cursor: 'pointer'
              }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>
                {mansetMakale.baslik}
              </h2>

              {/* FLAŞLI VİDEON BURADA */}
              <div style={{ width: '100%', border: '1px solid #000', backgroundColor: '#000', marginBottom: '20px' }}>
                <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
                  <source src="/manset.mp4" type="video/mp4" />
                </video>
              </div>

              <p style={{ fontSize: '20px', lineHeight: '1.5', textAlign: 'justify' }}>
                {mansetMakale.ozet}...
              </p>
            </div>
          </section>

          {/* SAĞ TARAF: KÜLLİYAT (DOKUNMADIK) */}
          <aside style={{ borderLeft: '1px solid #d1d5db', paddingLeft: '40px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#78350f', marginBottom: '30px', borderBottom: '2px solid #78350f', display: 'inline-block' }}>
              KÜLLİYAT / ARŞİV
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {makaleler.map((m) => (
                <div key={m.id} onClick={() => setAcikMakale(m)} style={{ cursor: 'pointer' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>{m.tarih}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', margin: '5px 0 0 0' }}>{m.baslik}</h4>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* MODAL OKUMA ALANI (DOKUNMADIK) */}
      {acikMakale && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: '#FDFCF7', zIndex: 1000, overflowY: 'auto', padding: '60px 20px'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <button onClick={() => setAcikMakale(null)} style={{ float: 'right', background: 'none', border: 'none', fontSize: '30px', cursor: 'pointer' }}>✕</button>
            <h2 style={{ fontSize: '45px', fontWeight: '800' }}>{acikMakale.baslik}</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.8', whiteSpace: 'pre-line', marginTop: '40px' }}>
              {acikMakale.icerik}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}