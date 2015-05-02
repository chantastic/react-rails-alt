(() => {
  class NameStore {
    constructor() {
      this.name = "John";

      this.bindListeners({
        handleUpdateName: NameActions.UPDATE_NAME
      });
    }

    handleUpdateName(name) {
      this.name = name;
    }
  }

  this.NameStore = alt.createStore(NameStore, 'NameStore');
})();
