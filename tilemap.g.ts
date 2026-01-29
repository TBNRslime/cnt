// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100006070707070707070707070702070705090101010101010101010101020101080901020202020202020202020201010809010202020202020101040101010108090101040101040201010101010104080901010101010102020202020202020209010101010101020101020104010108040202020201010201010101010101080901010102010101010101010101010805010101020101010101010101010108090101010201010201010201010101080901010102010102010102020202010804020202020101020101020101020208020101010101010201010201040102080203010101010102010102010101020802020202020202020a0a020a0a0a0205`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . . . 2 . . 2 . . . . . 
. . . 2 2 . . 2 . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . 2 . . 2 . . . . . 
. . . . 2 . . 2 . . 2 2 2 2 . . 
. 2 2 2 2 . . 2 . . 2 . . 2 2 . 
2 . . . . . . 2 . . . . . . 2 . 
2 . . . . . . 2 . . 2 . . . 2 . 
2 2 2 2 2 2 2 2 . . 2 . . . 2 . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100005060404040804040506040408040406020101010108010101010101080101030201010101080101010101010808080808080801010808080808010108010103020108010101010101010101080101030201080101010101010101010801010306010801010101010101010108010105090108010101080808080101010101060201010101010101010801010101010302010101010101010108010108010103080808010101080605080101080101030201010101080808080801010808080302010101010801010101010101010803020701010108010101010101010108030201010101080101050601010101080308080808080808080808080808080805`, img`
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . 2 . . . . . . 2 2 . . 
2 2 2 . . 2 2 2 2 2 . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . . . . . . . 2 . . . 
. . 2 . . . 2 2 2 2 . . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . 2 . . . 
2 2 2 . . . 2 . . 2 . . 2 . . . 
. . . . . 2 2 2 2 2 . . 2 2 2 . 
. . . . . 2 . . . . . . . . 2 . 
. . . . . 2 . . . . . . . . 2 . 
. . . . . 2 . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.hazardSpike], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101020101010101010103020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102010101010101010101010101010102`, img`
2 2 2 2 . . . . 2 . . . . . . . 
. . . 2 . . . 2 . . . . . . . . 
. . . 2 . . . . . . . . 2 2 . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . 2 . . . . 2 . . . . . 
. . . 2 2 . . . . 2 2 2 . . . . 
. . . 2 . . . . 2 . . 2 . . . . 
. . 2 2 . . . 2 2 . . 2 . . . . 
. 2 . 2 . . . 2 2 . . 2 . . . . 
. 2 . . . . 2 2 2 . . 2 . . . . 
. 2 2 . . . 2 2 2 . . 2 . . . . 
. . . . . 2 . 2 2 . . 2 . . . . 
. . . . . 2 . . 2 . . 2 . . . . 
2 2 2 . 2 . . . 2 2 . . . . . . 
. . . . 2 2 . . . 2 2 . . . . . 
. . . . . 2 . . . . . . 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level":
            case "level4":return tiles.createTilemap(hex`100010000209090909090b0b0b0909090909090308010101010101010101010101010106080101010101010101010101010101060801010101010101010101010101010608010101010101010101010101010106080101010101010101010101010101060c0101010101010101010101010101060c010101010101010e0101010101010a0c01010101010101010101010101010a0801010101010101010101010101010a08010101010101010101010101010106080101010101010101010101010101060801010101010101010101010101010608010101010101010101010101010106080101010101010101010101010101060407070707070d0d0d07070707070705`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "sandmystery1":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
