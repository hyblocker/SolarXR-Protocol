// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * A mask of the different components in `TrackerComponent`
 */
export class TrackerDataMask {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):TrackerDataMask {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTrackerDataMask(bb:flatbuffers.ByteBuffer, obj?:TrackerDataMask):TrackerDataMask {
  return (obj || new TrackerDataMask()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTrackerDataMask(bb:flatbuffers.ByteBuffer, obj?:TrackerDataMask):TrackerDataMask {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TrackerDataMask()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

info():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

status():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

rotation():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

temp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startTrackerDataMask(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addInfo(builder:flatbuffers.Builder, info:boolean) {
  builder.addFieldInt8(0, +info, +false);
}

static addStatus(builder:flatbuffers.Builder, status:boolean) {
  builder.addFieldInt8(1, +status, +false);
}

static addRotation(builder:flatbuffers.Builder, rotation:boolean) {
  builder.addFieldInt8(2, +rotation, +false);
}

static addTemp(builder:flatbuffers.Builder, temp:boolean) {
  builder.addFieldInt8(3, +temp, +false);
}

static endTrackerDataMask(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTrackerDataMask(builder:flatbuffers.Builder, info:boolean, status:boolean, rotation:boolean, temp:boolean):flatbuffers.Offset {
  TrackerDataMask.startTrackerDataMask(builder);
  TrackerDataMask.addInfo(builder, info);
  TrackerDataMask.addStatus(builder, status);
  TrackerDataMask.addRotation(builder, rotation);
  TrackerDataMask.addTemp(builder, temp);
  return TrackerDataMask.endTrackerDataMask(builder);
}

unpack(): TrackerDataMaskT {
  return new TrackerDataMaskT(
    this.info(),
    this.status(),
    this.rotation(),
    this.temp()
  );
}


unpackTo(_o: TrackerDataMaskT): void {
  _o.info = this.info();
  _o.status = this.status();
  _o.rotation = this.rotation();
  _o.temp = this.temp();
}
}

export class TrackerDataMaskT {
constructor(
  public info: boolean = false,
  public status: boolean = false,
  public rotation: boolean = false,
  public temp: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return TrackerDataMask.createTrackerDataMask(builder,
    this.info,
    this.status,
    this.rotation,
    this.temp
  );
}
}
