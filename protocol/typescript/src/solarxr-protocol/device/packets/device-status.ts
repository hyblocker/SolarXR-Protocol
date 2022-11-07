// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class DeviceStatus {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):DeviceStatus {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDeviceStatus(bb:flatbuffers.ByteBuffer, obj?:DeviceStatus):DeviceStatus {
  return (obj || new DeviceStatus()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDeviceStatus(bb:flatbuffers.ByteBuffer, obj?:DeviceStatus):DeviceStatus {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DeviceStatus()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

batteryPercentage():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

rssi():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
}

static startDeviceStatus(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addBatteryPercentage(builder:flatbuffers.Builder, batteryPercentage:number) {
  builder.addFieldInt8(0, batteryPercentage, 0);
}

static addRssi(builder:flatbuffers.Builder, rssi:number) {
  builder.addFieldInt16(1, rssi, 0);
}

static endDeviceStatus(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDeviceStatus(builder:flatbuffers.Builder, batteryPercentage:number, rssi:number):flatbuffers.Offset {
  DeviceStatus.startDeviceStatus(builder);
  DeviceStatus.addBatteryPercentage(builder, batteryPercentage);
  DeviceStatus.addRssi(builder, rssi);
  return DeviceStatus.endDeviceStatus(builder);
}

unpack(): DeviceStatusT {
  return new DeviceStatusT(
    this.batteryPercentage(),
    this.rssi()
  );
}


unpackTo(_o: DeviceStatusT): void {
  _o.batteryPercentage = this.batteryPercentage();
  _o.rssi = this.rssi();
}
}

export class DeviceStatusT {
constructor(
  public batteryPercentage: number = 0,
  public rssi: number = 0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return DeviceStatus.createDeviceStatus(builder,
    this.batteryPercentage,
    this.rssi
  );
}
}