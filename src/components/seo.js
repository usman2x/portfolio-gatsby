import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, meta, lang, pathname, image, type }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;
  const canonicalUrl = `${site.siteMetadata.siteUrl}${pathname}`;

  const resolvedImage = image || "";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: type,
        },
        ...(resolvedImage
          ? [
              {
                property: "og:image",
                content: resolvedImage,
              },
              {
                name: "twitter:image",
                content: resolvedImage,
              },
            ]
          : []),
        {
          name: "twitter:card",
          content: resolvedImage ? "summary_large_image" : "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author || "",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: "canonical",
          href: canonicalUrl,
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  pathname: "/",
  image: "",
  type: "website",
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default SEO;
