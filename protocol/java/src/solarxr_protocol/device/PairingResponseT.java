// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.device;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

public class PairingResponseT {
  private solarxr_protocol.datatypes.hardware_info.HardwareAddressT hardwareAddress;
  private String error;

  public solarxr_protocol.datatypes.hardware_info.HardwareAddressT getHardwareAddress() { return hardwareAddress; }

  public void setHardwareAddress(solarxr_protocol.datatypes.hardware_info.HardwareAddressT hardwareAddress) { this.hardwareAddress = hardwareAddress; }

  public String getError() { return error; }

  public void setError(String error) { this.error = error; }


  public PairingResponseT() {
    this.hardwareAddress = new solarxr_protocol.datatypes.hardware_info.HardwareAddressT();
    this.error = null;
  }
}
