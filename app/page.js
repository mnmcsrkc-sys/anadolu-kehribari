"use client";
import { useState, useEffect } from 'react';
// Dışarıdaki dosyadan makale verisini çekiyoruz
import { makaleVerisi } from '../icerik/makale1';

export default function Home() {
  const [acikMakale, setAcikMakale] = useState(null);

  // Makale açıldığında arka planın kaymasını engeller
  useEffect(() => {
    if (acikMakale) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [acikMakale]);

  const scrollaGit = () => {
    document.getElementById('arsiv').scrollIntoView({ behavior: 'smooth' });
  };

  // Makaleleri bu listeye ekliyoruz
  const makaleler = [
    makaleVerisi, 
    // Yeni makale eklediğinde buraya import ettiğin değişkeni yazman yeterli
  ];

  return (
    <div style={{ backgroundColor: '#FDFCF7', minHeight: '100vh', color: '#1a1a1a', fontFamily: 'serif' }}>
      
      {/* ANA SAYFA İÇERİĞİ */}
      <div style={{ 
        padding: '40px', 
        filter: acikMakale ? 'blur(15px)' : 'none', 
        opacity: acikMakale ? 0.3 : 1,
        transition: 'all 0.6s ease'
      }}>
        <nav style={{ marginBottom: '100px', textAlign: 'center' }}>
          {/* Mühür Alanı (Görseli ekleyene kadar kodla temsil ediyoruz) */}
          <div style={{ width: '50px', height: '50px', backgroundColor: '#b45309', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(180, 83, 9, 0.2)' }}>
            <div style={{ width: '15px', height: '15px', backgroundColor: '#1a1a1a', borderRadius: '50%' }}></div>
          </div>
          <h1 style={{ fontSize: '16px', fontWeight: '900', letterSpacing: '4px', color: '#78350f', textTransform: 'uppercase' }}>
            Anadolu <span style={{ opacity: 0.5 }}>Kehribarı</span>
          </h1>
        </nav>

        <main style={{ maxWidth: '850px', margin: '0 auto', minHeight: '75vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)', fontWeight: '300', letterSpacing: '-3px', marginBottom: '40px', lineHeight: '1' }}>
            Zaman <span style={{ fontStyle: 'italic', color: '#b45309', fontWeight: '200' }}>Yoktur.</span>
          </h2>
          <p style={{ fontSize: '20px', lineHeight: '1.6', fontStyle: 'italic', borderLeft: '2px solid #fde68a', paddingLeft: '30px', color: '#4a4a4a', maxWidth: '650px' }}>
            "Anadolu'nun toprağından ve suyundan beslenmiş bir gözle, dünya siyasetine ve kıyamet insanlarına bakıyoruz."
          </p>
          <div style={{ marginTop: '60px' }}>
            <button onClick={scrollaGit} style={{ background: 'none', border: 'none', borderBottom: '1px solid #78350f', color: '#78350f', paddingBottom: '5px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '11px' }}>
              İçeri Buyrun ↓
            </button>
          </div>
        </main>

        <section id="arsiv" style={{ maxWidth: '850px', margin: '150px auto' }}>
          <h3 style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '5px', color: '#b45309', marginBottom: '60px', textTransform: 'uppercase', opacity: 0.5 }}>
            — Kayıtlar —
          </h3>
          {makaleler.map((m) => (
            <div key={m.id} onClick={() => setAcikMakale(m)} style={{ marginBottom: '50px', cursor: 'pointer', borderBottom: '1px solid #f1f1f1', paddingBottom: '30px', transition: '0.3s' }}>
              <span style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '2px' }}>{m.tarih}</span>
              <h4 style={{ fontSize: '28px', fontWeight: '400', marginTop: '8px', color: '#1a1a1a' }}>{m.baslik}</h4>
              <p style={{ color: '#64748b', marginTop: '10px', fontStyle: 'italic', fontSize: '16px' }}>{m.ozet}</p>
            </div>
          ))}
        </section>
      </div>

      {/* ORTALANMIŞ MAKALE OKUMA ODASI (MODAL) */}
      {acikMakale && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(253, 252, 247, 0.4)', // Fildişi tonunda cam efekti
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          {/* Dışarıya tıklanınca kapatır */}
          <div onClick={() => setAcikMakale(null)} style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'zoom-out' }} />

          {/* Makale Kağıdı */}
          <div style={{
            position: 'relative', backgroundColor: '#fff', width: '100%', maxWidth: '800px',
            maxHeight: '85vh', padding: '60px 50px', overflowY: 'auto',
            boxShadow: '0 40px 100px rgba(0,0,0,0.15)', borderRadius: '4px',
            animation: 'modalSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <button 
              onClick={() => setAcikMakale(null)} 
              style={{ position: 'sticky', top: '-30px', float: 'right', background: '#fff', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#cbd5e1', padding: '10px' }}
            >✕</button>
            
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '12px', color: '#b45309', letterSpacing: '2px', fontWeight: 'bold' }}>{acikMakale.tarih}</span>
              <h2 style={{ fontSize: '38px', marginTop: '15px', lineHeight: '1.2', fontWeight: '400', color: '#0f172a' }}>{acikMakale.baslik}</h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#fde68a', margin: '35px 0' }}></div>
              <p style={{ fontSize: '19px', lineHeight: '1.9', color: '#334155', whiteSpace: 'pre-line' }}>
                {acikMakale.icerik}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '100px 0', opacity: 0.2, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
        © 2026 Anadolu Kehribarı
      </footer>

      <style jsx global>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Scrollbar Tasarımı */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #fde68a; border-radius: 10px; }
      `}</style>
    </div>
  );
}