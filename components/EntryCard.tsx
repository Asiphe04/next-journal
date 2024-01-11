"use client"
import {Mood} from '@prisma/client'
import React from "react";

type Props= {
    id: string
    title: string
    content: string
    mood: Mood;
}
async function deleteEntry(id:string) {
 await fetch (`/api/entry/delete?id=${id}`,{
  method: "DELETE"
 }) 
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
            <button onClick={()=>deleteEntry(id)}>Delete</button>
        </footer>
      </article>
    )
}