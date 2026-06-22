import { Icon } from "@iconify/react";
import type { SkillTile as SkillTileData } from "@/lib/types";

/** minimal mono tile — colour washes in on hover (the shipped Skills layout) */
export function SkillTile({ tile }: { tile: SkillTileData }) {
  return (
    <div className={`mono-tile ${tile.c}`}>
      <span className="mono-tile__sym">
        <Icon icon={tile.sym} width="24" height="24"></Icon>
      </span>
      <span className="mono-tile__nm">{tile.nm}</span>
    </div>
  );
}
