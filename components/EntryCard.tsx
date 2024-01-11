import {Mood} from '@prisma/client'
import React from "react";

type Props= {
    id: string
    title: string
    content: string
    mood: Mood;
}

export default function EntryCard({id, title, content, mood}: Props) {
    return(
      <article>
        <header>
            <h2>{title}</h2>
        </header>
        <p>{content}</p>
        <footer>
            {mood}
        </footer>
      </article>
    )
}