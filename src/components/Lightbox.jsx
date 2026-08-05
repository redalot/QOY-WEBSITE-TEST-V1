import { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Full-screen image viewer. Handles keyboard navigation, restores focus to the
 * trigger on close, and keeps tab focus inside the dialog while it is open.
 */
const Lightbox = ({ images, index, onClose, onNavigate }) => {
  const closeRef = useRef(null);
  const previouslyFocused = useRef(null);

  const image = images[index];
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  // Remember what was focused so we can hand focus back on close.
  useEffect(() => {
    previouslyFocused.current = document.activeElement;
    closeRef.current?.focus();
    return () => previouslyFocused.current?.focus?.();
  }, []);

  // Stop the page behind the dialog from scrolling.
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && hasMultiple) goPrev();
      else if (e.key === 'ArrowRight' && hasMultiple) goNext();
      else if (e.key === 'Tab') {
        // Only the controls are focusable, so keep Tab cycling within them.
        const focusable = e.currentTarget.querySelectorAll('button');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const node = document.getElementById('lightbox-root');
    node?.addEventListener('keydown', onKeyDown);
    return () => node?.removeEventListener('keydown', onKeyDown);
  }, [onClose, goPrev, goNext, hasMultiple]);

  return (
    <div
      id="lightbox-root"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title} — image ${index + 1} of ${images.length}`}
      className="fixed inset-0 z-[100] flex flex-col bg-tac-950/97 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-qoy-yellow/70">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-2 text-slate-300 transition-colors hover:text-qoy-yellow"
        >
          <X size={26} />
        </button>
      </div>

      {/* Image */}
      <div
        className="flex flex-1 items-center justify-center overflow-hidden p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {hasMultiple && (
          <button
            onClick={goPrev}
            aria-label="Previous image"
            className="mr-2 shrink-0 p-3 text-slate-400 transition-colors hover:text-qoy-yellow"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        <figure className="flex max-h-full min-w-0 flex-col items-center">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[70vh] w-auto max-w-full border border-white/10 object-contain"
          />
          <figcaption className="mt-4 text-center font-display text-lg uppercase tracking-wide text-white">
            {image.title}
          </figcaption>
        </figure>

        {hasMultiple && (
          <button
            onClick={goNext}
            aria-label="Next image"
            className="ml-2 shrink-0 p-3 text-slate-400 transition-colors hover:text-qoy-yellow"
          >
            <ChevronRight size={36} />
          </button>
        )}
      </div>

      <p className="pb-5 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
        Arrow keys to navigate · Esc to close
      </p>
    </div>
  );
};

export default Lightbox;
