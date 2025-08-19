"use client";

import React, { createContext, useContext, useState } from "react";

type QuizContextType = {
  scores: Record<string, number>;
  mainPoints: Record<string, number>;
  setScores: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  setMainPoints: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [mainPoints, setMainPoints] = useState<Record<string, number>>({});

  return (
    <QuizContext.Provider value={{ scores, mainPoints, setScores, setMainPoints }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};