import { useState, useEffect } from "react";

const Phase = {
  Typing: 0,
  Pausing: 1,
  Deleting: 2,
};

const TYPING_INTERVAL = 100;
const PAUSE_TIME = 3000;
const DELETING_INTERVAL = 85;

function useTrailingText(trailingText) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedHeaderText, setHeaderText] = useState("");

  // Home Text - typewriter effect
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextHeaderText = trailingText[selectedIndex].slice(
          0,
          typedHeaderText.length + 1
        );

        if (nextHeaderText === typedHeaderText) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setHeaderText(nextHeaderText);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!typedHeaderText) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(trailingText[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = trailingText[selectedIndex].slice(
          0,
          typedHeaderText.length - 1
        );

        const timeout = setTimeout(() => {
          setHeaderText(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default: 
        setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_TIME);
        return;
    }

  }, [trailingText, typedHeaderText, selectedIndex, phase]);

  return typedHeaderText;
}

export default useTrailingText;