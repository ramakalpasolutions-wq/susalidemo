import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
export const metadata={title:{default:'SUSALI | Your Healthcare Journey, One Connected Platform',template:'%s | SUSALI'},description:'SUSALI supports patient registration, superintendent referrals, hospital appointments, treatment documentation, medical records and continued care.',robots:{index:true,follow:true}};
export default function RootLayout({children}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
