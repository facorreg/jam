import { useRef } from 'react';

const useGeneratedInputRefs = (schema, options = {}) => {
  const onValidation = {
    noWhite: (str) => (typeof str === 'string' ? str.replace(/\s+/, '') : ''),
    default: (str) => str,
  };

  const applyOptions = (opt) => (input) => Object.keys(opt)
    .reduce((acc, optKey) => (
      opt[optKey] && onValidation[optKey]
        ? onValidation[optKey](acc)
        : acc), input);

  const refs = schema.reduce((acc, {
    name, type, validator, ownOptions = {},
  }) => ({
    ...acc,
    [name]: {
      ref: useRef(''),
      middleWare: applyOptions({ ...options, ...ownOptions, default: true }),
      get refValue() { return this.ref.current[type === 'checkbox' ? 'checked' : 'value']; },
      get refValueUpdated() { return this.middleWare(this.refValue); },
      get validator() { return validator(this.refValueUpdated); },
    },
  }), {});

  const validateAll = () => Promise.all(Object.keys(refs).map((key) => refs[key].validator));
  const getAllInputs = () => Object.keys(refs)
    .reduce((acc, key) => ({
      ...acc,
      [key]: refs[key].refValue,
    }), {});

  return {
    refs,
    validateAll,
    getAllInputs,
  };
};

export default useGeneratedInputRefs;
