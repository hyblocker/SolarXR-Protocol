// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.firmware.data_feed;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

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
@SuppressWarnings("unused")
public final class StartDataFeed extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static StartDataFeed getRootAsStartDataFeed(ByteBuffer _bb) { return getRootAsStartDataFeed(_bb, new StartDataFeed()); }
  public static StartDataFeed getRootAsStartDataFeed(ByteBuffer _bb, StartDataFeed obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public StartDataFeed __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public solarxr_protocol.firmware.data_feed.DataFeedConfig dataFeeds(int j) { return dataFeeds(new solarxr_protocol.firmware.data_feed.DataFeedConfig(), j); }
  public solarxr_protocol.firmware.data_feed.DataFeedConfig dataFeeds(solarxr_protocol.firmware.data_feed.DataFeedConfig obj, int j) { int o = __offset(4); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int dataFeedsLength() { int o = __offset(4); return o != 0 ? __vector_len(o) : 0; }
  public solarxr_protocol.firmware.data_feed.DataFeedConfig.Vector dataFeedsVector() { return dataFeedsVector(new solarxr_protocol.firmware.data_feed.DataFeedConfig.Vector()); }
  public solarxr_protocol.firmware.data_feed.DataFeedConfig.Vector dataFeedsVector(solarxr_protocol.firmware.data_feed.DataFeedConfig.Vector obj) { int o = __offset(4); return o != 0 ? obj.__assign(__vector(o), 4, bb) : null; }

  public static int createStartDataFeed(FlatBufferBuilder builder,
      int dataFeedsOffset) {
    builder.startTable(1);
    StartDataFeed.addDataFeeds(builder, dataFeedsOffset);
    return StartDataFeed.endStartDataFeed(builder);
  }

  public static void startStartDataFeed(FlatBufferBuilder builder) { builder.startTable(1); }
  public static void addDataFeeds(FlatBufferBuilder builder, int dataFeedsOffset) { builder.addOffset(0, dataFeedsOffset, 0); }
  public static int createDataFeedsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startDataFeedsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endStartDataFeed(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public StartDataFeed get(int j) { return get(new StartDataFeed(), j); }
    public StartDataFeed get(StartDataFeed obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
  public StartDataFeedT unpack() {
    StartDataFeedT _o = new StartDataFeedT();
    unpackTo(_o);
    return _o;
  }
  public void unpackTo(StartDataFeedT _o) {
    solarxr_protocol.firmware.data_feed.DataFeedConfigT[] _oDataFeeds = new solarxr_protocol.firmware.data_feed.DataFeedConfigT[dataFeedsLength()];
    for (int _j = 0; _j < dataFeedsLength(); ++_j) {_oDataFeeds[_j] = (dataFeeds(_j) != null ? dataFeeds(_j).unpack() : null);}
    _o.setDataFeeds(_oDataFeeds);
  }
  public static int pack(FlatBufferBuilder builder, StartDataFeedT _o) {
    if (_o == null) return 0;
    int _dataFeeds = 0;
    if (_o.getDataFeeds() != null) {
      int[] __dataFeeds = new int[_o.getDataFeeds().length];
      int _j = 0;
      for (solarxr_protocol.firmware.data_feed.DataFeedConfigT _e : _o.getDataFeeds()) { __dataFeeds[_j] = solarxr_protocol.firmware.data_feed.DataFeedConfig.pack(builder, _e); _j++;}
      _dataFeeds = createDataFeedsVector(builder, __dataFeeds);
    }
    return createStartDataFeed(
      builder,
      _dataFeeds);
  }
}

