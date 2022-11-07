// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class ImuFeatureInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):ImuFeatureInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsImuFeatureInfo(bb:flatbuffers.ByteBuffer, obj?:ImuFeatureInfo):ImuFeatureInfo {
  return (obj || new ImuFeatureInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsImuFeatureInfo(bb:flatbuffers.ByteBuffer, obj?:ImuFeatureInfo):ImuFeatureInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ImuFeatureInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

gyroscopeCalibration():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

accelerometerCalibration():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

magnetometerCalibration():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startImuFeatureInfo(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addGyroscopeCalibration(builder:flatbuffers.Builder, gyroscopeCalibration:boolean) {
  builder.addFieldInt8(0, +gyroscopeCalibration, +false);
}

static addAccelerometerCalibration(builder:flatbuffers.Builder, accelerometerCalibration:boolean) {
  builder.addFieldInt8(1, +accelerometerCalibration, +false);
}

static addMagnetometerCalibration(builder:flatbuffers.Builder, magnetometerCalibration:boolean) {
  builder.addFieldInt8(2, +magnetometerCalibration, +false);
}

static endImuFeatureInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createImuFeatureInfo(builder:flatbuffers.Builder, gyroscopeCalibration:boolean, accelerometerCalibration:boolean, magnetometerCalibration:boolean):flatbuffers.Offset {
  ImuFeatureInfo.startImuFeatureInfo(builder);
  ImuFeatureInfo.addGyroscopeCalibration(builder, gyroscopeCalibration);
  ImuFeatureInfo.addAccelerometerCalibration(builder, accelerometerCalibration);
  ImuFeatureInfo.addMagnetometerCalibration(builder, magnetometerCalibration);
  return ImuFeatureInfo.endImuFeatureInfo(builder);
}

unpack(): ImuFeatureInfoT {
  return new ImuFeatureInfoT(
    this.gyroscopeCalibration(),
    this.accelerometerCalibration(),
    this.magnetometerCalibration()
  );
}


unpackTo(_o: ImuFeatureInfoT): void {
  _o.gyroscopeCalibration = this.gyroscopeCalibration();
  _o.accelerometerCalibration = this.accelerometerCalibration();
  _o.magnetometerCalibration = this.magnetometerCalibration();
}
}

export class ImuFeatureInfoT {
constructor(
  public gyroscopeCalibration: boolean = false,
  public accelerometerCalibration: boolean = false,
  public magnetometerCalibration: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ImuFeatureInfo.createImuFeatureInfo(builder,
    this.gyroscopeCalibration,
    this.accelerometerCalibration,
    this.magnetometerCalibration
  );
}
}