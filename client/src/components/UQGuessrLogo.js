export default function UQGuessrLogo({ compact = false, menu = false }) {
  return (
    <div
      className={`uqBrand minecraftBrand${compact ? " compactBrand" : ""}${menu ? " menuBrand" : ""}`}
      aria-label="UQGuessr"
    >
      <div className="uqWordmark minecraftWordmark">
        <strong>UQGUESSR</strong>
        <span>ST LUCIA EDITION</span>
      </div>
    </div>
  );
}
