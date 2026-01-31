// 'use client'
//
// import { ApolloClient, InMemoryCache } from "@apollo/client";
//
// import { ThemeProvider } from 'next-themes'; // Example: using a third-party theme provider
// // Import other providers (Auth, Redux, etc.) as needed
//
// export function Providers({ children }: { children: React.ReactNode }) {
//     return (
//         // Wrap with your specific providers
//         <ThemeProvider attribute="class" defaultTheme="system">
//             {/* Other providers can go here */}
//             {children}
//         </ThemeProvider>
//     );
// }