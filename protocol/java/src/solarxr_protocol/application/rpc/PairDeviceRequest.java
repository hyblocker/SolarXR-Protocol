// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.application.rpc;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class PairDeviceRequest extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static PairDeviceRequest getRootAsPairDeviceRequest(ByteBuffer _bb) { return getRootAsPairDeviceRequest(_bb, new PairDeviceRequest()); }
  public static PairDeviceRequest getRootAsPairDeviceRequest(ByteBuffer _bb, PairDeviceRequest obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public PairDeviceRequest __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public boolean pair() { int o = __offset(4); return o != 0 ? 0!=bb.get(o + bb_pos) : false; }
  public solarxr_protocol.datatypes.hardware_info.HardwareAddress macAddress() { return macAddress(new solarxr_protocol.datatypes.hardware_info.HardwareAddress()); }
  public solarxr_protocol.datatypes.hardware_info.HardwareAddress macAddress(solarxr_protocol.datatypes.hardware_info.HardwareAddress obj) { int o = __offset(6); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }

  public static void startPairDeviceRequest(FlatBufferBuilder builder) { builder.startTable(2); }
  public static void addPair(FlatBufferBuilder builder, boolean pair) { builder.addBoolean(0, pair, false); }
  public static void addMacAddress(FlatBufferBuilder builder, int macAddressOffset) { builder.addStruct(1, macAddressOffset, 0); }
  public static int endPairDeviceRequest(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public PairDeviceRequest get(int j) { return get(new PairDeviceRequest(), j); }
    public PairDeviceRequest get(PairDeviceRequest obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
  public PairDeviceRequestT unpack() {
    PairDeviceRequestT _o = new PairDeviceRequestT();
    unpackTo(_o);
    return _o;
  }
  public void unpackTo(PairDeviceRequestT _o) {
    boolean _oPair = pair();
    _o.setPair(_oPair);
    if (macAddress() != null) macAddress().unpackTo(_o.getMacAddress());
    else _o.setMacAddress(null);
  }
  public static int pack(FlatBufferBuilder builder, PairDeviceRequestT _o) {
    if (_o == null) return 0;
    startPairDeviceRequest(builder);
    addPair(builder, _o.getPair());
    addMacAddress(builder, solarxr_protocol.datatypes.hardware_info.HardwareAddress.pack(builder, _o.getMacAddress()));
    return endPairDeviceRequest(builder);
  }
}

