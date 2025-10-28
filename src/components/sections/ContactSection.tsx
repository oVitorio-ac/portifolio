'use client';

import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 fade-in-up">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 fade-in-up">
          {t('contact.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="slide-in-left">
            <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center slide-in-right">
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg">
                <span className="text-2xl mr-4">📱</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-lg">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}