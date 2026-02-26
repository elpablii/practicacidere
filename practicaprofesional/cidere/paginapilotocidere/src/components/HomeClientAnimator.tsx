"use client";

import { motion } from "framer-motion";

// Definimos las variantes para el contenedor (el que orquesta el stagger)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // Tiempo ralentizado entre cada aparición
            delayChildren: 0.3,   // Retraso inicial levemente mayor
        },
    },
};

// Definimos las variantes para cada ítem (el efecto individual)
const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2, // Animación más fluida y lenta
            ease: [0.25, 0.1, 0.25, 1] as const, // Curva Bezier para un movimiento más premium
        },
    },
};

export const HomeContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white py-20 relative"
        >
            {children}
        </motion.div>
    );
};

export const HomeItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
};

export const FadeInHero = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
