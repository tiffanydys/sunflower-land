import React from "react";

import { BuildingName } from "features/game/types/buildings";
import { BuildingProduct } from "features/game/types/game";
import { FirePit } from "./firePit/FirePit";
import { WithCraftingMachine } from "./WithCraftingMachine";
import { Market } from "./market/Market";
import { WorkBench } from "./workBench/WorkBench";
import { Tent } from "./tent/Tent";
import { WaterWell } from "./waterWell/WaterWell";
import { ChickenHouse } from "./henHouse/HenHouse";
import { Bakery } from "./bakery/Bakery";

import { Kitchen } from "./kitchen/Kitchen";
import { Deli } from "./deli/Deli";

import { SmoothieShack } from "./smoothieShack/SmoothieShack";
import { Warehouse } from "./warehouse/Warehouse";
import { Toolshed } from "./toolshed/Toolshed";
import { TownCenter } from "./townCenter/TownCenter";
import { ITEM_DETAILS } from "features/game/types/images";
import { PIXEL_SCALE } from "features/game/lib/constants";

export interface BuildingProps {
  buildingId: string;
  craftingState?: BuildingProduct;
  isBuilt?: boolean;
}

export const BUILDING_COMPONENTS: Record<
  BuildingName,
  React.FC<BuildingProps>
> = {
  "Fire Pit": ({ buildingId, craftingState, isBuilt }: BuildingProps) => (
    <WithCraftingMachine buildingId={buildingId} craftingState={craftingState}>
      <FirePit buildingId={buildingId} isBuilt={isBuilt} />
    </WithCraftingMachine>
  ),
  Workbench: WorkBench,
  Bakery: ({ buildingId, craftingState, isBuilt }: BuildingProps) => (
    <WithCraftingMachine buildingId={buildingId} craftingState={craftingState}>
      <Bakery buildingId={buildingId} isBuilt={isBuilt} />
    </WithCraftingMachine>
  ),
  Market: Market,
  Tent: Tent,
  "Town Center": TownCenter,
  "Water Well": WaterWell,
  Warehouse: Warehouse,
  Toolshed: Toolshed,
  "Hen House": ChickenHouse,
  Kitchen: ({ buildingId, craftingState, isBuilt }: BuildingProps) => (
    <WithCraftingMachine buildingId={buildingId} craftingState={craftingState}>
      <Kitchen buildingId={buildingId} isBuilt={isBuilt} />
    </WithCraftingMachine>
  ),
  Deli: ({ buildingId, craftingState, isBuilt }: BuildingProps) => (
    <WithCraftingMachine buildingId={buildingId} craftingState={craftingState}>
      <Deli buildingId={buildingId} isBuilt={isBuilt} />
    </WithCraftingMachine>
  ),
  "Smoothie Shack": ({ buildingId, craftingState, isBuilt }: BuildingProps) => (
    <WithCraftingMachine buildingId={buildingId} craftingState={craftingState}>
      <SmoothieShack buildingId={buildingId} isBuilt={isBuilt} />
    </WithCraftingMachine>
  ),
};

export const READONLY_BUILDINGS: Record<BuildingName, React.FC<any>> = {
  ...BUILDING_COMPONENTS,
  "Fire Pit": () => (
    <img
      src={ITEM_DETAILS["Fire Pit"].image}
      className="absolute bottom-0"
      style={{ width: `${PIXEL_SCALE * 47}px` }}
    />
  ),
  Kitchen: () => (
    <img
      src={ITEM_DETAILS["Kitchen"].image}
      className="absolute"
      style={{ width: `${PIXEL_SCALE * 63}px`, bottom: 0 }}
    />
  ),
  Workbench: () => (
    <img
      src={ITEM_DETAILS["Workbench"].image}
      className="relative"
      style={{
        width: `${PIXEL_SCALE * 47}px`,
        bottom: `${PIXEL_SCALE * 4}px`,
      }}
    />
  ),
  Market: () => (
    <img
      src={ITEM_DETAILS["Market"].image}
      className="absolute bottom-0"
      style={{ width: `${PIXEL_SCALE * 48}px` }}
    />
  ),
  "Hen House": () => (
    <img
      src={ITEM_DETAILS["Hen House"].image}
      className="absolute"
      style={{ width: `${PIXEL_SCALE * 61}px`, bottom: 0 }}
    />
  ),
  "Town Center": () => (
    <img
      src={ITEM_DETAILS["Town Center"].image}
      className="relative"
      style={{
        width: `${PIXEL_SCALE * 62}px`,
        left: `${PIXEL_SCALE * 2}px`,
        bottom: `${PIXEL_SCALE * 2}px`,
      }}
    />
  ),
  "Smoothie Shack": () => (
    <img
      src={ITEM_DETAILS["Smoothie Shack"].image}
      className="absolute bottom-0"
      style={{ width: `${PIXEL_SCALE * 48}px` }}
    />
  ),
  Bakery: () => (
    <img
      src={ITEM_DETAILS["Bakery"].image}
      className="absolute bottom-0"
      style={{ width: `${PIXEL_SCALE * 62}px`, left: `${PIXEL_SCALE * 1}px` }}
    />
  ),
  Deli: () => (
    <img
      src={ITEM_DETAILS["Deli"].image}
      className="absolute bottom-0"
      style={{ width: `${PIXEL_SCALE * 64}px` }}
    />
  ),
};
