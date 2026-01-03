import React from "react";

export default function App() {
  return (
    <div className="wrapper">
      <button className="fancy-btn">
        Hover Me ✨
      </button>

      <style jsx="true">{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html, body, #root{
          height:100%;
        }

        .wrapper{
          height:100vh;
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#0f0f1a;
        }

        .fancy-btn{
          padding: 14px 32px;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 700;
          color: white;

          background: linear-gradient(45deg,#ff6a00,#ff00b8,#6a00ff);
          background-size: 300%;

          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
          transition:
            background-position 0.6s ease,
            transform 0.25s ease,
            box-shadow 0.35s ease;
        }

        .fancy-btn:hover{
          background-position: 100%;
          transform: scale(1.08);
          box-shadow:
            0 14px 28px rgba(0,0,0,0.3),
            0 0 25px rgba(255,0,180,0.7);
        }

        /* 📱 Mobile */
        @media (max-width: 600px){
          .fancy-btn{
            padding: 10px 22px;
            font-size: 15px;
          }
        }

        /* 💻 Tablet */
        @media (min-width: 600px) and (max-width: 1024px){
          .fancy-btn{
            padding: 12px 28px;
            font-size: 17px;
          }
        }

        /* 🖥 Desktop */
        @media (min-width: 1024px){
          .fancy-btn{
            padding: 16px 40px;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
