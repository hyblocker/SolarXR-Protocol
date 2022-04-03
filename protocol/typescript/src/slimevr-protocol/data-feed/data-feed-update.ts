// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DeviceStatus, DeviceStatusT } from '../../slimevr-protocol/data-feed/device-status';
import { TrackerStatus, TrackerStatusT } from '../../slimevr-protocol/datatypes/tracker/tracker-status';


/**
 * A single update of the `DeviceStatus` updates.
 *
 * A data feed might send data only when it changes/updates, and we should make no
 * assumptions that the data is actually delivered. If you want to guarantee
 * delivery and avoid dropped observations of data (such as a user-initiated
 * button press), it is better to use the RPC system.
 */
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

devices(index: number, obj?:DeviceStatus):DeviceStatus|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DeviceStatus()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

devicesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

syntheticTrackers(index: number, obj?:TrackerStatus):TrackerStatus|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new TrackerStatus()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

syntheticTrackersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startDataFeedUpdate(builder:flatbuffers.Builder) {
  builder.startObject(2);
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

static addSyntheticTrackers(builder:flatbuffers.Builder, syntheticTrackersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, syntheticTrackersOffset, 0);
}

static createSyntheticTrackersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startSyntheticTrackersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endDataFeedUpdate(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDataFeedUpdate(builder:flatbuffers.Builder, devicesOffset:flatbuffers.Offset, syntheticTrackersOffset:flatbuffers.Offset):flatbuffers.Offset {
  DataFeedUpdate.startDataFeedUpdate(builder);
  DataFeedUpdate.addDevices(builder, devicesOffset);
  DataFeedUpdate.addSyntheticTrackers(builder, syntheticTrackersOffset);
  return DataFeedUpdate.endDataFeedUpdate(builder);
}

unpack(): DataFeedUpdateT {
  return new DataFeedUpdateT(
    this.bb!.createObjList(this.devices.bind(this), this.devicesLength()),
    this.bb!.createObjList(this.syntheticTrackers.bind(this), this.syntheticTrackersLength())
  );
}


unpackTo(_o: DataFeedUpdateT): void {
  _o.devices = this.bb!.createObjList(this.devices.bind(this), this.devicesLength());
  _o.syntheticTrackers = this.bb!.createObjList(this.syntheticTrackers.bind(this), this.syntheticTrackersLength());
}
}

export class DataFeedUpdateT {
constructor(
  public devices: (DeviceStatusT)[] = [],
  public syntheticTrackers: (TrackerStatusT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const devices = DataFeedUpdate.createDevicesVector(builder, builder.createObjectOffsetList(this.devices));
  const syntheticTrackers = DataFeedUpdate.createSyntheticTrackersVector(builder, builder.createObjectOffsetList(this.syntheticTrackers));

  return DataFeedUpdate.createDataFeedUpdate(builder,
    devices,
    syntheticTrackers
  );
}
}