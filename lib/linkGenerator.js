
class LinkGenerator {
	generate(realUrl, resFunc) {
		var miniUrl = hash(realUrl);
		resFunc(miniUrl);
	}
}