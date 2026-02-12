import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="bg-leaf/5 rounded-[4rem] overflow-hidden border border-leaf/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Contact Info */}
                        <div className="p-10 md:p-20 bg-leaf text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                                <p className="text-white/80 text-lg mb-12 max-w-md">
                                    Have questions about our products or delivery? We'd love to hear from you.
                                    Drop us a message and we'll get back to you soon.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-center">
                                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm">Call Us</p>
                                            <p className="text-xl font-bold">+1 (234) 567-890</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm">Email Us</p>
                                            <p className="text-xl font-bold">hello@greendairy.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-center">
                                        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-sm">Visit Farm</p>
                                            <p className="text-xl font-bold">Dairy Lane,  New Zealand</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">FB</div>
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">IG</div>
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">TW</div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-10 md:p-20">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-transparent border-b-2 border-leaf/20 py-4 outline-none focus:border-leaf transition-all text-earth placeholder:text-earth/40"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-transparent border-b-2 border-leaf/20 py-4 outline-none focus:border-leaf transition-all text-earth placeholder:text-earth/40"
                                        />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-transparent border-b-2 border-leaf/20 py-4 outline-none focus:border-leaf transition-all text-earth placeholder:text-earth/40"
                                    />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        rows="4"
                                        placeholder="Your Message"
                                        className="w-full bg-transparent border-b-2 border-leaf/20 py-4 outline-none focus:border-leaf transition-all text-earth placeholder:text-earth/40 resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary py-5 flex items-center justify-center gap-3 shadow-xl shadow-leaf/20"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
