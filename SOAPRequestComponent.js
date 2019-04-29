var str = '<?xml version="1.0"?>' +
			'<soap:Envelope xmlns:soap="https://clicktime.symantec.com/a/1/5LHAVBRYs1kFRS9ec81VjGNelk99qmXj03BPzgefWaI=?d=wnP_oFkkwGVYG7vs0E0T_7CDtq1f2XHtlaL-yP2y_-KdaTEe524FF9p2sNpf4N_D6OeSKUfOZPzBZqs_VgrHk9Qgh4t2Ik_DT5_jLPZ-rgy4WLSXrBLIUitwqgJ3F_5WXiibeUBp8q1Bhyt4Q4vsngufxVLyrEGWM-8xoJuG7-X6jJpiwEzVYArDBijGhkLT20bM2e1NtFAoVLL3_T1hjuWrNgVQEO7UHBWdRXXf_s-t5Zta1X6atFEPtu1igVqpRjV7Ndmq2cDwo-jjzxJEC5h0FFCtbk8vCAT8ROe48iz9RqyfMA9G1CyTkYxaJy5nMz0jOp31dDrD-KO9u97NMu-h87V0QrAnygnDLPUCX_fWZK6d-Tmzi88bGpSlCBT1BVyPWBglqucxNQdEFAId1Fq-UpAdCTNXC-93&u=http%3A%2F%2Fwww.w3.org%2F2003%2F05%2Fsoap-envelope%2F%2522' +
			'soap:encodingStyle="https://clicktime.symantec.com/a/1/mgPkMUiDyYk2NsPMR5xnj8LSP_6gZCGraUW27Ho2J7U=?d=wnP_oFkkwGVYG7vs0E0T_7CDtq1f2XHtlaL-yP2y_-KdaTEe524FF9p2sNpf4N_D6OeSKUfOZPzBZqs_VgrHk9Qgh4t2Ik_DT5_jLPZ-rgy4WLSXrBLIUitwqgJ3F_5WXiibeUBp8q1Bhyt4Q4vsngufxVLyrEGWM-8xoJuG7-X6jJpiwEzVYArDBijGhkLT20bM2e1NtFAoVLL3_T1hjuWrNgVQEO7UHBWdRXXf_s-t5Zta1X6atFEPtu1igVqpRjV7Ndmq2cDwo-jjzxJEC5h0FFCtbk8vCAT8ROe48iz9RqyfMA9G1CyTkYxaJy5nMz0jOp31dDrD-KO9u97NMu-h87V0QrAnygnDLPUCX_fWZK6d-Tmzi88bGpSlCBT1BVyPWBglqucxNQdEFAId1Fq-UpAdCTNXC-93&u=http%3A%2F%2Fwww.w3.org%2F2003%2F05%2Fsoap-encoding%2522>' + 
			'<soap:Body xmlns:m="https://clicktime.symantec.com/a/1/JIwp3fsT4SqKy3Ceczaw3E0_5tUSWKxCOgFmnCkd3Ec=?d=wnP_oFkkwGVYG7vs0E0T_7CDtq1f2XHtlaL-yP2y_-KdaTEe524FF9p2sNpf4N_D6OeSKUfOZPzBZqs_VgrHk9Qgh4t2Ik_DT5_jLPZ-rgy4WLSXrBLIUitwqgJ3F_5WXiibeUBp8q1Bhyt4Q4vsngufxVLyrEGWM-8xoJuG7-X6jJpiwEzVYArDBijGhkLT20bM2e1NtFAoVLL3_T1hjuWrNgVQEO7UHBWdRXXf_s-t5Zta1X6atFEPtu1igVqpRjV7Ndmq2cDwo-jjzxJEC5h0FFCtbk8vCAT8ROe48iz9RqyfMA9G1CyTkYxaJy5nMz0jOp31dDrD-KO9u97NMu-h87V0QrAnygnDLPUCX_fWZK6d-Tmzi88bGpSlCBT1BVyPWBglqucxNQdEFAId1Fq-UpAdCTNXC-93&u=http%3A%2F%2Fwww.example.org%2Fstock%2522>' + 
			'<m:GetStockPrice>' + 
			'<m:StockName>IBM</m:StockName>' + 
			'</m:GetStockPrice>' + 
			'</soap:Body>' + 
			'</soap:Envelope>'; 

function createRequest(method, url)
{
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	var xhr = new XMLHttpRequest();
	if("withCredentials" in xhr){
		xhr.open(method, url, false);
	} else if(typeof XDomainRquest != "undefined"){
		alert
		xhr = new XDomainRequest();
		xhr.open(method,url);
	}else {
		console.log("Request not supported");
		alert("Request not supported");
		xhr = null;
	}
	return xhr;
	
}

var xhr = createRequest("POST","https://ws.cdyne.com/delayedstockquote/delayedstockquote.asmx?wsdl");

if(!xhr)
{
	console.log("XHR issue");
}

var results = xhr.responseTest;
console.log(results);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send(str);

