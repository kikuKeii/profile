var _0x763a = [
  "\x36\x38\x33\x38\x64\x66\x39\x34\x2D\x30\x37\x31\x30\x2D\x34\x36\x31\x30\x2D\x62\x64\x33\x36\x2D\x64\x35\x36\x39\x66\x34\x35\x66\x33\x30\x38\x30",
  "\x76\x61\x6C\x75\x65",
  "\x6E\x61\x6D\x65",
  "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
  "\x65\x6D\x61\x69\x6C",
  "\x73\x75\x62\x6A\x65\x63\x74",
  "\x6D\x65\x73\x73\x61\x67\x65",
  "\x0D\x0A\x20\x20\x46\x72\x6F\x6D\x20\x3A\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6B\x69\x6B\x75\x6B\x65\x69\x69\x2E\x67\x69\x74\x68\x75\x62\x2E\x69\x6F\x2F\x70\x72\x6F\x66\x69\x6C\x65\x23\x63\x6F\x6E\x74\x61\x63\x74\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x50\x72\x6F\x66\x69\x6C\x65\x20\x4C\x69\x6E\x6B\x3C\x2F\x61\x3E\x20\x3C\x62\x72\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20",
  "\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20",
  "\x74\x68\x65\x6E",
  "\x6D\x69\x66\x74\x61\x6B\x68\x75\x64\x64\x69\x6E\x66\x61\x6C\x61\x6B\x69\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D",
  "\x6D\x69\x66\x74\x61\x6D\x61\x73\x74\x65\x72\x61\x70\x70\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D",
  "\x73\x65\x6E\x64",
];
function sendEmail() {
  const _0xebabx2 = _0x763a[0];
  const _0xebabx3 = document[_0x763a[3]](_0x763a[2])[_0x763a[1]];
  const _0xebabx4 = document[_0x763a[3]](_0x763a[4])[_0x763a[1]];
  const _0xebabx5 = document[_0x763a[3]](_0x763a[5])[_0x763a[1]];
  const _0xebabx6 = document[_0x763a[3]](_0x763a[6])[_0x763a[1]];
  const _0xebabx7 = `${_0x763a[7]}${_0xebabx6}${_0x763a[8]}`;
  Email[_0x763a[12]]({
    SecureToken: _0xebabx2,
    To: _0x763a[10],
    From: _0x763a[11],
    FromName: _0xebabx3,
    ReplyAddress: _0xebabx4,
    Subject: _0xebabx5,
    Body: _0xebabx7,
  })[_0x763a[9]]((_0xebabx6) => {
    return alert(_0xebabx6);
  });
}
