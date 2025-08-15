import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
}

export default function PageHeader({ title, showBackButton = true }: PageHeaderProps) {
  return (
    <header className="bg-red-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {showBackButton && (
          <Link to="/" className="text-white hover:text-red-100">
            <i className="fa-solid fa-arrow-left text-xl"></i>
          </Link>
        )}
        <h1 className="text-[clamp(1.2rem,4vw,1.5rem)] font-bold text-center flex-1">
          {title}
        </h1>
        {showBackButton && <div className="w-8"></div>} {/* Placeholder for spacing */}
      </div>
    </header>
  );
}