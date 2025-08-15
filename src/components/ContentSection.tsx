interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ContentSection({ title, content, imageUrl, imageAlt }: ContentSectionProps) {
  return (
    <section className="bg-white rounded-16 shadow-md p-5 mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
        <i className="fa-solid fa-chevron-right text-red-600 mr-2"></i>
        {title}
      </h2>
      
      {imageUrl && (
        <div className="mb-4 rounded-12 overflow-hidden shadow-sm">
          <img 
            src={imageUrl} 
            alt={imageAlt || title} 
           className="w-full h-auto max-w-full object-contain"
          />
        </div>
      )}
      
      <div className="text-gray-700 leading-relaxed">
        {content}
      </div>
    </section>
  );
}