import { Link } from 'react-router-dom';
export default function ItineraryPage() {
  return (
    <main className="main-wedding-site page-content-wrapper information-page">
      <header className="form-header">
        <p className="information-eyebrow">24 April 2027 · Red Ivory</p>
        <h1 className="rsvp-main-title">Itinerary</h1>
        <p className="rsvp-subtitle">A day to celebrate together</p>
      </header>
      <section className="information-panel itinerary-event" aria-labelledby="dinner-heading">
        <p className="information-eyebrow">23 April 2027 · Red Ivory · Time to be confirmed</p>
        <h2 id="dinner-heading" className="section-heading-bw">✨ Pre-Wedding Dinner ✨</h2>
        <p>For those who will be in the area the night before the wedding, we’d love to have you join us for a relaxed pre-wedding dinner at the venue! 🥂❤️</p>
        <p>The dinner will be R300 per person. This is completely optional, but we’d absolutely love to dine and spend some time with you before the big day!</p>
        <p>Please let us know if you’d like to join us so we can finalise numbers. 🥰</p>
        <p>We can’t wait to celebrate with you! ❤️</p>
        <Link to="/rsvp" className="action-link-bw-outline">RSVP for Dinner</Link>
      </section>
      <section className="information-panel" aria-labelledby="schedule-heading">
        <h2 id="schedule-heading" className="section-heading-bw">The Wedding Day</h2>
        <p>Our wedding day schedule is coming soon. Please check back for ceremony and reception times.</p>
      </section>
    </main>
  );
}
