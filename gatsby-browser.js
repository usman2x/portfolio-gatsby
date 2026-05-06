/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

import "./src/styles/global.css"
import { applyStoredTheme, setTheme } from "./src/utils/theme"

export const onClientEntry = () => {
  applyStoredTheme()
  if (typeof window !== "undefined") {
    window.setTheme = setTheme
  }
}
