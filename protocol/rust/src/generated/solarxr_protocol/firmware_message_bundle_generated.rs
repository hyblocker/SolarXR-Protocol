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
pub enum FirmwareMessageBundleOffset {}
#[derive(Copy, Clone, PartialEq)]

pub struct FirmwareMessageBundle<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for FirmwareMessageBundle<'a> {
  type Inner = FirmwareMessageBundle<'a>;
  #[inline]
  fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table { buf, loc } }
  }
}

impl<'a> FirmwareMessageBundle<'a> {
  pub const VT_DATA_FEED_MSGS: flatbuffers::VOffsetT = 4;
  pub const VT_COMMANDS_MSGS: flatbuffers::VOffsetT = 6;

  #[inline]
  pub fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    FirmwareMessageBundle { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr>,
    args: &'args FirmwareMessageBundleArgs<'args>
  ) -> flatbuffers::WIPOffset<FirmwareMessageBundle<'bldr>> {
    let mut builder = FirmwareMessageBundleBuilder::new(_fbb);
    if let Some(x) = args.commands_msgs { builder.add_commands_msgs(x); }
    if let Some(x) = args.data_feed_msgs { builder.add_data_feed_msgs(x); }
    builder.finish()
  }


  #[inline]
  pub fn data_feed_msgs(&self) -> Option<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<firmware::data_feed::DataFeedMessageHeader<'a>>>> {
    self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<firmware::data_feed::DataFeedMessageHeader>>>>(FirmwareMessageBundle::VT_DATA_FEED_MSGS, None)
  }
  #[inline]
  pub fn commands_msgs(&self) -> Option<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<firmware::commands::CommandMessageHeader<'a>>>> {
    self._tab.get::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<firmware::commands::CommandMessageHeader>>>>(FirmwareMessageBundle::VT_COMMANDS_MSGS, None)
  }
}

impl flatbuffers::Verifiable for FirmwareMessageBundle<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'_, flatbuffers::ForwardsUOffset<firmware::data_feed::DataFeedMessageHeader>>>>("data_feed_msgs", Self::VT_DATA_FEED_MSGS, false)?
     .visit_field::<flatbuffers::ForwardsUOffset<flatbuffers::Vector<'_, flatbuffers::ForwardsUOffset<firmware::commands::CommandMessageHeader>>>>("commands_msgs", Self::VT_COMMANDS_MSGS, false)?
     .finish();
    Ok(())
  }
}
pub struct FirmwareMessageBundleArgs<'a> {
    pub data_feed_msgs: Option<flatbuffers::WIPOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<firmware::data_feed::DataFeedMessageHeader<'a>>>>>,
    pub commands_msgs: Option<flatbuffers::WIPOffset<flatbuffers::Vector<'a, flatbuffers::ForwardsUOffset<firmware::commands::CommandMessageHeader<'a>>>>>,
}
impl<'a> Default for FirmwareMessageBundleArgs<'a> {
  #[inline]
  fn default() -> Self {
    FirmwareMessageBundleArgs {
      data_feed_msgs: None,
      commands_msgs: None,
    }
  }
}

pub struct FirmwareMessageBundleBuilder<'a: 'b, 'b> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b> FirmwareMessageBundleBuilder<'a, 'b> {
  #[inline]
  pub fn add_data_feed_msgs(&mut self, data_feed_msgs: flatbuffers::WIPOffset<flatbuffers::Vector<'b , flatbuffers::ForwardsUOffset<firmware::data_feed::DataFeedMessageHeader<'b >>>>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(FirmwareMessageBundle::VT_DATA_FEED_MSGS, data_feed_msgs);
  }
  #[inline]
  pub fn add_commands_msgs(&mut self, commands_msgs: flatbuffers::WIPOffset<flatbuffers::Vector<'b , flatbuffers::ForwardsUOffset<firmware::commands::CommandMessageHeader<'b >>>>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<_>>(FirmwareMessageBundle::VT_COMMANDS_MSGS, commands_msgs);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a>) -> FirmwareMessageBundleBuilder<'a, 'b> {
    let start = _fbb.start_table();
    FirmwareMessageBundleBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<FirmwareMessageBundle<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl core::fmt::Debug for FirmwareMessageBundle<'_> {
  fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
    let mut ds = f.debug_struct("FirmwareMessageBundle");
      ds.field("data_feed_msgs", &self.data_feed_msgs());
      ds.field("commands_msgs", &self.commands_msgs());
      ds.finish()
  }
}