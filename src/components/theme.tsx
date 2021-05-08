import { ChakraTheme, extendTheme, ThemeOverride, withDefaultColorScheme } from "@chakra-ui/react"

const extend: ThemeOverride<ChakraTheme> = {
  components: {
    Button: {
      baseStyle: {
        cursor: "pointer",
        rounded: "full",
      },
      sizes: {
        lg: {
          iconSpacing: 4,
          fontSize: "xl"
        },
      },
      variants: {
        solid: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.400`,
            _hover: {
              bg: `${colorScheme}.500`
            }
          }
        },
        ghost: ({ colorScheme }) => {
          return {
            _hover: {
              color: `${colorScheme}.600`,
              bg: `${colorScheme}.100`
            }
          }
        },
        link: ({ colorScheme }) => {
          return {
            pl: 2,
            pr: 2,
            py: 1,
            color: `${colorScheme}.400`,
            _hover: {
              rounded: "full",
              bg: `${colorScheme}.100`,
              textDecoration: "none"
            }
          }
        }
      }
    },
    Popover: {
      baseStyle: {
        content: {
          rounded: "2xl",
          boxShadow: "lg"
        }
      }
    },

  },
}

export const theme = extendTheme(extend, withDefaultColorScheme({ colorScheme: "blue" }))
