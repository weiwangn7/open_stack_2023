import './message.css';

function Message(props) {
  return props.message ? <div className="message">{props.message}</div> : null;
}

export default Message;
