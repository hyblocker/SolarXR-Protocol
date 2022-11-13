// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ModelRatios, ModelRatiosT } from '../../../solarxr-protocol/rpc/settings/model-ratios.js';
import { ModelToggles, ModelTogglesT } from '../../../solarxr-protocol/rpc/settings/model-toggles.js';


/**
 * Settings for the skeletal model.
 */
export class ModelSettings implements flatbuffers.IUnpackableObject<ModelSettingsT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ModelSettings {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsModelSettings(bb:flatbuffers.ByteBuffer, obj?:ModelSettings):ModelSettings {
  return (obj || new ModelSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsModelSettings(bb:flatbuffers.ByteBuffer, obj?:ModelSettings):ModelSettings {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ModelSettings()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

toggles(obj?:ModelToggles):ModelToggles|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new ModelToggles()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

ratios(obj?:ModelRatios):ModelRatios|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ModelRatios()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startModelSettings(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addToggles(builder:flatbuffers.Builder, togglesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, togglesOffset, 0);
}

static addRatios(builder:flatbuffers.Builder, ratiosOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ratiosOffset, 0);
}

static endModelSettings(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): ModelSettingsT {
  return new ModelSettingsT(
    (this.toggles() !== null ? this.toggles()!.unpack() : null),
    (this.ratios() !== null ? this.ratios()!.unpack() : null)
  );
}


unpackTo(_o: ModelSettingsT): void {
  _o.toggles = (this.toggles() !== null ? this.toggles()!.unpack() : null);
  _o.ratios = (this.ratios() !== null ? this.ratios()!.unpack() : null);
}
}

export class ModelSettingsT implements flatbuffers.IGeneratedObject {
constructor(
  public toggles: ModelTogglesT|null = null,
  public ratios: ModelRatiosT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const toggles = (this.toggles !== null ? this.toggles!.pack(builder) : 0);
  const ratios = (this.ratios !== null ? this.ratios!.pack(builder) : 0);

  ModelSettings.startModelSettings(builder);
  ModelSettings.addToggles(builder, toggles);
  ModelSettings.addRatios(builder, ratios);

  return ModelSettings.endModelSettings(builder);
}
}
