'use client';

import { useReducer, useCallback } from 'react';

import { shuffle } from './session.helpers';
import type {
  SessionState,
  SessionAction,
  SessionQuestion,
  SessionFilters
} from './session.types';

import type { Rating } from '@/entities/question';

const initialState: SessionState = {
  phase: 'picking',
  filters: {
    sections: [],
    tags: [],
    difficulty: 'all'
  },
  questions: [],
  currentIndex: 0,
  revealed: false,
  ratings: {}
};

function sessionReducer(
  state: SessionState,
  action: SessionAction
): SessionState {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.filters }
      };

    case 'START':
      return {
        ...state,
        phase: 'session',
        questions: shuffle(action.questions),
        currentIndex: 0,
        revealed: false,
        ratings: {}
      };

    case 'REVEAL':
      return { ...state, revealed: true };

    case 'RATE': {
      const newRatings = {
        ...state.ratings,
        [action.questionId]: action.rating
      };
      return { ...state, ratings: newRatings };
    }

    case 'NEXT': {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= state.questions.length) {
        return { ...state, phase: 'results' };
      }
      return { ...state, currentIndex: nextIndex, revealed: false };
    }

    case 'PREV': {
      if (state.currentIndex <= 0) return state;
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
        revealed: true
      };
    }

    case 'FINISH':
      return { ...state, phase: 'results' };

    case 'RESTART':
      return initialState;

    default:
      return state;
  }
}

export function useSession() {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  const setFilters = useCallback((filters: Partial<SessionFilters>) => {
    dispatch({ type: 'SET_FILTERS', filters });
  }, []);

  const start = useCallback((questions: SessionQuestion[]) => {
    dispatch({ type: 'START', questions });
  }, []);

  const reveal = useCallback(() => {
    dispatch({ type: 'REVEAL' });
  }, []);

  const rate = useCallback((questionId: string, rating: Rating) => {
    dispatch({ type: 'RATE', questionId, rating });
  }, []);

  const next = useCallback(() => {
    dispatch({ type: 'NEXT' });
  }, []);

  const prev = useCallback(() => {
    dispatch({ type: 'PREV' });
  }, []);

  const finish = useCallback(() => {
    dispatch({ type: 'FINISH' });
  }, []);

  const restart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, []);

  const currentQuestion = state.questions[state.currentIndex] ?? null;

  return {
    state,
    currentQuestion,
    actions: { setFilters, start, reveal, rate, next, prev, finish, restart }
  };
}
