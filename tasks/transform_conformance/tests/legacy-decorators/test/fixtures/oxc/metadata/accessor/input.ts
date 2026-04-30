declare function dec(target: any, propertyKey: string): void;

class Entity {
	@dec accessor name: string = "";
	@dec accessor count: number = 0;
	@dec accessor flag: boolean = false;
	@dec accessor untyped = "x";
	@dec static accessor sName: string = "";
}
