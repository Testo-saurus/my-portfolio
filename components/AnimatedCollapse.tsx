import { useEffect, useRef, useState } from 'react';

interface AnimatedCollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function AnimatedCollapse({ isOpen, children }: AnimatedCollapseProps) {
  const [height, setHeight] = useState<number>(0); // Start with 0, not 'auto'
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      
      if (isOpen) {
        // Opening: set height to actual content height
        setHeight(scrollHeight);
      } else {
        // Closing: set height to 0
        setHeight(0);
      }
    }
  }, [isOpen, children]); // Add children as dependency

  return (
    <div
      className="overflow-hidden transition-all duration-500 ease-in-out"
      style={{ height: `${height}px` }} // Always use px values
    >
      <div ref={contentRef} className="pt-6">
        {children}
      </div>
    </div>
  );
}