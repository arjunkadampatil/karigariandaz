// Renders one of the generated SVG strings from content/art.js
export default function Svg({ html, className, ...rest }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
}
