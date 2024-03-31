import { ModuleName } from "./utils.js";

var EX3ECHActionItems = {};
var EX3ECHMovementItems = {};
var EX3ECHMagicItems = {};
var EX3ECHSocialItems = {};

async function registerEX3ECHSItems() {
    EX3ECHActionItems = {
        groupflags: {
            actiontype: "action"
        },
        FullDefense: {
            img: "icons/svg/shield.svg",
            name: game.i18n.localize("Ex3.FullDefense"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.FullDefense")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'fullDefense'
                }
            }
        },
        Aim: {
            img: "systems/exaltedthird/assets/icons/targeting.svg",
            name: game.i18n.localize("Ex3.Aim"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Aim")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'aim'
                }
            }
        },
        Command: {
            img: `modules/${ModuleName}/icons/rally-the-troops.svg`,
            name: game.i18n.localize("Ex3.Command"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Command")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'command'
                }
            }
        },
        GrappleControl: {
            img: "systems/exaltedthird/assets/icons/grab.svg",
            name: game.i18n.localize("Ex3.GrappleControl"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.GrappleControl")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'grappleControl'
                }
            }
        },
        DefendOther: {
            img: `modules/${ModuleName}/icons/arrows-shield.svg`,
            name: game.i18n.localize("Ex3.DefendOther"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.DefendOther")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'defendOther'
                }
            }
        },
        EstablishSurprise: {
            img: `modules/${ModuleName}/icons/cloak-dagger.svg`,
            name: game.i18n.localize("Ex3.EstablishSurprise"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.EstablishSurprise")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'establishSurprise'
                }
            }
        },
        Delay: {
            img: `modules/${ModuleName}/icons/duration.svg`,
            name: game.i18n.localize("Ex3.Delay"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Delay")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'delay'
                }
            }
        },
        Miscellaneous: {
            img: `modules/${ModuleName}/icons/swiss-army-knife.svg`,
            name: game.i18n.localize("Ex3.Misc"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Miscellaneous")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'miscellaneous'
                }
            }
        },
        Rout: {
            img: `modules/${ModuleName}/icons/tattered-banner.svg`,
            name: game.i18n.localize("Ex3.Rout"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Rout")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'rout'
                }
            }
        },
    }
    EX3ECHMovementItems = {
        groupflags: {
            actiontype: "movement"
        },
        Rush: {
            img: `modules/${ModuleName}/icons/sprint.svg`,
            name: game.i18n.localize("Ex3.Rush"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Rush")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'rush'
                }
            }
        },
        Disengage: {
            img: `modules/${ModuleName}/icons/journey.svg`,
            name: game.i18n.localize("Ex3.Disengage"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Disengage")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'disengage'
                }
            }
        },
        TakeCover: {
            img: `modules/${ModuleName}/icons/armor-upgrade.svg`,
            name: game.i18n.localize("Ex3.TakeCover"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.TakeCover")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'takeCover'
                }
            }
        },
        RiseFromProne: {
            img: "icons/svg/up.svg",
            name: game.i18n.localize("Ex3.RiseFromProne"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.RiseFromProne")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'riseFromProne'
                }
            }
        },
    }

    EX3ECHMagicItems = {
        groupflags: {
            actiontype: "charm"
        },
    }

    EX3ECHSocialItems = {
        groupflags: {
            actiontype: "social"
        },
        Influence: {
            img: `modules/${ModuleName}/icons/heartburn.svg`,
            name: game.i18n.localize("Ex3.Influence"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.Influence")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'influence'
                }
            }
        },
        ReadIntentions: {
            img: `modules/${ModuleName}/icons/spy.svg`,
            name: game.i18n.localize("Ex3.ReadIntentions"),
            type: "base",
            system: {
                description: game.i18n.localize(ModuleName + ".Descriptions.ReadIntentions")
            },
            flags: {
                [ModuleName]: {
                    actionValue: 'readIntentions'
                }
            }
        },
    }

    //some preparation
    for (let itemset of [EX3ECHActionItems, EX3ECHMovementItems, EX3ECHMagicItems, EX3ECHSocialItems]) {
        for (let itemkey of Object.keys(itemset)) {
            if (itemkey != "groupflags") {
                itemset[itemkey].flags = { ...itemset[itemkey].flags };
                itemset[itemkey].flags[ModuleName] = { ...itemset.groupflags, ...itemset[itemkey].flags[ModuleName] };
            }
        }

        delete itemset.groupflags;
    }
}

export { registerEX3ECHSItems, EX3ECHActionItems, EX3ECHMovementItems, EX3ECHMagicItems, EX3ECHSocialItems }
