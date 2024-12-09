import React from 'react'

const Article = ({title, body}) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        <p>{body}</p>
      </div>
    </section>
  )
}

export default Article;
