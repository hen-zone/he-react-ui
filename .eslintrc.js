module.exports = {
  extends: 'he',
  rules: {
    "flowtype/require-valid-file-annotation": [
      1,
      "always"
    ],
    "react/default-props-match-prop-types": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ],
    }]
  }
};
  