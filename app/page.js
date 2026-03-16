"use client";
import { useState, useEffect } from 'react';
import { makaleVerisi } from '../icerik/makale1';

export default function Home() {
  const [acikMakale, setAcikMakale] = useState(null);
  const [seciliPuan, setSeciliPuan] = useState(null);

  useEffect(() => {
    if (acikMakale) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [acikMakale]);

  // En son makaleyi manşet yapıyoruz
  const makaleler = [makaleVerisi]; 
  const mansetMakale = makaleler[0];

  return (
    <div style={{ backgroundColor: '#FDFCF7', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'serif' }}>
      
      <div style={{ 
        padding: '40px', 
        filter: acikMakale ? 'blur(15px)' : 'none', 
        opacity: acikMakale ? 0.3 : 1,
        transition: 'all 0.6s ease',
        display: 'flex',
        flexDirection: 'row', // Sola başlık, sağa içerik
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '60px'
      }}>
        
        {/* SOL TARAF: DİKEY BAŞLIK */}
        <nav style={{ 
          position: 'sticky', top: '40px', height: 'fit-content',
          display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px'
        }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#b45309', borderRadius: '50%', marginBottom: '30px' }}></div>
          <h1 style={{ 
            writingMode: 'vertical-rl', transform: 'rotate(180deg)',
            fontSize: '14px', fontWeight: '900', letterSpacing: '8px', color: '#78350f', textTransform: 'uppercase', margin: 0 
          }}>
            Anadolu <span style={{ opacity: 0.3 }}>Kehribarı</span>
          </h1>
        </nav>

        {/* SAĞ TARAF: GAZETE KUPÜRÜ VE ARŞİV */}
        <main style={{ flex: 1 }}>
          
          {/* 1910 GAZETE KUPÜRÜ (MANŞET) */}
          <section 
            onClick={() => setAcikMakale(mansetMakale)}
            style={{ 
              border: '1px solid #d1d5db', padding: '30px', cursor: 'pointer',
              backgroundColor: '#fff', boxShadow: '5px 5px 0px #e5e7eb',
              position: 'relative', marginBottom: '80px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1a', paddingBottom: '5px', marginBottom: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              <span>Nüsha: 01</span>
              <span>17 Mart 1926</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1', marginBottom: '20px', fontWeight: '400' }}>
              {mansetMakale.baslik}
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontStyle: 'italic', color: '#4a4a4a', maxWidth: '80%' }}>
              {mansetMakale.ozet}
            </p>
            <div style={{ marginTop: '30px', textAlign: 'right', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px' }}>
              DEVAMI İÇİN TIKLAYINIZ →
            </div>
          </section>

          {/* ARŞİV LİSTESİ */}
          <section id="arsiv">
            <h3 style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '5px', color: '#b45309', marginBottom: '40px', textTransform: 'uppercase', opacity: 0.5 }}>
              — Sabit Kayıtlar —
            </h3>
            {makaleler.map((m) => (
              <div key={m.id} onClick={() => setAcikMakale(m)} style={{ marginBottom: '40px', cursor: 'pointer', opacity: 0.8 }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>{m.tarih}</span>
                <h4 style={{ fontSize: '22px', fontWeight: '400', color: '#1a1a1a' }}>{m.baslik}</h4>
              </div>
            ))}
          </section>
        </main>
      </div>

      {/* MAKALE OKUMA ODASI (MODAL) + PUANLAMA */}
      {acikMakale && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(253, 252, 247, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div onClick={() => {setAcikMakale(null); setSeciliPuan(null);}} style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'zoom-out' }} />

          <div style={{
            position: 'relative', backgroundColor: '#fff', width: '100%', maxWidth: '850px',
            maxHeight: '90vh', padding: '60px 50px', overflowY: 'auto',
            boxShadow: '0 40px 100px rgba(0,0,0,0.1)', borderRadius: '2px', border: '1px solid #e5e7eb'
          }}>
            <button onClick={() => {setAcikMakale(null); setSeciliPuan(null);}} style={{ position: 'sticky', top: '-30px', float: 'right', background: '#fff', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#cbd5e1' }}>✕</button>
            
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '12px', color: '#b45309', letterSpacing: '2px', fontWeight: 'bold' }}>{acikMakale.tarih}</span>
              <h2 style={{ fontSize: '42px', marginTop: '15px', lineHeight: '1.1', fontWeight: '400' }}>{acikMakale.baslik}</h2>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#f1f1f1', margin: '40px 0' }}></div>
              
              <p style={{ fontSize: '19px', lineHeight: '1.9', color: '#334155', whiteSpace: 'pre-line', marginBottom: '60px' }}>
                {acikMakale.icerik}
              </p>

              {/* PUANLAMA SİSTEMİ */}
              <div style={{ borderTop: '2px double #f1f1f1', paddingTop: '40px', textAlign: 'center' }}>
                <h4 style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', color: '#78350f' }}>
                  Bu Teze Dair Reyiniz
                </h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {[...Array(10)].map((_, i) => (
                    <button
                      key={i+1}
                      onClick={() => setSeciliPuan(i+1)}
                      style={{
                        width: '40px', height: '40px', border: '1px solid #e5e7eb',
                        backgroundColor: seciliPuan === i+1 ? '#78350f' : '#fff',
                        color: seciliPuan === i+1 ? '#fff' : '#1a1a1a',
                        cursor: 'pointer', transition: '0.2s', fontFamily: 'serif'
                      }}
                    >
                      {i+1}
                    </button>
                  ))}
                </div>
                {seciliPuan && (
                  <p style={{ marginTop: '20px', fontSize: '14px', fontStyle: 'italic', color: '#b45309' }}>
                    Reyiniz kaydedildi. (Şimdilik semboliktir)
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '100px 0', opacity: 0.2, fontSize: '11px', letterSpacing: '3px' }}>
        © 2026 ANADOLU KEHRİBARI — MECMUA-İ SİYASET
      </footer>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #b45309; }
      `}</style>
    </div>
  );
}