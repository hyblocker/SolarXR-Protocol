// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DeviceData, DeviceDataT } from '../../../solarxr-protocol/firmware/data-feed/device-data/device-data';


export class DataFeedUpdate {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):DataFeedUpdate {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDataFeedUpdate(bb:flatbuffers.ByteBuffer, obj?:DataFeedUpdate):DataFeedUpdate {
  return (obj || new DataFeedUpdate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDataFeedUpdate(bb:flatbuffers.ByteBuffer, obj?:DataFeedUpdate):DataFeedUpdate {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DataFeedUpdate()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

devices(index: number, obj?:DeviceData):DeviceData|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DeviceData()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

devicesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startDataFeedUpdate(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addDevices(builder:flatbuffers.Builder, devicesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, devicesOffset, 0);
}

static createDevicesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startDevicesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endDataFeedUpdate(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDataFeedUpdate(builder:flatbuffers.Builder, devicesOffset:flatbuffers.Offset):flatbuffers.Offset {
  DataFeedUpdate.startDataFeedUpdate(builder);
  DataFeedUpdate.addDevices(builder, devicesOffset);
  return DataFeedUpdate.endDataFeedUpdate(builder);
}

unpack(): DataFeedUpdateT {
  return new DataFeedUpdateT(
    this.bb!.createObjList(this.devices.bind(this), this.devicesLength())
  );
}


unpackTo(_o: DataFeedUpdateT): void {
  _o.devices = this.bb!.createObjList(this.devices.bind(this), this.devicesLength());
}
}

export class DataFeedUpdateT {
constructor(
  public devices: (DeviceDataT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const devices = DataFeedUpdate.createDevicesVector(builder, builder.createObjectOffsetList(this.devices));

  return DataFeedUpdate.createDataFeedUpdate(builder,
    devices
  );
}
}