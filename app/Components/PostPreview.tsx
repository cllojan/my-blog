import Link from "next/link";
import { PostMetaData } from "../../utils/PostMetaData";

const PostPreview = (props: PostMetaData) => {
  return (
    <div className=''>
      <Link
        href={`posts/${props.slug}`}
        className='group relative block h-24 sm:h-52 lg:h-52'
      >
        <span className='absolute inset-0 border-2 border-dashed border-black'></span>

        <div className='relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
          <div className='p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
            <span className='text-gray-500 font-mono font-semibold italic'>
              {props.date}
            </span>
            <h2 className='mt-4 text-xl font-medium sm:text-2xl'>
              {props.title}
            </h2>
          </div>

          <div className='absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
            <h3 className='mt-4 text-xl font-medium sm:text-2xl'>
              {props.title}
            </h3>

            <p className='mt-4 text-sm sm:text-base'>{props.subtitle}</p>

            <p className='mt-8 font-bold'>Leer</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
