BlockEvents.rightClicked((event) => {
    const { entity, block, level, server } = event;
    if (!entity.isPlayer() || entity.isFake()) {
        return;
    }

    const dimension = String(level.getDimension());

    if (
        (level.isRaining || level.isThundering) &&
        dimension == 'twilightforest:twilight_forest' &&
        block.getId().match(/(minecraft:|comforts:).*(_bed|sleeping_bag|hammock_)/)
    ) {
        // clear weather after 100 ticks
        server.scheduleInTicks(100, (schedule) => {
            let command = `/execute in minecraft:overworld run weather clear 24000`;
            schedule.server.runCommandSilent(command);
        });
    }
});
