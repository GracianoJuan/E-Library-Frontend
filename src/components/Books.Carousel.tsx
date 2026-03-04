interface BooksCarouselProps {
    context: string;

}

export default function BooksCarousel({context}: BooksCarouselProps) {
  return (
    <>
      <div className="bg-white">
        <div>
            <span>{context}</span>
            <span>
                <ul>
                    <li><button>&lt;</button></li>
                    <li><button>&gt;</button></li>
                </ul>
            </span>
        </div>
        <div></div>
      </div>
    </>
  );
}