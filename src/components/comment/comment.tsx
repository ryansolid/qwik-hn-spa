import { component$ } from '@builder.io/qwik';
import type { IComment } from "../../types";
import Toggle from './toggle';
import { Link } from '@builder.io/qwik-city';

export const Comment = component$(
  (props: { comment: IComment }) => {
    return (
      <li class="comment">
        <div class="by">
          <Link href={`/users/${props.comment.user}`}>{props.comment.user}</Link>{" "}
          {props.comment.time_ago}
        </div>
        <div class="text" dangerouslySetInnerHTML={props.comment.content} />
        {!!props.comment.comments.length && (
          <Toggle>
            {props.comment.comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </Toggle>
        )}
      </li>
    );
  }
);