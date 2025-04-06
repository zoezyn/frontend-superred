// import { NextResponse } from 'next/server'

// export async function POST(request: Request) {
//   try {
//     const { message, history } = await request.json()
    
//     // Replace this with your actual LLM API call
//     const response = await fetch('YOUR_LLM_ENDPOINT', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.LLM_API_KEY}`
//       },
//       body: JSON.stringify({
//         message,
//         history
//       })
//     })
    
//     const data = await response.json()
//     return NextResponse.json({ response: data.response })
//   } catch (error) {
//     console.error('Chat API error:', error)
//     return NextResponse.json(
//       { error: 'Failed to get response' },
//       { status: 500 }
//     )
//   }
// } 