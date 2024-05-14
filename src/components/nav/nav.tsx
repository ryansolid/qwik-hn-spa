import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="header">
      <nav class="inner">
        <Link href="/">
          <strong>HN</strong>
        </Link>
        <Link href="/new">
          <strong>New</strong>
        </Link>
        <Link href="/show">
          <strong>Show</strong>
        </Link>
        <Link href="/ask">
          <strong>Ask</strong>
        </Link>
        <Link href="/job">
          <strong>Jobs</strong>
        </Link>
        <a
          class="github"
          href="http://github.com/builderio/qwik"
          target="_blank"
          rel="noreferrer"
        >
          Built with Qwik
        </a>
      </nav>
    </header>
  );
});
