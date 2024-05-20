import { BiMessageRoundedDetail } from "react-icons/bi";
import Button from "../common/Button";
import "./NodesPanel.css";

enum ChatNodeType {
  Text = "text",
  Option = "option",
  Select = "select",
}

const ChatNodes = [
  {
    id: 1,
    type: ChatNodeType.Text,
    icon: <BiMessageRoundedDetail size="1.5em" />,
    title: "Message",
  }
];

const NodesPanel = () => {
  return (
    <div className="np-container">
      {ChatNodes.map((curr) => (
        <Button key={curr.id} cssClass="text-button" text={curr.title} icon={curr.icon} />
      ))}
    </div>
  );
};

export default NodesPanel;
