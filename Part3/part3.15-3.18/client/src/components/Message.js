import './message.css';

function Message(props) {
  return props.message ? props.error ? <div className="error">{props.message}</div> : <div className="message">{props.message}</div> : null;
}

export default Message;
