import { useState } from "react";

export const useStepState = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return { currentStep, setCurrentStep, nextStep, previousStep };
};
