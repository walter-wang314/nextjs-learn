import Link from 'next/link'

function Article({ article }) {
  return (
    <>
      <h1>{article.title} </h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

export default Article

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const article = await res.json()
  return {
    props: {
      article,
    },
  }
}
