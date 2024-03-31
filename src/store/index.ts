import { createStore } from 'vuex';

export default createStore({
 state() {
  return {
   popup: false,
  };
 },
 mutations: {
  showPopup(state) {
   state.popup = true;
  },
  closePopup(state) {
   state.popup = false;
  },
 },
});
