function dec() {}

class Addr {
	street: string = "";
}

class Entity {
	@dec accessor name: string = "";
	@dec accessor count: number = 0;
	@dec accessor flag: boolean = false;
	@dec accessor untyped = "x";
	@dec accessor list: string[] = [];
	@dec accessor pending: Promise<string> = Promise.resolve("");
	@dec accessor addr: Addr = new Addr();
	@dec static accessor sName: string = "";
}
