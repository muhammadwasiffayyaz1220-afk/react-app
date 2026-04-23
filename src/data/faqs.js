/** FAQ content + SEO helpers for WASITEX (clothing manufacturing). */

export const faqSeoMeta = {
  title: 'Clothing manufacturing FAQs',
  description:
    'MOQ, sampling, production timelines, streetwear & sportswear manufacturing, printing & embroidery, fabric sourcing, private label, quality control, international shipping, and payment terms with WASITEX in Pakistan.',
  keywords:
    'clothing manufacturing MOQ, apparel sampling Pakistan, custom streetwear manufacturer, sportswear OEM, varsity jackets bulk, private label clothing, fabric sourcing, DTF printing, garment QC, WASITEX FAQ',
}

/**
 * @typedef {{ q: string, paragraphs?: string[], list?: string[], trailing?: string[] }} FaqItem
 */

/** @type {FaqItem[]} */
export const faqItems = [
  {
    q: 'What is the minimum order quantity (MOQ) for clothing manufacturing?',
    paragraphs: [
      'At WASITEX, the minimum order quantity (MOQ) depends on the type of apparel and customization level. For most clothing manufacturing projects such as streetwear, sportswear, and varsity jackets, our MOQ typically starts from 50–100 pieces per design.',
    ],
  },
  {
    q: 'Do you provide clothing samples before bulk production?',
    paragraphs: [
      'Yes, we offer sample development before bulk clothing production. This ensures that your custom apparel design, fit, and quality meet your expectations before starting mass production.',
    ],
  },
  {
    q: 'How long does apparel sampling and production take?',
    paragraphs: [
      'Sampling typically takes 3–7 days, while bulk apparel manufacturing usually takes 2–3 weeks after sample approval. Timelines may vary depending on design complexity and order size.',
    ],
  },
  {
    q: 'What types of clothing do you manufacture?',
    paragraphs: ['WASITEX specializes in:'],
    list: [
      'Custom streetwear manufacturing',
      'Casual wear production',
      'Sportswear manufacturing',
      'Varsity jackets',
      'Private label apparel',
    ],
    trailing: ['We support both small brands and large-scale production.'],
  },
  {
    q: 'Do you offer custom clothing manufacturing for startups?',
    paragraphs: [
      'Yes, we work with startups and emerging brands. Our flexible production process allows small businesses to launch their clothing line with low MOQs and full customization.',
    ],
  },
  {
    q: 'Can you match custom apparel designs exactly?',
    paragraphs: [
      'Yes, we follow your tech pack, reference images, and specifications carefully. Our goal is to ensure that bulk production matches the approved sample in terms of design, fit, and quality.',
    ],
  },
  {
    q: 'What printing and embroidery services do you offer?',
    paragraphs: ['We provide a wide range of customization options, including:'],
    list: [
      'Screen printing',
      'DTF and DTG printing',
      'Sublimation printing',
      'Embroidery (including chenille and patches)',
    ],
  },
  {
    q: 'Do you provide fabric sourcing for clothing manufacturing?',
    paragraphs: [
      'Yes, we offer fabric sourcing services based on your requirements, including GSM, fabric composition, and finishing.',
    ],
  },
  {
    q: 'Do you offer private label clothing manufacturing?',
    paragraphs: [
      'Yes, we provide complete private label services including custom labels, hang tags, and packaging for your clothing brand.',
    ],
  },
  {
    q: 'How do you ensure quality control in apparel manufacturing?',
    paragraphs: ['We follow a strict quality control process:'],
    list: ['Fabric inspection', 'Inline production checks', 'Final inspection before shipment'],
    trailing: ['This ensures consistency and high-quality apparel production.'],
  },
  {
    q: 'Do you ship internationally?',
    paragraphs: [
      'Yes, WASITEX works with international clients and supports global shipping for clothing manufacturing orders.',
    ],
  },
  {
    q: 'What are your payment terms for clothing manufacturing?',
    paragraphs: ['Payment terms depend on the order size, but generally include:'],
    list: ['Sample: full advance', 'Bulk: partial advance + balance before shipment'],
  },
  {
    q: 'How can I start working with WASITEX?',
    paragraphs: [
      'You can contact us with your design, tech pack, or idea. Our team will guide you through sampling, pricing, and production for your clothing manufacturing project.',
    ],
  },
]

/** Plain text for JSON-LD FAQPage `acceptedAnswer.text`. */
export function faqAnswerToPlainText(item) {
  const parts = [...(item.paragraphs ?? [])]
  if (item.list?.length) {
    parts.push(item.list.join('; '))
  }
  if (item.trailing?.length) {
    parts.push(...item.trailing)
  }
  return parts.join(' ')
}
