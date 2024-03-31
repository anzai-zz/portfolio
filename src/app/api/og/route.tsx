import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 40,
        color: "black",
        background: "white",
        width: "100%",
        height: "100%",
        padding: "0 30px",
        textAlign: "center",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "74px",
            height: "100px",
            backgroundSize: "73.86px 100px",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
              '<svg viewBox="0 0 369.3 500" width="369.3" height="500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path fill="#000" d="M0,184.92c0-.09,0-.17,0-.26,1.66.04,3.31.11,4.97.12,1.98.02,3.97,0,6.07,0v10.86h10.9v10.82h10.78v-43.51h10.73v-21.61h-10.74v-1.59c0-46.03,0-92.06,0-138.09,0-.56-.08-1.11-.12-1.67,7.3,0,14.6,0,21.89,0v10.98h10.93v21.64h21.68v10.93h21.68v10.84h10.87v10.75h65.18v-10.81h10.87v-10.83h10.77v-10.96h10.93v-10.78h10.82v-10.86h21.75V0h10.95v10.92h10.78v10.87h10.76v108.74h-10.85v21.76h-10.66v54.17h10.69v-10.88h10.89v-10.7h10.87v21.7h-10.92v10.96h-10.85v10.74h-10.79v10.89h-21.81v10.94h-21.7v10.82h-10.78v21.71h10.91v10.85h10.85v10.86h10.8v21.72h10.94v21.79h10.88v32.59h10.75v54.22h10.82v-21.71h10.91v-21.76h10.83v-43.43h10.79v-130.34h-10.76v-32.67h10.82v-10.85h10.89v-10.83h10.88v10.85h10.9v10.93h10.94v21.68h10.63v119.56h-10.72v43.51h-10.92v21.73h-10.9v32.57h-10.78v10.91h-10.91v10.92h-10.9v10.79h-10.74v10.89h-21.85v10.93h-10.78v10.75h-10.84v10.89H97.74c.04-.47.12-.94.12-1.41,0-5.56,0-11.13,0-16.69v-3.6h-10.9v-21.87h-10.91v-32.56h-10.67v-43.48h10.72v-21.79h10.94v-32.6h10.85v-32.61h10.71v-21.66h-10.78v-10.88h-21.78v-10.84h-21.66v-10.87h-10.9v-10.92h-21.7v-10.75h-10.85v-10.93H.29c0-6.8-.01-13.6-.04-20.39,0-.41-.16-.81-.25-1.22ZM184.82,206.58v10.91c3.42,0,6.8.02,10.17-.04.22,0,.61-.64.62-.98.04-3.3,0-6.6,0-9.91h10.77v-21.69h-10.77v-10.81h-10.79c0,3.69,0,7.29,0,10.89h-10.87v21.63c3.69,0,7.28,0,10.88,0ZM87.05,184.94v-10.88h-10.92v10.89h-10.74v21.61h10.74v10.85h10.92v-10.85h10.75v-21.62c-3.64,0-7.19,0-10.75,0ZM217.34,65.26h-10.84v21.86h10.9v10.76h10.81v10.93h21.74v10.78h10.88v-21.76h10.71v-54.37h-10.79v-21.5h-10.9v10.72h-10.85v10.89h-10.84v10.91h-10.81v10.77ZM43.59,32.71v86.86h10.89v-10.85h10.86v-10.86h10.78v-10.84h10.81v-10.9h-10.9v-10.9h-10.74v-10.75h-10.89v-21.76h-10.83Z"/><path fill="#cea273" d="M217.34,65.26v-10.77h10.81v-10.91h10.84v-10.89h10.85v-10.72h10.9v21.5h10.79v54.37h-10.71v21.76h-10.88v-10.78h-21.74v-10.93h-10.81v-10.76h-10.9v-21.86h10.84Z"/><path fill="#cea273" d="M43.59,32.71h10.83v21.76h10.89v10.75h10.74v10.9h10.9v10.9h-10.81v10.84h-10.78v10.86h-10.86v10.85h-10.89V32.71Z"/><path fill="#f7ec77" d="M76.12,206.56h-10.74v-21.61h10.74l-.03-.03c0,7.23,0,14.45,0,21.68l.03-.03ZM87.07,184.91c0,7.22,0,14.45,0,21.67l-.03-.03h10.75v-21.62h-10.75l.02-.03ZM76.09,184.91c3.66,0,7.32,0,10.98,0,0,0-.02.03-.02.03,0-3.63,0-7.26,0-10.88h-10.92v10.89l-.03-.03ZM87.07,206.59c-3.66,0-7.32,0-10.98,0l.03-.03v10.85h10.92v-10.85l.03.03Z"/><path fill="#f7ec77" d="M184.82,184.95v-10.89h10.79v10.81h10.77v21.69c-3.6,0-7.18,0-10.77,0,0,0,.03.03.03.03v-21.68h-10.85l.03.04ZM184.79,206.59c0-7.23,0-14.45,0-21.68,0,0,.03.04.03.04-3.62,0-7.25,0-10.87,0v21.63h10.88-.03ZM184.79,206.59s.03,0,.03,0c0,3.59,0,7.19,0,10.91,3.42,0,6.8.02,10.17-.04.22,0,.61-.64.62-.98.04-3.3,0-6.6,0-9.91,0,0,.03.03.03.03-3.62,0-7.23,0-10.85,0Z"/><path fill="#000" d="M195.63,206.59c-3.62,0-7.23,0-10.85,0,0-7.23,0-14.45,0-21.68h10.85v21.68Z"/><path fill="#000" d="M87.07,206.59c-3.66,0-7.32,0-10.98,0,0-7.23,0-14.45,0-21.68,3.66,0,7.32,0,10.98,0,0,7.22,0,14.45,0,21.67Z"/></svg>',
            )}`})`,
            margin: "0 15px 0 0",
          }}
        />
        <div style={{}}>くろねこのみー</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
