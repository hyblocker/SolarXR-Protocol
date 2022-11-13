// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * Temperature in degrees celsius
 */
export class Temperature implements flatbuffers.IUnpackableObject<TemperatureT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):Temperature {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

temp():number {
  return this.bb!.readFloat32(this.bb_pos);
}

static sizeOf():number {
  return 4;
}

static createTemperature(builder:flatbuffers.Builder, temp: number):flatbuffers.Offset {
  builder.prep(4, 4);
  builder.writeFloat32(temp);
  return builder.offset();
}


unpack(): TemperatureT {
  return new TemperatureT(
    this.temp()
  );
}


unpackTo(_o: TemperatureT): void {
  _o.temp = this.temp();
}
}

export class TemperatureT implements flatbuffers.IGeneratedObject {
constructor(
  public temp: number = 0.0
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return Temperature.createTemperature(builder,
    this.temp
  );
}
}
