import React from 'react'
import { Helmet } from 'react-helmet';

const Metadata = props => {
    return (
        <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
            <title>React App</title>

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@_diazela" />
            <meta name="twitter:creator" content="@_diazela" />
            <meta name="twitter:title" content="Estela Diaz | Software Engineer" />
            <meta name="twitter:description" content="Software Engineer based in San Francisco, California." />
            <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg" />
        </Helmet>
    )
}

export default Metadata