export const privacySection = {
  activeSection: 'privacystatement',
};

export const faqsSection = {
  activeSection: 'order',
};

export const termsSection = {
  activeSection: 'welcome',
};

type State = {
  activeSection: string;
};

type Action = {
  type: string;
  payload: string;
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_SECTION':
      return {
        ...state,
        activeSection: state.activeSection === action.payload ? '' : action.payload,
      };
    default:
      return state;
  }
};
