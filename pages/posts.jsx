import Link from "next/link"

export default function Posts({ posts }) {

    return (
        <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <a>Read more</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/posts");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  }
    
