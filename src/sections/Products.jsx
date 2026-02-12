import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Star } from 'lucide-react';

const ProductCard = ({ product, index }) => {
    const [imgSrc, setImgSrc] = React.useState(product.image);
    const fallbackImage = "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1974&auto=format&fit=crop";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-leaf/5"
        >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-cream/40 mb-6">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={imgSrc}
                    alt={product.name}
                    onError={() => setImgSrc(fallbackImage)}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-earth">{product.rating}</span>
                </div>
            </div>

            <div className="px-4 pb-4">
                <p className="text-leaf text-sm font-bold uppercase tracking-wider mb-2">{product.category}</p>
                <h3 className="text-2xl font-bold text-earth mb-2 group-hover:text-leaf transition-colors">{product.name}</h3>
                <p className="text-earth/60 text-sm mb-6 line-clamp-2">{product.desc}</p>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-earth">${product.price}</span>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-leaf hover:bg-leaf/90 text-white rounded-2xl shadow-lg shadow-leaf/20 transition-all"
                    >
                        <ShoppingBasket className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const Products = () => {
    const products = [
    {
        name: "A2 Desi Cow Milk",
        category: "Farm Fresh Milk",
        price: "5.20",
        rating: "5.0",
        desc: "100% pure A2 milk from grass-fed indigenous cows. Delivered fresh every morning.",
        image: "https://images.unsplash.com/photo-1563636619-e91001933965?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Bilona Cow Ghee",
        category: "Traditional Ghee",
        price: "22.00",
        rating: "4.9",
        desc: "Prepared using ancient bilona method. Rich aroma, grainy texture, highly nutritious.",
        image: "https://cdn.pixabay.com/photo/2024/07/01/04/15/ai-generated-8864288_1280.png"
    },
    {
        name: "Farm Fresh Paneer",
        category: "Cottage Cheese",
        price: "9.80",
        rating: "4.8",
        desc: "Soft, protein-rich paneer made fresh daily from full-cream milk.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Hand-Churned Butter",
        category: "Traditional Dairy",
        price: "7.50",
        rating: "4.7",
        desc: "Naturally cultured and hand-churned butter with authentic farmhouse taste.",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Organic Farm Yogurt",
        category: "Probiotic",
        price: "4.30",
        rating: "4.9",
        desc: "Creamy probiotic yogurt made from fresh morning milk. No preservatives.",
        image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9ndXJ0fGVufDB8fDB8fHww"
    },
    {
        name: "Fresh Farm Buttermilk",
        category: "Healthy Drinks",
        price: "3.20",
        rating: "4.8",
        desc: "Refreshing traditional buttermilk, lightly spiced and naturally fermented.",
        image: "https://images.unsplash.com/photo-1630409346699-79481a79db52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVybWlsa3xlbnwwfHwwfHx8MA%3D%3D"
    },
];


    return (
        <section id="products" className="section-padding bg-cream/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-leaf font-bold tracking-widest uppercase text-sm"
                    >
                        Our Store
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-earth mt-4"
                    >
                        Fresh From Our <span className="text-leaf">Dairy</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} product={product} index={idx} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="btn-secondary">View All Products</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
