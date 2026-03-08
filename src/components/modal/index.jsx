import { X } from "lucide-react";
import { motion } from "framer-motion";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal shell */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.96 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl 
                   bg-white/95 shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="fixed md:absolute top-6 right-0  z-10 
                     bg-white rounded-full p-2 shadow hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        {children}
      </motion.div>
    </div>
  );
};

export default Modal;