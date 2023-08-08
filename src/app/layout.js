import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "WEB Tutorial",
  description: "Generated by Wonjang",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <h1>
            <a href="/">WelCome</a>
          </h1>
          <ol>
            {[1, 2, 3].map((v, index) => {
              return (
                <li key={index}>
                  <Link href={`/read/${v}`}>Hello</Link>
                </li>
              );
            })}
          </ol>
        </div>
        {children}
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/update/1">Update</Link>
          </li>
          <li>
            <input type="button" value="Delete" />
          </li>
        </ul>
      </body>
    </html>
  );
}
