import React from "react";

interface HouseCardProps {
  name: string;
  animal: string;
  founder: string;
  houseColours: string;
}

const HouseCard: React.FC<HouseCardProps> = ({
  name,
  animal,
  founder,
  houseColours,
}) => {
  const validCSSColorsSet: Set<string> = new Set([
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
  ]);

  const renderGradientBar = (houseColours: string) => {
    let gradientStyle: React.CSSProperties;
    if (houseColours) {
      const colors = houseColours
        .split(" and ")
        .map((color) => color.trim().toLowerCase());
      const color1 = validCSSColorsSet.has(colors[0]) ? colors[0] : "white";
      const color2 = validCSSColorsSet.has(colors[1]) ? colors[1] : "black";
      gradientStyle = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        height: "20px",
        marginTop: "12px",
        marginBottom: "12px",
        borderRadius: "3px",
      };
    } else {
      gradientStyle = {
        background: `linear-gradient(to right, black, white)`,
        height: "20px",
        marginTop: "12px",
        marginBottom: "12px",
        borderRadius: "3px",
      };
    }
    return gradientStyle;
  };

  return (
    <div className="w-full md:w-96 rounded-lg overflow-hidden shadow-md bg-white text-black">
      <div className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mr-auto">{name}</h2>
          <p className="text-sm text-black">{animal}</p>
        </div>
        <div className="w-full" style={renderGradientBar(houseColours)}></div>
        <p className="text-sm text-black">
          Founder: <span className="font-bold">{founder}</span>
        </p>
      </div>
    </div>
  );
};

export default HouseCard;
