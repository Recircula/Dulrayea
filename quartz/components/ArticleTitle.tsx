import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
import { classNames } from "../util/lang";

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title;
  if (title) {
    return (
      <h1 className={classNames(displayClass, "article-title")}>
        {title.replace(/^\d+\.\s/, '')}
      </h1>
    );
  } else {
    return null;
  }
};

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`;

export default (() => ArticleTitle) as QuartzComponentConstructor;
