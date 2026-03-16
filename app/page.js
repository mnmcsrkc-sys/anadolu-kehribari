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
          
          {/* SOL TARAF: DEVASA MARKA İSMİ */}
          <header style={{ flex: '1', minWidth: '300px' }}>
            <h1 style={{ 
              fontSize: 'clamp(4rem, 8vw, 9rem)', 
              fontWeight: '900', 
              lineHeight: '0.8',
              letterSpacing: '-5px', 
              color: '#78350f', 
              textTransform: 'uppercase',
              margin: '0 0 20px 0'
            }}>
              Anadolu<br/>
              <span style={{ color: '#b45309', opacity: 0.8 }}>Kehribarı</span>
            </h1>
            <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#4a4a4a', maxWidth: '400px', marginTop: '20px', lineHeight: '1.4' }}>
              "Zamanın ötesinden, bugünün dünyasına düşülen şerhler..."
            </p>
          </header>

          {/* SAĞ TARAF: GAZETE KUPÜRÜ (MANŞET) */}
          <aside style={{ flex: '1', minWidth: '350px', display: 'flex', justifyContent: 'flex-end' }}>
            <div 
              onClick={() => setAcikMakale(mansetMakale)}
              style={{ 
                width: '100%',
                maxWidth: '450px',
                backgroundColor: '#fef3c7', // Eski kağıt rengi
                padding: '25px',
                border: '1px solid #d1d5db',
                boxShadow: '8px 8px 0px #d4d4d8',
                cursor: 'pointer',
                transform: 'rotate(1deg)', // Hafif yamuk duruş (kupür havası)
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(1deg)'}
            >
              <div style={{ borderBottom: '2px solid #1a1a1a', paddingBottom: '5px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 'bold' }}>
                <span>ALTIN FİKİR</span>
                <span>17.03.2026</span>
              </div>
              
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1', marginBottom: '15px', fontWeight: '700', textDecoration: 'underline' }}>
                {mansetMakale.baslik}
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#1f2937', textAlign: 'justify' }}>
                {mansetMakale.ozet}...
              </p>
              
              <div style={{ marginTop: '20px', borderTop: '1px dashed #1a1a1a', paddingTop: '10px', fontSize: '10px', textAlign: 'center', letterSpacing: '2px' }}>
                MAKALE-İ MAHSUS — DEVAMI İÇİN TIKLAYINIZ
              </div>
            </div>
          </aside>
        </div>

        {/* ARŞİV LİSTESİ (ALTTA) */}
        <section id="arsiv" style={{ marginTop: '100px', borderTop: '1px solid #e5e7eb', paddingTop: '40px' }}>
          <h3 style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px', color: '#b45309', marginBottom: '30px', textTransform: 'uppercase' }}>
            GEÇMİŞ KAYITLAR
          </h3>
          {makaleler.map((m) => (
            <div key={m.id} onClick={() => setAcikMakale(m)} style={{ marginBottom: '20px', cursor: 'pointer' }}>
              <h4 style={{ fontSize: '18px', fontWeight: '400', color: '#4b5563', textDecoration: 'none' }}>
                <span style={{ fontSize: '12px', marginRight: '15px', opacity: 0.5 }}>{m.tarih}</span>
                {m.baslik}
              </h4>
            </div>
          ))}
        </section>
      </div>

      {/* MAKALE OKUMA ODASI (MODAL) */}
      {acikMakale && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div onClick={() => setAcikMakale(null)} style={{ position: 'absolute', width: '100%', height: '100%', cursor: 'zoom-out' }} />

          <div style={{
            position: 'relative', backgroundColor: '#fff', width: '100%', maxWidth: '800px',
            maxHeight: '90vh', padding: '60px 50px', overflowY: 'auto',
            boxShadow: '0 50px 100px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'
          }}>
            <button onClick={() => setAcikMakale(null)} style={{ position: 'sticky', top: '-30px', float: 'right', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#1a1a1a' }}>✕</button>
            
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '12px', color: '#b45309', fontWeight: 'bold' }}>{acikMakale.tarih}</span>
              <h2 style={{ fontSize: '42px', marginTop: '10px', lineHeight: '1.1', fontWeight: '700' }}>{acikMakale.baslik}</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: '#78350f', margin: '30px 0' }}></div>
              
              <p style={{ fontSize: '20px', lineHeight: '1.8', color: '#1a1a1a', whiteSpace: 'pre-line', textAlign: 'justify' }}>
                {acikMakale.icerik}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer style={{ textAlign: 'center', padding: '60px 0', opacity: 0.3, fontSize: '10px', letterSpacing: '2px' }}>
        ANADOLU KEHRİBARI — DİJİTAL MECMUA
      </footer>