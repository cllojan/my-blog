import getPostMetaData from "@/utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterContent = matter(content);

  return matterContent.content;
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
      <Link href='/'>Go to Home</Link>
      <article className='prose lg:prose-xl'>
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};
export default PostPage;
