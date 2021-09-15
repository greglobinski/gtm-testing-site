/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onInitialClientRender = () => {
  const gtmScript = document.createElement("script")
  gtmScript.src =
    "https://www.googletagmanager.com/gtm.js?id=GTM-KDHT88T&gtm_debug=x"
  gtmScript.onload = function () {
    // init GTM
    const dataLayer = window.dataLayer || []
    dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
  }

  document.head.appendChild(gtmScript)
}

// export const onInitialClientRender = () => {
//   const gtmScript = document.createElement("script")
//   gtmScript.type = "text/javascript"
//   gtmScript.innerText = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-KDHT88T');`
//   document.head.appendChild(gtmScript)
// }
