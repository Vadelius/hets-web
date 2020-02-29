/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
module.exports = {
    env: {
        node: true,
        es2020: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
    extends: [
        /* Base ESLint Config */
        'eslint:recommended',

        /* Lint JSON Files */
        'plugin:json/recommended-with-comments',

        /* React */
        'eslint-config-react-app',

        /* Prettier Integration */
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'simple-import-sort', 'json', 'markdown', 'optimize-regex', 'sort-keys-fix', 'prettier'],
    rules: {
        /* Object Formatting */
        'object-shorthand': ['error', 'always', { avoidQuotes: true }],
        'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
        'sort-keys-fix/sort-keys-fix': 'error',

        /* JSON */
        'json/*': 'error',

        /* Regular Expressions */
        'optimize-regex/optimize-regex': 'error',

        /* Sorting */
        'simple-import-sort/sort': 'error',
    },
    globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint'],
            extends: [
                /* TypeScript ESLint */
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',

                /* Import */
                'plugin:import/errors',
                'plugin:import/warnings',
                'plugin:import/typescript',
            ],
            rules: {
                /* Handled by Prettier */
                '@typescript-eslint/space-before-function-paren': 'off' /* enforce consistent spacing before function definition opening parenthesis */,
                '@typescript-eslint/camelcase': 'off' /* Enforce camelCase naming convention */,
                '@typescript-eslint/quotes': 'off' /* Enforce the consistent use of either backticks, double, or single quotes */,
                '@typescript-eslint/semi': 'off' /* Require or disallow semicolons instead of ASI */,
                '@typescript-eslint/indent': 'off' /* Enforce consistent indentation */,

                /* Disabled */
                '@typescript-eslint/no-parameter-properties': 'off' /* Disallow the use of parameter properties in class constructors */,
                '@typescript-eslint/restrict-template-expressions': 'off' /* Enforce template literal expressions to be of string type */,
                '@typescript-eslint/typedef': 'off' /* Requires type annotations to exist */,
                '@typescript-eslint/no-magic-numbers': 'off' /* Disallows magic numbers */,

                /* Enabled */
                '@typescript-eslint/adjacent-overload-signatures': 'error' /* Require that member overloads be consecutive */,
                '@typescript-eslint/array-type': 'error' /* Requires using either T[] or Array<T> for arrays */,
                '@typescript-eslint/await-thenable': 'error' /* Disallows awaiting a value that is not a Thenable */,
                '@typescript-eslint/ban-ts-ignore': 'error' /* Bans “// @ts-ignore” comments from being used */,
                '@typescript-eslint/ban-types': 'error' /* Bans specific types from being used */,
                '@typescript-eslint/brace-style': 'error' /* Enforce consistent brace style for blocks */,
                '@typescript-eslint/class-name-casing': 'error' /* Require PascalCased class and interface names */,
                '@typescript-eslint/consistent-type-assertions': 'error' /* Enforces consistent usage of type assertions. */,
                '@typescript-eslint/consistent-type-definitions': 'error' /* Consistent with type definition either interface or type */,
                '@typescript-eslint/explicit-function-return-type': 'off' /* Require explicit return types on functions and class methods */,
                '@typescript-eslint/explicit-member-accessibility': 'error' /* Require explicit accessibility modifiers on class properties and methods */,
                '@typescript-eslint/func-call-spacing': 'error' /* Require or disallow spacing between function identifiers and their invocations */,
                '@typescript-eslint/generic-type-naming': 'error' /* Enforces naming of generic type variables */,
                '@typescript-eslint/interface-name-prefix': 'off' /* Require that interface names should or should not prefixed with I */,
                '@typescript-eslint/member-delimiter-style': 'error' /* Require a specific member delimiter style for interfaces and type literals */,
                '@typescript-eslint/member-naming': 'error' /* Enforces naming conventions for class members by visibility */,
                '@typescript-eslint/member-ordering': 'error' /* Require a consistent member declaration order */,
                '@typescript-eslint/no-array-constructor': 'error' /* Disallow generic Array constructors */,
                '@typescript-eslint/no-dynamic-delete': 'error' /* Bans usage of the delete operator with computed key expressions */,
                '@typescript-eslint/no-empty-function': 'error' /* Disallow empty functions */,
                '@typescript-eslint/no-empty-interface': 'error' /* Disallow the declaration of empty interfaces */,
                '@typescript-eslint/no-explicit-any': 'error' /* Disallow usage of the any type */,
                '@typescript-eslint/no-extra-non-null-assertion': 'error' /* Disallow extra non-null assertion */,
                '@typescript-eslint/no-extra-parens': 'error' /* Disallow unnecessary parentheses */,
                '@typescript-eslint/no-extraneous-class': 'error' /* Forbids the use of classes as namespaces */,
                '@typescript-eslint/no-floating-promises': 'error' /* Requires Promise-like values to be handled appropriately. */,
                '@typescript-eslint/no-for-in-array': 'error' /* Disallow iterating over an array with a for-in loop */,
                '@typescript-eslint/no-inferrable-types':
                    'error' /* Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean */,
                '@typescript-eslint/no-misused-new': 'error' /* Enforce valid definition of new and constructor */,
                '@typescript-eslint/no-misused-promises': 'error' /* Avoid using promises in places not designed to handle them */,
                '@typescript-eslint/no-namespace': 'error' /* Disallow the use of custom TypeScript modules and namespaces */,
                '@typescript-eslint/no-non-null-assertion': 'error' /* Disallows non-null assertions using the ! postfix operator */,
                '@typescript-eslint/no-require-imports': 'error' /* Disallows invocation of require() */,
                '@typescript-eslint/no-this-alias': 'error' /* Disallow aliasing this */,
                '@typescript-eslint/no-type-alias': 'error' /* Disallow the use of type aliases */,
                '@typescript-eslint/no-unnecessary-condition': 'error' /* Prevents conditionals where the type is always truthy or always falsy */,
                '@typescript-eslint/no-unnecessary-qualifier': 'error' /* Warns when a namespace qualifier is unnecessary */,
                '@typescript-eslint/no-unnecessary-type-arguments':
                    'error' /* Warns if an explicitly specified type argument is the default for that type parameter */,
                '@typescript-eslint/no-unnecessary-type-assertion': 'error' /* Warns if a type assertion does not change the type of an expression */,
                '@typescript-eslint/no-untyped-public-signature':
                    'error' /* Requires that all public method arguments and return type will be explicitly typed */,
                '@typescript-eslint/no-unused-expressions': 'error' /* Disallow unused expressions */,
                '@typescript-eslint/no-unused-vars': 'error' /* Disallow unused variables */,
                '@typescript-eslint/no-unused-vars-experimental': 'error' /* Disallow unused variables and arguments. */,
                '@typescript-eslint/no-use-before-define': 'error' /* Disallow the use of variables before they are defined */,
                '@typescript-eslint/no-useless-constructor': 'error' /* Disallow unnecessary constructors */,
                '@typescript-eslint/no-var-requires': 'error' /* Disallows the use of require statements except in import statements */,
                '@typescript-eslint/prefer-for-of':
                    'error' /* Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated */,
                '@typescript-eslint/prefer-function-type': 'error' /* Use function types instead of interfaces with call signatures */,
                '@typescript-eslint/prefer-includes': 'error' /* Enforce includes method over indexOf method */,
                '@typescript-eslint/prefer-namespace-keyword':
                    'error' /* Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules */,
                '@typescript-eslint/prefer-nullish-coalescing': 'error' /* Enforce the usage of the nullish coalescing operator instead of logical chaining */,
                '@typescript-eslint/prefer-optional-chain': 'error' /* Prefer using concise optional chain expressions instead of chained logical ands */,
                '@typescript-eslint/prefer-readonly':
                    'error' /* Requires that private members are marked as readonly if they're never modified outside of the constructor */,
                '@typescript-eslint/prefer-regexp-exec': 'error' /* Prefer RegExp#exec() over String#match() if no global flag is provided */,
                '@typescript-eslint/prefer-string-starts-ends-with':
                    'error' /* Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings */,
                '@typescript-eslint/promise-function-async': 'error' /* Requires any function or method that returns a Promise to be marked async */,
                '@typescript-eslint/require-array-sort-compare': 'error' /* Enforce giving compare argument to Array#sort */,
                '@typescript-eslint/require-await': 'error' /* Disallow async functions which have no await expression */,
                '@typescript-eslint/restrict-plus-operands': 'error' /* When adding two variables, operands must both be of type number or of type string */,
                '@typescript-eslint/return-await': 'error' /* Rules for awaiting returned promises */,
                '@typescript-eslint/strict-boolean-expressions': 'error' /* Restricts the types allowed in boolean expressions */,
                '@typescript-eslint/triple-slash-reference':
                    'error' /* Sets preference level for triple slash directives versus ES6-style import declarations */,
                '@typescript-eslint/type-annotation-spacing': 'error' /* Require consistent spacing around type annotations */,
                '@typescript-eslint/unbound-method': 'error' /* Enforces unbound methods are called with their expected scope */,
                '@typescript-eslint/unified-signatures':
                    'error' /* Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter */,
            },
            overrides: [
                {
                    files: ['**/__tests__/**/*', '**/*.{spec,test}.ts'],
                    env: {
                        'jest/globals': true,
                    },
                    extends: [
                        /* Jest */
                        'plugin:jest/recommended',
                    ],
                },
            ],
        },
    ],
};