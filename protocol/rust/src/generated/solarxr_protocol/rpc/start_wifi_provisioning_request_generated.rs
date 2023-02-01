// automatically generated by the FlatBuffers compiler, do not modify
// @generated
extern crate alloc;
extern crate flatbuffers;
use alloc::boxed::Box;
use alloc::string::{String, ToString};
use alloc::vec::Vec;
use core::mem;
use core::cmp::Ordering;
use self::flatbuffers::{EndianScalar, Follow};
use super::*;
pub enum StartWifiProvisioningRequestOffset {}
#[derive(Copy, Clone, PartialEq)]

pub struct StartWifiProvisioningRequest<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for StartWifiProvisioningRequest<'a> {
  type Inner = StartWifiProvisioningRequest<'a>;
  #[inline]
  unsafe fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table::new(buf, loc) }
  }
}

impl<'a> StartWifiProvisioningRequest<'a> {
  pub const VT_SSID: flatbuffers::VOffsetT = 4;
  pub const VT_PASSWORD: flatbuffers::VOffsetT = 6;
  pub const VT_PORT: flatbuffers::VOffsetT = 8;

  #[inline]
  pub unsafe fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    StartWifiProvisioningRequest { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr>,
    args: &'args StartWifiProvisioningRequestArgs<'args>
  ) -> flatbuffers::WIPOffset<StartWifiProvisioningRequest<'bldr>> {
    let mut builder = StartWifiProvisioningRequestBuilder::new(_fbb);
    if let Some(x) = args.port { builder.add_port(x); }
    if let Some(x) = args.password { builder.add_password(x); }
    if let Some(x) = args.ssid { builder.add_ssid(x); }
    builder.finish()
  }


  #[inline]
  pub fn ssid(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(StartWifiProvisioningRequest::VT_SSID, None)}
  }
  #[inline]
  pub fn password(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(StartWifiProvisioningRequest::VT_PASSWORD, None)}
  }
  #[inline]
  pub fn port(&self) -> Option<&'a str> {
    // Safety:
    // Created from valid Table for this object
    // which contains a valid value in this slot
    unsafe { self._tab.get::<flatbuffers::ForwardsUOffset<&str>>(StartWifiProvisioningRequest::VT_PORT, None)}
  }
}

impl flatbuffers::Verifiable for StartWifiProvisioningRequest<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("ssid", Self::VT_SSID, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("password", Self::VT_PASSWORD, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<&str>>("port", Self::VT_PORT, false)?
     .finish();
    Ok(())
  }
}
pub struct StartWifiProvisioningRequestArgs<'a> {
    pub ssid: Option<flatbuffers::WIPOffset<&'a str>>,
    pub password: Option<flatbuffers::WIPOffset<&'a str>>,
    pub port: Option<flatbuffers::WIPOffset<&'a str>>,
}
impl<'a> Default for StartWifiProvisioningRequestArgs<'a> {
  #[inline]
  fn default() -> Self {
    StartWifiProvisioningRequestArgs {
      ssid: None,
      password: None,
      port: None,
    }
  }
}

pub struct StartWifiProvisioningRequestBuilder<'a: 'b, 'b> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b> StartWifiProvisioningRequestBuilder<'a, 'b> {
  #[inline]
  pub fn add_ssid(&mut self, ssid: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(StartWifiProvisioningRequest::VT_SSID, ssid);
  }
  #[inline]
  pub fn add_password(&mut self, password: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(StartWifiProvisioningRequest::VT_PASSWORD, password);
  }
  #[inline]
  pub fn add_port(&mut self, port: flatbuffers::WIPOffset<&'b  str>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(StartWifiProvisioningRequest::VT_PORT, port);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a>) -> StartWifiProvisioningRequestBuilder<'a, 'b> {
    let start = _fbb.start_table();
    StartWifiProvisioningRequestBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<StartWifiProvisioningRequest<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for StartWifiProvisioningRequest<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("StartWifiProvisioningRequest");
      ds.field("ssid", &self.ssid());
      ds.field("password", &self.password());
      ds.field("port", &self.port());
      ds.finish()
  }
}
