
import React from "react";

function Article({ title, date, preview, minutes }) {
  
  const emojis = minutes < 30 ? '☕️'.repeat(Math.ceil(minutes / 5)) : '🍱'.repeat(Math.ceil(minutes / 10));

  
  const formattedDate = date ? date : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{emojis} {minutes} min read</p>
    </article>
  );
}

export default Article;
