// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc.settings;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class LegTweaksSettings extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_22_10_26(); }
  public static LegTweaksSettings getRootAsLegTweaksSettings(ByteBuffer _bb) { return getRootAsLegTweaksSettings(_bb, new LegTweaksSettings()); }
  public static LegTweaksSettings getRootAsLegTweaksSettings(ByteBuffer _bb, LegTweaksSettings obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public LegTweaksSettings __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public boolean hasCorrectionStrength() { return 0 != __offset(4); }
  public float correctionStrength() { int o = __offset(4); return o != 0 ? bb.getFloat(o + bb_pos) : 0f; }

  public static int createLegTweaksSettings(FlatBufferBuilder builder,
      float correctionStrength) {
    builder.startTable(1);
    LegTweaksSettings.addCorrectionStrength(builder, correctionStrength);
    return LegTweaksSettings.endLegTweaksSettings(builder);
  }

  public static void startLegTweaksSettings(FlatBufferBuilder builder) { builder.startTable(1); }
  public static void addCorrectionStrength(FlatBufferBuilder builder, float correctionStrength) { builder.addFloat(0, correctionStrength, 0f); }
  public static int endLegTweaksSettings(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public LegTweaksSettings get(int j) { return get(new LegTweaksSettings(), j); }
    public LegTweaksSettings get(LegTweaksSettings obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
  public LegTweaksSettingsT unpack() {
    LegTweaksSettingsT _o = new LegTweaksSettingsT();
    unpackTo(_o);
    return _o;
  }
  public void unpackTo(LegTweaksSettingsT _o) {
    Float _oCorrectionStrength = hasCorrectionStrength() ? correctionStrength() : null;
    _o.setCorrectionStrength(_oCorrectionStrength);
  }
  public static int pack(FlatBufferBuilder builder, LegTweaksSettingsT _o) {
    if (_o == null) return 0;
    return createLegTweaksSettings(
      builder,
      _o.getCorrectionStrength());
  }
}

