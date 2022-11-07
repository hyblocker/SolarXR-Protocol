// automatically generated by the FlatBuffers compiler, do not modify
extern crate alloc;
extern crate flatbuffers;
use alloc::boxed::Box;
use alloc::string::{String, ToString};
use alloc::vec::Vec;
use core::mem;
use core::cmp::Ordering;
use self::flatbuffers::{EndianScalar, Follow};
use super::*;
#[deprecated(since = "2.0.0", note = "Use associated constants instead. This will no longer be generated in 2021.")]
pub const ENUM_MIN_DEVICE_BOUND_MESSAGE: u8 = 0;
#[deprecated(since = "2.0.0", note = "Use associated constants instead. This will no longer be generated in 2021.")]
pub const ENUM_MAX_DEVICE_BOUND_MESSAGE: u8 = 3;
#[deprecated(since = "2.0.0", note = "Use associated constants instead. This will no longer be generated in 2021.")]
#[allow(non_camel_case_types)]
pub const ENUM_VALUES_DEVICE_BOUND_MESSAGE: [DeviceBoundMessage; 4] = [
  DeviceBoundMessage::NONE,
  DeviceBoundMessage::solarxr_protocol_device_pairing_DiscoverRequest,
  DeviceBoundMessage::solarxr_protocol_device_pairing_PairingRequest,
  DeviceBoundMessage::PingRequest,
];

#[derive(Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash, Default)]
#[repr(transparent)]
pub struct DeviceBoundMessage(pub u8);
#[allow(non_upper_case_globals)]
impl DeviceBoundMessage {
  pub const NONE: Self = Self(0);
  pub const solarxr_protocol_device_pairing_DiscoverRequest: Self = Self(1);
  pub const solarxr_protocol_device_pairing_PairingRequest: Self = Self(2);
  pub const PingRequest: Self = Self(3);

  pub const ENUM_MIN: u8 = 0;
  pub const ENUM_MAX: u8 = 3;
  pub const ENUM_VALUES: &'static [Self] = &[
    Self::NONE,
    Self::solarxr_protocol_device_pairing_DiscoverRequest,
    Self::solarxr_protocol_device_pairing_PairingRequest,
    Self::PingRequest,
  ];
  /// Returns the variant's name or "" if unknown.
  pub fn variant_name(self) -> Option<&'static str> {
    match self {
      Self::NONE => Some("NONE"),
      Self::solarxr_protocol_device_pairing_DiscoverRequest => Some("solarxr_protocol_device_pairing_DiscoverRequest"),
      Self::solarxr_protocol_device_pairing_PairingRequest => Some("solarxr_protocol_device_pairing_PairingRequest"),
      Self::PingRequest => Some("PingRequest"),
      _ => None,
    }
  }
}
impl core::fmt::Debug for DeviceBoundMessage {
  fn fmt(&self, f: &mut core::fmt::Formatter) -> core::fmt::Result {
    if let Some(name) = self.variant_name() {
      f.write_str(name)
    } else {
      f.write_fmt(format_args!("<UNKNOWN {:?}>", self.0))
    }
  }
}
impl<'a> flatbuffers::Follow<'a> for DeviceBoundMessage {
  type Inner = Self;
  #[inline]
  fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    let b = unsafe {
      flatbuffers::read_scalar_at::<u8>(buf, loc)
    };
    Self(b)
  }
}

impl flatbuffers::Push for DeviceBoundMessage {
    type Output = DeviceBoundMessage;
    #[inline]
    fn push(&self, dst: &mut [u8], _rest: &[u8]) {
        unsafe { flatbuffers::emplace_scalar::<u8>(dst, self.0); }
    }
}

impl flatbuffers::EndianScalar for DeviceBoundMessage {
  #[inline]
  fn to_little_endian(self) -> Self {
    let b = u8::to_le(self.0);
    Self(b)
  }
  #[inline]
  #[allow(clippy::wrong_self_convention)]
  fn from_little_endian(self) -> Self {
    let b = u8::from_le(self.0);
    Self(b)
  }
}

impl<'a> flatbuffers::Verifiable for DeviceBoundMessage {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    u8::run_verifier(v, pos)
  }
}

impl flatbuffers::SimpleToVerifyInSlice for DeviceBoundMessage {}
pub struct DeviceBoundMessageUnionTableOffset {}

