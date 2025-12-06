export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-slate-950 text-white dark:text-white py-12 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-200 bg-clip-text text-transparent mb-4">WealthMax Consultancy</h3>
        <p className="text-gray-300 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Your trusted partner in financial planning and investment management. Bringing clarity, confidence, and control to your financial journey.
        </p>
        <div className="space-y-4 mb-8">
          <p>&copy; 2025 WealthMax Consultancy. All rights reserved.</p>
          <p className="text-gray-400 dark:text-gray-400 text-sm">Noida, India</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 dark:text-gray-300">
          <a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
