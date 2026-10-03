import { ImageResponse } from 'next/og';
import { CONFIG } from '@/data/config';

export const alt = `${CONFIG.name} | ${CONFIG.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0b0f14',
          color: '#f4f6f8',
        }}
      >
        <div style={{ fontSize: 28, color: '#7aa2ff', letterSpacing: 2 }}>yuvalmehta.vercel.app</div>
        <div style={{ fontSize: 96, marginTop: 24 }}>{CONFIG.name}</div>
        <div style={{ fontSize: 40, marginTop: 16, color: '#aab4c0', display: 'flex' }}>
          <span>{CONFIG.title}</span>
          <span> · </span>
          <span>{CONFIG.location}</span>
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: '#aab4c0', display: 'flex' }}>
          <span>Top 1% Amazon ML Challenge · 2 IEEE publications · 5x infra cost reduction</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
