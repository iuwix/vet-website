export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-blue-300 bg-blue-900/95 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-sm md:text-base">
        <p className="font-medium">Call to make an appointment</p>
        <a
          href="tel:0720123123"
          className="rounded-md bg-white px-4 py-2 font-semibold text-blue-900 transition hover:bg-blue-100"
        >
          0720.123.123
        </a>
      </div>
    </div>
  );
}
