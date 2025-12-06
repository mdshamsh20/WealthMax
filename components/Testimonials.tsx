import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  "WealthMax Consultancy exceeded my expectations with their exceptional returns and transparent process. Their supportive team guided me every step, ensuring a smooth journey. I'm grateful to my sister for recommending them. Truly a five-star experience!",
  "A terrific team to work with. The team is super co-operative and patient. They help you understand where exactly your money is going.",
  "My brother referred Wealthmax to me and they have been a great support in making me understand how exactly I should be managing money. I have been getting great returns on my investments.",
  "The team is terrific. They have been managing my finances for the last 3 years. Highly satisfied with their services.",
  "I have been consulting them for 2 years now. The team is highly efficient and helpful. My experience with them has been great so far!",
  "A spectacular team with great minds. Everyone is so kind and patient and taught me exactly how my money is being invested. I would highly recommend their services"
];

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white dark:text-white mb-16">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 dark:from-slate-900/60 dark:to-slate-800/60 border border-cyan-500/30 dark:border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="flex mb-4">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
              ))}
            </div>
            <p className="text-gray-100 dark:text-gray-100 leading-relaxed italic">"{testimonial}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
