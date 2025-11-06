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
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-2 h-2 bg-primary rounded-full transition-transform duration-200 ${
            isHovering ? 'scale-0' : 'scale-100'
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`border-2 border-primary rounded-full transition-all duration-300 ease-out ${
            isHovering ? 'w-16 h-16 opacity-100' : 'w-8 h-8 opacity-50'
          }`}
          style={{
            background: isHovering
              ? 'radial-gradient(circle, hsl(var(--primary) / 0.1), transparent)'
              : 'transparent',
          }}
        />
      </div>

      {/* Trailing glow effect */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="w-32 h-32 rounded-full opacity-30 blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.2), transparent)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
