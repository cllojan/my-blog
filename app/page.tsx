import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { PostMetaData } from "../utils/PostMetaData";
const getPostMetaData = (): PostMetaData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPost.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    console.log(`${matterResult.data}`);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", " "),
    };
  });

  return posts;
};

const Home = () => {
  const postMetadata = getPostMetaData();
  console.log(postMetadata);
  const postPreviews = postMetadata.map((post, inx) => (
    <div key={inx}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <h3>{post.subtitle}</h3>
      </Link>
    </div>
  ));
  return (
    <div className='container flex items-center mx-auto'>{postPreviews}</div>
  );
};
export default Home;
