import { LegalPage, Section } from "@/components/site/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms apply when you use this website or order Favor Sanitary Pads and Favor Adult Diapers from Favor Forever Ltd. By using the site you agree to them."
    >
      <Section title="1. Using this site">
        <ul className="list-disc space-y-1 pl-6">
          <li>Use the site lawfully and do not try to disrupt or hack it.</li>
          <li>Give true details when you contact us or place an order.</li>
          <li>Do not copy or resell site content without our written permission.</li>
        </ul>
      </Section>
      <Section title="2. Products and orders">
        <p>
          Product photos and descriptions are as accurate as we can make them. Prices and stock may
          change. An order is confirmed only when we confirm it by phone, WhatsApp or email.
          Payment is by M-Pesa or cash on delivery where offered.
        </p>
      </Section>
      <Section title="3. Product use">
        <p>
          Follow the directions on the pack. Our products are hygiene items, not medicines. If you
          have a medical concern, speak to a health professional.
        </p>
      </Section>
      <Section title="4. Intellectual property">
        <p>
          The Favor name, logos, pack designs, photos and text on this site belong to Favor Forever
          Ltd. Nothing here gives you a licence to use them.
        </p>
      </Section>
      <Section title="5. Limitation of liability">
        <p>
          The site is provided as is. As far as Kenyan law allows, we are not liable for indirect or
          consequential loss, and our total liability for an order is limited to the price you paid
          for it. Nothing in these terms limits your rights under the Consumer Protection Act, 2012.
        </p>
      </Section>
      <Section title="6. Links to other sites">
        <p>We are not responsible for the content of shops or sites we link to.</p>
      </Section>
      <Section title="7. Governing law">
        <p>
          These terms are governed by the laws of Kenya. Disputes go to the courts of Kenya, but we
          will always try to resolve issues with you directly first.
        </p>
      </Section>
      <Section title="8. Changes">
        <p>We may update these terms. The date at the top shows the latest version.</p>
      </Section>
    </LegalPage>
  );
}
