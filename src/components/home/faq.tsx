import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "How do I book a short term rental through the app?",
    answer:
      "Download the app, create an account, and browse available shortlets in your preferred location. Select your dates, review the amenities, and proceed to checkout. Payment is processed securely and you'll receive a confirmation with check-in details instantly.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes. You can modify or cancel a booking from the 'My Bookings' section in the app. Cancellations made at least 48 hours before check-in are fully refunded. Changes to dates are subject to availability and may affect pricing.",
  },
  {
    question: "Are pets allowed in the apartments?",
    answer:
      "Pet policies vary by property. Each listing clearly indicates whether pets are permitted. Where allowed, a refundable pet deposit may apply. Please review the individual listing details before booking.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Full refunds are issued for cancellations made 48+ hours before check-in. Cancellations within 48 hours receive a 50% refund. No-shows are non-refundable. Refunds are processed within 5–7 business days to your original payment method.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="lg:min-h-screen 2xl:min-h-fit bg-[#151419] flex flex-col items-center justify-center px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="text-white text-2xl sm:text-3xl font-bold text-center mb-10 tracking-tight"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: "easeOut" as const,
              }}
              className="rounded-2xl border-2 py-4 border-[#2e2e2e]  overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white text-sm sm:text-base font-medium leading-snug pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" as const }}
                  className="text-white shrink-0"
                >
                  <MdKeyboardArrowDown size={22} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                  >
                    <p className="px-6 pb-5 text-[#aaaaaa] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
