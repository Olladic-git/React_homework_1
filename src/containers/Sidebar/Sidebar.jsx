import "./Sidebar.scss";
import data from '../../data/data.json';
import Topic from "../../components/Topic";
import { v4 as uuidv4} from 'uuid';

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <nav>
            <ul>
                {data.map((item) => (
                   <Topic key={uuidv4()} href={item.href} title={item.title}/>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar;