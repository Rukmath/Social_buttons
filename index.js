const Button = (props) => {
  const { classValue, content } = props;
  return <button className={`button ${classValue}`}>{content}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div>
      <Button classValue="button-like" content="Like" />
      <Button classValue="button-comment" content="Comment" />
      <Button classValue="button-share" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
