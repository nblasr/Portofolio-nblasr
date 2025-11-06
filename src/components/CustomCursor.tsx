import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Cursor ring with gradient */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ease-out ${
            isHovering ? 'w-12 h-12' : 'w-6 h-6'
          }`}
          style={{
            background: isHovering
              ? 'radial-gradient(circle, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.2), transparent)'
              : 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)',
            boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
