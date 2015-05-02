(() => {
  class NameActions {
    updateName(name) {
      this.dispatch(name);
    }
  }

  this.NameActions = alt.createActions(NameActions);
})();
