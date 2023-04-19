import fs from 'fs';
import  Markdown  from 'markdown-to-jsx'
const getPostMetaData = (slug:string) => {
    const folder = 'posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file,'utf8');
    return content;
  }
const PostPage = (props:any) => {
    
    const slugs = props.params.slug;
    const content = getPostMetaData(slugs);
    return (
        <div className=''>
            <p>Data: {slugs}</p>
            <article className="prose lg:prose-xl">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
                For years parents have espoused the health benefits of eating garlic bread with cheese to their
                children, with the food earning such an iconic status in our culture that kids will often dress
                up as warm, cheesy loaf for Halloween.
            </p>
            <p>
                But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                springing up around the country.
            </p>
                <Markdown>{content}</Markdown>
            </article>            
        </div>
        
    )

}
export default PostPage