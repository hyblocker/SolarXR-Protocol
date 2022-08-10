// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class TapResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):TapResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTapResponse(bb:flatbuffers.ByteBuffer, obj?:TapResponse):TapResponse {
  return (obj || new TapResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTapResponse(bb:flatbuffers.ByteBuffer, obj?:TapResponse):TapResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TapResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startTapResponse(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endTapResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTapResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  TapResponse.startTapResponse(builder);
  return TapResponse.endTapResponse(builder);
}

unpack(): TapResponseT {
  return new TapResponseT();
}


unpackTo(_o: TapResponseT): void {}
}

export class TapResponseT {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return TapResponse.createTapResponse(builder);
}
}
