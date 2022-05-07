import React from "react";
import { useSelector } from "react-redux";
import { selectAuthors } from "../features/authors//authorsSlice";
import { useParams, Link } from "react-router-dom";

// Import useParams from React Router

export default function Author (props) {

  // Extract the `name` URL parameter.
  let { name } = useParams();

  const authors = useSelector(selectAuthors)
  const author = authors["replace me"]

  return (
    <main>
      <h1>{`Articles by ${name}`}</h1>
      <ul>
        {
          author && author.articles ? author.articles.map(slug => {
            return (
              <li key={slug}>
                <Link to={`${props.authorsPath}/${slug}`}>
                  {slug}
                </Link>
              </li>
            )
          }) : <p> No Articles Found... </p>
        }
      </ul>
    </main>
  )
}
