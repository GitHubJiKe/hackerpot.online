import "../widgets/CodeBox";

const code = `
function logic() {
    // 一些非常复杂的逻辑在这里实现
}

// module A

logic();

// module B
logic()

// module ...

logic()
`;

const code2 = `
function logic() {
    // 一些非常复杂的逻辑在这里实现
}

// module A

logic();

// module B
logic()

// module ...

logic()

// module X

function logicX() {
    // X模块的独特逻辑
}
`;

const code3 = `
class Shape:
    def draw(self, shape_type):
        if shape_type == 'circle':
            self.draw_circle()
        elif shape_type == 'rectangle':
            self.draw_rectangle()
    def draw_circle(self):
        print('Drawing a circle')
    def draw_rectangle(self):
        print('Drawing a rectangle')

`;

const code4 = `
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def draw(self):
        pass

class Circle(Shape):
    def draw(self):
        print('Drawing a circle')

class Rectangle(Shape):
    def draw(self):
        print('Drawing a rectangle')

# 客户端代码
shapes = [Circle(), Rectangle()]
for shape in shapes:
    shape.draw()

`;

const card = {
    id: "2024-05-25",
    title: `Don't Repeat Yourself? Open Closed First!`,
    time2read: "5 min",
    datetime: "25/05/2024",
    type: "article",
    banner: "https://images.unsplash.com/photo-1558174685-430919a96c8d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    chapters: [
        {
            title: "什么是DRY原则",
            content: `DRY原则（Don't Repeat Yourself）是软件开发中的一个重要设计原则，旨在减少代码中的重复，提高代码的可维护性和可重用性。这个原则由Andy Hunt和Dave Thomas在他们的著作《程序员修炼之道》（The Pragmatic Programmer）中首次提出。以下是对DRY原则的详细介绍：
            
#### 核心理念

DRY原则的核心理念是：任何知识在系统中都应该具有唯一、明确、权威的表示。这意味着每一块逻辑、每一个数据结构、每一个业务规则，都应该在代码中只出现一次。如果在多个地方需要使用同样的逻辑或数据，应该通过复用的方式实现，而不是简单地复制粘贴。

#### 优点

- 可维护性高：当逻辑发生变化时，只需要修改一个地方，就可以确保整个系统的一致性，减少了维护的成本和出错的风险。
- 可读性好：代码更加简洁、清晰，易于理解和阅读。
- 降低冗余：减少重复代码，提高代码的复用性和模块化程度，使系统更加灵活和可扩展。

#### 实践方法

- 抽象和封装：通过函数、类、模块等手段，将重复的逻辑抽象出来，封装成独立的组件。
- 使用库和框架：利用现有的库和框架，避免重新实现已经解决的问题。
- 模板和生成代码：对于需要重复的结构化代码，可以使用模板或代码生成工具来创建。
- 配置和参数化：将不同场景下变化的部分通过配置或参数传递，避免硬编码重复。
            `,
            format: "md",
        },
        {
            title: "可以打破DRY",
            content: `如果一个项目中的固有的功能可能已经让你抽象除了一些公共逻辑，但是新的需求带来了一些变化，需要你不得不去修改某些公共引用的逻辑。你会怎么处理？
比如：<codebox-widget code="${code}" lang="js"></codebox-widget> <i style="color:#111">logic</i>函数被多个模块引用，但是新引入一个模块<b style="color:red">X</b>
但是<b style="color:red">X</b>的逻辑和其他模块有分歧，你是会选择在<i style="color:#111">logic</i>函数内修改逻辑，还是直接将<i style="color:#111">logic</i>函数直接copy一份进行修改？
<br/>
<br/>
如果是我，我会选择不动<i style="color:#111">logic</i>函数的原逻辑，我会直接新建一个函数来实现：<codebox-widget code="${code2}" lang="js"></codebox-widget>
<br/>
<br/>
这样做的好处在于：
<p>1. 通过扩展来实现新的功能</p>
<p>2. 新的代码不会对固有代码带去副作用</p>
<p>3. 测试只需要测试对应的X模块即可，不需要考虑已有其他模块的回归</p>
<br/>
<br/>
当然这么做可能在一定程度上打破了DRY原则，因为我们需要copy一份既有函数的逻辑，但是为了稳定性我们可以这么做！因为这更符合一个第一优先级的原则：<strong>OCP原则</strong>

            `,
        },
        {
            title: "OCP原则",
            content: `OCP原则（Open-Closed Principle，开闭原则）是面向对象设计的五大原则之一，由Bertrand Meyer在他的著作《面向对象软件构造》中提出。OCP原则强调软件实体（类、模块、函数等）应该对扩展开放，对修改关闭。以下是对OCP原则的详细介绍：
#### 核心理念

OCP原则的核心理念是：软件实体应该可以扩展，但不应该修改。这意味着当软件需求变化时，我们应该通过增加新的代码来扩展现有功能，而不是修改现有的代码。通过遵循OCP原则，可以提高系统的稳定性和可维护性。

#### 优点

- 提高可维护性：减少对已有代码的修改，降低引入新错误的风险。
- 增强可扩展性：通过扩展而非修改，可以更容易地添加新功能。
- 促进模块化设计：鼓励将不同功能模块化，提高代码的重用性和独立性。

#### 实践方法

- 使用抽象和接口：通过定义抽象类或接口，提供扩展点，使具体实现可以独立变化。
- 依赖倒置原则（DIP）：高层模块不应该依赖低层模块，二者都应该依赖抽象。抽象不应该依赖细节，细节应该依赖抽象。
- 策略模式：通过策略模式将行为封装在独立的类中，使得行为可以在不修改原始类的情况下动态更改。

`,
            format: "md",
        },
        {
            title: "例子",
            content: `<h5>示例1：形状绘制</h5>
            假设我们有一个简单的图形绘制程序，最初只支持绘制圆形。后来需要支持绘制矩形。按照OCP原则，我们应该通过扩展而不是修改现有代码来实现这一需求。
            <strong>违反OCP的代码：</strong>
            <codebox-widget code="${code3}" lang="python"></codebox-widget>
            <strong>遵循OCP的代码：</strong>
            <codebox-widget code="${code4}" lang="python"></codebox-widget>
            <p>通过引入抽象类 PaymentProcessor 并为每种具体的支付方式创建子类，我们可以轻松地添加新的支付方式而无需修改现有代码。</p>
            <h4>总结</h4>
OCP原则是面向对象设计中的一个重要原则，通过对扩展开放、对修改关闭，可以提高系统的可维护性和可扩展性。在实际开发中，遵循OCP原则能够帮助开发者创建更加灵活、稳定的系统架构。通过使用抽象和接口等手段，可以实现对新功能的无缝扩展，而不影响现有系统的稳定性。
`,
        },
    ],
};

export default card;
