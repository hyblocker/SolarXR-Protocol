// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DeviceStatus, DeviceStatusT } from '../../slimevr-protocol/server/device-status';


export class TrackersList {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):TrackersList {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTrackersList(bb:flatbuffers.ByteBuffer, obj?:TrackersList):TrackersList {
  return (obj || new TrackersList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTrackersList(bb:flatbuffers.ByteBuffer, obj?:TrackersList):TrackersList {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TrackersList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

trackers(index: number, obj?:DeviceStatus):DeviceStatus|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DeviceStatus()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

trackersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startTrackersList(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTrackers(builder:flatbuffers.Builder, trackersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, trackersOffset, 0);
}

static createTrackersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTrackersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endTrackersList(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTrackersList(builder:flatbuffers.Builder, trackersOffset:flatbuffers.Offset):flatbuffers.Offset {
  TrackersList.startTrackersList(builder);
  TrackersList.addTrackers(builder, trackersOffset);
  return TrackersList.endTrackersList(builder);
}

unpack(): TrackersListT {
  return new TrackersListT(
    this.bb!.createObjList(this.trackers.bind(this), this.trackersLength())
  );
}


unpackTo(_o: TrackersListT): void {
  _o.trackers = this.bb!.createObjList(this.trackers.bind(this), this.trackersLength());
}
}

export class TrackersListT {
constructor(
  public trackers: (DeviceStatusT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const trackers = TrackersList.createTrackersVector(builder, builder.createObjectOffsetList(this.trackers));

  return TrackersList.createTrackersList(builder,
    trackers
  );
}
}