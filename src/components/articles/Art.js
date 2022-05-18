import { useParams } from "react-router-dom";
import BackButton from "./BackButton";

export default function Art() {

    var {id} =useParams();
     
    var blogPosts = [
        {
            postid:100,
            content:'this is blog 1 content'
        },
        {
            postid:101,
            content:'this is blog 2 content'
        },
        {
            postid:102,
            content:'this is blog 3 content'
        }
    ];

    

  return (
      <>
      {
      blogPosts.map(
          (el)=>{
              if(el.postid==id)
              {
                  console.log(el.content);
                  return <p>{el.content}</p>
              }
          }
      ) }
      <BackButton />
      </>

  )
}
