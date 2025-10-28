import { useMemo, useRef } from "react";

import { threadedBaseStyle } from "../threaded-base-style";
import {
  PartialThreadedStyleConfig,
  ThreadedStyleConfig,
} from "../interfaces/style-props/ThreadedStyleConfig";

import { mergeThreadedStyleData } from "../helpers/mergeThreadedStyleData";

// Simple deep equality check for style props
function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;
  if (obj1 == null || obj2 == null) return obj1 === obj2;
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 !== 'object') return obj1 === obj2;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

export interface UseThreadedStyleProps extends PartialThreadedStyleConfig {}

function useThreadedStyle(props?: Partial<UseThreadedStyleProps>) {
  const prevPropsRef = useRef<Partial<UseThreadedStyleProps> | null>(null);
  
  // Use deep comparison to determine if props have actually changed
  const stableProps = useMemo(() => {
    if (!props) return undefined;
    
    if (prevPropsRef.current && deepEqual(prevPropsRef.current, props)) {
      return prevPropsRef.current; // Return previous reference if content is the same
    }
    
    prevPropsRef.current = props;
    return props;
  }, [props]);

  const styleConfig = useMemo((): ThreadedStyleConfig => {
    if (!stableProps) {
      return threadedBaseStyle;
    }
    
    return mergeThreadedStyleData(
      stableProps.commentFeedProps,
      stableProps.commentProps,
      stableProps.newCommentFormProps
    );
  }, [stableProps]);

  return styleConfig;
}

export default useThreadedStyle;
