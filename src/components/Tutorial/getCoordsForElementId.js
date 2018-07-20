// @flow
export default (elementId: ?string) => {
  const domElement = elementId ? document.getElementById(elementId) : null;

  return domElement ? domElement.getBoundingClientRect() : null;
};
