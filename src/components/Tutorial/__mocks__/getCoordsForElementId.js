// @flow
// for this fake, we assume an element ID is a string of the form 'top-right-height'

export default (elementId: ?string) => {
  if (!elementId) return null;
  const [top, right, height] = elementId.split('-').map(Number);
  return { top, right, height };
};
