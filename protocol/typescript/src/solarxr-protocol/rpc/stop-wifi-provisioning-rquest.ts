// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class StopWifiProvisioningRquest implements flatbuffers.IUnpackableObject<StopWifiProvisioningRquestT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StopWifiProvisioningRquest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStopWifiProvisioningRquest(bb:flatbuffers.ByteBuffer, obj?:StopWifiProvisioningRquest):StopWifiProvisioningRquest {
  return (obj || new StopWifiProvisioningRquest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStopWifiProvisioningRquest(bb:flatbuffers.ByteBuffer, obj?:StopWifiProvisioningRquest):StopWifiProvisioningRquest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StopWifiProvisioningRquest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startStopWifiProvisioningRquest(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endStopWifiProvisioningRquest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStopWifiProvisioningRquest(builder:flatbuffers.Builder):flatbuffers.Offset {
  StopWifiProvisioningRquest.startStopWifiProvisioningRquest(builder);
  return StopWifiProvisioningRquest.endStopWifiProvisioningRquest(builder);
}

unpack(): StopWifiProvisioningRquestT {
  return new StopWifiProvisioningRquestT();
}


unpackTo(_o: StopWifiProvisioningRquestT): void {}
}

export class StopWifiProvisioningRquestT implements flatbuffers.IGeneratedObject {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return StopWifiProvisioningRquest.createStopWifiProvisioningRquest(builder);
}
}
