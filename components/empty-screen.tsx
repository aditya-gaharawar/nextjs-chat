import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          WEBSPACEAI RESEARSCH 
        </h1>
        <p className="leading-normal text-muted-foreground">
          Meet Sky AI: Wit, Sarcasm, and Humor in a Digital Package! 🚀✨ Join us at Sky AI Labs for a fun-filled journey through knowledge and laughter! 😄 #SkyAI #WitAndWisdom
          .
        </p>
      </div>
    </div>
  )
}
