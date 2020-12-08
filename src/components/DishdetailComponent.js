import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card key={dish.id}>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments == null) {
    return <div></div>;
  } else {
    return (
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <ul key={comment.id} className="list-unstyled">
              <li>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

const Dishdetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}></RenderDish>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.dish?.comments}></RenderComments>
        </div>
      </div>
    </div>
  );
};

export default Dishdetail;
