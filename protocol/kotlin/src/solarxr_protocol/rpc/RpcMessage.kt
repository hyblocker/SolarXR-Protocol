// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc

@Suppress("unused")
class RpcMessage private constructor() {
    companion object {
        const val NONE: UByte = 0u
        const val HeartbeatRequest: UByte = 1u
        const val HeartbeatResponse: UByte = 2u
        const val ResetRequest: UByte = 3u
        const val ResetResponse: UByte = 4u
        const val AssignTrackerRequest: UByte = 5u
        const val SettingsRequest: UByte = 6u
        const val SettingsResponse: UByte = 7u
        const val ChangeSettingsRequest: UByte = 8u
        const val ClearDriftCompensationRequest: UByte = 9u
        const val RecordBVHRequest: UByte = 10u
        const val RecordBVHStatus: UByte = 11u
        const val SkeletonConfigRequest: UByte = 12u
        const val ChangeSkeletonConfigRequest: UByte = 13u
        const val SkeletonResetAllRequest: UByte = 14u
        const val SkeletonConfigResponse: UByte = 15u
        const val OpenSerialRequest: UByte = 16u
        const val CloseSerialRequest: UByte = 17u
        const val SetWifiRequest: UByte = 18u
        const val SerialUpdateResponse: UByte = 19u
        const val AutoBoneProcessRequest: UByte = 20u
        const val AutoBoneProcessStatusResponse: UByte = 21u
        const val AutoBoneEpochResponse: UByte = 22u
        const val OverlayDisplayModeRequest: UByte = 23u
        const val OverlayDisplayModeChangeRequest: UByte = 24u
        const val OverlayDisplayModeResponse: UByte = 25u
        const val SerialTrackerRebootRequest: UByte = 26u
        const val SerialTrackerGetInfoRequest: UByte = 27u
        const val SerialTrackerFactoryResetRequest: UByte = 28u
        const val SerialDevicesRequest: UByte = 29u
        const val SerialDevicesResponse: UByte = 30u
        const val NewSerialDeviceResponse: UByte = 31u
        const val StartWifiProvisioningRequest: UByte = 32u
        const val StopWifiProvisioningRequest: UByte = 33u
        const val WifiProvisioningStatusResponse: UByte = 34u
        const val ServerInfosRequest: UByte = 35u
        const val ServerInfosResponse: UByte = 36u
        const val LegTweaksTmpChange: UByte = 37u
        const val LegTweaksTmpClear: UByte = 38u
        const val TapDetectionSetupNotification: UByte = 39u
        const val SetPauseTrackingRequest: UByte = 40u
        const val StatusSystemRequest: UByte = 41u
        const val StatusSystemResponse: UByte = 42u
        const val StatusSystemUpdate: UByte = 43u
        const val StatusSystemFixed: UByte = 44u
        val names : Array<String> = arrayOf("NONE", "HeartbeatRequest", "HeartbeatResponse", "ResetRequest", "ResetResponse", "AssignTrackerRequest", "SettingsRequest", "SettingsResponse", "ChangeSettingsRequest", "ClearDriftCompensationRequest", "RecordBVHRequest", "RecordBVHStatus", "SkeletonConfigRequest", "ChangeSkeletonConfigRequest", "SkeletonResetAllRequest", "SkeletonConfigResponse", "OpenSerialRequest", "CloseSerialRequest", "SetWifiRequest", "SerialUpdateResponse", "AutoBoneProcessRequest", "AutoBoneProcessStatusResponse", "AutoBoneEpochResponse", "OverlayDisplayModeRequest", "OverlayDisplayModeChangeRequest", "OverlayDisplayModeResponse", "SerialTrackerRebootRequest", "SerialTrackerGetInfoRequest", "SerialTrackerFactoryResetRequest", "SerialDevicesRequest", "SerialDevicesResponse", "NewSerialDeviceResponse", "StartWifiProvisioningRequest", "StopWifiProvisioningRequest", "WifiProvisioningStatusResponse", "ServerInfosRequest", "ServerInfosResponse", "LegTweaksTmpChange", "LegTweaksTmpClear", "TapDetectionSetupNotification", "SetPauseTrackingRequest", "StatusSystemRequest", "StatusSystemResponse", "StatusSystemUpdate", "StatusSystemFixed")
        @JvmStatic
        fun name(e: Int) : String = names[e]
    }
}
