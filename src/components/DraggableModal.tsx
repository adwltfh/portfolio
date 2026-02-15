"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../contexts/ModalContext";

export default function ModalContainer() {
  const { modals, closeModal, toggleMinimize, bringToFront } = useModal();

  console.log("ModalContainer rendering, modals:", modals);

  return (
    <>
      <AnimatePresence>
        {modals.map((modal, index) => (
          <motion.div
            key={modal.id}
            drag
            dragMomentum={false}
            dragConstraints={{
              left: 0,
              top: 0,
              right:
                typeof window !== "undefined" ? window.innerWidth - 600 : 800,
              bottom:
                typeof window !== "undefined" ? window.innerHeight - 400 : 600,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 100 + index * 30,
              y: 100 + index * 30,
            }}
            animate={{
              opacity: 1,
              scale: modal.isMinimized ? 0 : 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-gray-200"
            style={{
              zIndex: 1000 + modal.zIndex,
              left: 100 + index * 30,
              top: 100 + index * 30,
            }}
            onClick={() => bringToFront(modal.id)}
          >
            {/* Title Bar */}
            <motion.div
              className="flex items-center justify-between px-5 py-4 rounded-t-lg cursor-move select-none"
              whileHover={{
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)",
              }}
            >
              <h3 className="font-semibold">{modal.title}</h3>
              <div
                className="flex gap-2"
                onPointerDown={(e) => e.stopPropagation()}
              >
                {/* Minimize Icon */}
                <motion.button
                  className="hover:bg-white/20 p-1.5 rounded transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMinimize(modal.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.button>

                {/* Close Icon */}
                <motion.button
                  className="hover:bg-white/20 p-1.5 rounded transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal(modal.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Content */}
            {!modal.isMinimized && (
              <motion.div
                className="max-h-96 overflow-y-auto text-[#4a4a4a]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                onPointerDown={(e) => e.stopPropagation()}
              >
                {modal.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
