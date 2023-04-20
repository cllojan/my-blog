import Link from "next/link";
import getPostMetaData from "@/utils/getPostMetadata";
import PostPreview from "./Components/PostPreview";

const Home = () => {
  const postMetadata = getPostMetaData();

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return <div className=' pt-8 pb-8 grid grid-cols gap-4'>{postPreviews}</div>;
};
export default Home;
