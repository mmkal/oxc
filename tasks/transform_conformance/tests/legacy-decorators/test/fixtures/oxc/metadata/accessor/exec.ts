import "reflect-metadata";

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

const e = new Entity();
expect(Reflect.getMetadata("design:type", e, "name")).toBe(String);
expect(Reflect.getMetadata("design:type", e, "count")).toBe(Number);
expect(Reflect.getMetadata("design:type", e, "flag")).toBe(Boolean);
expect(Reflect.getMetadata("design:type", e, "untyped")).toBe(Object);
expect(Reflect.getMetadata("design:type", e, "list")).toBe(Array);
expect(Reflect.getMetadata("design:type", e, "pending")).toBe(Promise);
expect(Reflect.getMetadata("design:type", e, "addr")).toBe(Addr);
expect(Reflect.getMetadata("design:type", Entity, "sName")).toBe(String);
