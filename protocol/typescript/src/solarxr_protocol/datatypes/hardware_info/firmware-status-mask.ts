// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * A mask of the data in `FirmwareStatus`
 */
export class FirmwareStatusMask {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):FirmwareStatusMask {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFirmwareStatusMask(bb:flatbuffers.ByteBuffer, obj?:FirmwareStatusMask):FirmwareStatusMask {
  return (obj || new FirmwareStatusMask()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFirmwareStatusMask(bb:flatbuffers.ByteBuffer, obj?:FirmwareStatusMask):FirmwareStatusMask {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FirmwareStatusMask()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

errorStatus():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

tps():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

ping():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

rssi():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

mcuTemp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

batteryVoltage():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

batteryPctEstimate():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startFirmwareStatusMask(builder:flatbuffers.Builder) {
  builder.startObject(7);
}

static addErrorStatus(builder:flatbuffers.Builder, errorStatus:boolean) {
  builder.addFieldInt8(0, +errorStatus, +false);
}

static addTps(builder:flatbuffers.Builder, tps:boolean) {
  builder.addFieldInt8(1, +tps, +false);
}

static addPing(builder:flatbuffers.Builder, ping:boolean) {
  builder.addFieldInt8(2, +ping, +false);
}

static addRssi(builder:flatbuffers.Builder, rssi:boolean) {
  builder.addFieldInt8(3, +rssi, +false);
}

static addMcuTemp(builder:flatbuffers.Builder, mcuTemp:boolean) {
  builder.addFieldInt8(4, +mcuTemp, +false);
}

static addBatteryVoltage(builder:flatbuffers.Builder, batteryVoltage:boolean) {
  builder.addFieldInt8(5, +batteryVoltage, +false);
}

static addBatteryPctEstimate(builder:flatbuffers.Builder, batteryPctEstimate:boolean) {
  builder.addFieldInt8(6, +batteryPctEstimate, +false);
}

static endFirmwareStatusMask(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createFirmwareStatusMask(builder:flatbuffers.Builder, errorStatus:boolean, tps:boolean, ping:boolean, rssi:boolean, mcuTemp:boolean, batteryVoltage:boolean, batteryPctEstimate:boolean):flatbuffers.Offset {
  FirmwareStatusMask.startFirmwareStatusMask(builder);
  FirmwareStatusMask.addErrorStatus(builder, errorStatus);
  FirmwareStatusMask.addTps(builder, tps);
  FirmwareStatusMask.addPing(builder, ping);
  FirmwareStatusMask.addRssi(builder, rssi);
  FirmwareStatusMask.addMcuTemp(builder, mcuTemp);
  FirmwareStatusMask.addBatteryVoltage(builder, batteryVoltage);
  FirmwareStatusMask.addBatteryPctEstimate(builder, batteryPctEstimate);
  return FirmwareStatusMask.endFirmwareStatusMask(builder);
}

unpack(): FirmwareStatusMaskT {
  return new FirmwareStatusMaskT(
    this.errorStatus(),
    this.tps(),
    this.ping(),
    this.rssi(),
    this.mcuTemp(),
    this.batteryVoltage(),
    this.batteryPctEstimate()
  );
}


unpackTo(_o: FirmwareStatusMaskT): void {
  _o.errorStatus = this.errorStatus();
  _o.tps = this.tps();
  _o.ping = this.ping();
  _o.rssi = this.rssi();
  _o.mcuTemp = this.mcuTemp();
  _o.batteryVoltage = this.batteryVoltage();
  _o.batteryPctEstimate = this.batteryPctEstimate();
}
}

export class FirmwareStatusMaskT {
constructor(
  public errorStatus: boolean = false,
  public tps: boolean = false,
  public ping: boolean = false,
  public rssi: boolean = false,
  public mcuTemp: boolean = false,
  public batteryVoltage: boolean = false,
  public batteryPctEstimate: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return FirmwareStatusMask.createFirmwareStatusMask(builder,
    this.errorStatus,
    this.tps,
    this.ping,
    this.rssi,
    this.mcuTemp,
    this.batteryVoltage,
    this.batteryPctEstimate
  );
}
}