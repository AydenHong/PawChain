let currentDate = () => {
	var year = new Date().getFullYear();
	var month = new Date().getMonth();
	var date = new Date().getDate();

	return String(year + month + date);
};
// 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?'
// 'serviceKey=DrBCc6VIxYHNvgp3uEwtWG3WiZ3QdLS5khEl6Yltx3Kff0kbfNGPYODcrydKDEgNEMDDCEVyAJBv0hOkam5jMg%3D%3D&bgnde=20190901&endde=20191001&upkind=417000&state=notice&pageNo=1&numOfRows=10&neuter_yn=Y'

let serviceKey =
	'DrBCc6VIxYHNvgp3uEwtWG3WiZ3QdLS5khEl6Yltx3Kff0kbfNGPYODcrydKDEgNEMDDCEVyAJBv0hOkam5jMg%3D%3D';
let bgnde = '20190101'; //유기날짜 (검색 시작일) (YYYYMMDD)
let endde = '20190930'; //유기날짜 (검색 종료일) (YYYYMMDD)
let upkind = '41700'; // 축종코드 - 개 : 417000 - 고양이 : 422400 - 기타 : 429900
let kind = null; //품종코드 (품종 조회 OPEN API 참조)
let upr_ce = null; //시도코드 (시도 조회 OPEN API 참조)
let org_cd = null; //시군구코드 (시군구 조회 OPEN API 참조)
let care_reg_no = null; //보호소번호 (보호소 조회 OPEN API 참조)
let state = 'notice'; //상태 - 전체 : null(빈값) - 공고중 : notice - 보호중 : protect
let pageNo = '1'; //페이지 번호
let numOfRows = '10'; //페이지당 보여줄 개수
let neuter_yn = 'Y'; //중성화여부

export async function abandonmentPublicSrvc(
	serviceKey,
	bgnde,
	endde,
	upkind,
	kind,
	upr_ce,
	org_cd,
	care_reg_no,
	state,
	pageNo,
	numOfRows,
	neuter_yn
) {
	let baseUrl =
		'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc';
	let url =
		baseUrl +
		'?serviceKey=' +
		serviceKey +
		'&bgnde=' +
		bgnde +
		'&endde=' +
		endde +
		'&upkind=' +
		upkind +
		'&state=' +
		state +
		'&pageNo=' +
		pageNo +
		'&numOfRows=' +
		numOfRows +
		'&neuter_yn=' +
		neuter_yn;
	console.log('-------------url--------------');
	console.log(url);
	// const response = await fetch(url);
	// if (response.ok) {
	// 	return response.json();
	// 	console.log(response.json);
	// }
	// return false;

	// var request = new XMLHttpRequest();
	// request.onreadystatechange = (e) => {
	// 	if (request.readyState !== 4) {
	// 		return;
	// 	}

	// 	if (request.status === 200) {
	// 		console.log('success', request.responseText);
	// 	} else {
	// 		console.warn('error');
	// 	}
	// };

	// request.open('GET', url);
	// request.send();
	// console.log(request);
}

// abandonmentPublicSrvc(
// 	serviceKey,
// 	bgnde,
// 	endde,
// 	upkind,
// 	kind,
// 	upr_ce,
// 	org_cd,
// 	care_reg_no,
// 	state,
// 	pageNo,
// 	numOfRows,
// 	neuter_yn
// );
