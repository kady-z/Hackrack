import '@fontsource/inter';
import { extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  fonts: {
    body: 'Inter',
  },
});
const Fonts = () => {
  <Global
    styles={`
      @font-face {
        font-family: 'Eldwin';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/public/Eldwin-ScriptHeavy.woff2') format('woff2'), url('/public/Eldwin-ScriptHeavy.woff') format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    
    }
      @font-face {
        font-family: 'Eldwin';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/public/Eldwin-ScriptRegular.woff2') format('woff2'), url('/public/Eldwin-ScriptRegular.woff') format('woff');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    
    }
      @font-face {
        font-family: 'Eldwin1';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: '/Eldwin-ScriptRegular.otf'
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    
    }
      @font-face {
        font-family: 'Eldwin1';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: '/Eldwin-ScriptRegular.otf'
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    
    }

    `}
  />;
};

export default theme;
