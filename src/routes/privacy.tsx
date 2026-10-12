import { LegalPage, Section } from "@/components/site/LegalPage";
import { CONTACT } from "@/lib/site-config";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Favor Forever Ltd (trading as Favor Brands) respects your privacy. This policy explains what personal data we collect, why, who we share it with and the rights you have under the Kenya Data Protection Act, 2019."
    >
      <Section title="1. Who we are">
        <p>
          Favor Forever Ltd, {CONTACT.address}, is the data controller for personal data collected
          through this website. Contact:{" "}
          <a className="font-semibold text-bloom underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          ,{" "}
          <a className="font-semibold text-bloom underline" href={`tel:${CONTACT.phoneLink}`}>
            {CONTACT.phone}
          </a>
          .
        </p>
      </Section>
      <Section title="2. Data we collect">
        <ul className="list-disc space-y-1 pl-6">
          <li>Contact form: your name, email or phone number, and your message.</li>
          <li>Newsletter: your email address.</li>
          <li>WhatsApp or phone orders: your name, phone number, delivery location and order.</li>
          <li>Technical data: basic device and browser information needed to show the site.</li>
          <li>Cookies: only strictly necessary ones, unless you allow others. See our Cookies Policy.</li>
        </ul>
        <p>We do not ask for health information. Please do not send it in messages.</p>
      </Section>
      <Section title="3. Why we use it">
        <ul className="list-disc space-y-1 pl-6">
          <li>To answer your questions and process orders (performing a contract).</li>
          <li>To send newsletters you signed up for (your consent, which you can withdraw).</li>
          <li>To keep the site secure and working (legitimate interest).</li>
          <li>To meet legal and tax duties (legal obligation).</li>
        </ul>
      </Section>
      <Section title="4. Third parties who process data for us">
        <p>
          We share data only with service providers who help us run the business, such as our
          website hosting provider, email provider, WhatsApp (Meta) for order chats, M-Pesa
          (Safaricom) for payments and delivery partners. Each may only use your data to provide
          their service to us. We never sell your data.
        </p>
      </Section>
      <Section title="5. Transfers outside Kenya">
        <p>
          Some providers store data outside Kenya. Where this happens we rely on appropriate
          safeguards as required by the Data Protection Act.
        </p>
      </Section>
      <Section title="6. How long we keep it">
        <p>
          Messages: up to 24 months. Order records: as long as tax law requires (usually 5 years).
          Newsletter: until you unsubscribe.
        </p>
      </Section>
      <Section title="7. Your rights">
        <p>
          You may ask to access, correct or delete your data, object to or restrict its use,
          withdraw consent and request a copy in a portable format. Email{" "}
          <a className="font-semibold text-bloom underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>{" "}
          and we will reply within 30 days. You may also complain to the Office of the Data
          Protection Commissioner (odpc.go.ke).
        </p>
      </Section>
      <Section title="8. Security">
        <p>We use reasonable technical and organisational measures to protect your data.</p>
      </Section>
      <Section title="9. Changes">
        <p>We may update this policy. The date at the top shows the latest version.</p>
      </Section>
    </LegalPage>
  );
}
