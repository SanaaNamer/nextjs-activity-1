export default function Post({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  
  export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/posts');
    const posts = await res.json();
  
    const paths = posts.map((post) => ({
      params: { pid: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://dummyjson.com/posts/${params.pid}`);
    const post = await res.json();
  
    return {
      props: {
        post,
      },
    };
  }