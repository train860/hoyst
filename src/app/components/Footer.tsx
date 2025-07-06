import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-600">
            © Hoyst 2025
          </div>
          <nav className="flex space-x-6 text-sm text-gray-600" aria-label="Footer navigation">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Follow us on Twitter
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
} 