import type { SkillTile as SkillTileData } from "@/lib/types";

/** minimal mono tile — colour washes in on hover (the shipped Skills layout) */
export function SkillTile({ tile }: { tile: SkillTileData }) {
  return (
    <div className={`mono-tile ${tile.c}`}>
      <span className="mono-tile__sym">{tile.sym}</span>
      <span className="mono-tile__nm">{tile.nm}</span>
    </div>
  );
}
