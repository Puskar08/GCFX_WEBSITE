import Galaxy from "./galaxy";
import LightRays from "./lightrays";

export default function Hero() {
  return (
    <>
      {/* Basic usage */}
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Galaxy />
      </div> */}

      <div style={{ width: "100%", height: "300px", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="rgba(255, 255, 255, 1)"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </>
  );
}
