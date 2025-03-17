
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/lib/styles/main.css';

const vuetify: VuetifyOptions = {
    components,
    directives,
    theme: {      
      defaultTheme: 'light',    
      themes: {
        light: {
          colors: {
            primary: '#CDDC39',
            surface: '#E6EE9C',
            background: '#F9FBE7',
            error: '#df2929'
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  }

  export default createVuetify(vuetify)