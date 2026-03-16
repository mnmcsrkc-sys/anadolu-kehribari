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
    <div style={{ backgroundColor: '#DCD9D4', minHeight: '100vh', color: '#000', fontFamily: '"Times New Roman", Times, serif' }}>
      
      {/* ÜST BİLGİ ŞERİDİ (THE CALL STİLİ) */}
      <div style={{ borderBottom: '4px solid #000', borderTop: '4px solid #000', margin: '20px 40px', padding: '5px 0', display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }}>
        <span>VOL. I — NO. 1</span>
        <span>ANKARA, TÜRKIYE, 17 MART 2026</span>
        <span>FIYATI: 5 KURUŞ</span>
      </div>

      <div style={{ 
        padding: '20px 40px', 
        filter: acikMakale ? 'blur(15px)' : 'none', 
        opacity: acikMakale ? 0.3 : 1,
        transition: 'all 0.6s ease',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        
        {/* HEADER: MÜHÜR VE ANA LOGO */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <img 
              src="/muhur.PNG" 
              alt="Mühür" 
              style={{ width: '60px', height: '60px', borderRadius: '50%', filter: 'grayscale(1) contrast(2)', border: '2px solid #000' }} 
            />
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 6rem)', 
              fontWeight: '900', 
              letterSpacing: '-2px', 
              textTransform: 'uppercase',
              margin: '0',
              lineHeight: '0.8'
            }}>
              Anadolu Kehribarı
            </h1>
          </div>
          <p style={{ 
            fontSize: '16px', 
            fontWeight: 'bold', 
            marginTop: '15px', 
            borderTop: '1px solid #000', 
            borderBottom: '1px solid #000', 
            display: 'inline-block', 
            padding: '5px 20px',
            maxWidth: '900px'
          }}>
            "Anadolu'nun toprağından ve suyundan beslenmiş bir gözle, dünya siyasetine ve kıyamet insanlarına bakıyoruz."
          </p>
        </header>

        {/* ANA GAZETE DÜZENİ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gap: '30px', borderTop: '2px solid #000', paddingTop: '20px' }}>
          
          {/* SOL SÜTUN */}
          <aside style={{ fontSize: '14px', textAlign: 'justify', borderRight: '1px solid #000', paddingRight: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px', marginBottom: '10px', textTransform: 'uppercase' }}>Havadis-i Cedid</h3>
            <p>Mühür vuruldu, kayıtlar başladı. Kehribar rengi bir mercekten süzülen gerçekler, bu sütunlarda hayat buluyor.</p>
            <hr />
            <p>Kıyamet insanlarının gürültüsü arasında, toprağın sesini dinleyenlerin mecmuası.</p>
          </aside>

          {/* ORTA SÜTUN: CANLI MANŞET */}
          <main style={{ cursor: 'pointer' }} onClick={() => setAcikMakale(mansetMakale)}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 5vw, 5.5rem)', 
                fontWeight: '950', 
                lineHeight: '0.9', 
                textTransform: 'uppercase',
                margin: '0 0 10px 0'
              }}>
                {mansetMakale.baslik}
              </h2>
              
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                borderTop: '2px solid #000', 
                borderBottom: '2px solid #000', 
                padding: '10px 0',
                margin: '20px 0'
              }}>
                ARAP İŞBİRLİĞİ TEŞKİLATI'NDA FLAŞ GELİŞMELER!
              </h3>
            </div>

            <div style={{ position: 'relative', border: '1px solid #000', padding: '5px', backgroundColor: '#000', marginBottom: '20px' }}>
              {/* CAPCUT'TAN GELEN FLAŞLI VİDEO */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ 
                  width: '100%', 
                  display: 'block',
                  filter: 'grayscale(1) contrast(1.3) brightness(0.9)', 
                }}
              >
                <source src="/manset.mp4" type="video/mp4" />
              </video>
              
              {/* GAZETE DOKUSU OVERLAY */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")',
                opacity: 0.1, pointerEvents: 'none'
              }}></div>
            </div>

            <div style={{ columns: '2', columnGap: '30px', fontSize: '18px', lineHeight: '1.3', fontWeight: 'bold', textAlign: 'justify' }}>
              <p style={{ margin: '0' }}>{mansetMakale.ozet}</p>
            </div>
          </main>

          {/* SAĞ SÜTUN (KÜLLİYAT) */}
          <aside style={{ borderLeft: '1px solid #000', paddingLeft: '20px' }}>
            <h3 style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px', borderBottom: '2px solid #000', marginBottom: '20px' }}>Arşiv-i Külliyat</h3>
            {makaleler.map((m) => (
              <div key={m.id} onClick={() => setAcikMakale(m)} style={{ marginBottom: '20px', cursor: 'pointer' }}>
                <span style={{ fontSize: '10px', fontWeight: 'bold' }}>{m.tarih}</span>
                <h4 style={{ fontSize: '15px', margin: '5px 0', textDecoration: 'underline', textTransform: 'uppercase' }}>{m.baslik}</h4>
              </div>
            ))}
          </aside>
        </div>
      </div>

      {/* MODAL OKUMA ALANI */}
      {acikMakale && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: '#fff', zIndex: 1000, overflowY: 'auto', padding: '60px'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', border: '2px solid #000', padding: '40px' }}>
            <button onClick={() => setAcikMakale(null)} style={{ float: 'right', background: 'none', border: 'none', fontSize: '30px', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
            <h2 style={{ fontSize: '50px', textTransform: 'uppercase', lineHeight: '1' }}>{acikMakale.baslik}</h2>
            <hr style={{ border: '2px solid #000', margin: '20px 0' }} />
            <p style={{ fontSize: '20px', lineHeight: '1.6', textAlign: 'justify', whiteSpace: 'pre-line' }}>{acikMakale.icerik}</p>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '4px solid #000', margin: '40px', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px' }}>
        Anadolu Kehribarı — Tüm Hakları Anadolu Toprağına Aittir
      </footer>
    </div>
  );
}