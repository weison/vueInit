module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],

    rules: {
        "vue/multi-word-component-names": [
        "error",
        {
          //由于 cli-plugin-eslint 的作用，要求用驼峰或-方式来命名,添加需要忽略的组件名规则
          ignores: ["index","login"], 
        },
      ]
        // override/add rules settings here, such as:
    }
};
