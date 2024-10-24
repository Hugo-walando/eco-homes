import { ChevronUp } from 'lucide-react'; // Assure-toi de remplacer cela par le bon chemin vers ton icône

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className='fixed bottom-6 right-6 bg-white rounded-full shadow-lg p-3 hover:bg-gray-200 transition z-50'
      aria-label='Scroll to top'
    >
      <ChevronUp className='h-6 w-6 text-col_gray_dark' />
    </button>
  );
};

export default ScrollToTopButton;
