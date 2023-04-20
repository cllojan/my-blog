import getPostMetaData from "@/utils/getPostMetadata";
import fs from "fs";
import Markdown from "markdown-to-jsx";
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};
export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const PostPage = (props: any) => {
  const slugs = props.params.slug;
  const content = getPostContent(slugs);
  return (
    <div className=''>
      <p>Data: {slugs}</p>
      <article className='prose lg:prose-xl'>      
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};
export default PostPage;
