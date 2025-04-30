export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Nexspro. All rights reserved.
        </div>
        <ul className="flex gap-6 text-sm font-medium uppercase">
          <li><a href="#" className="hover:underline">Legal Notice</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
