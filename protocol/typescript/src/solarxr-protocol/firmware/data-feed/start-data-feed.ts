// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { DataFeedConfig, DataFeedConfigT } from '../../../solarxr-protocol/firmware/data-feed/data-feed-config';


/**
 * Requests for the other party to send `data_feeds`.
 * For example, GUI requests for position data to be sent from server.
 *
 * When sending a new `StartFeed`, the old data feeds should stop being sent.
 * We still support multiple data feeds at the same time, because `data_feeds`
 * is a list.
 *
 * Multiple data feeds are useful to get data at different frequencies.
 */
export class StartDataFeed {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):StartDataFeed {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStartDataFeed(bb:flatbuffers.ByteBuffer, obj?:StartDataFeed):StartDataFeed {
  return (obj || new StartDataFeed()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStartDataFeed(bb:flatbuffers.ByteBuffer, obj?:StartDataFeed):StartDataFeed {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StartDataFeed()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

dataFeeds(index: number, obj?:DataFeedConfig):DataFeedConfig|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DataFeedConfig()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

dataFeedsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startStartDataFeed(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addDataFeeds(builder:flatbuffers.Builder, dataFeedsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, dataFeedsOffset, 0);
}

static createDataFeedsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startDataFeedsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endStartDataFeed(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStartDataFeed(builder:flatbuffers.Builder, dataFeedsOffset:flatbuffers.Offset):flatbuffers.Offset {
  StartDataFeed.startStartDataFeed(builder);
  StartDataFeed.addDataFeeds(builder, dataFeedsOffset);
  return StartDataFeed.endStartDataFeed(builder);
}

unpack(): StartDataFeedT {
  return new StartDataFeedT(
    this.bb!.createObjList(this.dataFeeds.bind(this), this.dataFeedsLength())
  );
}


unpackTo(_o: StartDataFeedT): void {
  _o.dataFeeds = this.bb!.createObjList(this.dataFeeds.bind(this), this.dataFeedsLength());
}
}

export class StartDataFeedT {
constructor(
  public dataFeeds: (DataFeedConfigT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const dataFeeds = StartDataFeed.createDataFeedsVector(builder, builder.createObjectOffsetList(this.dataFeeds));

  return StartDataFeed.createStartDataFeed(builder,
    dataFeeds
  );
}
}
