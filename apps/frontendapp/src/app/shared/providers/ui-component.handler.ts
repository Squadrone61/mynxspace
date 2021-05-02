export const UiComponentHandler = {
  createListeners: [],
  destroyListeners: [],
  onContainerCreated(fn) {
    this.createListeners.push(fn);
  },
  onContainerDestroyed(fn) {
    this.destroyListeners.push(fn);
  },
  registerContainer(container, id) {
    this.createListeners.forEach((fn) => {
      fn(container, id);
    });
  },
  destroyContainer(container, id) {
    this.destroyListeners.forEach((fn) => {
      fn(container, id);
    });
  },
};
