import omit from 'lodash/omit';

const snakeCaseToCamelCase = (str) => (
  str
    .split('_')
    .map((keyPart, i) => (
      i > 0
        ? `${keyPart.charAt(0).toUpperCase()}${keyPart.slice(1)}`
        : keyPart))
    .join('')
);

const objectKeysToCamelCase = (object, toOmit = []) => (
  Object.keys(omit(object, toOmit))
    .reduce((accumulator, key) => ({
      ...accumulator,
      [snakeCaseToCamelCase(key)]: object[key],
    }), {})
);

const objectListKeysToCamelCase = (objectList, toOmit = []) => (
  objectList.map((object) => objectKeysToCamelCase(object, toOmit))
);

export {
  objectKeysToCamelCase,
  objectListKeysToCamelCase,
};
