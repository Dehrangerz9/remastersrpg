import RemastersRpgItemBase from "./item-base.mjs";

export default class RemastersRpgSpell extends RemastersRpgItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.spellLevel = new fields.NumberField({ required: true, nullable: false, integer: true, initial: 1, min: 1, max: 9 });

    return schema;
  }
}