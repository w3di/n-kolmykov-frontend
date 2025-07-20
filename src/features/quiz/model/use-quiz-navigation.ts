import { useState, useCallback } from "react";

export const useQuizNavigation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const previousStep = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  return {
    currentStep,
    setCurrentStep,
    nextStep,
    previousStep,
  };
};
