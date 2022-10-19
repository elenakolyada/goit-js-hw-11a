import '../css/styles.css';

export const btnValue = {
  BUTTON: 'button',
  SCROLL: 'scroll',
};

export const initSwitchBtn = () => {
  const toggleForm = document.querySelector('form.toggle-form');
  const button = document.querySelectorAll('option-container');
  if (!button) return;
  toggleForm.addEventListener('submit', e => e.preventDefault());
  toggleForm.addEventListener('change', e => {
    window.dispatchEvent(
      new CustomEvent('toggleLoadingType', { detail: { type: e.target.value } })
    );
  });
};
