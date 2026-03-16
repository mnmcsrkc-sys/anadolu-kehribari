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
        
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
          
          <header style={{ flex: '1.2', minWidth: '300px' }}>
            <div style={{ marginBottom: '30px' }}>
                {/* En güvenli resim çağırma yöntemi */}
                <img 
                src="/muhur.PNG" 
                alt="Mühür" 
                style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    filter: 'sepia(0.8) contrast(1.2)',
                    border: '3px double #78350f',
                    padding: '4px',
                    backgroundColor: '#78350f'
                }} 
                />
            </div>

            <h1 style={{ 
              fontSize: 'clamp(3rem, 7vw, 8.5rem)', 
              fontWeight: '900', 
              lineHeight: '0.8',
              letterSpacing: '-5px', 
              color: '#78350f', 
              textTransform: 'uppercase',
              margin: '0'
            }}>
              Anadolu<br/>
              <span style={{ color: '#b45309', opacity: 0.8 }}>Kehribarı</span>
            </h1>
            <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#4a4a4a', maxWidth: '400px', marginTop: '30px', lineHeight: '1.4' }}>
              "Zamanın ötesinden, bugünün dünyasına düşülen şerhler..."
            </p>
          </header>

          <aside style={{ flex: '0.8', minWidth: '350px', display: 'flex', justifyContent: 'flex-end' }}>
            <div 
              onClick={() => setAcikMakale(mansetMakale)}
              style={{ 
                width: '100%',
                maxWidth: '420px',
                backgroundColor: '#fef3c7', 
                padding: '30px',
                border: '1px solid #d1d5db',
                boxShadow: '12px 12px 0px #d4d4d8',
                cursor: 'pointer',
                transform: 'rotate(1.5deg)', 
                transition: 'transform 0.3s ease'
              }}
            >
              <div style={{ borderBottom: '2px solid #1a1a1a', paddingBottom: '8px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold' }}>
                <span>ALTIN FİKİR</span>
                <span>17.03.2026</span>
              </div>
              
              <h2 style={{ fontSize: '2.4rem', lineHeight: '1', marginBottom: '15px', fontWeight: '700', textDecoration: 'underline' }}>
                {mansetMakale.baslik}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#1f2937', textAlign: 'justify', fontStyle: 'italic' }}>
                {mansetMakale.ozet}...
              </p>
            </div>
          </aside>
        </div>

        <section style={{ marginTop: '100px', borderTop: '1px solid #e5e7eb', paddingTop: '40px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px', color: '#b45309', marginBottom: '30px', textTransform: 'uppercase', opacity: 0.6 }}>
            KÜLLİYAT / GEÇMİŞ KAYITLAR
          </h3>
          {makaleler.map((m) => (
            <div key={m.id} onClick={() => setAcikMakale(m)} style={{ marginBottom: '25px', cursor: 'pointer' }}>
              <h4 style={{ fontSize: '20px', fontWeight: '400', color: '#4b5563' }}>
                <span style={{ fontSize: '12px', marginRight: '20px', color: '#94a3b8' }}>{m.tarih}</span>
                {m.baslik}
              </h4>
            </div>
          ))}
        </section>
      </div>

      {acikMakale && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(253, 252, 247, 0.98)', display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div onClick={() => setAcikMakale(null)} style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'zoom-out' }} />

          <div style={{
            position: 'relative', backgroundColor: '#fff', width: '100%', maxWidth: '850px',
            maxHeight: '90vh', padding: '60px 50px', overflowY: 'auto',
            boxShadow: '0 50px 100px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'
          }}>
            <button onClick={() => setAcikMakale(null)} style={{ position: 'sticky', top: '-30px', float: 'right', background: '#fff', border: 'none', fontSize: '28px', cursor: 'pointer' }}>✕</button>
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '13px', color: '#b45309', fontWeight: 'bold' }}>{acikMakale.tarih}</span>
              <h2 style={{ fontSize: '46px', marginTop: '10px', lineHeight: '1.1', fontWeight: '700' }}>{acikMakale.baslik}</h2>
              <div style={{ width: '80px', height: '5px', backgroundColor: '#78350f', margin: '35px 0' }}></div>
              <p style={{ fontSize: '21px', lineHeight: '1.9', color: '#1a1a1a', whiteSpace: 'pre-line', textAlign: 'justify' }}>
                {acikMakale.icerik}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '80px 0', opacity: 0.3, fontSize: '11px', letterSpacing: '4px' }}>
        © 2026 ANADOLU KEHRİBARI
      </footer>
    </div>
  );
}