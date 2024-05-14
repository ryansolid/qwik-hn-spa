import { component$, Resource, useResource$, useComputed$ } from '@builder.io/qwik';
import { useLocation, Link } from '@builder.io/qwik-city';
import { getStories } from '../../api';
import Story from "../../components/story/story";
import type { IStory } from "../../types";

export default component$(
  () => {
    const location = useLocation();
    const page = useComputed$(() => +(location.url.searchParams.get("page") || 1));
    const type = useComputed$(() => location.params.stories || "top");
    const resource = useResource$<IStory[]>(() => getStories(type.value as any, page.value));
    return (
      <Resource
        value={resource}
        onPending={() => <div class="news-list-nav">Loading...</div>}
        onResolved={(stories) => {
          return <div class="news-view">
            <div class="news-list-nav">
              {page.value > 1 ? (
                <Link
                  class="page-link"
                  href={`/${type.value}?page=${page.value - 1}`}
                  aria-label="Previous Page"
                >
                  {"<"} prev
                </Link>
              ) : (
                <span class="page-link disabled" aria-disabled="true">
                  {"<"} prev
                </span>
              )}
              <span>page {page}</span>
              {stories && stories.length >= 29 ? (
                <Link
                  class="page-link"
                  href={`/${type.value}?page=${page.value + 1}`}
                  aria-label="Next Page"
                >
                  more {">"}
                </Link>
              ) : (
                <span class="page-link disabled" aria-disabled="true">
                  more {">"}
                </span>
              )}
            </div>
            <main class="news-list">
              {stories && (
                <ul>
                  {stories.map((story: IStory) => (
                    <Story key={story.id} story={story} />
                  ))}
                </ul>
              )}
            </main>
          </div>
        }}
      />
    );
  }
);


