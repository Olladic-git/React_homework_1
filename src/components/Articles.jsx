import Article from "./Article";
import { v4 as uuidv4} from 'uuid';


const Articles = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Article key={uuidv4()} title={item.title} body={item.body}/>
      ))}
    </>
  )
}

export default Articles;
