const listingUrl = "{{ listingInfo.Url }}";
const vccUrl = `vcc://vpm/addRepo?url=${encodeURIComponent(listingUrl)}`;
const openVccLink = document.getElementById("open-vcc");

openVccLink.href = vccUrl;
window.location.replace(vccUrl);
