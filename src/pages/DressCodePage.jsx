import look1 from '../assets/dresscode/dcode1.jpg';
import look2 from '../assets/dresscode/dcode2.jpg';
import look3 from '../assets/dresscode/dcode3.jpg';
import look4 from '../assets/dresscode/dcode4.jpg';
import look5 from '../assets/dresscode/dcode5.jpg';
import look6 from '../assets/dresscode/dcode6.jpg';
import look7 from '../assets/dresscode/dcode7.jpg';

const looks = [look1, look2, look3, look4, look5, look6, look7];

export default function DressCodePage() {
  return (
    <main className="main-wedding-site page-content-wrapper dress-code-page">
      <header className="form-header dress-code-header">
        <p className="information-eyebrow">Dress Code</p>
        <h1 className="rsvp-main-title">Black & Gold</h1>
        <p className="rsvp-subtitle">Join us in black and gold to celebrate our special day.</p>
        <div className="dress-code-palette" aria-label="Wedding colours: black and gold">
          <span><i className="swatch-black" aria-hidden="true" />Black</span>
          <span><i className="swatch-gold" aria-hidden="true" />Gold</span>
        </div>
      </header>
      <section className="dress-code-reminder" aria-labelledby="dress-code-reminder-title">
        <h2 id="dress-code-reminder-title">🤍 Wedding Dress Code Reminder 🤍</h2>
        <p>Dear family &amp; friends, a little dress code reminder: please avoid wearing white, cream, ivory, or any shades that may resemble bridal colours.</p>
        <p>Let’s leave those colours for the bride! 👰🏽‍♀️✨</p>
        <p>Thank you for understanding — we can’t wait to celebrate with you! 🥂❤️</p>
        <p>Love, Chiedza &amp; Fred</p>
      </section>
      <section aria-labelledby="outfit-inspiration">
        <h2 id="outfit-inspiration" className="section-heading-bw">Outfit Inspiration</h2>
        <p className="section-helper-text">Explore these looks for inspiration and make the colours your own.</p>
        <div className="dress-code-gallery">
          {looks.map((src, index) => (
            <figure key={src}>
              <img src={src} alt={`Black and gold dress code inspiration ${index + 1}`} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
