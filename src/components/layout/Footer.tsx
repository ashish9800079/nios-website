export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-400 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} National Institute of Open Schooling. All rights reserved.</p>
      </div>
    </footer>
  );
} 