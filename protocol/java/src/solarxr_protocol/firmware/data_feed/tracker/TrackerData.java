// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.firmware.data_feed.tracker;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class TrackerData extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static TrackerData getRootAsTrackerData(ByteBuffer _bb) { return getRootAsTrackerData(_bb, new TrackerData()); }
  public static TrackerData getRootAsTrackerData(ByteBuffer _bb, TrackerData obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public TrackerData __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public solarxr_protocol.datatypes.TrackerId trackerId() { return trackerId(new solarxr_protocol.datatypes.TrackerId()); }
  public solarxr_protocol.datatypes.TrackerId trackerId(solarxr_protocol.datatypes.TrackerId obj) { int o = __offset(4); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  public solarxr_protocol.firmware.data_feed.tracker.TrackerInfo info() { return info(new solarxr_protocol.firmware.data_feed.tracker.TrackerInfo()); }
  public solarxr_protocol.firmware.data_feed.tracker.TrackerInfo info(solarxr_protocol.firmware.data_feed.tracker.TrackerInfo obj) { int o = __offset(6); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  public int status() { int o = __offset(8); return o != 0 ? bb.get(o + bb_pos) & 0xFF : 0; }
  public solarxr_protocol.datatypes.math.Quat rotation() { return rotation(new solarxr_protocol.datatypes.math.Quat()); }
  public solarxr_protocol.datatypes.math.Quat rotation(solarxr_protocol.datatypes.math.Quat obj) { int o = __offset(10); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  /**
   * Temperature in degrees celsius
   */
  public solarxr_protocol.datatypes.Temperature temp() { return temp(new solarxr_protocol.datatypes.Temperature()); }
  public solarxr_protocol.datatypes.Temperature temp(solarxr_protocol.datatypes.Temperature obj) { int o = __offset(12); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }

  public static void startTrackerData(FlatBufferBuilder builder) { builder.startTable(5); }
  public static void addTrackerId(FlatBufferBuilder builder, int trackerIdOffset) { builder.addOffset(0, trackerIdOffset, 0); }
  public static void addInfo(FlatBufferBuilder builder, int infoOffset) { builder.addOffset(1, infoOffset, 0); }
  public static void addStatus(FlatBufferBuilder builder, int status) { builder.addByte(2, (byte) status, (byte) 0); }
  public static void addRotation(FlatBufferBuilder builder, int rotationOffset) { builder.addStruct(3, rotationOffset, 0); }
  public static void addTemp(FlatBufferBuilder builder, int tempOffset) { builder.addStruct(4, tempOffset, 0); }
  public static int endTrackerData(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public TrackerData get(int j) { return get(new TrackerData(), j); }
    public TrackerData get(TrackerData obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
  public TrackerDataT unpack() {
    TrackerDataT _o = new TrackerDataT();
    unpackTo(_o);
    return _o;
  }
  public void unpackTo(TrackerDataT _o) {
    if (trackerId() != null) _o.setTrackerId(trackerId().unpack());
    else _o.setTrackerId(null);
    if (info() != null) _o.setInfo(info().unpack());
    else _o.setInfo(null);
    int _oStatus = status();
    _o.setStatus(_oStatus);
    if (rotation() != null) rotation().unpackTo(_o.getRotation());
    else _o.setRotation(null);
    if (temp() != null) temp().unpackTo(_o.getTemp());
    else _o.setTemp(null);
  }
  public static int pack(FlatBufferBuilder builder, TrackerDataT _o) {
    if (_o == null) return 0;
    int _trackerId = _o.getTrackerId() == null ? 0 : solarxr_protocol.datatypes.TrackerId.pack(builder, _o.getTrackerId());
    int _info = _o.getInfo() == null ? 0 : solarxr_protocol.firmware.data_feed.tracker.TrackerInfo.pack(builder, _o.getInfo());
    startTrackerData(builder);
    addTrackerId(builder, _trackerId);
    addInfo(builder, _info);
    addStatus(builder, _o.getStatus());
    addRotation(builder, solarxr_protocol.datatypes.math.Quat.pack(builder, _o.getRotation()));
    addTemp(builder, solarxr_protocol.datatypes.Temperature.pack(builder, _o.getTemp()));
    return endTrackerData(builder);
  }
}

