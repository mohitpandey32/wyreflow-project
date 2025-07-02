import React from 'react';

export const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="contact-form__row">
        <input
          type="text"
          placeholder="First Name"
          className="contact-form__input"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="contact-form__input"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        className="contact-form__input contact-form__input--full"
      />
      <textarea
        rows={6}
        placeholder="Tell us about your project..."
        className="contact-form__textarea"
      ></textarea>
      <button
        type="submit"
        className="contact-form__submit"
      >
        Send Message
      </button>
    </form>
  );
};