const ModuleName = "enhancedcombathud-exaltedthird";

async function getTooltipDetails(item) {
    let title, description, subtitle, details, properties, propertiesLabel;

    title = item.name;
    description = await TextEditor.enrichHTML(item.system.description);
    details = [];

    if(item.type === 'weapon') {
        subtitle = `${item.system.weapontype.capitalize()} Attack`;
        details.push({
            label: game.i18n.localize("Ex3.Accuracy"),
            value: item.system.witheringaccuracy
        });
    
        details.push({
            label: game.i18n.localize("Ex3.Damage"),
            value: item.system.witheringdamage
        });
    
        details.push({
            label: game.i18n.localize("Ex3.Defense"),
            value: item.system.defense
        });
    
        details.push({
            label: game.i18n.localize("Ex3.Overwhelming"),
            value: item.system.overwhelming
        });
        let tags = Object.values(item.system.traits.weapontags.selected).map((tag) => { return { label: tag } });
        properties = tags;
    
        propertiesLabel = properties?.length ? game.i18n.localize("Ex3.WeaponTags") : "";
    }

    if(item.type === 'spell') {
        if(!item.system.cost){
            subtitle = `Ritual`;
        }

        details.push({
            label: game.i18n.localize("Ex3.Cost"),
            value: item.system.cost ? `${item.system.cost}sm` : "Ritual"
        });

        details.push({
            label: game.i18n.localize("Ex3.Willpower"),
            value:  item.system.willpower
        });

        if(item.system.keywords && item.system.keywords !== 'None') {
            let keywords = item.system.keywords.split(',').map((keyword) => { return { label: keyword } });
            properties = keywords;
        }
    }

    if(item.type === 'charm') {

        let costString = '';
        if (item.system.cost.motes > 0 || item.system.cost.commitmotes > 0) {
          costString += `${item.system.cost.motes || item.system.cost.commitmotes}m, `
        }
        if (item.system.cost.willpower > 0) {
          costString += `${item.system.cost.willpower}wp, `
        }
        if (item.system.cost.anima > 0) {
          costString += `${item.system.cost.anima}a, `
        }
        if (item.system.cost.initiative > 0) {
          costString += `${item.system.cost.initiative}i, `
        }
        if (item.system.cost.health > 0) {
          costString += `${item.system.cost.health}`
          if (item.system.cost.healthtype === 'bashing') {
            costString += `hl, `
          }
          if (item.system.cost.healthtype === 'lethal') {
            costString += `lhl, `
          }
          if (item.system.cost.healthtype === 'aggravated') {
            costString += `ahl, `
          }
        }
        if (item.system.cost.xp > 0) {
          costString += `${item.system.cost.xp}xp, `
        }
        if (item.system.cost.goldxp > 0) {
          costString += `${item.system.cost.goldxp}gxp, `
        }
        if (item.system.cost.whitexp > 0) {
          costString += `${item.system.cost.whitexp}wxp, `
        }
        if(!costString) {
            costString = "None"
        }
        subtitle = item.system.type;

        details.push({
            label: game.i18n.localize("Ex3.Cost"),
            value: costString
        });

        details.push({
            label: game.i18n.localize("Ex3.Duration"),
            value: item.system.duration
        });
        if(item.system.keywords && item.system.keywords !== 'None') {
            let keywords = item.system.keywords.split(',').map((keyword) => { return { label: keyword } });
            properties = keywords;
        }
    }

    return { title, description, subtitle, details, properties, propertiesLabel };
}

export { getTooltipDetails, ModuleName }
