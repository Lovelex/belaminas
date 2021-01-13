export default {
    openInUpdateMode({ state, dispatch }, payload) {
      state.mode = "update";
      dispatch('fillItem', payload);
      dispatch('openDialog')
    },
    openInSubmitMode({ state, dispatch }) {
      state.mode = "submit";
      dispatch('openDialog')
      dispatch('resetItem');
    },
    closeDialog({ state }) {
      state.dialog.isActive = false;
    },
    openDialog({ state }) {
      state.dialog.isActive = true;
    },
    

}