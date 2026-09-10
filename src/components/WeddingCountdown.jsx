import { useEffect, useState } from 'react';

// Start of the wedding date in South Africa; ceremony time is not yet specified.
const weddingDate = Date.parse('2027-04-24T00:00:00+02:00');

export default function WeddingCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const remaining = Math.max(0, Math.floor((weddingDate - now) / 1000));
  const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
  return (
    <section className="wedding-countdown" aria-label="Countdown to 24 April 2027, South African time">
      <p className="countdown-caption">{remaining > 0 ? 'Counting down to our wedding day' : 'Our wedding day has arrived!'}</p>
      <div className="countdown-grid" role="timer" aria-live="off">
        {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
          <div key={label}><strong>{String(values[index]).padStart(2, '0')}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}
