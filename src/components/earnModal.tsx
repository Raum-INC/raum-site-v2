import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { MdRocketLaunch } from "react-icons/md";
import useModalStore from "../store/modalStore";

const EarnMoreModal: React.FC = () => {
  const { isOpen, closeModal } = useModalStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[70] flex items-center justify-center px-4"
          >
            <div className="w-full max-w-lg bg-[#111111] border border-[#2e2e2e] rounded-3xl p-8 flex flex-col gap-6 relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-[#aaaaaa] hover:text-white transition-colors"
              >
                <HiX size={20} />
              </button>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#0000FF] rounded-xl flex items-center justify-center">
                <MdRocketLaunch size={22} className="text-white" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-2xl leading-tight tracking-tight">
                  Start earning with Raum
                </h3>
                <p className="text-[#aaaaaa] text-sm leading-relaxed">
                  Whether you want to host your property or invest in high-yield
                  short-term rentals, Raum Africa makes it simple to get
                  started.
                </p>
              </div>

              {/* CTA options */}
              <div className="flex flex-col gap-3">
                <a
                  href="/host"
                  onClick={closeModal}
                  className="w-full bg-[#0000FF] text-white text-sm font-semibold py-3.5 rounded-full text-center hover:bg-blue-700 transition-colors"
                >
                  Become a Host
                </a>
                <a
                  href="/invest"
                  onClick={closeModal}
                  className="w-full border border-[#2e2e2e] text-white text-sm font-semibold py-3.5 rounded-full text-center hover:border-white transition-colors"
                >
                  Invest with Raum
                </a>
              </div>

              <p className="text-[#555] text-xs text-center">
                Join thousands already earning across Africa
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EarnMoreModal;
