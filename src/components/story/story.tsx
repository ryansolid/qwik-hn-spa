import { component$ } from '@builder.io/qwik';
import type { IStory } from "../../types";
import { Link } from '@builder.io/qwik-city';

export default component$(
  (props: { story: IStory }) => (
    <li class="news-item">
      <span class="score">{props.story.points}</span>
      <span class="title">
        {props.story.url && !props.story.url.startsWith("item?id=") ? (
          <>
            <a href={props.story.url} target="_blank" rel="noreferrer">
              {props.story.title}
            </a>
            <span class="host"> ({props.story.domain})</span>
          </>
        ) : (
          <Link href={`/item/${props.story.id}`}>{props.story.title}</Link>
        )}
      </span>
      <br />
      <span class="meta">
        {props.story.type !== "job" ? (
          <>
            by <Link href={`/users/${props.story.user}`}>{props.story.user}</Link>{" "}
            {props.story.time_ago} |{" "}
            <Link href={`/stories/${props.story.id}`}>
              {props.story.comments_count
                ? `${props.story.comments_count} comments`
                : "discuss"}
            </Link>
          </>
        ) : (
          <Link href={`/stories/${props.story.id}`}>{props.story.time_ago}</Link>
        )}
      </span>
      {props.story.type !== "link" && (
        <>
          {" "}
          <span class="label">{props.story.type}</span>
        </>
      )}
    </li>
  ))