//priority: 1000

const disabled_item_message =
    "This item has been disabled, if you managed to obtain it please report it on Enigmatica 9's issue tracker: https://github.com/EnigmaticaModpacks/Enigmatica9/issues";

const disabled_item_tooltip = 'This item has been disabled.';

const jei = {
    base: {
        items: { hidden: [], disabled: [], added: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
    normal: {
        items: { hidden: [], disabled: [], added: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    },
    expert: {
        items: { hidden: [], disabled: [], added: [] },
        fluids: { hidden: [] },
        gases: { hidden: [] },
        categories: { hidden: [] },
        recipes: { hidden: [] }
    }
};

// Base
jei.base.items.disabled = [
    /thermal.*cinnabar_ore/,
    /thermal.*niter_ore/,
    /thermal.*sulfur_ore/,
    /mekanism.*fluorite_ore/,
    /rftoolsbase:dimensionalshard_/,

    /pendorite/,
    /ametrine/,

    /theoneprobe/,

    /create:crushed_raw_.*/,

    'byg:emeraldite_shards',

    'createaddition:spool',
    'createaddition:festive_spool',
    'createaddition:electrum_spool',
    'createaddition:electrum_wire',
    'createaddition:gold_spool',
    'createaddition:gold_wire',
    'createaddition:copper_spool',
    'createaddition:copper_wire',
    'createaddition:iron_wire',
    'createaddition:connector',
    'createaddition:large_connector',
    'createaddition:accumulator',
    'createaddition:redstone_relay',
    'createaddition:barbed_wire',
    'createaddition:biomass',
    'createaddition:bioethanol_bucket',
    'createaddition:seed_oil_bucket',

    /emendatusenigmatica:.*_cluster_shard\b/,

    'engineersdecor:factory_dropper',
    'engineersdecor:factory_hopper',
    'engineersdecor:factory_placer',
    'engineersdecor:fluid_barrel',
    /engineersdecor:small_/,
    'engineersdecor:straight_pipe_valve_redstone',
    'engineersdecor:straight_pipe_valve_redstone_analog',
    'engineersdecor:test_block',

    /mekanism:.*_bin/,

    'minecraft:nether_gold_ore',

    'immersiveengineering:blast_furnace',
    'immersiveengineering:alloy_smelter',
    'immersiveengineering:plantoil_bucket',
    'immersiveengineering:ethanol_bucket',
    'immersiveengineering:biodiesel_bucket',

    'industrialforegoing:dryrubber',

    /thermal:flax/,
    /thermal:hops/,
    'thermal:rice_seeds',
    'thermal:rice',
    'thermal:onion_seeds',
    'thermal:onion',
    'thermal:tomato_seeds',
    'thermal:tomato',
    'thermal:crude_oil_bucket',
    'thermal:heavy_oil_bucket',
    'thermal:light_oil_bucket',
    'thermal:latex_bucket',
    'thermal:creosote_bucket',
    'thermal:refined_fuel_bucket',
    'thermal:deepslate_cinnabar_ore',
    'thermal:cinnabar_ore',

    'twilightforest:uncrafting_table',
    /twilightforest:charm_of_keeping/,

    'occultism:butcher_knife',

    'powah:uraninite_raw',
    /uraninite_ore/,
    /powah:.*_starter/,
    'powah:capacitor_basic',
    'powah:capacitor_basic_tiny',

    'quark:feeding_trough',

    'superiorshields:manasteel_shield',
    'superiorshields:terrasteel_shield',
    'superiorshields:elementium_shield',

    'sushigocrafting:rice_seeds',
    'sushigocrafting:rice'
];
jei.base.items.hidden = [
    'create:honey_bucket',

    /densetrees/,

    /emendatusenigmatica:bitumen_.*_ore/,
    'emendatusenigmatica:bitumen_ore',
    'emendatusenigmatica:quartz_netherrack_ore',
    'emendatusenigmatica:quartz_ore',

    /hexerei:.*selenite/,
    'hexerei:creative_waxing_kit',

    /kubejs:.*indicator/,
    /kubejs:.*delight/,
    /kubejs:.*lootbox/,

    'naturesaura:multiblock_maker',

    /occultism:.*debug/,
    'occultism:lighted_air',

    /powah:.*uraninite_ore.*/,

    'sophisticatedstorage:debug_tool',

    /twilightforest:.*boss_spawner/,

    /nomadictents:.*_shamiyana_wall/,
    /nomadictents:.*_tepee_wall/,
    /nomadictents:.*_shovel/,
    /nomadictents:.*_crossbeams/,
    'nomadictents:indlu_wall',
    'nomadictents:bedouin_roof',
    'nomadictents:bedouin_wall',
    'nomadictents:yurt_roof',
    'nomadictents:yurt_wall',
    'nomadictents:rigid_dirt'
];
jei.base.fluids.hidden = [
    'thermal:latex',
    'thermal:creosote',
    'thermal:heavy_oil',
    'thermal:light_oil',
    'thermal:crude_oil',
    'thermal:refined_fuel',
    'immersiveengineering:plantoil',
    'immersiveengineering:ethanol',
    'immersiveengineering:biodiesel',
    'createaddition:seed_oil',
    'createaddition:bioethanol',
    'create:honey',
    'cofh_core:honey'
];
jei.base.categories.hidden = ['twilightforest:uncrafting', 'emi_loot:chest_loot', 'emi_loot:block_drops'];
jei.base.recipes.hidden = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: ['pneumaticcraft:one_probe_crafting']
    },
    {
        category: 'naturesaura:animal_spawner',
        recipes_by_id: [
            'naturesaura:animal_spawner/sheep_black',
            'naturesaura:animal_spawner/sheep_blue',
            'naturesaura:animal_spawner/sheep_brown',
            'naturesaura:animal_spawner/sheep_cyan',
            'naturesaura:animal_spawner/sheep_gray',
            'naturesaura:animal_spawner/sheep_green',
            'naturesaura:animal_spawner/sheep_light_blue',
            'naturesaura:animal_spawner/sheep_light_gray',
            'naturesaura:animal_spawner/sheep_lime',
            'naturesaura:animal_spawner/sheep_magenta',
            'naturesaura:animal_spawner/sheep_orange',
            'naturesaura:animal_spawner/sheep_pink',
            'naturesaura:animal_spawner/sheep_purple',
            'naturesaura:animal_spawner/sheep_red',
            'naturesaura:animal_spawner/sheep_white',
            'naturesaura:animal_spawner/sheep_yellow'
        ]
    }
];
jei.base.gases.hidden = [];

// Normal
jei.normal.items.disabled = [];
jei.normal.items.hidden = [
    /kubejs:.*tree_of_life_/,
    /kubejs:ritual_craft_/,
    /kubejs:ritual_summon_/,
    /kubejs:heartwood_/,
    'kubejs:summon_death_tome',
    'kubejs:teleport_everdawn',
    'kubejs:ritual_teleport_everdawn',
    'kubejs:teleport_everbright',
    'kubejs:ritual_teleport_everbright',
    'kubejs:teleport_nether',
    'kubejs:ritual_teleport_nether',
    'kubejs:crude_iron_ingot',
    'kubejs:mystery_mash',
    'kubejs:dream_stone',
    'kubejs:saturated_magebloom_filter',
    'kubejs:magebloom_filter',
    'kubejs:dimensional_storage_crystal',
    'kubejs:energetic_transference_matrix',
    'kubejs:kaolin_powder',
    'kubejs:calcined_kaolin_pearls',
    'kubejs:kaolin_clay',
    'kubejs:aura_leaf',
    'kubejs:spirit_of_devotion',
    'kubejs:heart_of_the_mountain',
    'kubejs:heart_of_the_inferno',
    'kubejs:heart_of_the_tempest',
    'kubejs:heart_of_the_sea',
    'kubejs:primed_aetheric_heart',
    'kubejs:primordial_seed',

    // Creative items:
    /mekanism:creative_/,
    /ae2:creative/,
    /ars_nouveau:creative/,
    'buildinggadgets:construction_paste_container_creative',
    /create:creative/,
    'create:handheld_worldshaper',
    /functionalstorage:creative/,
    /immersiveengineering.*creative/,
    /littlelogistics:creative/,
    /pneumaticcraft:creative/,
    /appmek:creative/,
    'powah:energy_cell_creative',
    /thermal.*creative/,
    /createaddition:creative/,
    /modularrouters:creative/
];
jei.normal.fluids.hidden = [];
jei.normal.categories.hidden = [];
jei.normal.gases.hidden = [];

// Expert
jei.expert.items.disabled = [
    /computercraft:/,
    /rftoolsbuilder:/,
    /shrink:/,

    'ae2:charger',
    'ae2:vibration_chamber',
    'ae2:silicon_press',
    'ae2:logic_processor_press',
    'ae2:engineering_processor_press',
    'ae2:calculation_processor_press',

    'ars_elemental:lesser_fire_focus',
    'ars_elemental:lesser_water_focus',
    'ars_elemental:lesser_air_focus',
    'ars_elemental:lesser_earth_focus',

    'ars_nouveau:agronomic_sourcelink',
    'ars_nouveau:mycelial_sourcelink',
    'ars_nouveau:vitalic_sourcelink',
    'ars_nouveau:volcanic_sourcelink',
    'ars_nouveau:ritual_wilden_summon',

    'compactmachines:chunkloader_upgrade',

    'constructionwand:iron_wand',
    'constructionwand:stone_wand',

    'create:empty_blaze_burner',
    'create:precision_mechanism',
    'create:electron_tube',
    'create:mechanical_crafter',
    'create:andesite_alloy_block',

    'createaddition:alternator',
    'createaddition:modular_accumulator',
    'createaddition:capacitor',
    'createaddition:portable_energy_interface',
    'createaddition:digital_adapter',

    'emendatusenigmatica:refined_glowstone_nugget',
    'emendatusenigmatica:refined_glowstone_ingot',
    'emendatusenigmatica:refined_glowstone_block',
    'emendatusenigmatica:refined_obsidian_dust',
    'emendatusenigmatica:refined_obsidian_nugget',
    'emendatusenigmatica:refined_obsidian_ingot',
    'emendatusenigmatica:refined_obsidian_block',
    'emendatusenigmatica:andesite_block',
    'emendatusenigmatica:andesite_ingot',

    'immersiveengineering:capacitor_hv',
    'immersiveengineering:capacitor_lv',
    'immersiveengineering:capacitor_mv',
    'immersiveengineering:connector_hv',
    'immersiveengineering:connector_hv_relay',
    'immersiveengineering:connector_lv',
    'immersiveengineering:connector_lv_relay',
    'immersiveengineering:connector_mv',
    'immersiveengineering:connector_mv_relay',
    'immersiveengineering:mold_bullet_casing',
    'immersiveengineering:mold_unpacking',
    'immersiveengineering:mold_packing_4',
    'immersiveengineering:mold_packing_9',
    'immersiveengineering:component_electronic_adv',
    'immersiveengineering:dynamo',
    'immersiveengineering:electric_lantern',
    'immersiveengineering:thermoelectric_generator',
    'immersiveengineering:transformer',
    'immersiveengineering:transformer_hv',
    'immersiveengineering:lightning_rod',
    'immersiveengineering:arc_furnace',
    'immersiveengineering:diesel_generator',
    'immersiveengineering:auto_workbench',
    'immersiveengineering:excavator',
    'immersiveengineering:toolupgrade_drill_lube',
    'immersiveengineering:tesla_coil',
    'immersiveengineering:generator',
    'immersiveengineering:floodlight',
    'immersiveengineering:wirecoil_copper',
    'immersiveengineering:wirecoil_steel',
    'immersiveengineering:wirecoil_copper_ins',
    'immersiveengineering:wirecoil_electrum',
    'immersiveengineering:wirecoil_electrum_ins',
    'immersiveengineering:component_iron',
    'immersiveengineering:component_steel',
    'immersiveengineering:charging_station',
    'immersiveengineering:powerpack',
    'immersiveengineering:toolupgrade_powerpack_antenna',
    'immersiveengineering:toolupgrade_powerpack_tesla',
    'immersiveengineering:toolupgrade_powerpack_induction',
    'immersiveengineering:survey_tools',
    'immersiveengineering:redstone_breaker',
    'immersiveengineering:breaker_switch',
    'immersiveengineering:current_transformer',
    'immersiveengineering:cloche',
    'immersiveengineering:drillhead_iron',

    /industrialforegoing:.*black_hole/,
    /industrialforegoing:conveyor/,
    /industrialforegoing:mycelial/,
    'industrialforegoing:machine_frame_pity',
    'industrialforegoing:biofuel_generator',
    'industrialforegoing:fermentation_station',
    'industrialforegoing:fluid_sieving_machine',
    'industrialforegoing:pitiful_generator',
    'industrialforegoing:washing_factory',
    `industrialforegoing:tinydryrubber`,
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:mob_duplicator',
    'industrialforegoing:bioreactor',
    'industrialforegoing:enchantment_extractor',
    'industrialforegoing:enchantment_sorter',
    'industrialforegoing:mob_crusher',
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:enchantment_factory',
    'industrialforegoing:water_condensator',
    'industrialforegoing:wither_builder',
    'industrialforegoing:enchantment_applicator',
    'industrialforegoing:fluid_collector',
    'industrialforegoing:block_breaker',
    'industrialforegoing:block_placer',
    'industrialforegoing:fluid_placer',
    'industrialforegoing:mob_imprisonment_tool',
    'industrialforegoing:infinity_launcher',
    'industrialforegoing:infinity_backpack',
    'industrialforegoing:animal_feeder',
    'industrialforegoing:spores_recreator',
    'industrialforegoing:mob_slaughter_factory',
    'industrialforegoing:resourceful_furnace',
    'industrialforegoing:plastic',

    'littlelogistics:steam_locomotive',
    'littlelogistics:tug',

    /mekanism:.*_universal_cable/,
    /mekanism:.*_thermodynamic_conductor/,
    /mekanism:.*_logistical_transporter/,
    /mekanism:.*_pressurized_tube/,
    /mekanism:.*_mechanical_pipe/,
    /mekanism:.*_purifying_factory/,
    /mekanism:.*_compressing_factory/,
    /mekanism:.*_crushing_factory/,
    /mekanism:.*_sawing_factory/,
    /mekanism:.*_smelting_factory/,
    /mekanism:.*_control_circuit/,
    /mekanism:hazmat/,
    /mekanism:scuba/,
    'mekanism:pellet_plutonium',
    'mekanism:alloy_atomic',
    'mekanism:alloy_infused',
    'mekanism:upgrade_stone_generator',
    'mekanism:upgrade_filter',
    'mekanism:logistical_sorter',
    'mekanism:diversion_transporter',
    'mekanism:restrictive_transporter',
    'mekanism:basic_energy_cube',
    'mekanism:basic_induction_cell',
    'mekanism:basic_induction_provider',
    'mekanism:advanced_energy_cube',
    'mekanism:advanced_induction_cell',
    'mekanism:advanced_induction_provider',
    'mekanism:advanced_fluid_tank',
    'mekanism:advanced_chemical_tank',
    'mekanism:elite_energy_cube',
    'mekanism:elite_induction_cell',
    'mekanism:elite_induction_provider',
    'mekanism:elite_fluid_tank',
    'mekanism:elite_chemical_tank',
    'mekanism:ultimate_energy_cube',
    'mekanism:ultimate_induction_cell',
    'mekanism:ultimate_induction_provider',
    'mekanism:ultimate_fluid_tank',
    'mekanism:ultimate_chemical_tank',
    'mekanism:induction_casing',
    'mekanism:induction_port',
    'mekanism:energy_tablet',
    'mekanism:seismic_reader',
    'mekanism:seismic_vibrator',
    'mekanism:jetpack',
    'mekanism:jetpack_armored',
    'mekanism:free_runners',
    'mekanism:free_runners_armored',
    'mekanism:atomic_disassembler',
    'mekanism:electric_bow',
    'mekanism:flamethrower',
    'mekanism:dictionary',
    'mekanism:crafting_formula',
    'mekanism:formulaic_assemblicator',
    'mekanism:geiger_counter',
    'mekanism:dosimeter',
    'mekanism:oredictionificator',
    'mekanism:crusher',
    'mekanism:fluidic_plenisher',
    'mekanism:combiner',
    'mekanism:chemical_washer',
    'mekanism:electric_pump',
    'mekanism:digital_miner',
    'mekanism:dimensional_stabilizer',
    'mekanism:electrolytic_separator',
    'mekanism:energized_smelter',
    'mekanism:fuelwood_heater',
    'mekanism:isotopic_centrifuge',
    'mekanism:osmium_compressor',
    'mekanism:personal_barrel',
    'mekanism:personal_chest',
    'mekanism:precision_sawmill',
    'mekanism:purification_chamber',
    'mekanism:solar_neutron_activator',
    'mekanism:robit',
    'mekanism:thermal_evaporation_block',
    'mekanism:thermal_evaporation_valve',
    'mekanism:thermal_evaporation_controller',
    'mekanism:boiler_casing',
    'mekanism:boiler_valve',
    'mekanism:pressure_disperser',
    'mekanism:superheating_element',
    'mekanism:module_radiation_shielding_unit',
    'mekanism:module_geiger_unit',
    'mekanism:module_dosimeter_unit',
    'mekanism:electrolytic_core',
    'mekanism:pigment_extractor',
    'mekanism:pigment_mixer',
    'mekanism:painting_machine',
    'mekanism:quantum_entangloporter',
    'mekanism:hdpe_elytra',
    'mekanism:module_base',
    'mekanism:portable_qio_dashboard',
    'mekanism:qio_drive_supermassive',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_base',
    'mekanism:qio_redstone_adapter',
    'mekanism:qio_exporter',
    'mekanism:qio_importer',
    'mekanism:qio_drive_array',
    'mekanism:qio_dashboard',
    'mekanism:dirty_netherite_scrap',
    'mekanism:yellow_cake_uranium',
    'mekanism:dye_base',
    'mekanism:reprocessed_fissile_fragment',
    'mekanism:enriched_iron',
    'mekanism:hdpe_stick',
    'mekanism:hdpe_sheet',
    'mekanism:hdpe_rod',
    'mekanism:hdpe_pellet',
    'mekanism:steel_casing',

    'mekanismgenerators:gas_burning_generator',
    'mekanismgenerators:advanced_solar_generator',
    'mekanismgenerators:bio_generator',
    'mekanismgenerators:control_rod_assembly',
    'mekanismgenerators:fission_fuel_assembly',
    'mekanismgenerators:fission_reactor_casing',
    'mekanismgenerators:fission_reactor_logic_adapter',
    'mekanismgenerators:fission_reactor_port',
    'mekanismgenerators:fusion_reactor_controller',
    'mekanismgenerators:fusion_reactor_frame',
    'mekanismgenerators:fusion_reactor_logic_adapter',
    'mekanismgenerators:fusion_reactor_port',
    'mekanismgenerators:heat_generator',
    'mekanismgenerators:hohlraum',
    'mekanismgenerators:laser_focus_matrix',
    'mekanismgenerators:reactor_glass',
    'mekanismgenerators:rotational_complex',
    'mekanismgenerators:saturating_condenser',
    'mekanismgenerators:solar_generator',
    'mekanismgenerators:turbine_casing',
    'mekanismgenerators:turbine_rotor',
    'mekanismgenerators:turbine_valve',
    'mekanismgenerators:turbine_vent',
    'mekanismgenerators:wind_generator',
    'mekanismgenerators:electromagnetic_coil',
    'mekanismgenerators:module_geothermal_generator_unit',
    'mekanismgenerators:module_solar_recharging_unit',
    'mekanismgenerators:solar_panel',
    'mekanismgenerators:turbine_blade',

    /mininggadgets:upgrade_battery/,
    'mininggadgets:upgrade_three_by_three',
    'naturesaura:animal_generator',
    'naturesaura:chorus_generator',
    'naturesaura:flower_generator',
    'naturesaura:moss_generator',
    'naturesaura:oak_generator',
    'naturesaura:slime_split_generator',
    'naturesaura:token_anger',
    'naturesaura:token_euphoria',
    'naturesaura:token_fear',
    'naturesaura:token_grief',
    'naturesaura:token_joy',
    'naturesaura:token_rage',
    'naturesaura:token_sorrow',
    'naturesaura:token_terror',
    'naturesaura:blast_furnace_booster',
    'naturesaura:dimension_rail_end',
    'naturesaura:dimension_rail_nether',
    'naturesaura:dimension_rail_overworld',
    'naturesaura:rf_converter',
    'naturesaura:projectile_generator',
    'naturesaura:firework_generator',

    /occultism:chalk_.*_impure/,
    'occultism:ritual_dummy/summon_wild_otherworld_bird',
    'occultism:miner_foliot_unspecialized',
    'occultism:miner_djinni_ores',
    'occultism:miner_afrit_deeps',
    'occultism:miner_marid_master',
    'occultism:dimensional_mineshaft',
    'occultism:infused_pickaxe',
    'occultism:otherworld_goggles',
    'occultism:lens_frame',
    'occultism:infused_lenses',
    'occultism:lenses',
    'occultism:magic_lamp_empty',
    'occultism:spirit_attuned_pickaxe_head',
    'occultism:ritual_dummy/summon_wild_hunt',

    'pneumaticcraft:air_compressor',
    'pneumaticcraft:electrostatic_compressor',
    'pneumaticcraft:advanced_air_compressor',
    'pneumaticcraft:advanced_liquid_compressor',
    'pneumaticcraft:liquid_compressor',
    'pneumaticcraft:manual_compressor',
    'pneumaticcraft:pneumatic_dynamo',
    'pneumaticcraft:solar_compressor',
    'pneumaticcraft:thermal_compressor',
    'pneumaticcraft:spawner_agitator',
    'pneumaticcraft:jet_boots_upgrade_1',
    'pneumaticcraft:jet_boots_upgrade_2',
    'pneumaticcraft:jumping_upgrade_1',
    'pneumaticcraft:radiation_shielding_upgrade',
    'pneumaticcraft:search_upgrade',
    'pneumaticcraft:etching_tank',
    'pneumaticcraft:uv_light_box',
    'pneumaticcraft:failed_pcb',
    'pneumaticcraft:unassembled_pcb',
    'pneumaticcraft:empty_pcb',
    'pneumaticcraft:solar_cell',
    'pneumaticcraft:solar_wafer',
    'pneumaticcraft:empty_spawner',
    'pneumaticcraft:spawner_extractor',
    'pneumaticcraft:capacitor',
    'pneumaticcraft:transistor',
    'pneumaticcraft:drone_interface',
    'pneumaticcraft:etching_acid_bucket',

    /powah:(thermo_generator|solar_panel|furnator|magmator|reactor|energy|battery|ender)/,
    /powah:(energizing_rod_|player_transmitter_|capacitor_)(blazing|hardened)/,
    'powah:dielectric_casing',
    'powah:ender_core',
    'powah:player_aerial_pearl',
    'powah:aerial_pearl',

    'rftoolsbase:manual',
    'rftoolsbase:machine_base',
    'rftoolsbase:machine_frame',
    'rftoolsbase:smartwrench_select',
    'rftoolsbase:smartwrench',
    'rftoolsbase:tablet',
    'rftoolsbase:machine_infuser',
    'rftoolsbase:information_screen',
    'rftoolsbase:crafting_card',

    'sophisticatedbackpacks:advanced_feeding_upgrade',
    'sophisticatedbackpacks:feeding_upgrade',
    'sophisticatedbackpacks:advanced_pump_upgrade',
    'sophisticatedbackpacks:pump_upgrade',
    'sophisticatedbackpacks:xp_pump_upgrade',
    'sophisticatedbackpacks:tank_upgrade',
    'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
    'sophisticatedbackpacks:tool_swapper_upgrade',
    'sophisticatedbackpacks:auto_blasting_upgrade',
    'sophisticatedbackpacks:blasting_upgrade',
    'sophisticatedbackpacks:auto_smelting_upgrade',
    'sophisticatedbackpacks:smelting_upgrade',
    'sophisticatedbackpacks:auto_smoking_upgrade',
    'sophisticatedbackpacks:smoking_upgrade',
    'sophisticatedbackpacks:battery_upgrade',

    'sophisticatedstorage:advanced_feeding_upgrade',
    'sophisticatedstorage:feeding_upgrade',
    'sophisticatedstorage:advanced_pump_upgrade',
    'sophisticatedstorage:pump_upgrade',
    'sophisticatedstorage:xp_pump_upgrade',
    'sophisticatedstorage:auto_blasting_upgrade',
    'sophisticatedstorage:blasting_upgrade',
    'sophisticatedstorage:auto_smelting_upgrade',
    'sophisticatedstorage:smelting_upgrade',
    'sophisticatedstorage:auto_smoking_upgrade',
    'sophisticatedstorage:smoking_upgrade',
    'sophisticatedstorage:crafting_upgrade',
    'sophisticatedstorage:limited_barrel_1',
    'sophisticatedstorage:limited_barrel_2',
    'sophisticatedstorage:limited_barrel_3',
    'sophisticatedstorage:limited_barrel_4',
    'sophisticatedstorage:limited_diamond_barrel_1',
    'sophisticatedstorage:limited_diamond_barrel_2',
    'sophisticatedstorage:limited_diamond_barrel_3',
    'sophisticatedstorage:limited_diamond_barrel_4',
    'sophisticatedstorage:limited_gold_barrel_1',
    'sophisticatedstorage:limited_gold_barrel_2',
    'sophisticatedstorage:limited_gold_barrel_3',
    'sophisticatedstorage:limited_gold_barrel_4',
    'sophisticatedstorage:limited_iron_barrel_1',
    'sophisticatedstorage:limited_iron_barrel_2',
    'sophisticatedstorage:limited_iron_barrel_3',
    'sophisticatedstorage:limited_iron_barrel_4',
    'sophisticatedstorage:limited_netherite_barrel_1',
    'sophisticatedstorage:limited_netherite_barrel_2',
    'sophisticatedstorage:limited_netherite_barrel_3',
    'sophisticatedstorage:limited_netherite_barrel_4',

    'sophisticatedstorage:basic_to_gold_tier_upgrade',
    'sophisticatedstorage:basic_to_diamond_tier_upgrade',
    'sophisticatedstorage:basic_to_netherite_tier_upgrade',
    'sophisticatedstorage:iron_to_diamond_tier_upgrade',
    'sophisticatedstorage:iron_to_netherite_tier_upgrade',
    'sophisticatedstorage:gold_to_netherite_tier_upgrade',

    'superiorshields:copper_shield',
    'superiorshields:diamond_shield',
    'superiorshields:electric_shield',
    'superiorshields:engineers_shield',
    'superiorshields:fiery_shield',
    'superiorshields:golden_shield',
    'superiorshields:invar_shield',
    'superiorshields:iron_shield',
    'superiorshields:lapis_shield',
    'superiorshields:lead_shield',
    'superiorshields:netherite_shield',
    'superiorshields:nickel_shield',
    'superiorshields:osmium_shield',
    'superiorshields:refined_glowstone_shield',
    'superiorshields:refined_obsidian_shield',
    'superiorshields:silver_shield',
    'superiorshields:steel_shield',
    'superiorshields:tin_shield',
    'superiorshields:spirit_hunter_shield',
    'superiorshields:soul_stained_shield',
    'superiorshields:flux_shield',

    'thermal:dynamo_compression',
    'thermal:dynamo_gourmand',
    'thermal:dynamo_lapidary',
    'thermal:dynamo_magmatic',
    'thermal:dynamo_numismatic',
    'thermal:dynamo_stirling',
    'thermal:flux_saw',
    'thermal:flux_drill',
    'thermal:drill_head',
    'thermal:saw_blade',
    'thermal:energy_cell',
    'thermal:flux_capacitor',
    'thermal:device_potion_diffuser',
    'thermal:rf_potato',
    'thermal:energy_limiter_attachment',
    'thermal:energy_duct',
    'thermal:machine_insolator',
    'thermal:energy_minecart',

    'twilightforest:candelabra',
    'twilightforest:keepsake_casket',
    'twilightforest:cube_of_annihilation',
    'twilightforest:greater_potion_flask',
    'twilightforest:brittle_potion_flask',

    'xnet:wireless_router',
    'xnet:antenna',
    'xnet:antenna_dish',
    'xnet:antenna_base'
];
jei.expert.items.hidden = [];
jei.expert.fluids.hidden = ['pneumaticcraft:etching_acid'];
jei.expert.gases.hidden = [];
jei.expert.categories.hidden = [
    'mekanism:boiler_casing',
    'mekanism:gas_conversion',
    'mekanism:thermal_evaporation_controller',
    'occultism:miner',
    'powah:coolant',
    'powah:heat_source',
    'powah:magmatic',
    'powah:solid_coolant',
    'immersiveengineering:cloche',
    'industrialforegoing:bioreactor',
    'industrialforegoing:fermenter',
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:ore_sieve',
    'industrialforegoing:ore_washer',
    'industrialforegoing:mycelial_crimed',
    'industrialforegoing:mycelial_culinary',
    'industrialforegoing:mycelial_death',
    'industrialforegoing:mycelial_disenchantment',
    'industrialforegoing:mycelial_ender',
    'industrialforegoing:mycelial_explosive',
    'industrialforegoing:mycelial_frosty',
    'industrialforegoing:mycelial_furnace',
    'industrialforegoing:mycelial_halitosis',
    'industrialforegoing:mycelial_magma',
    'industrialforegoing:mycelial_meatallurgic',
    'industrialforegoing:mycelial_netherstar',
    'industrialforegoing:mycelial_pink',
    'industrialforegoing:mycelial_potion',
    'industrialforegoing:mycelial_slimey',
    'thermal:compression_fuel',
    'thermal:gourmand_fuel',
    'thermal:insolator',
    'thermal:insolator_catalyst',
    'thermal:lapidary_fuel',
    'thermal:magmatic_fuel',
    'thermal:numismatic_fuel',
    'thermal:stirling_fuel'
];
jei.expert.recipes.hidden = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [
            'naturesaura:gold_fiber',
            'naturesaura:wood_stand',
            'naturesaura:offering_table',
            'naturesaura:flower_generator',
            'naturesaura:oak_generator',
            'naturesaura:slime_split_generator',
            'naturesaura:animal_generator',
            'naturesaura:chorus_generator',
            'naturesaura:moss_generator',
            'naturesaura:loot_finder',
            'naturesaura:light_staff',
            'naturesaura:cave_finder',
            'naturesaura:pet_reviver',
            'naturesaura:shockwave_creator',
            'naturesaura:blast_furnace_booster',
            'naturesaura:auto_crafter',
            'naturesaura:death_ring',
            'naturesaura:dimension_rail_end',
            'naturesaura:dimension_rail_nether',
            'naturesaura:dimension_rail_overworld',
            'naturesaura:rf_converter',
            'naturesaura:calling_spirit',
            'naturesaura:depth_ingot_creation',
            'naturesaura:projectile_generator',
            'naturesaura:firework_generator',
            'naturesaura:gold_powder',
            'ars_nouveau:imbuement_chamber',
            'ars_nouveau:mycelial_sourcelink',
            'ars_nouveau:vitalic_sourcelink',
            'ars_nouveau:volcanic_sourcelink',
            'ars_nouveau:agronomic_sourcelink',
            'ars_nouveau:conjuration_essence_to_soul_sand',
            'ars_nouveau:blank_thread',
            'ars_nouveau:novice_spell_book',
            'ars_nouveau:scribes_table'
        ]
    },
    {
        category: 'naturesaura:altar',
        recipes_by_id: [
            'naturesaura:altar/infused_stone',
            'naturesaura:altar/tainted_gold',
            'naturesaura:altar/gold_powder'
        ]
    },
    {
        category: 'naturesaura:tree_ritual',
        recipes_by_id: [
            'naturesaura:tree_ritual/ore_spawn_powder',
            'naturesaura:tree_ritual/crushing_catalyst',
            'naturesaura:tree_ritual/conversion_catalyst',
            'naturesaura:tree_ritual/nature_altar',
            'naturesaura:tree_ritual/token_sorrow',
            'naturesaura:tree_ritual/token_anger',
            'naturesaura:tree_ritual/token_fear',
            'naturesaura:tree_ritual/token_joy'
        ]
    },
    {
        category: 'naturesaura:offering',
        recipes_by_id: [
            'naturesaura:offering/token_grief',
            'naturesaura:offering/token_rage',
            'naturesaura:offering/token_terror',
            'naturesaura:offering/token_euphoria',
            'naturesaura:offering/sky_ingot_from_gold'
        ]
    },
    {
        category: 'naturesaura:animal_spawner',
        recipes_by_id: [
            'naturesaura:animal_spawner/endermite',
            'naturesaura:animal_spawner/phantom',
            'naturesaura:animal_spawner/slime',
            'naturesaura:animal_spawner/ghast',
            'naturesaura:animal_spawner/wither_skeleton',
            'naturesaura:animal_spawner/blaze',
            'naturesaura:animal_spawner/guardian',
            'naturesaura:animal_spawner/creeper',
            'naturesaura:animal_spawner/enderman',
            'naturesaura:animal_spawner/husk',
            'naturesaura:animal_spawner/magma_cube',
            'naturesaura:animal_spawner/piglin',
            'naturesaura:animal_spawner/piglin_brute',
            'naturesaura:animal_spawner/shulker',
            'naturesaura:animal_spawner/skeleton',
            'naturesaura:animal_spawner/stray',
            'naturesaura:animal_spawner/witch',
            'naturesaura:animal_spawner/zombie',
            'naturesaura:animal_spawner/zombified_piglin'
        ]
    },
    {
        category: 'ars_nouveau:imbuement',
        recipes_by_id: [
            'ars_nouveau:imbuement_lapis',
            'ars_elemental:imbuement_lesser_fire_focus',
            'ars_elemental:imbuement_lesser_water_focus',
            'ars_elemental:imbuement_lesser_earth_focus',
            'ars_elemental:imbuement_lesser_air_focus'
        ]
    },
    {
        category: 'ars_nouveau:enchanting_apparatus',
        recipes_by_id: [
            'ars_nouveau:wixie_charm',
            'ars_nouveau:starbuncle_charm',
            'ars_nouveau:drygmy_charm',
            'ars_nouveau:whirlisprig_charm',
            'ars_nouveau:magebloom_crop',
            'ars_nouveau:void_jar',
            'ars_nouveau:jar_of_light',
            'ars_nouveau:potion_flask',
            'ars_nouveau:potion_melder',
            'ars_nouveau:alchemists_crown',
            'ars_nouveau:dominion_wand',
            'ars_nouveau:storage_lectern',
            'ars_elemental:everfull_urn',
            'ars_elemental:fire_focus',
            'ars_elemental:water_focus',
            'ars_elemental:earth_focus',
            'ars_elemental:air_focus',
            'ars_elemental:necrotic_focus',
            'ars_nouveau:summon_focus',
            'ars_nouveau:shapers_focus',
            'ars_nouveau:relay_splitter'
        ]
    }
];
