import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import React from "react";
import levelUp from "assets/tutorials/level_up.png";
import { Button } from "components/ui/Button";
import { Equipped } from "features/game/types/bumpkin";
import { NPC } from "./NPC";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { analytics } from "lib/analytics";

const LEVEL_UP_MESSAGES: Record<number, string> = {
  2: "Yeehaw, you've reached level 2! The crops are quakin' in their boots.",
  3: "Congrats on level 3! You're growing like a weed...",
  4: "Congrats on level 4! You've officially outgrown your green thumb.",
  5: "Level 5 and still alive! Your hard work is paying off...or should we say 'hay work'?",
  6: "Wow, level 6 already? You must be as strong as an ox. Or at least your plow is.",
  7: "Congrats on reaching level 7! Your farm is a-maize-ing.",
  8: "Level 8, great job! You're sowing the seeds of success.",
  9: "Niner niner, level 9er! Your harvest is growing as fast as your skills.",
  10: "Level 10, double digits! Your farm is looking so good, even the chickens are impressed.",
  11: "Level 11, you're making it rain (water, that is)!",
  12: "Congrats on level 12! Your farm is really starting to cultivate some character.",
  13: "Lucky level 13! You're really getting the hang of this farming thing.",
  14: "Level 14, it's a-maize-ing how much progress you've made!",
  15: "Fifteen and thriving! Your farm is looking better than ever.",
  16: "Congrats on level 16! Your farming skills are really taking root.",
  17: "Level 17, you're reaping what you sow (and it's looking good!).",
  18: "Eighteen and budding with potential!",
  19: "Congrats on level 19! Your farm is growing as fast as your skills.",
  20: "Level 20, you're the cream of the crop!",
  21: "Twenty-one and harvesting like a pro!",
  22: "Congrats on level 22! Your farm is getting plowed with success.",
  23: "Level 23, your skills are really starting to bloom!",
  24: "You're really blossoming at level 24!",
  25: "Quarter-century mark! You're making hay while the sun shines.",
  26: "Congrats on level 26! You're really milking this farming thing.",
  27: "Level 27, you're really starting to stand out in the field!",
  28: "You're really raising the bar at level 28!",
  29: "Congrats on level 29! You're really crop-tivating some serious skills.",
  30: "Level 30, you're a true farmer now!",
  31: "Thirty-one and still growing strong!",
  32: "Congrats on level 32! Your farm is in full bloom.",
  33: "Level 33, your farming skills are really taking off!",
  34: "You're really sprouting at level 34!",
  35: "Level 35, you're the tractor-trailer of farming!",
  36: "Congrats on level 36! Your farm is really starting to harvest some success.",
  37: "Level 37, your skills are really starting to crop up!",
  38: "You're really planting the seeds of success at level 38!",
  39: "Congrats on level 39! Your farm is really starting to mature.",
  40: "Level 40, you're a harvesting hero!",
  41: "Forty-one and still growing strong!",
  42: "Congrats on level 42! Your farm is starting to rake in the rewards.",
  43: "Level 43, you're really cultivating some serious skills.",
  44: " You're really harvesting success at level 44!",
  45: " Level 45, you're a true master of the harvest!",
  46: "Congrats on level 46! Your farming skills are really starting to bear fruit.",
  47: "Level 47, you're really growing into a farming legend.",
  48: "You're really thriving at level 48!",
  49: "Congrats on level 49! You're really starting to reap the rewards of your hard work.",
  50: "Halfway to 100! You're a true farming pro now.",
  51: "Fifty-one and still going strong!",
  52: "Congrats on level 52! Your farm is a true work of art.",
  53: "Level 53, your skills are really starting to take root.",
  54: "You're really harvesting happiness at level 54!",
  55: "Level 55, you're a true farming force to be reckoned with.",
  56: "Congrats on level 56! Your farm is really starting to blossom.",
  57: "Level 57, you're really starting to cultivate some serious skills.",
  58: "You're really sowing the seeds of success at level 58!",
  59: "Congrats on level 59! Your farm is the cream of the crop.",
  60: " Level 60, you're a true farming superstar!",
};

const IMAGE_WIDTH = 160;

interface Props {
  level: number;
  onClose: () => void;
  wearables: Equipped;
}
export const LevelUp: React.FC<Props> = ({ level, onClose, wearables }) => {
  const shareMessage = `Just reached level ${level} in Sunflower Land! So proud of my progress in this game. 🌻🚀 \n\n https://www.sunflower-land.com \n\n #SunflowerLand #LevelUp`;

  const clicked = (method: "Reddit" | "Twitter" | "Telegram" | "Facebook") => {
    // https://developers.google.com/analytics/devguides/collection/ga4/reference/events?sjid=18434190870996612736-AP&client_type=gtag#share
    analytics.logEvent("share", {
      method,
      content_type: "text",
      item_id: "level_up",
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12 rounded-lg shadow-md overflow-hidden mb-1">
        <img src={levelUp} className="w-full" />
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-${(PIXEL_SCALE * 16) / 2}px,-${
              PIXEL_SCALE * 56
            }px)`,
          }}
        >
          <NPC parts={wearables} hideShadow />
        </div>
      </div>
      <p className="text-sm my-1 text-center">
        {LEVEL_UP_MESSAGES[level] ?? "Wow, I am lost for words!"}
      </p>
      <div className="flex mt-2 mb-1 underline">
        <p className="text-xxs">Share</p>
      </div>
      <div className="flex">
        <TwitterShareButton
          url={" "}
          title={shareMessage}
          className="mr-1"
          onClick={() => clicked("Twitter")}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <TelegramShareButton
          url={" "}
          title={shareMessage}
          className="mr-1"
          onClick={() => clicked("Telegram")}
        >
          <TelegramIcon size={40} round />
        </TelegramShareButton>
        <FacebookShareButton
          url={"sunflower-land.com"}
          quote={shareMessage}
          className="mr-1"
          onClick={() => clicked("Facebook")}
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <RedditShareButton
          url={" "}
          title={shareMessage}
          onClick={() => clicked("Reddit")}
        >
          <RedditIcon size={40} round />
        </RedditShareButton>
      </div>
      <Button className="mt-2" onClick={onClose}>
        Ok
      </Button>
    </div>
  );
};
