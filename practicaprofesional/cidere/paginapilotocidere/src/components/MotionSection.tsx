"use client";
import { motion } from "framer-motion";

export const MotionSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);