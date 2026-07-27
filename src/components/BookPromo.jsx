import './BookPromo.css';
import { IconBook, IconStack, IconPen, IconBox, IconStar, IconMail, IconWhatsApp } from './icons';

const ORDER_EMAIL = 'pssrinivas1@gmail.com';
const WHATSAPP_NUMBER = '917032428815';
const ORDER_PHONE_DISPLAY = '+91 70324 28815';

const ORDER_SUBJECT = 'Book Order — Flavours of South India';
const ORDER_EMAIL_BODY =
  "Hi,\n\nI'd like to order a copy of \"Flavours of South India: Authentic Andhra Vegetarian Cooking\" by P. V. Ramana.\n\nName:\nDelivery address:\nPhone number:\nNumber of copies:\n";
const ORDER_WHATSAPP_MESSAGE =
  'Hi,\nI\'d like to order a copy of \"Flavours of South India: Authentic Andhra Vegetarian Cooking\" by P. V. Ramana.\n\nName:\nDelivery address:\nPhone number:\nNumber of copies:\nCould you share the price with delivery and how to pay?';

const orderMailHref = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(ORDER_SUBJECT)}&body=${encodeURIComponent(ORDER_EMAIL_BODY)}`;
const orderWhatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ORDER_WHATSAPP_MESSAGE)}`;

export default function BookPromo() {
  return (
    <section className="book-promo" id="book">
      <div className="container book-promo-inner">
        <div className="book-cover-wrap">
          <div className="book-cover">
            <div className="book-cover-face">
              <div className="book-cover-spine" />
              <img src="/book-cover-placeholder.png" alt="Flavours of South India book cover" />
            </div>
            <span className="book-badge"><IconBook /> Now in Print</span>
          </div>
        </div>

        <div className="book-content">
          <span className="eyebrow">✦ Bring It To Your Kitchen ✦</span>
          <h2>
            Get the book: <span>Flavours of South India</span>
          </h2>
          <p className="book-subtitle">Authentic Andhra Vegetarian Cooking &mdash; by P. V. Ramana</p>

          <p className="book-description">
            Every recipe on this website, beautifully printed and bound &mdash; all 242
            Andhra and South Indian vegetarian dishes, from festival sweets to everyday
            pappu, in one keepsake cookbook for your kitchen shelf.
          </p>

          <div className="book-facts">
            <span className="book-fact"><IconStack /> 242 Recipes</span>
            <span className="book-fact"><IconPen /> By P. V. Ramana</span>
            <span className="book-fact"><IconBox /> Hardcover Edition</span>
            <span className="book-fact"><IconStar /> Reader Favorite</span>
          </div>

          <div className="book-price-card">
            <div className="book-price-row">
              <span className="book-price">₹500</span>
              <span className="book-price-note">+ delivery charges as per your location</span>
            </div>
            <a
              className="btn-pill book-order-btn"
              href={orderWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp /> Order Your Copy
            </a>
          </div>

          <div className="book-order-contact">
            <a href={orderMailHref} className="book-order-contact-link">
              <IconMail /> {ORDER_EMAIL}
            </a>
            <a
              href={orderWhatsappHref}
              className="book-order-contact-link whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp /> {ORDER_PHONE_DISPLAY}
            </a>
          </div>

          <p className="book-fineprint">
            Delivery charges are calculated based on your city/state and shared with you
            before dispatch. Orders can be placed by email or WhatsApp &mdash; we'll confirm
            final cost and delivery time within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
