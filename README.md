# DevFlow

DevFlow is an app similar to StackOverflow, built using Next.js 14 with Server Actions and a variety of other technologies. 

It's designed to facilitate developer collaboration, problem-solving, and knowledge-sharing within the geek community. 

## Functionalities

- **Global Search:** Enables quick content discovery across the platform.
- **Sorting and Filtering with URL:** Provides customizable view options through URL parameters.
- **Voting:** Facilitates community engagement through content evaluation.
- **AI Answers:** Offers automated assistance for common queries.
- **Full Responsive Design:** Ensures seamless experience across all devices.

## Features

- **StackOverflow-like Q&A:** Users can ask questions, provide answers, and vote on the best solutions.
- **Tagging System:** Organize questions by relevant tags for easy searching and filtering.
- **User Authentication:** Secure login and registration using Clerk for authentication.
- **Responsive Design:** Tailwind CSS ensures a seamless experience across devices.
- **Syntax Highlighting:** Prism.js provides syntax highlighting for code snippets.
- **Webhooks:** Integration with webhooks for real-time updates and notifications.
- **TypeScript Support:** Written in TypeScript for enhanced developer productivity and code maintainability.
- **Database Integration:** MongoDB with Mongoose for efficient data storage and retrieval.

## Images

- ![alt text](https://private-user-images.githubusercontent.com/49816114/311340970-bdd92d5f-e6e3-4273-b6d7-2f4352da4486.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5MjU2NTMsIm5iZiI6MTcwOTkyNTM1MywicGF0aCI6Ii80OTgxNjExNC8zMTEzNDA5NzAtYmRkOTJkNWYtZTZlMy00MjczLWI2ZDctMmY0MzUyZGE0NDg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzA4VDE5MTU1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBhZWFjZmZmNDA4Y2I3ZWE4MjdhYTdmMjYyZmQxZDJkNTliZDM1ZWUxOTA3YTBmNjM2YTgwZmE2YjRiZmY4NTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4V_wACAT22p1jhN8_15RfSs2E3_JcEdNizQ27Syt9DI)
- ![alt text](https://private-user-images.githubusercontent.com/49816114/311340976-c80bd21c-c988-44d2-a7e2-44f5efd9af91.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5MjU2NTMsIm5iZiI6MTcwOTkyNTM1MywicGF0aCI6Ii80OTgxNjExNC8zMTEzNDA5NzYtYzgwYmQyMWMtYzk4OC00NGQyLWE3ZTItNDRmNWVmZDlhZjkxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzA4VDE5MTU1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3NzA5MmJkYTcxZTUzNDA5OGMwNDVmM2U0YWY1ZGIzYjdkYTYwZjdhOTQ0YTUxNGJlOWM2MGMzMjM5MGIwOTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.YJi0ERLJHq79yWxk60sAK352s3BDFAybkzePJUr2JTo)
- ![alt text](https://private-user-images.githubusercontent.com/49816114/311340980-588869a1-aa99-40ae-8619-f66cbe0ffcb3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDk5MjU2NTMsIm5iZiI6MTcwOTkyNTM1MywicGF0aCI6Ii80OTgxNjExNC8zMTEzNDA5ODAtNTg4ODY5YTEtYWE5OS00MGFlLTg2MTktZjY2Y2JlMGZmY2IzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzA4VDE5MTU1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzOTEyNmJmYzNlNzQxYjhhNjg5MDU1YjNlNGE5MjI5MDg3YzI4MWIyNTczMjZkYjg2M2ZiZTY2N2ExNDJlMzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.RcvaU6gTql_rm37iFrti5REPku6lVfNMv7zcFbEXWvA)

## Setup on your PC
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
