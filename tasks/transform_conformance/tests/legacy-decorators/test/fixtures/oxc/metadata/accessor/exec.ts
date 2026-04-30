import "reflect-metadata";

function dec() {}

class Entity {
	@dec accessor name: string = "";
	@dec accessor count: number = 0;
	@dec accessor flag: boolean = false;
	@dec accessor untyped = "x";
	@dec static accessor sName: string = "";
}

const e = new Entity();
expect(Reflect.getMetadata("design:type", e, "name")).toBe(String);
expect(Reflect.getMetadata("design:type", e, "count")).toBe(Number);
expect(Reflect.getMetadata("design:type", e, "flag")).toBe(Boolean);
expect(Reflect.getMetadata("design:type", e, "untyped")).toBe(Object);
expect(Reflect.getMetadata("design:type", Entity, "sName")).toBe(String);
