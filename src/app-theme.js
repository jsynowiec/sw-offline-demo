import {
  blue100, blue500, blue700,
  orangeA100, orangeA200, orangeA400,
  grey400, grey900,
  white,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: blue100,
    accent1Color: orangeA200,
    accent2Color: orangeA400,
    accent3Color: orangeA100,
    textColor: grey900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(grey900, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(grey900, 0.07),
    shadowColor: grey900,
  },
});

export default theme;
