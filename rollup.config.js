import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/main.js',
    output: {
      file: 'static/script.js',
      format: 'es'
    },
    plugins:[babel({ babelHelpers:'bundled',presets:['@babel/preset-env']}),terser()]
};