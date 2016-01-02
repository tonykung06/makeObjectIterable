# makeObjectIterable
a simple tool to make native JavaScript object iterable, e.g. used in for...of, spread operator

#Usage

##for...of
```
const originalObj = {
	prop1: 'value1',
	prop2: 'value2'
};

const iterableObj = makeObjectIterable(originalObj);

for (let value of iterableObj) {
	console.log(value);
}
```

##spread operator
```
const originalObj = {
	prop1: 'value1',
	prop2: 'value2'
};

const iterableObj = makeObjectIterable(originalObj);

console.log([...iterableObj]);
```

##array destructuring
```
const originalObj = {
	prop1: 'value1',
	prop2: 'value2'
};

const iterableObj = makeObjectIterable(originalObj);
const [prop1, prop2] = iterableObj;

console.log(prop1, prop2);
```
