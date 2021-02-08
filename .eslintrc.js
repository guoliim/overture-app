module.exports = {
    root: true,                 // Make sure eslint picks up the config at the root of the directory
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,      // Use the latest ecmascript standard
        sourceType: 'module',   // Allows using import/export statements
        ecmaFeatures: {
            jsx: true           // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect'   // Automatically detect the react version
        }
    },
    env: {
        browser: true,          // Enables browser globals like window and document
        amd: true,              // Enables require() and define() as global variables as per the amd spec.
        node: true              // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],  // Use our .prettierrc file as source
        "array-callback-return": 0,
        "max-len": [
            "error", 
            { 
                "code": 120,
                "tabWidth": 4
            }
        ],
        "semi": ["error", "never"],
        "padded-blocks": 0,
        "no-unused-vars": [
            "warn",
            { "vars": "all", "args": "none", "ignoreRestSiblings": false }
        ],
        "arrow-parens": ["error", "always"],
        "@typescript-eslint/explicit-module-boundary-types": "off"
    }
};
