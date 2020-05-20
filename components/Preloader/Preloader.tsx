export function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>

      <style jsx>{`
        .preloader {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #20d8da;
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;

          .spinner {
            width: 70px;
            text-align: center;

            div {
              width: 18px;
              height: 18px;
              background-color: #fff;
              border-radius: 100%;
              display: inline-block;
              animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .bounce1 {
              animation-delay: -0.32s;
            }

            .bounce2 {
              animation-delay: -0.16s;
            }
          }
        }

        @keyframes sk-bouncedelay {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
