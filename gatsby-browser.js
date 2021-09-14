/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onInitialClientRender = () => {
  const gtmScript = document.createElement("script")
  gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KDHT88T"
  gtmScript.async = "true"
  gtmScript.onload = function () {
    // init GTM
    const dataLayer = window.dataLayer || []
    dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  }

  document.head.appendChild(gtmScript)
}
