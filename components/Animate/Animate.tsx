// 'use client';

// import { ReactNode, useEffect, useRef, useState } from 'react';

// interface AnimateEnhancedProps {
//   children: ReactNode;
//   animation?: string;
//   duration?: string;
//   delay?: string;
//   iterationCount?: string;
//   className?: string;
//   trigger?: 'onMount' | 'onScroll';
//   threshold?: number;
//   rootMargin?: string;
//   component?: keyof JSX.IntrinsicElements;
//   [key: string]: any;
// }

// const AnimateEnhanced = ({
//   children,
//   animation,
//   duration = '1s',
//   delay = '0s',
//   iterationCount = '1',
//   className = '',
//   trigger = 'onMount',
//   threshold = 0.1,
//   rootMargin = '0px',
//   component: Component = 'div',
//   ...props
// }: AnimateEnhancedProps) => {
//   const ref = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(trigger === 'onMount');

//   useEffect(() => {
//     if (trigger === 'onScroll' && ref.current) {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.disconnect();
//           }
//         },
//         { threshold, rootMargin }
//       );

//       observer.observe(ref.current);
//       return () => observer.disconnect();
//     }
//   }, [trigger, threshold, rootMargin]);

//   useEffect(() => {
//     const element = ref.current;
//     if (element && animation && isVisible) {
//       element.style.animationDuration = duration;
//       element.style.animationDelay = delay;
//       element.style.animationIterationCount = iterationCount;
//     }
//   }, [animation, duration, delay, iterationCount, isVisible]);

//   return (
//     <Component
//       ref={ref}
//       className={`animate__animated ${isVisible && animation ? `animate__${animation}` : ''} ${className}`}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// };

// export default AnimateEnhanced;


'use client';

import { ReactNode, useEffect, useRef, useState, forwardRef, ElementType, Ref } from 'react';

interface AnimateEnhancedProps {
  children: ReactNode;
  animation?: string;
  duration?: string;
  delay?: string;
  iterationCount?: string;
  className?: string;
  trigger?: 'onMount' | 'onScroll';
  threshold?: number;
  rootMargin?: string;
  component?: ElementType;
  [key: string]: any;
}

const AnimateEnhanced = forwardRef(function AnimateEnhanced<
  T extends ElementType = 'div'
>({
  children,
  animation,
  duration = '1s',
  delay = '0s',
  iterationCount = '1',
  className = '',
  trigger = 'onMount',
  threshold = 0.1,
  rootMargin = '0px',
  ...props
}: AnimateEnhancedProps & { component?: T }, 
ref: Ref<any>) {
  const innerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(trigger === 'onMount');

  // Объединяем внешний ref и внутренний ref
  const combinedRef = (node: any) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as any).current = node;
    }
    (innerRef as any).current = node;
  };

  useEffect(() => {
    if (trigger === 'onScroll' && innerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(innerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger, threshold, rootMargin]);

  useEffect(() => {
    const element = innerRef.current;
    if (element && animation && isVisible) {
      element.style.animationDuration = duration;
      element.style.animationDelay = delay;
      element.style.animationIterationCount = iterationCount;
    }
  }, [animation, duration, delay, iterationCount, isVisible]);


  return (
    <div
      ref={combinedRef}
      className={`animate__animated ${isVisible && animation ? `animate__${animation}` : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

export default AnimateEnhanced;