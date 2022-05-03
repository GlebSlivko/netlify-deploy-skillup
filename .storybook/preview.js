import { ChakraProvider,extendTheme,CSSReset,Box } from "@chakra-ui/react"
import { withConsole } from '@storybook/addon-console'
import { addDecorator, addParameters } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { GlobalStyle } from '../src/components/shared/global';
// import { StoreContext } from '../src/components/mobx/context'
// import { Todo } from '../src/components/mobx/storages/todo-store';

import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

import { Provider } from "react-redux";

import  store  from '../src/store'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  } 
}

const theme = extendTheme({
  styles:{
    global:(props) => ({
      body:{}
    })
  },
  colors: {
    default: {
      light:"#fcfcfc",
      dark:"#232323",
    },
    primary: {
      100:'D1C1F4'
    }
  }
})

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
    <Box m='4'>
    <GlobalStyle />
      <Story />
      </Box>
    </ChakraProvider>
  )
]

addDecorator((storyFn,context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
addDecorator((Story) => <Provider store={store}>{<Story />}</Provider>)
initializeWorker();
addDecorator(mswDecorator);

// const store = {todoStore : new Todo()}

// const AppDecorator = (storyFn) => {
//   return (
//     <StoreContext.Provider value={store}>{storyFn()}</StoreContext.Provider>
//   );
// };

// addDecorator(AppDecorator);

