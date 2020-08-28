import { useMemo } from 'react';

function useCombineClasses(baseClasses, additionalClasses) {
  return useMemo(() => {
    const combinedClasses = { ...baseClasses };

    for (const name in additionalClasses) {
      combinedClasses[name] =
        name in combinedClasses
          ? `${combinedClasses[name]} ${additionalClasses[name]}`
          : additionalClasses[name];
    }

    return combinedClasses;
  }, [baseClasses, additionalClasses]);
}

export { useCombineClasses };