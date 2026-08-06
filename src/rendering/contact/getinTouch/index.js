'use client';
import React, { useState } from 'react';
import styles from './getinTouch.module.scss';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import { graphcms } from '@/graphql/graphQLClient';
import { CreateContact } from '@/graphql/graphql';
import toast from 'react-hot-toast';

const CallIcon = '/assets/icons/call.svg';
const MailIcon = '/assets/icons/mail.svg';
const LocationIcon = '/assets/icons/location.svg';

const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const leftColumnVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const formVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const fieldFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function GetinTouch() {
    const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            tempErrors.email = "Email is invalid.";
        }
        if (!formData.topic) tempErrors.topic = "Topic is required.";
        if (!formData.message) tempErrors.message = "Message is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const variables = {
                data: {
                    name: formData.name,
                    email: formData.email,
                    topic: formData.topic,
                    message: formData.message,
                    publishedAt: new Date().toISOString()
                }
            };
            await graphcms.request(CreateContact, variables);
            toast.success("Thanks for reaching out! We'll be in touch soon.");
            setFormData({ name: '', email: '', topic: '', message: '' });
        } catch (error) {
            console.error("Error submitting contact form", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.getinTouch}>
            <div className='container'>
                <motion.div
                    className={styles.box}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={boxVariants}
                >
                    <motion.div
                        className={styles.items}
                        variants={leftColumnVariants}
                    >
                        <motion.h2 variants={itemFadeUp}>
                            Get in <span> Touch</span>
                        </motion.h2>

                        <div>
                            <motion.div
                                className={styles.iconText}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={CallIcon} alt='CallIcon' />
                                <a href='callto:+1 758 572 5128'>+1 758 572 5128</a>
                            </motion.div>

                            <motion.div
                                className={styles.iconText}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={MailIcon} alt='MailIcon' />
                                <a href='mailto:support@zeonfx.com'>support@zeonfx.com</a>

                            </motion.div>

                            <motion.div
                                className={styles.iconText}
                                variants={itemFadeUp}
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <img src={LocationIcon} alt='LocationIcon' />
                                <div>
                                    <h3>
                                        Registered office:
                                    </h3>
                                    <p>
                                        Ground Floor, The Sotheby Building,
                                        Rodney Village, Rodney Bay, Gros Islet,
                                        Saint Lucia.
                                    </p>
                                    <br />
                                    <br />
                                    <h3>
                                        Physical office:
                                    </h3>
                                    <p>
                                        Office 4, 25 Corinth Hilltop, Corinth,
                                        Gros-Islet, Saint Lucia.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.form
                        className={styles.items}
                        variants={formVariants}
                        onSubmit={handleSubmit}
                    >
                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>NAME</label>
                            <input type='text' name="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} />
                            {errors.name && <span className={styles.error}>{errors.name}</span>}
                        </motion.div>

                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>EMAIL</label>
                            <input type='email' name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </motion.div>

                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>TOPIC</label>
                            <input type='text' name="topic" value={formData.topic} onChange={handleChange} disabled={isSubmitting} />
                            {errors.topic && <span className={styles.error}>{errors.topic}</span>}
                        </motion.div>

                        <motion.div className={styles.input} variants={fieldFadeUp}>
                            <label>MESSAGE</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} disabled={isSubmitting}></textarea>
                            {errors.message && <span className={styles.error}>{errors.message}</span>}
                        </motion.div>

                        <motion.div variants={fieldFadeUp}>
                            <Button text={isSubmitting ? "SENDING..." : "SEND MESSAGE"} primary type="submit" disabled={isSubmitting} />
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
}

