import pkg from './package.json'

export default {
  input: ['src/index.js', 'src/base.js'],
  experimentalCodeSplitting: true,
  external: Object.keys(pkg.dependencies || {}),
  output: [
    { dir: 'es', format: 'es' },
    { dir: 'lib', format: 'cjs' }
  ],
};
