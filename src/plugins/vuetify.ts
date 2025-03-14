
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
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
            background: '#F9FBE7'
          }
        }
      }
    }
  }

  export default createVuetify(vuetify)