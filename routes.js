module.exports = function() {

    return {
        
    //classes routes
    classes: require('./json_files/class/'),
    artificer: require('./json_files/class/artificer.json'),
    barbarian: require('./json_files/class/barbarian.json'),
    bard: require('./json_files/class/bard.json'),
    cleric: require('./json_files/class/cleric.json'),
    druid: require('./json_files/class/druid.json'),
    fighter: require('./json_files/class/fighter.json'),
    monk: require('./json_files/class/monk.json'),
    mystic: require('./json_files/class/mystic.json'),
    paladin: require('./json_files/class/paladin.json'),
    ranger: require('./json_files/class/ranger.json'),
    rogue: require('./json_files/class/rogue.json'),
    sidekick: require('./json_files/class/sidekick.json'),
    sorcerer: require('./json_files/class/sorcerer.json'),
    warlock: require('./json_files/class/warlock.json'),
    wizard: require('./json_files/class/wizard.json'),


    //spells routes
    GGR: require('./json_files/spells/spells-ggr.json'),
	LLK: require('./json_files/spells/spells-llk.json'),
	PHB: require('./json_files/spells/spells-phb.json'),
	SCAG: require('./json_files/spells/spells-scag.json'),
	Stream: require('./json_files/spells/spells-stream.json'),
	UAArtificerRevisited: require('./json_files/spells/spells-ua-ar.json'),
	UAModernMagic: require('./json_files/spells/spells-ua-mm.json'),
	UAStarterSpells: require('./json_files/spells/spells-ua-ss.json'),
	UAThatOldBlackMagic: require('./json_files/spells/spells-ua-tobm.json'),
	XGE: require('./json_files/spells/spells-xge.json'),
    }
}   