// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TransactionId, TransactionIdT } from '../../../solarxr-protocol/datatypes/transaction-id';
import { CommandMessage, unionToCommandMessage, unionListToCommandMessage } from '../../../solarxr-protocol/firmware/commands/command-message';
import { TapResponse, TapResponseT } from '../../../solarxr-protocol/firmware/commands/tap-response';


export class CommandMessageHeader {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):CommandMessageHeader {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCommandMessageHeader(bb:flatbuffers.ByteBuffer, obj?:CommandMessageHeader):CommandMessageHeader {
  return (obj || new CommandMessageHeader()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCommandMessageHeader(bb:flatbuffers.ByteBuffer, obj?:CommandMessageHeader):CommandMessageHeader {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CommandMessageHeader()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * For a request, this identifies the request. For a response, this corresponds
 * to the request that it is responding to.
 */
txId(obj?:TransactionId):TransactionId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TransactionId()).__init(this.bb_pos + offset, this.bb!) : null;
}

messageType():CommandMessage {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : CommandMessage.NONE;
}

message<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startCommandMessageHeader(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addTxId(builder:flatbuffers.Builder, txIdOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, txIdOffset, 0);
}

static addMessageType(builder:flatbuffers.Builder, messageType:CommandMessage) {
  builder.addFieldInt8(1, messageType, CommandMessage.NONE);
}

static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, messageOffset, 0);
}

static endCommandMessageHeader(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCommandMessageHeader(builder:flatbuffers.Builder, txIdOffset:flatbuffers.Offset, messageType:CommandMessage, messageOffset:flatbuffers.Offset):flatbuffers.Offset {
  CommandMessageHeader.startCommandMessageHeader(builder);
  CommandMessageHeader.addTxId(builder, txIdOffset);
  CommandMessageHeader.addMessageType(builder, messageType);
  CommandMessageHeader.addMessage(builder, messageOffset);
  return CommandMessageHeader.endCommandMessageHeader(builder);
}

unpack(): CommandMessageHeaderT {
  return new CommandMessageHeaderT(
    (this.txId() !== null ? this.txId()!.unpack() : null),
    this.messageType(),
    (() => {
      let temp = unionToCommandMessage(this.messageType(), this.message.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: CommandMessageHeaderT): void {
  _o.txId = (this.txId() !== null ? this.txId()!.unpack() : null);
  _o.messageType = this.messageType();
  _o.message = (() => {
      let temp = unionToCommandMessage(this.messageType(), this.message.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class CommandMessageHeaderT {
constructor(
  public txId: TransactionIdT|null = null,
  public messageType: CommandMessage = CommandMessage.NONE,
  public message: TapResponseT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const message = builder.createObjectOffset(this.message);

  return CommandMessageHeader.createCommandMessageHeader(builder,
    (this.txId !== null ? this.txId!.pack(builder) : 0),
    this.messageType,
    message
  );
}
}