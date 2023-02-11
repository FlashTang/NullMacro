@:build(NullMacro.build())
class Main {
	static function main() {
		var a:Dynamic = {
			b: {}
		};
		@null a.b.c.d.a = 2;
		@null a.b.c.d.a();
		@null a.b.d = 3;
	}
}
