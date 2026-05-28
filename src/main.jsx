import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Heart,
  MapPin,
  Truck,
  ShieldCheck,
  Star,
  Leaf,
  Bone,
  Package,
  Mail,
} from 'lucide-react';
import './styles.css';

const AS = '/assets/';

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="lead">{children}</div>}
    </div>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="feature">
      <Icon size={28} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          MADHA <span>4 LIFE</span>
        </div>
        <div className="links">
          <a href="#story">Story</a>
          <a href="#food">Food</a>
          <a href="#farms">Farm Network</a>
          <a href="#delivery">Delivery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-image-only">
        <img src={`${AS}madha-hero.png`} alt="Madha 4 Life hero" />
      </section>

      <section id="story" className="split">
        <div>
          <SectionTitle
            eyebrow="Our Story"
            title="Inspired by survival, healing, and the dogs we love."
          >
            Madha 4 Life was founded by Tina and Stephen James of Carrollton,
            Georgia after personal health journeys changed the way they thought
            about food, nutrition, and processed ingredients.
          </SectionTitle>
          <p>
            After losing Mia, their beloved black German Shepherd, and later
            seeing their Golden Doodles thrive on real, home-prepared food, the
            mission became clear: help more families feed their dogs food made
            with purpose, transparency, and love.
          </p>
        </div>

        <div className="photo-card">
          <img src={`${AS}mia-1.jpeg`} alt="Mia the black German Shepherd" />
          <div className="caption">Inspired by Mia</div>
        </div>
      </section>

      <section id="food" className="cream">
        <SectionTitle
          eyebrow="Our Food"
          title="Premium real-food meals without luxury-level pricing."
        >
          Our meals are designed around real meats, fresh vegetables, wholesome
          ingredients, and nutrient-dense organ blends. Pricing and final
          nutrition data are currently being finalized.
        </SectionTitle>

        <div className="grid four">
          <Feature
            icon={Bone}
            title="Core Proteins"
            text="Chicken, beef, pork, turkey, and organ-rich blends."
          />
          <Feature
            icon={Leaf}
            title="Real Ingredients"
            text="Brown rice, carrots, peas, broccoli, pumpkin, yogurt, berries, and other wholesome ingredients."
          />
          <Feature
            icon={Package}
            title="Meal Tubes"
            text="16 oz servings available in 1-pound and 5-pound tubes."
          />
          <Feature
            icon={ShieldCheck}
            title="Nutrition Review"
            text="Final recipes and nutritional review path: TBD."
          />
        </div>
      </section>

      <section className="split reverse">
        <div className="photo-card">
          <img src={`${AS}dogs-2.jpg`} alt="Golden Doodles" />
          <div className="caption">Built for the dogs we still have</div>
        </div>

        <div>
          <SectionTitle
            eyebrow="Why Real Food Matters"
            title="Because once you see the difference, you never look at dog food the same way again."
          />
          <p>
            Madha 4 Life exists for families who want fewer mystery ingredients,
            less ultra-processed food, and more confidence in what they are
            feeding the dogs they consider family.
          </p>
          <p className="note">
            Website disclaimer placeholder: Madha 4 Life recipes are not intended
            to diagnose, treat, cure, or prevent disease. Final nutrition and
            veterinary guidance language pending.
          </p>
        </div>
      </section>

      <section className="patriot">
        <SectionTitle
          eyebrow="Organ-Rich Nutrition"
          title="Nose-to-tail nutrition dogs were designed to recognize."
        >
          Organ meats like liver, heart, kidney, gizzards, and other blends can
          provide naturally dense sources of vitamins, minerals, amino acids, and
          nutrients. Our goal is balanced, responsible, transparent formulation.
        </SectionTitle>
      </section>

      <section id="farms" className="split">
        <div>
          <SectionTitle
            eyebrow="Farm Network"
            title="West Georgia roots. American farmer values."
          >
            Whenever possible, Madha 4 Life sources ingredients from trusted
            farms throughout Carrollton, West Georgia, and surrounding
            communities.
          </SectionTitle>
          <p>
            We believe supporting farmers, veterans, first responders, and local
            communities is part of building a company that stands for something
            bigger than a product.
          </p>
        </div>

        <div className="photo-card">
          <img src={`${AS}farm-network-map.png`} alt="Farm network map" />
          <div className="caption">Local sourcing map — farm partners TBD</div>
        </div>
      </section>

      <section id="delivery" className="cream">
        <SectionTitle
          eyebrow="Delivery & Subscriptions"
          title="Fresh food delivered locally and shipped frozen."
        >
          Local delivery is planned within 20 miles of Carrollton, Georgia.
          Nationwide orders will ship frozen with dry ice. Subscription plans are
          planned and pricing is TBD.
        </SectionTitle>

        <div className="grid three">
          <Feature
            icon={MapPin}
            title="Local Delivery"
            text="Refrigerated delivery within a 20-mile radius."
          />
          <Feature
            icon={Truck}
            title="Frozen Shipping"
            text="Dry-ice shipments for online customers."
          />
          <Feature
            icon={Star}
            title="Subscription Plans"
            text="Recurring meal plans designed around your dog’s needs."
          />
        </div>
      </section>

      <section className="comparison">
        <SectionTitle
          eyebrow="Cost Comparison"
          title="Premium nutrition should be more accessible."
        >
          Many national premium dog food brands can cost hundreds per month per
          dog. Madha 4 Life is being built to provide real-food nutrition with
          local sourcing advantages and transparent pricing.
        </SectionTitle>
        <div className="placeholder">
          Pricing comparison chart: TBD after protein costs are finalized.
        </div>
      </section>

      <section id="contact" className="final">
        <Heart size={40} />
        <h2>Join the Madha 4 Life movement.</h2>
        <p>
          Healthy dogs start with real food. Be among the first families to
          follow the launch.
        </p>
        <a className="btn primary" href="mailto:sjames.atlanta@gmail.com">
          <Mail size={18} /> Contact Us
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);