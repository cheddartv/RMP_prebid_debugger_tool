var tier = 0;
function randomTier(cpm, size) {
    tier = size + "_tier" + ((Math.floor(cpm * 1) / 2) *1000);
    // console.log(tier)
}
function randomTier(cpm, size) {
    // tier = size + "_tier" + ((Math.floor(cpm * 1) / 2) *100);
  if (cpm > 50) {
    cpm = 50;
  }
    tier = size + "_tier" + ((Math.floor(cpm * 1)) *100);
    console.log(tier.toString())
    return tier.toString()
}

function randomNumber(min,max, size) {
	cpm = (Math.random() * (max - min + 1) + min).toFixed(2);
	// randomTier(cpm, size);
	return cpm;
}

module.exports = {
	slowlane: (req, res) =>  {
		var size_id = parseInt(req.query.size_id);
		var account_id = parseInt(req.query.account_id)
		var site_id = parseInt(req.query.site_id)
		var zone_id = parseInt(req.query.zone_id)
		var cpmResp = randomNumber(40, 50, size_id)
		var alt_size = parseInt(req.query.alt_size_ids);
		// Trigger Alternative sizes
		if (typeof (alt_size) === "string") {
			var alt_size_array = alt_size.split(',').sort();
			if (typeof(alt_size_array) === "object" && size_id === "15") {
				size_id = alt_size_array[0];
				console.log(size_id)
			}
			// } else if (typeof(alt_size_array) === "object" && size_id === "2") {
			// 	size_id = alt_size_array[0];	
			// };
		}	
		randomNumber(2.48, 2.48, req.query.size_id);
				// res.setHeader('Access-Control-Allow-Credentials', true)

		// var customCreativeScript = "%3cSCRIPT%20TYPE=‘text/javascript’%20SRC=’https://optimized-by.rubiconproject.com/render?b=RUBICON&w=300&h=250&p=50&id=97cdd49b-0a1a-257e-4d45-84f570329b24&s=17908%7C185946%7C904428%7C15&bg=6600FF&'%3e%3c/SCRIPT%3e"
		// res.send(pbjs.handleAnCB({"result":{"cpm":8298,"width":970,"height":250,"creative_id":20933071,"media_type_id":1,"media_subtype_id":1,"ad":"https://nym1-ib.adnxs.com/ab?e=wqT_3QKiDPBCIgYAAAMA1gAFAQjG-vbbBRCBgL_chOCtqF4Ynp7n1eCWmeoTKjYJKVyPwvUo7D8RWTSdnQyO6j8ZAAAAwPWoKUAhWQ0SACkRJMgxAAAAoEfhBEAw9ITZBDjEOECHB0g0UM_T_QlY3spDYABopsZceO_cBIABAYoBA1VTRJIFBvSbBJgBygegAfoBqAEBsAEAuAEBwAEFyAEC0AEA2AEA4AEA8AEAkgLWA01GZDVxZHJ5dWVyeHJGNllPMFd0c1BWSjE1bUpobEkteWVIc0pzNWpQbF9GOVNfdkZIZUpQMmxrSGNScndRc0NIS1hqVzhlbC1teWU5WUhOamZlX0x1aTQyTkltREtSUk1FYzlGQk1ickJOLWF0VVhxeC1teEtKbUFlSW1NVGl3X2VIc0VnY0R6NU9qMnFmTmVnb3ZCQU1aVk1NYkN2ZXlDZUFRVk9fQUJYSGxvZnpaMkZBME1YdVpuUzhycDkyY3hITDhDT1p2VTRHZzdBRFR0UnJIRGVqcEVCaFpLVzgtcU00YXlRQ2VLZU1ZbEtLNUZNNkVUUVJqOXZFMXZGUkxuVUFDSm40alIwVjZYaEhjNkhmY243ZVdrVDcxVmI0OGpyYTJmSExqN29rRzMtRU9HdHc3U1lNVWVySGhzVHZ0N09qS0M1Si1uQTJlVkhVTGpRSUczTDc4NG5CWkZtRXdfRVBYSGFobWVWU3NQQXYtRXZndXJ5SHhjYXFCTjYtRThjcFl1UHVsQkpDQlJSbHhmM2tEcVBpQzNVeUhUOWJNMzg4eWxvRGlVS3hqenVpUm5KOGJKTXN5UEFBSUYxVEhSTmpPak5lZFFwWElvZU91UEpzQTV32ALqSOACwuM46gJLaHR0cHM6Ly9ueXBvc3QuY29tLzIwMTgvMDgvMjIvbW9sbGllLXRpYmJldHRzLWZhbWlseS1vdXItaGVhcnRzLWFyZS1icm9rZW4v8gKkBAoTREVMSVZFUllfUEFSQU1FVEVSUxKMBGRpZD01YjdkYmQ0MzRmMDNiNDk4OTNjNmY2Y2JjMjE2ZDgwMCZ1PSU3QzlVJTJCT0M2UFdQWldaNTdSOHhZd3FJUE9wUGhhNjBiZ2hwdUxPMHlxT0pmNCUzRCU3QyZjMT1NNUJBREplMVVSM3pKMkhOanU5YjEwRmdneVNLS01LMGhRTlhnUWNHcXFpTGk4WFVxSUtrdUJwQ3VZM1VZdzRmUnZXaFhMc0ZmNW5VTEQyU1I0cGFOY2tlX0FQLUNKOEFBZk4zMHktY2pITVhfN0V1ZW1PZnJjTDZVRDVUVm45VEtRdVRDM0NENjRTZTAzUjkzZDdOdFBFNFBUaTlGaW1SWmZYbWhySjdSd2xhdm85a1FkQTRlRHotSnJKMG5aV3JpUzRGa1dJWFdPdEhWVy0xb3dNM09adTlKWkUzZTItM3N6b1dKYUhDbGNxcTJDY3lxUEdrZzU2TE8yOFNpRUZVRFRpSmFUT0ZNS3VQS3F3Y21NV3c2ajVMem94b1NxeTJXTmFIazhKMlVHQjZHQWNaSzNBb2RRa2tvejJlXy1QemYzOFFKSzBfbThfWGQtdDlwc09vZ3JZM08tN3d6ZXljNDc1UmVnWXRwSHJRMmRkU1VSWkFaVGZnQ1U1Wl9RSFVKSHBHang4ak1LRlVWb201Nk1JUFNSUGlnVG9tRDJVTDFLeFVKQVg2Y05J8gItCgxERUxJVkVSWV9VUkwSHWFkcy51cy5jcml0ZW9FhfCfZGVsaXZlcnkvci-AAwCIAwGQAwCYAwWgAwGqAysaEzY3OTYxMzMwNDk1OTc2NzM0NzMqAzkwMzoPQ1ItNzU2Ny05NzB4MjUwwAOsAsgDANgDiwjgAwDoAwD4AwOABACSBAQvanB0mAQAogQNNjUuNDguMTA2LjEyMKgE9eAEsgQMCAAQABgAIAAwADgAuAQAwAQAyAQA2gQCCAHgBADwBKFiWIgFAZgFAKAFhvKg_fztqdVmwAUAyQUABQEU8D_SBQkJBQuoAAAA2AUB4AUB8AWajQT6BQQIABAAkAYAmAYAuAYAwQYAAAAAAAAAAMgGAA..&s=aafc120f6a049c393fc072316966b76aaf7cfef3&referrer=https%3A%2F%2Fnypost.com%2F2018%2F08%2F22%2Fmollie-tibbetts-family-our-hearts-are-broken%2F","is_bin_price_applicable":false},"callback_uid":"34993bb5fe21ddb"});
	// })
		res.header('Access-Control-Allow-Credentials', true)
		res.send({
			"status": "ok",
			"account_id": account_id,
			"site_id": site_id,
			"zone_id": zone_id,
			"size_id": size_id,
			// "alt_size_ids": [2, 10, 55, 57],
			"tracking": "",
			"inventory": {},
			"ads": [{
				"status": "ok",
				"deal": "1123456",
				"impression_id": "945e7afa-0909-418f-bf5e-d61bf0a2aacd",
				"size_id": size_id,
				"ad_id": "3212455",
				"advertiser": 28712,
				"network": 2596,
				"creative_id": "3234568",
				"type": "script",
				"script": "document.write(\"Rubicon Ad Here\")",
				// Laughing Gif:
				// "script": "<div style='position:absolute;left:0px;top:0px;visibility:hidden;'><img src='http://delivery-us-west-1.openx.net/w/1.0/rr?ph=42d504c1-bae8-4312-8ad6-a76f3705b195&ts=1fHJpZD03OTlmY2VmNC1hZGFhLTRiMjgtYThmNi1hMWEyZmMwODc0ZmZ8cnQ9MTUxMTIwMDczMnxhdWlkPTUzODQ4NjkyOXxhdW09RE1JRC5XRUJ8YXVwZj1kaXNwbGF5fHNpZD01MzcyNzE0MzB8cHViPTUzNzEzNzg2OHxwYz1VU0R8cmFpZD00ZjY5OGEzOC1mZDI4LTQ4NjItYmQ4ZC1jZmM4MDc2YzljMzl8cnM9Mnxtd2Y9MHxhaWQ9NTM3MTYxOTY2fHQ9MTJ8YXM9MzAweDI1MHxsaWQ9NTM3MTI0MTg3fG9pZD01MzcxMDEwMDV8cD01MzYwfHByPTM3NTB8cHJnPTUzNjB8YXRiPTUzNzB8YWR2PTUzNzA3MzQwMXxhYz1VU0R8cG09UFJJQ0lORy5DUE18bT0xfGFpPTE1MmQwN2IxLWRhNDEtNGM0MC1hZDE4LWZlNzRjMjY5NTM0YXxtYz1VU0R8cGk9Mzc1MHxtdWk9OWZjMjliZTYtNmRjMS0wMWZlLTIyOTUtNmI4MjBhMjY2MjIwfG1hPWRiM2JhM2JhLWNkMDAtNDEwYy04Njc2LTc1OTRiNTcyZDg3N3xtcnQ9MTUxMTIwMDczMnxtcmM9U1JUX1dPTnxtd2E9NTM3MDczNDAxfG13Ymk9NDY4MHxtd2I9NTM3MHxtYXA9NTM2MHxlbGc9MXxtb2M9VVNEfG1vcj0xNjEwfG1wZj0zNzUwfG1tZj0zNzUwfG1wbmY9Mzc1MHxtbW5mPTM3NTB8cGN2PTIwMTcwMTE4fG1vPU9YfGVjPTg2MjI2OTN8bXB1PTM3NTB8bWNwPTUzNjB8YXF0PXJ0YnxpYz1kYjU5MDkyNC0wZTU0LTRkNWUtYTE0My0yMWJjMDQ0MjkwMzR8c2FzPTcyOXg5MXxjdD01fG13Yz01MzcxMDEwMDV8bXdwPTUzNzEyNDE4N3xtd2NyPTUzNzE2MTk2Nnxtd2lzPTF8bXdicHQ9Mnxtd3B0PW9wZW5ydGJfanNvbnxsaXQ9WHx1cj1xa0Z3VG5uMjdofGJkcj0xfGxkPWtvaGxzLmNvbXxtd2w9aHR0cDovL3J0Yi5zdi51cy5jcml0ZW8uY29tL29wZW54L2F1Y3Rpb24vbm90aWZ5P3Byb2ZpbGU9MTUxJmltcD1rdVhlUjJFUFB5NDR0cEd5b2tnYnNCallkTHpHV0Z0NUNIVW5CeGVKVzFxbnpHZG9wOC1DLXhDYUhvdXdod21aNmlIcWtSdldWdy1pYWwzV0J6QWNqdl9QZUlYSHhSZXhFNXhvZkVTLWZsN1Vjbk5Xb3FvSXpzUldwNW1RTXRVVTllNHNKN3h4ZWxQMm9CUFBZUjV3SHdnejNmeDllSTlnQm1ieDAyYmZyWF9rN2NKY2sxeW1IbGFfWE5sa3YyWGVFTndlejl3akJyS3BuQUdGZV9RQ1o4b2hXd0JDdHpsSGZIOXJaRmNPOFcyNGdBMjFhbF9TeXRMSVhnd01sVWxNblFTbjdySHVvUEtXWk1Cak1RQTlQUEtMRjY5RkFZUjVCcDZXNm4xY2VWMng3dzBUWE5wcFVwcEdwQ3Y1N2M1cXNlQy02SC1sNU1JYjZLZ2ViR2J5NE03T1VIUEJjc0lOJnN0PSR7QVVDVElPTl9MT1NTfQ'/></div><iframe id='a61d04c3' name='a61d04c3' src='http://cas.sv.us.criteo.com/delivery/r/afr.php?did=5a1317dcf852e42a71b98807757fdf00&z=AAABX9qVNrJ4m3moKO58vy4BuPmfaKP_mq4dBg&u=%7CJZdATQwYdJ9He%2BsfKw%2B4pJNCCOcXVHkdRgWm594xnUE%3D%7C&c1=M5BADJe1UR3zJ2HNju9b10FggySKKMK0AoYTtPDcqDnSIQIZUQPlDgE35LWzeblUEAaHflE5GwCPDnPap4EuHyDEfW3vt5C3Z2vKcYR-VbPx6zy-CoxJQmUNfKtv07KcKPEKJTWU9lnRGTt_FRTGGZk0IldvVqeQfP2Ff4I8muURT_NE_ucOLS3mA23MEKtiWDmpMjeOLMeN5FTId7sRar2QBO9Gxq16IXRjZ6Mw4_VtFPUPZmJFDumG5In78hEzoFXuF_Yy1PwopY_KmcdGGQjMr3YeaQAxsV47yGuu-WRVBgPv7ak15wnuc4grMjouhklEhKRlYbh9TrDC3F8bpzSPAFxWs05PcQFnSfmGvqM' framespacing='0' frameborder='no' scrolling='no' width='300' height='250'></iframe><div style='position:absolute;left:0px;top:0px;visibility:hidden;'><img src='http://delivery-us-west-1.openx.net/w/1.0/ri?ph=42d504c1-bae8-4312-8ad6-a76f3705b195&ts=1fHJpZD03OTlmY2VmNC1hZGFhLTRiMjgtYThmNi1hMWEyZmMwODc0ZmZ8cnQ9MTUxMTIwMDczMnxhdWlkPTUzODQ4NjkyOXxhdW09RE1JRC5XRUJ8YXVwZj1kaXNwbGF5fHNpZD01MzcyNzE0MzB8cHViPTUzNzEzNzg2OHxwYz1VU0R8cmFpZD00ZjY5OGEzOC1mZDI4LTQ4NjItYmQ4ZC1jZmM4MDc2YzljMzl8cnM9Mnxtd2Y9MHxhaWQ9NTM3MTYxOTY2fHQ9MTJ8YXM9MzAweDI1MHxsaWQ9NTM3MTI0MTg3fG9pZD01MzcxMDEwMDV8cD01MzYwfHByPTM3NTB8cHJnPTUzNjB8YXRiPTUzNzB8YWR2PTUzNzA3MzQwMXxhYz1VU0R8cG09UFJJQ0lORy5DUE18bT0xfGFpPTE1MmQwN2IxLWRhNDEtNGM0MC1hZDE4LWZlNzRjMjY5NTM0YXxtYz1VU0R8cGk9Mzc1MHxtdWk9OWZjMjliZTYtNmRjMS0wMWZlLTIyOTUtNmI4MjBhMjY2MjIwfG1hPWRiM2JhM2JhLWNkMDAtNDEwYy04Njc2LTc1OTRiNTcyZDg3N3xtcnQ9MTUxMTIwMDczMnxtcmM9U1JUX1dPTnxtd2E9NTM3MDczNDAxfG13Ymk9NDY4MHxtd2I9NTM3MHxtYXA9NTM2MHxlbGc9MXxtb2M9VVNEfG1vcj0xNjEwfG1wZj0zNzUwfG1tZj0zNzUwfG1wbmY9Mzc1MHxtbW5mPTM3NTB8cGN2PTIwMTcwMTE4fG1vPU9YfGVjPTg2MjI2OTN8bXB1PTM3NTB8bWNwPTUzNjB8YXF0PXJ0YnxpYz1kYjU5MDkyNC0wZTU0LTRkNWUtYTE0My0yMWJjMDQ0MjkwMzR8c2FzPTcyOXg5MXxjdD01fG13Yz01MzcxMDEwMDV8bXdwPTUzNzEyNDE4N3xtd2NyPTUzNzE2MTk2Nnxtd2lzPTF8bXdicHQ9Mnxtd3B0PW9wZW5ydGJfanNvbnxsaXQ9WHx1cj1xa0Z3VG5uMjdofGJkcj0xfGxkPWtvaGxzLmNvbXxtd2w9aHR0cDovL3J0Yi5zdi51cy5jcml0ZW8uY29tL29wZW54L2F1Y3Rpb24vbm90aWZ5P3Byb2ZpbGU9MTUxJmltcD1rdVhlUjJFUFB5NDR0cEd5b2tnYnNCallkTHpHV0Z0NUNIVW5CeGVKVzFxbnpHZG9wOC1DLXhDYUhvdXdod21aNmlIcWtSdldWdy1pYWwzV0J6QWNqdl9QZUlYSHhSZXhFNXhvZkVTLWZsN1Vjbk5Xb3FvSXpzUldwNW1RTXRVVTllNHNKN3h4ZWxQMm9CUFBZUjV3SHdnejNmeDllSTlnQm1ieDAyYmZyWF9rN2NKY2sxeW1IbGFfWE5sa3YyWGVFTndlejl3akJyS3BuQUdGZV9RQ1o4b2hXd0JDdHpsSGZIOXJaRmNPOFcyNGdBMjFhbF9TeXRMSVhnd01sVWxNblFTbjdySHVvUEtXWk1Cak1RQTlQUEtMRjY5RkFZUjVCcDZXNm4xY2VWMng3dzBUWE5wcFVwcEdwQ3Y1N2M1cXNlQy02SC1sNU1JYjZLZ2ViR2J5NE03T1VIUEJjc0lOJnN0PSR7QVVDVElPTl9MT1NTfQ&bs=comcast'/></div>",
				// Nordstrom Ad:
				// "script": "rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);\nwindow.rubicon_ad = \"3449106\" + \".\" + \"js\"; window.rubicon_creative = \"3562400\" + \".\" + \"js\"; document.write(\"<div style=\\\"width: 0; height: 0; overflow: hidden;\\\"><img border=\\\"0\\\" width=\\\"1\\\" height=\\\"1\\\" src=\\\"https:\/\/beacon-us-iad3.rubiconproject.com\/beacon\/d\/ea19ccda-206b-4cce-9c98-7e36b1b89660?accountId=11076&siteId=26782&zoneId=111194&e=6A1E40E384DA563B0AB1F7FA7A87DFBE06666453732A1386183AC23DD652DB01FA7073A95BFAECA0CAA49BEFF8B8258595903D268D576A27F751C5AA0F58BB85FA9023386F6BA7F95338042B037435E391F3A7C719EF06C6DD564566E386763B38E8A7BE4685BCFE367B0AF8D9B36612D1DED88D0D419F82571698ED4AFECB1ACE0BE720FF717832CB971B5DA85D396E267979E3A603886F14E1CF13EF6C13C1AB93762FE932D9B387CA204A5DEBA5B2F71A892A4FE4DA09A27F5BFB97E667A2B1A3BB67A6518886BE952D5238CD63DA\\\" alt=\\\"\\\" \/><\/div>\\n<div style=\\\"width: 0; height: 0; overflow: hidden;\\\"><img border=\\\"0\\\" width=\\\"1\\\" height=\\\"1\\\" src=\\\"https:\/\/secure.ace.advertising.com\/mpw\/site=906909\/requestId=edac9272c00df3f82b2e1cd087ad537b5534a7d1\/rubcpmprice=476D8A211C4E1DBC\/size=300600\/tags=1\/pid=1007\/rip=ChR3QzgzMDAxNTA0ODgzMDMxMDAyNBIlQVM0MTk2ODM4OThjMDYzMGY0NmNmOTkwZGE0ZDY5NGQ1MzkyORgIIgExKgQxMDA3MgpueXBvc3QuY29tOPXsqgFA3AlIAFCP5qQCWAFlAAAAAG2amZk-fddO8zqdAddO8zqlAZm1DT-tAVMalDrdAVMalDroAQHyAQViZWxvd_0B107zOoACAMoCByAsZmFsc2XSAgcgLGZhbHNl6gIHcHJpbWFyefICAPoCIkFTNDE5NjgzYjBiYTFlNGIyMzg0MmMyYzZjZjM0ODNiMzeqAwN3ZWLKAxZzZWxlY3QtZGVhbFByaW9yaXRpemVk\/rc=229A84412C2110A34826D95C67D07AFE\/bz=_v8AdQBzAC0AZQBhAHMAdAAtADEAZQ\/limitadtracking=false\\\" alt=\\\"\\\" \/><\/div>\\n\"); rubicon_tag_code = \"%3cSCRIPT%20TYPE='text\/javascript'%3evar%20ACE_SHOST%20=%20'https:\/\/secure.ace.advertising.com'%3bvar%20ACE_AR%20=%20%7bSite:%20'906909',%20Region:%20'1',%20Size:%20'300600',%20AllowExp:%20'1',%20Secure:%20'1',%20Extra:%20'rubcpmprice=476D8A211C4E1DBC\/requestId=edac9272c00df3f82b2e1cd087ad537b5534a7d1\/logignored=1\/rip=ChR3QzgzMDAxNTA0ODgzMDMxMDAyNBIlQVM0MTk2ODM4OThjMDYzMGY0NmNmOTkwZGE0ZDY5NGQ1MzkyORgIIgExKgQxMDA3MgpueXBvc3QuY29tOPXsqgFA3AlIAFCP5qQCWAFlAAAAAG2amZk-fddO8zqdAddO8zqlAZm1DT-tAVMalDrdAVMalDroAQHyAQViZWxvd_0B107zOoACAMoCByAsZmFsc2XSAgcgLGZhbHNl6gIHcHJpbWFyefICAPoCIkFTNDE5NjgzYjBiYTFlNGIyMzg0MmMyYzZjZjM0ODNiMzeqAwN3ZWLKAxZzZWxlY3QtZGVhbFByaW9yaXRpemVk\/rc=229A84412C2110A34826D95C67D07AFE\/bz=_v8AdQBzAC0AZQBhAHMAdAAtADEAZQ\/bidid=edac9272c00df3f82b2e1cd087ad537b5534a7d1_10\/pid=1007\/limitadtracking=false'%7d%3b%3c\/SCRIPT%3e%3cSCRIPT%20TYPE='text\/javascript'%20SRC='https:\/\/secure.uac.advertising.com\/wrapper\/aceUAC.js'%3e%3c\/SCRIPT%3e\"; rubicon_tag_code = rubicon_tag_code.replace(\/##RUBICON_CB##\/g,rubicon_cb); document.write(unescape(rubicon_tag_code)); document.write(\"<div style=\\\"height:0px;width:0px;overflow:hidden\\\"><script>(function(){document.write(\\'<iframe src=\\\"https:\/\/tap2-cdn.rubiconproject.com\/partner\/scripts\/rubicon\/emily.html?pc=11076\/26782&geo=na&co=us\\\" frameborder=\\\"0\\\" marginwidth=\\\"0\\\" marginheight=\\\"0\\\" scrolling=\\\"NO\\\" width=\\\"0\\\" height=\\\"0\\\" style=\\\"height:0px;width:0px\\\"><\/iframe>\\');})();<\\\/script><\/div>\");",
				"campaign_id": 69245,
				"rtb_rule_id": 1201184,
				// "cpm": cpmResp,
				"cpm": 50.00,
				// "targeting":[{"key":"rpfl_17908","values":[size_id + "_tier5000"]}]
				// "targeting":[{"key":"rpfl_" + account_id,"values":[ size_id + "_tierdealset177"]}]
				"targeting": [{
					"key":"rpfl_" + account_id,
					"values":[size_id + "_tier5000"]
				}]
			}]
		})
	},
	auction: (req, res) =>  {
		res.setHeader('Access-Control-Allow-Credentials', true)
		res.send({
		"tid": "42d90617-6d6e-4087-b9c0-1536be9be0ce",
		"status": "OK",
		"bidder_status": [{
			"bidder": "rubicon",
			"response_time_ms": 200,
			"num_bids": 2
		}],
		"bids": [{
			"bid_id": "1f2bb5c97b5c6f",
			"code": "AdThrive_Header_1_desktop",
			"creative_id": "3266747",
			"media_type": "banner",
			"bidder": "rubicon",
			"price": 100.00,
			"adm": "Rubicon Ad Here",
			"width": 728,
			"height": 90,
			"deal_id": 476700,
			"response_time_ms": 200,
			"ad_server_targeting": {
				"rpfl_9262": "2_tier5000"
				}
			},
			// {
			// "bid_id": "48b48e460629f6",
			// "code": "AdThrive_Sidebar_3_desktop",
			// "creative_id": "3357400",
			// "media_type": "banner",
			// "bidder": "rubicon",
			// "price": 100.00,
			// "deal_id": 476700,
			// "adm": "    <script type=\"text/javascript\">\n      rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);\n      window.rubicon_ad = \"3306916\" + \".\" + \"js\";\n      window.rubicon_creative = \"3357400\" + \".\" + \"js\";\n    </script>\n<div data-rp-type=\"trp-display-creative\" data-rp-impression-id=\"451cc30d-6459-40ef-a446-49bd9f06296d\"><div style=\"width: 0; height: 0; overflow: hidden;\"><img border=\"0\" width=\"1\" height=\"1\" src=\"https://beacon-us-iad3.rubiconproject.com/beacon/d/451cc30d-6459-40ef-a446-49bd9f06296d?oo=0&accountId=9262&siteId=180726&zoneId=881460&e=6A1E40E384DA563BE339B0A6BA94BD9C54EEB361F245231422387F6BF687F45CF3C16E8C5F043274EDA5F182BB5C4C568C51FDA24B01E575F8FED3851E959A7CA87EA1CE183B291BFD3579D6BE5FAFB61393B197EF5E7FE8FF7B68D2B0A3159490CD7062FA6595013988D3D70EBB4F1631089C52AE72593BA26E015D7E4BE1323F42C83CABBBDF590F0ED946CFCB0B36EC99C7E46E29345FDBEF131068979B9B323C64E281701C1CA91DF6AA1E9D1786D092FA5F35090B0B05973296B9A959C7\" alt=\"\" /></div>\n\n\n<img src=\"https://use-tor.adsrvr.org/bid/feedback/rubicon?iid=0000a104-68fc-49e8-9f7a-0d915f01d32b&crid=srvecuaw&wp=E59D5841869466A2&aid=1&wpc=USD&sfe=d479a50&puid=&tdid=9da87da9-c22b-48ac-bc0b-0386e04858ca&pid=u2k6c0s&ag=epddzag&sig=6c5WxZ_7i1UWK9P-fQ-XehAeOGALXX5A8wkwzOX4KNY.&cf=290539&fq=1&td_s=therecipecritic.com&rcats=7sp&mcat=&mste=&mfld=4&mssi=&mfsi=0nes2gh8u2&uhow=107&agsa=&rgco=United%20States&rgre=New%20York&rgme=501&rgci=New%20York&rgz=10019&svbttd=1&dt=PC&osf=OSX&os=Other&br=Chrome&rlangs=en&mlang=&svpid=9262&did=&rcxt=Other&lat=40.766200&lon=-73.986200&tmpc=18.67&daid=&vp=0&osi=&osv=&bp=0.9375&mk=Apple&mdl=Chrome%20-%20OS%20X&dur=CiMKDWNoYXJnZS1hbGwtMjAiEgjs__________8BEgV0YXBhZAoxCgcybDJnaXIwEOdEIg4IveaZARIHemRrYm5raSITCPL44jESDHRoZXRyYWRlZGVzawo8Cgc2emc0Nzc1EKYLIg4IwIWaARIHemRrYm5raSIOCMGFmgESB3pka2Jua2kiDgjChZoBEgd6ZGtibmtpCiMKBzkxZDJ4dnoQxgoiFQiC8PkzEg5BbGxpYW5jZUxvdGFtZQocCgdtZGx1YWptEL1OIg4Iq-SZARIHemRrYm5raQowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiRjaGFyZ2UtYWxsSW50ZWdyYWxTdXNwaWNpb3VzQWN0aXZpdHkiFQj1__________8BEghpbnRlZ3JhbBDGCg..&crrelr=&ipl=881460&atst=1&fpa=740\" width=\"1\" height=\"1\" style=\"display: none;\"/><noscript>\r\n<a href=\"http://insight.adsrvr.org/track/clk?imp=0000a104-68fc-49e8-9f7a-0d915f01d32b&ag=epddzag&sfe=d479a50&sig=6c5WxZ_7i1UWK9P-fQ-XehAeOGALXX5A8wkwzOX4KNY.&crid=srvecuaw&cf=290539&fq=1&td_s=therecipecritic.com&rcats=7sp&mcat=&mste=&mfld=4&mssi=&mfsi=0nes2gh8u2&sv=rubicon&uhow=107&agsa=&rgco=United%20States&rgre=New%20York&rgme=501&rgci=New%20York&rgz=10019&dt=PC&osf=OSX&os=Other&br=Chrome&svpid=9262&rlangs=en&mlang=&did=&rcxt=Other&tmpc=18.67&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&svsc=&dur=CiMKDWNoYXJnZS1hbGwtMjAiEgjs__________8BEgV0YXBhZAoxCgcybDJnaXIwEOdEIg4IveaZARIHemRrYm5raSITCPL44jESDHRoZXRyYWRlZGVzawo8Cgc2emc0Nzc1EKYLIg4IwIWaARIHemRrYm5raSIOCMGFmgESB3pka2Jua2kiDgjChZoBEgd6ZGtibmtpCiMKBzkxZDJ4dnoQxgoiFQiC8PkzEg5BbGxpYW5jZUxvdGFtZQocCgdtZGx1YWptEL1OIg4Iq-SZARIHemRrYm5raQowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiRjaGFyZ2UtYWxsSW50ZWdyYWxTdXNwaWNpb3VzQWN0aXZpdHkiFQj1__________8BEghpbnRlZ3JhbBDGCg..&crrelr=&npt=&svscid=xapi%3A180726%3AvlWAYkK_YBwk&mk=Apple&mdl=Chrome%20-%20OS%20X&ipl=881460&atst=1&fpa=740&r=https://servedby.flashtalking.com/click/8/92142;3133803;0;209;0/?ft_width=300&ft_height=600&url=19139903\" target=\"_blank\">\r\n<img border=\"0\" src=\"https://servedby.flashtalking.com/imp/8/92142;3133803;205;gif;TheTradeDesk;BriggsTTDNorthMowNStowBehavioral300x600/?\"></a>\r\n</noscript>\r\n<script language=\"Javascript1.1\" type=\"text/javascript\">\r\nvar ftClick = \"http://insight.adsrvr.org/track/clk?imp=0000a104-68fc-49e8-9f7a-0d915f01d32b&ag=epddzag&sfe=d479a50&sig=6c5WxZ_7i1UWK9P-fQ-XehAeOGALXX5A8wkwzOX4KNY.&crid=srvecuaw&cf=290539&fq=1&td_s=therecipecritic.com&rcats=7sp&mcat=&mste=&mfld=4&mssi=&mfsi=0nes2gh8u2&sv=rubicon&uhow=107&agsa=&rgco=United%20States&rgre=New%20York&rgme=501&rgci=New%20York&rgz=10019&dt=PC&osf=OSX&os=Other&br=Chrome&svpid=9262&rlangs=en&mlang=&did=&rcxt=Other&tmpc=18.67&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&svsc=&dur=CiMKDWNoYXJnZS1hbGwtMjAiEgjs__________8BEgV0YXBhZAoxCgcybDJnaXIwEOdEIg4IveaZARIHemRrYm5raSITCPL44jESDHRoZXRyYWRlZGVzawo8Cgc2emc0Nzc1EKYLIg4IwIWaARIHemRrYm5raSIOCMGFmgESB3pka2Jua2kiDgjChZoBEgd6ZGtibmtpCiMKBzkxZDJ4dnoQxgoiFQiC8PkzEg5BbGxpYW5jZUxvdGFtZQocCgdtZGx1YWptEL1OIg4Iq-SZARIHemRrYm5raQowCgxjaGFyZ2UtYWxsLTEiIAj___________8BEhN0dGRfZGF0YV9leGNsdXNpb25zCjYKHWNoYXJnZS1hbGxJbnRlZ3JhbEJyYW5kU2FmZXR5IhUI-f__________ARIIaW50ZWdyYWwKNgodY2hhcmdlLWFsbEludGVncmFsVmlld2FiaWxpdHkiFQj4__________8BEghpbnRlZ3JhbAo9CiRjaGFyZ2UtYWxsSW50ZWdyYWxTdXNwaWNpb3VzQWN0aXZpdHkiFQj1__________8BEghpbnRlZ3JhbBDGCg..&crrelr=&npt=&svscid=xapi%3A180726%3AvlWAYkK_YBwk&mk=Apple&mdl=Chrome%20-%20OS%20X&ipl=881460&atst=1&fpa=740&r=\";\r\nvar ftLat = \"40.7662\";\r\nvar ftLong = \"-73.9862\";\r\nvar ftLatLong = \"&ft_lat=\"+encodeURIComponent(ftLat)+\"&ft_long=\"+encodeURIComponent(ftLong);\r\nvar ftExpTrack_3133803 = \"\";\r\nvar ftX = \"\";\r\nvar ftY = \"\";\r\nvar ftZ = \"\";\r\nvar ftOBA = 1;\r\nvar ftContent = \"\";\r\nvar ftCustom = \"\";\r\nvar ft300x600_OOBclickTrack = \"\";\r\nvar ftRandom = Math.random()*1000000;\r\nvar ftBuildTag1 = \"<scr\";\r\nvar ftBuildTag2 = \"</\";\r\nvar ftClick_3133803 = ftClick;\r\nif(typeof(ft_referrer)==\"undefined\"){var ft_referrer=(function(){var r=\"\";if(window==top){r=window.location.href;}else{try{r=window.parent.location.href;}catch(e){}r=(r)?r:document.referrer;}while(encodeURIComponent(r).length>1000){r=r.substring(0,r.length-1);}return r;}());}\r\nvar ftDomain = (window==top)?\"\":(function(){var d=document.referrer,h=(d)?d.match(\"(?::q/q/)+([qw-]+(q.[qw-]+)+)(q/)?\".replace(/q/g,decodeURIComponent(\"%\"+\"5C\")))[1]:\"\";return (h&&h!=location.host)?\"&ft_ifb=1&ft_domain=\"+encodeURIComponent(h):\"\";}());\r\nvar ftTag = ftBuildTag1 + 'ipt language=\"javascript1.1\" type=\"text/javascript\" ';\r\nftTag += 'src=\"https://servedby.flashtalking.com/imp/8/92142;3133803;201;js;TheTradeDesk;BriggsTTDNorthMowNStowBehavioral300x600/?ftx='+ftX+'&fty='+ftY+'&ftadz='+ftZ+'&ftscw='+ftContent+'&ft_custom='+ftCustom+'&ftOBA='+ftOBA+ftDomain+'&ft_agentEnv='+(window.mraid||window.ormma?'1':'0')+ftLatLong+'&ft_referrer='+encodeURIComponent(ft_referrer)+'&cachebuster='+ftRandom+'\" id=\"ftscript_300x600\" name=\"ftscript_300x600\"';\r\nftTag += '>' + ftBuildTag2 + 'script>';\r\ndocument.write(ftTag);\r\n</script>\r\n\r\n\r\n<span id=\"te-clearads-js-tradedesk01cont1\"><script type=\"text/javascript\" src=\"https://choices.truste.com/ca?pid=tradedesk01&aid=tradedesk01&cid=tkddxcx_epddzag_srvecuaw&c=tradedesk01cont1&js=pmw0&w=300&h=600&sid=0\"></script></span>\n<div style=\"height:0px;width:0px;overflow:hidden\"><iframe src=\"https://eus.rubiconproject.com/usync.html?&geo=na&co=us\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"NO\" width=\"0\" height=\"0\" style=\"height:0px;width:0px\"></iframe></div></div>\n\n",
			// "width": 300,
			// "height": 600,
			// "response_time_ms": 200,
			// "ad_server_targeting": {
			// 	"rpfl_9262": "10_tier50"
			// 	}
			// }
			]
		})
	},
	optimized: (req, res) =>  {
		randomNumber(10, 20, req.query.size_id);
		console.log(req.query.size_id + ": " + tier)
		res.setHeader('Access-Control-Allow-Credentials', true)
		res.send({
		    "status": "ok",
		    "account_id": 12982,
		    "site_id": 52246,
			"zone_id": 237884,
		    "size_id": 10,
		    "tracking": "",
		    "inventory": {
				"resize": "300x600"
		    },
		    "ads": [{
				"status": "no-ads",
				"reason": "floor-not-met",
				"error_code": "10",
				"impression_id": "e74eb7d6-04d9-4faf-af44-34c2d45fbef2"
		    }]
		})
	},
	video_spoof: (req, res) => {
		var size_id = parseInt(req.query.size_id);
		var account_id = parseInt(req.query.account_id)
		var site_id = parseInt(req.query.site_id)
		var zone_id = parseInt(req.query.zone_id)

		res.setHeader('Access-Control-Allow-Credentials', true)
		res.send({
			"status": "ok",
			"ads": {
				"rish_prebid_VAST": [{
					"status": "ok",
					"cpm": 50.00,
					"tier": "tier5000",
					"vantage": {
						"impressionId": "71739d10-c5f3-4e72-aa21-4f05d6658680",
						"accountId": account_id,
						"vantage": "B05D516FF12C60449B7827B0BA5571A55E49BD6572157B88983B2E1374955AACABB94F18F083C1D91B4F0B7D9238E3C4B1F5AECDF3F602F734A06186D90D6B7AED91CF2D0B742EE002FFEA0A95A2A55F397FE1FA638BA8C5BD391B741F938F6C35C7CD841FCD61937C51CBA075406A4FE84D5D5C478124BA01F142134DC07351D9B2711BD7AE270B5F851A018A6F583D802ED59747038C5BF9571502BE1E3834D287C6AC1C5A53147B141BB064E3BC3233C385DF0C2A064EB67CAE18894A499606F84C5E0A9A700716466BA3E86BC5FDF72E8218B8D33DBD6A802B841C52CA6F"
					},
					"network": 1523,
					"targeting": {
						"rpfl_7780": "201_tier0100",
						"rpfl_elemid": "rish_prebid_VAST"
					},
					"impression_id": "71739d10-c5f3-4e72-aa21-4f05d6658680", //ID THAT MATTERS
					"site_id": site_id,
					"zone_id": zone_id,
					"creative_type": "video",
					"creative_depot_url": "https://localhost:7070/v1/creative/71739d10-c5f3-4e72-aa21-4f05d6658680.xml",
					"ad_id": 3939180,
					"size_id": size_id,
					"advertiser": 1667256
				}]
			},
			"account_id": account_id
		})
	},
	video_creative: (req, res) => {
		res.setHeader('Access-Control-Allow-Credentials', true)
		res.set('application/xml').send('<?xml version="1.0" encoding="UTF-8"?><VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="3.0" xsi:noNamespaceSchemaLocation="vast.xsd"><script /><Ad id="3939180"><Wrapper><AdSystem version="1">RubiconProject</AdSystem><VASTAdTagURI><![CDATA[https://cdn.w55c.net/v/s_0RhtXkJdQp_289298587.xml?&rtbhost=rtb01-c.eu.dataxu.net&btid=YTU5NzkxNWRjN2Q5Y2IzMTMzMWYwNWIyOWI0MWFlY2ZmNmEzNmE5OXxSRlFmaGFPMHdXfDE1NDIxMjI3NjI4MjF8MXxYbWFNM0UycW5OfDBSaHRYa0pkUXB8a1ZnYlRiblIxRnlVSmY1fDEwNTgwMjl8fHx8MTcuMFB8VVNE&ei=RUBICON&wp_exchange=C479E72371A92E1E&ac=MFNOSFBpekw0UjowU1JEUWpEdk5zfDB8MHxVU0Q&js=0&ob=0&ccw=SUFCMjQjMS4w&ci=XmRNMDZsaq&fiu=WG1hTTNFMnFuTg&sd=7780.rubicon&s=http%3A%2F%2F87184.7780.rubicon&ts=1542122762825&dvdp=i.w55c.net/dv.jpg&ai=0Dp0Valnmk&gan=%3Bdcopt%3Danid&c=US&r=NY&m=501&pc=10016&rnd=6627219468957350&mi=d2Vi&epid=UkI3Nzgw&esid=UkI4NzE4NA&ct=b126c92c760c4964ba6058483a07fa14&os=WG9v&dc=NzI4NWEyMmNjZmE2NGM1Y2JmMzBmYzExNmQzNGFhNGU&dv=MUxWSXJn&dm=MU1zMGhibTBOSg&dt=2dt0005&l=fGVufA&mt=2cmt0002&ri=2r0000&v=1&euid=NzA2NWZhOGFmMDM4ZTliNGEzZDRlMzk5OTQ4NDRhY2FhMzgzYjJmNA&ap=%26mt%3D2cmt0002%26mi%3Dd2Vi%26dt%3D2dt0005%26aDX%3DkVgbTbnR1FyUJf5&aDX=kVgbTbnR1FyUJf5]]></VASTAdTagURI><Error><![CDATA[https://beacon-nf.rubiconproject.com/beacon/ev/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=B6DD70CF75D0DBD64C61D101CFB05DF825E84A4A90F5C279D17652A5082C49B7036C930DC1EAE92DF88DB1FA9E36F86C87B28D14147DAD92E6FE8FDF5C7385B5B64E28A0960BB058C36E0B1FDAB7281C38F7C9FB1B0F587A57DD9FA6BCAD9B6F14A67CEA304EEFB92417A458316BE8D5AA1B24D1DC76417769E9585AED57B6D7946BEC9ECF7DC7E452F2556DBCA7D8C21C7D2B56FF924DFDFFC63D536BF218BCDDE6272E6EA220786595F3A825541BF7D05D7E85468E4761B5A3A01075C42D39&ec=[ERRORCODE]]]></Error><Impression><![CDATA[https://beacon-eu2.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=CBADCB97774921C68D26F384F65B381F5078B9C28072484C19DF0DC168D655513F25ED3651AA5A5CA58B981A1FBAEFBE50A24F6046F56C8B95C589015F6893B6AF8F9C380F0A797BE4264AA02147A073588050658FF5F71B5FC45F6BB4F566CD8A872DA213F2BADD7CBD88F85DC071B54FDD0F5874630F3B26B2154C89EB901CAF3ABADB45ED3B9F21F3746B0B42ADFE14E1CF13EF6C13C1304AFFB8551EAFC4F36BA5AEB53B235B929CA184D853452FB54846D7B1E20F1FC0803392C7FF678FCDA10306204D320B]]></Impression><Impression><![CDATA[https://cm.g.doubleclick.net/pixel?google_nid=rubicon&google_cm&google_sc]]></Impression><Impression><![CDATA[https://rtd.tubemogul.com/upi/pid/btu4jd3a?redir=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D191940%26nid%3D3778%26put%3D%24%7BUSER_ID%7D]]></Impression><Impression><![CDATA[https://match.adsrvr.org/track/cmf/rubicon?]]></Impression><Impression><![CDATA[https://sync.tidaltv.com/GenericUserSync.ashx?dpid=695]]></Impression><Impression><![CDATA[https://sync.mathtag.com/sync/img?mt_exid=9&redir=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4222%26nid%3D1512%26put%3D%5BMM_UUID%5D]]></Impression><Impression><![CDATA[https://i.w55c.net/ping_match.gif?ei=RUBICON&rurl=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4210%26nid%3D1523%26put%3D_wfivefivec_%26expires%3D30]]></Impression><Impression><![CDATA[https://track.eyeviewads.com/sync/rbcn?]]></Impression><Impression><![CDATA[https://secure.adnxs.com/getuidnb?https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D109108%26nid%3D3876%26put%3D$UID%26expires%3D30]]></Impression><Creatives><Creative><Linear><TrackingEvents><Tracking event="creativeView"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=498E45A22EEBCA46DFE40D870D09CB734C61D101CFB05DF825E84A4A90F5C279D17652A5082C49B7036C930DC1EAE92DF88DB1FA9E36F86C87B28D14147DAD92E6FE8FDF5C7385B5B64E28A0960BB058C36E0B1FDAB7281C38F7C9FB1B0F587A57DD9FA6BCAD9B6F14A67CEA304EEFB92417A458316BE8D5AA1B24D1DC76417769E9585AED57B6D7946BEC9ECF7DC7E452F2556DBCA7D8C21C7D2B56FF924DFDFFC63D536BF218BCDDE6272E6EA220786595F3A825541BF7D05D7E85468E4761B5A3A01075C42D39]]></Tracking><Tracking event="start"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=6BD5ACA2210326D24C61D101CFB05DF825E84A4A90F5C279D17652A5082C49B7036C930DC1EAE92DF88DB1FA9E36F86C87B28D14147DAD92E6FE8FDF5C7385B5B64E28A0960BB058C36E0B1FDAB7281C38F7C9FB1B0F587A57DD9FA6BCAD9B6F14A67CEA304EEFB92417A458316BE8D5AA1B24D1DC76417769E9585AED57B6D7946BEC9ECF7DC7E452F2556DBCA7D8C21C7D2B56FF924DFDFFC63D536BF218BCDDE6272E6EA220786595F3A825541BF7D05D7E85468E4761B5A3A01075C42D39]]></Tracking><Tracking event="midpoint"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=2D6EF7C7B3D881A9093EC63A2F422EFAE49FC85E7B14E85C74676EC54ED4166023FCF911F90B5279B34FF732EFAC93F0729C3974A64F77AFEAEA8D57CAE64B6AE76A023B9834F1A6BAD98F8C26CE464C9B27D66BDA2A7ECD08AB440FDA9CB0F70F213DE4844FC8216240B348FC26EBCF8C7B3EA2E3E0B56163A956E068C1F93EF29E5E21AF61A991A75BAB7B50C50C381B056062F157EFE146D2EEFBE0B0A6C5AF4D41B3554304B288E0B5E3120C36C88E61740E28F83EBFB03C61FA23219F70]]></Tracking><Tracking event="firstQuartile"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=C1A0864160A107F43931A2E97231D1A23F6A109715BAE9F305015D09B0C01F6070F236EAEEA926A6E6B0B3B6A24C56AC96194DC142830F4C08DE8A94A964111EBD2C6A5AFC87CB727FD3E3AADAC3D3EBB74A68AC47FEEF433B430712A3A2430092457757B6B58FB2E465F127FD2095B19404F5106FF5D7947242CBF4C217C2A4551E4E384A5078466BEE4550EB8A2B96E03CBF4DFFDF633ABF7007D0F69401869100212F94D834B21A801C6DEECBAE9ECD81BD962DB6EA75CC5A13C03A27982EB68E27A94946A164]]></Tracking><Tracking event="thirdQuartile"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=3ADD8F99CD2216803931A2E97231D1A23F6A109715BAE9F305015D09B0C01F6070F236EAEEA926A6E6B0B3B6A24C56AC96194DC142830F4C08DE8A94A964111EBD2C6A5AFC87CB727FD3E3AADAC3D3EBB74A68AC47FEEF433B430712A3A2430092457757B6B58FB2E465F127FD2095B19404F5106FF5D7947242CBF4C217C2A4551E4E384A5078466BEE4550EB8A2B96E03CBF4DFFDF633ABF7007D0F69401869100212F94D834B21A801C6DEECBAE9ECD81BD962DB6EA75CC5A13C03A27982EB68E27A94946A164]]></Tracking><Tracking event="complete"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=EF05D8E5B84FFBB0093EC63A2F422EFAE49FC85E7B14E85C74676EC54ED4166023FCF911F90B5279B34FF732EFAC93F0729C3974A64F77AFEAEA8D57CAE64B6AE76A023B9834F1A6BAD98F8C26CE464C9B27D66BDA2A7ECD08AB440FDA9CB0F70F213DE4844FC8216240B348FC26EBCF8C7B3EA2E3E0B56163A956E068C1F93EF29E5E21AF61A991A75BAB7B50C50C381B056062F157EFE146D2EEFBE0B0A6C5AF4D41B3554304B288E0B5E3120C36C88E61740E28F83EBFB03C61FA23219F70]]></Tracking><Tracking event="mute"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=C04630D948BBDD25E2143DD651F60E9878E00A72E25070DC8203429043BFC238220A924553ED7D8E956270D897C40F9BE9F78F299A750CC9CE6A05D6EE60BE3F0AA3B36D3E7115BC221AB55AB6A07D69F0A5DA2686CC8B7E9CD0A09B3C89F6FA30CC97D52C8FAB361F297939FC11D166286AF9FAD025114420672745A1B8A9D2BCD9AB1B63E0FFBB998234B169F03692E01F5A63A9A6CB5E1F6003ECA8CDE37BF0862173D91F656F647BFC333105420820C24FDE2BC1E2F4E55D9F6C49E00FAA]]></Tracking><Tracking event="unmute"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=7D46D6B107F42BED3F6A109715BAE9F305015D09B0C01F6070F236EAEEA926A6E6B0B3B6A24C56AC96194DC142830F4C08DE8A94A964111EBD2C6A5AFC87CB727FD3E3AADAC3D3EBB74A68AC47FEEF433B430712A3A2430092457757B6B58FB2E465F127FD2095B19404F5106FF5D7947242CBF4C217C2A4551E4E384A5078466BEE4550EB8A2B96E03CBF4DFFDF633ABF7007D0F69401869100212F94D834B21A801C6DEECBAE9ECD81BD962DB6EA75CC5A13C03A27982EB68E27A94946A164]]></Tracking><Tracking event="pause"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=662C9FF6D7491BEE4C61D101CFB05DF825E84A4A90F5C279D17652A5082C49B7036C930DC1EAE92DF88DB1FA9E36F86C87B28D14147DAD92E6FE8FDF5C7385B5B64E28A0960BB058C36E0B1FDAB7281C38F7C9FB1B0F587A57DD9FA6BCAD9B6F14A67CEA304EEFB92417A458316BE8D5AA1B24D1DC76417769E9585AED57B6D7946BEC9ECF7DC7E452F2556DBCA7D8C21C7D2B56FF924DFDFFC63D536BF218BCDDE6272E6EA220786595F3A825541BF7D05D7E85468E4761B5A3A01075C42D39]]></Tracking><Tracking event="rewind"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=C39D50039BD342EA3F6A109715BAE9F305015D09B0C01F6070F236EAEEA926A6E6B0B3B6A24C56AC96194DC142830F4C08DE8A94A964111EBD2C6A5AFC87CB727FD3E3AADAC3D3EBB74A68AC47FEEF433B430712A3A2430092457757B6B58FB2E465F127FD2095B19404F5106FF5D7947242CBF4C217C2A4551E4E384A5078466BEE4550EB8A2B96E03CBF4DFFDF633ABF7007D0F69401869100212F94D834B21A801C6DEECBAE9ECD81BD962DB6EA75CC5A13C03A27982EB68E27A94946A164]]></Tracking><Tracking event="resume"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=27261747A927ABF53F6A109715BAE9F305015D09B0C01F6070F236EAEEA926A6E6B0B3B6A24C56AC96194DC142830F4C08DE8A94A964111EBD2C6A5AFC87CB727FD3E3AADAC3D3EBB74A68AC47FEEF433B430712A3A2430092457757B6B58FB2E465F127FD2095B19404F5106FF5D7947242CBF4C217C2A4551E4E384A5078466BEE4550EB8A2B96E03CBF4DFFDF633ABF7007D0F69401869100212F94D834B21A801C6DEECBAE9ECD81BD962DB6EA75CC5A13C03A27982EB68E27A94946A164]]></Tracking><Tracking event="fullscreen"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=FB78FA73384AC4F66288EDF40C7561AC5078B9C28072484C19DF0DC168D655513F25ED3651AA5A5CA58B981A1FBAEFBE50A24F6046F56C8B95C589015F6893B6AF8F9C380F0A797BE4264AA02147A073588050658FF5F71B5FC45F6BB4F566CD8A872DA213F2BADD7CBD88F85DC071B54FDD0F5874630F3B26B2154C89EB901CAF3ABADB45ED3B9F21F3746B0B42ADFE14E1CF13EF6C13C1304AFFB8551EAFC4F36BA5AEB53B235B929CA184D853452FB54846D7B1E20F1FC0803392C7FF678FCDA10306204D320B]]></Tracking><Tracking event="expand"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=98C142652C0D85E63F6A109715BAE9F305015D09B0C01F6070F236EAEEA926A6E6B0B3B6A24C56AC96194DC142830F4C08DE8A94A964111EBD2C6A5AFC87CB727FD3E3AADAC3D3EBB74A68AC47FEEF433B430712A3A2430092457757B6B58FB2E465F127FD2095B19404F5106FF5D7947242CBF4C217C2A4551E4E384A5078466BEE4550EB8A2B96E03CBF4DFFDF633ABF7007D0F69401869100212F94D834B21A801C6DEECBAE9ECD81BD962DB6EA75CC5A13C03A27982EB68E27A94946A164]]></Tracking><Tracking event="collapse"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=C140A0DE32AE5E44093EC63A2F422EFAE49FC85E7B14E85C74676EC54ED4166023FCF911F90B5279B34FF732EFAC93F0729C3974A64F77AFEAEA8D57CAE64B6AE76A023B9834F1A6BAD98F8C26CE464C9B27D66BDA2A7ECD08AB440FDA9CB0F70F213DE4844FC8216240B348FC26EBCF8C7B3EA2E3E0B56163A956E068C1F93EF29E5E21AF61A991A75BAB7B50C50C381B056062F157EFE146D2EEFBE0B0A6C5AF4D41B3554304B288E0B5E3120C36C88E61740E28F83EBFB03C61FA23219F70]]></Tracking><Tracking event="acceptInvitationLinear"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=CB7F724D5631BC92B5E2858846470B46342882BE8D2959661D7FF1197F8AB72648E7E74487CBD95B0B3C585B23490C046A36DF8FA0C769AE3B6A685E804885950BCAF008DE361EBED8C137B2E6E18E69C36FA336D3133D063302CE197AA5A28CAB91DDC1C1B2F9D04B2153580D1382C0F9D4F12D103B02823FA037B1C67BBA537292AE595890A2CA98BEB320362977F662E26AA9D9805A3B7EF4CF4681AB02A0B8D5126B7D3A1E30889E89A8571DD33EDFF96FF04FAE2BE926D353260431ADCBB3FA90B0B5756BE7E82A954C1004678A]]></Tracking><Tracking event="closeLinear"><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=CE1146F78ED787B54C61D101CFB05DF825E84A4A90F5C279D17652A5082C49B7036C930DC1EAE92DF88DB1FA9E36F86C87B28D14147DAD92E6FE8FDF5C7385B5B64E28A0960BB058C36E0B1FDAB7281C38F7C9FB1B0F587A57DD9FA6BCAD9B6F14A67CEA304EEFB92417A458316BE8D5AA1B24D1DC76417769E9585AED57B6D7946BEC9ECF7DC7E452F2556DBCA7D8C21C7D2B56FF924DFDFFC63D536BF218BCDDE6272E6EA220786595F3A825541BF7D05D7E85468E4761B5A3A01075C42D39]]></Tracking></TrackingEvents><VideoClicks><ClickTracking><![CDATA[https://beacon-nf.rubiconproject.com/beacon/v/71739d10-c5f3-4e72-aa21-4f05d6658680?oo=0&accountId=7780&siteId=87184&zoneId=412394&sizeId=201&e=7D0A172A29FD85F64C61D101CFB05DF825E84A4A90F5C279D17652A5082C49B7036C930DC1EAE92DF88DB1FA9E36F86C87B28D14147DAD92E6FE8FDF5C7385B5B64E28A0960BB058C36E0B1FDAB7281C38F7C9FB1B0F587A57DD9FA6BCAD9B6F14A67CEA304EEFB92417A458316BE8D5AA1B24D1DC76417769E9585AED57B6D7946BEC9ECF7DC7E452F2556DBCA7D8C21C7D2B56FF924DFDFFC63D536BF218BCDDE6272E6EA220786595F3A825541BF7D05D7E85468E4761B5A3A01075C42D39]]></ClickTracking></VideoClicks></Linear></Creative></Creatives><Extensions><Extension name="com.rubiconproject.data" type="Value"><AdServingData><ImpressionId><![CDATA[71739d10-c5f3-4e72-aa21-4f05d6658680]]></ImpressionId><ClearingPrice currency="USD">1.058020</ClearingPrice><Advertiser><Id>1667256</Id></Advertiser><CreativeId><![CDATA[0RhtXkJdQp]]></CreativeId></AdServingData></Extension></Extensions></Wrapper></Ad></VAST>')
	}
}
