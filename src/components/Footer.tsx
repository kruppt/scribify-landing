export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Scribify</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Effortless note-taking designed specifically for Mac users. Simple, fast, and beautiful.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Scribify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}