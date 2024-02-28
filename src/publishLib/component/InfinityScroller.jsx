import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TiktokLoader from './TiktokLoader';

//This state decide should the Scroller invoke
let hasMore = true;

function InfinityScroller({
  children,
  className,
  loader = <TiktokLoader />,
  endMessage = <div>No more result</div>,
  fetchMore,
}) {
  const scrollerRef = useRef();
  const fetchState = {
    loaded: () => {
      hasMore = true;
    },
    completed: () => {
      hasMore = false;
    },
  };
  useEffect(() => {
    if (hasMore) {
      const observer = new IntersectionObserver((entries) => {
        //Check the scroller is in-view
        if (entries[0].isIntersecting) {
          fetchMore(fetchState);
        }
      });

      if (scrollerRef.current) {
        observer.observe(scrollerRef.current);
      }

      return () => {
        if (scrollerRef.current) {
          observer.unobserve(scrollerRef.current);
        }
      };
    }
  }, [hasMore]);

  return (
    <div className={className}>
      {children}
      {hasMore ? <div ref={scrollerRef}>{loader}</div> : endMessage}
    </div>
  );
}

InfinityScroller.PropTypes = {
  children: PropTypes.element,
  className: PropTypes.string,

  //You can customize the loader for Infinity Scroller
  loader: PropTypes.element,

  //The React element shown on UI when fetch state marked as completed and no more loading
  endMessage: PropTypes.element,

  //When the Scroller is in-view, this is loading handler passed to run
  fetchMore: PropTypes.func.isRequired,
};

export default InfinityScroller;
