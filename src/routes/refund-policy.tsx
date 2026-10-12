import { LegalPage, Section } from "@/components/site/LegalPage";
import { CONTACT } from "@/lib/site-config";

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund & Returns Policy"
      intro="For hygiene reasons we cannot take back opened packs, but we will always put things right if something is wrong with your order. This policy covers orders placed directly with us. For shop purchases, please follow that shop's return policy."
    >
      <Section title="1. When you can return">
        <ul className="list-disc space-y-1 pl-6">
          <li>Unopened, sealed packs within 7 days of delivery.</li>
          <li>Damaged, faulty or wrong items: tell us within 48 hours of delivery, with a photo.</li>
        </ul>
      </Section>
      <Section title="2. What we cannot accept">
        <p>Opened or used packs, unless the product is faulty.</p>
      </Section>
      <Section title="3. How to ask">
        <p>
          WhatsApp or call{" "}
          <a className="font-semibold text-bloom underline" href={`https://wa.me/${CONTACT.whatsappNumber}`}>
            {CONTACT.phone}
          </a>
          , or email{" "}
          <a className="font-semibold text-bloom underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          , with your order details and a photo of the item.
        </p>
      </Section>
      <Section title="4. Refunds">
        <p>
          Once approved, we refund to your M-Pesa number within 7 working days, or send a
          replacement if you prefer. For faulty or wrong items we also cover delivery costs.
        </p>
      </Section>
    </LegalPage>
  );
}
