import "../../widgets/CodeBox";
import "../../widgets/Wallpaper";

import wp1 from "./w1.jpg";
import wp2 from "./w2.jpg";
import wp3 from "./w3.jpg";
import wp4 from "./w4.jpg";

const banner =
    "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const codeContent = `
# Import Aspose.Words for Python via .NET module
import aspose.words as aw
# Create and save a simple document
doc = aw.Document('xxx.pdf')
# Save file to local
doc.save('xxx.epub')
`;

const article = {
    id: "2024-04-27",
    title: "每周分享 - Coding",
    time2read: "3 min",
    datetime: "27/04/2024",
    type: "article",
    banner,
    chapters: [
        {
            title: "编码暴论",
            content: ` 
            <blockquote>业务代码有时候宁肯多写几行，也不要自以为很“Hack”的整些花活，花活出的时候一时爽，后期维护简直就是火葬场！<br/><br/>比如修改组件内的属性值，就直接的使用<label class="inline-code">this.prop = 'xxx'</label>最直观，不要用什么<label class="inline-code">Object.assign</label>，更不要用什么<label class="inline-code">loadsh.set</label>，也不要<label class="inline-code">this.$set</label>。<br/><br/>是的很多行为都可以实现某一个效果，但是行为本身越直观、易理解、可预测，越是<label class="inline-highlight">“上乘”代码</label>，越是<label class="inline-highlight">“优雅”代码</label>。<br/><br/>什么是整洁？整洁不是一尘不染，整洁是“有序”，是拿眼一看、一扫，什么就都明白了。

还有，减少使用属性值传递到某个函数内进行隐式修改赋值的操作，这属于“暗箱操作”，是“黑魔法”，是“邪恶”的手段。

这会让维护者根本不知道为什么在这个类里，这个属性只出现了两次，一次定义，一次取值，但是却搞不明白到底什么时候赋值的，且它还真的有值了，简直是<label class="inline-highlight">“神迹”</label>一般！这不是编码码者该有的操作，我们的行为、我们的代码该是有迹可循的，可预判的，可阅读的！
</blockquote>`,
        },
        {
            title: "一些想法",
            content: `
            以上“暴论”是我在实际的业务开发过程中，维护、Review他人代码和自己代码的时候总结出的经验。
            
关于写代码，工作过程中必不可少的环节就是Code Review，无论是真的很保守主义的严苛执行规范也好，还是形式主义的走马观花也罢，亦或是介于两者之中的灰色地带。我认为，有这个环节是很必要的。

目前公司团队又至上而下的推一些新的编码规范、Code Review规范等，出发点是好的，可是事情做起来就很“操蛋”。那些规范的制定者要么不是开发序列的人员，文档编写者可能已经转岗，不再对规范文档负责，评论区的疑问点几乎没有回答过。

实操起来就是：拉了一个群，告诉你们有这么一件事，别细问，问就再拉人进群，直到无人可拉，那么不清楚的地方下来再讨论，谁和谁讨论？什么时候讨论？讨论的结果是什么？那就等吧...

规范要求，只有通过考试才能提交代码，通过审核认可，才可以审批PR，通过审批才可以合并PR，进行上线操作。最终讨论下来，可能还是要看职级、看是不是管理岗，外包人员只需要提交代码即可等等一系列窠臼操作。

<ul>
<li>如果高P人员早就不写代码了呢？</li>
<li>让这样的人审PR，合并PR的意义又在哪里？</li>
<li>怎么就假设低P人员写的代码就一定没有中高职级的人写的好？</li>
<li>又怎么得出的外包人员就没有审核PR的能力的？</li>
</ul>

一系列的操作让人蒙圈。
            `,
        },
        {
            title: "聊些开心的",
            content: `
组织结构调整后，新的部门放宽了技术栈的使用。于是我大胆的设想，后续的新的项目使用React来搞。

花了三天的时间，把原Vue2的仓库中的部分核心底层平台能力全部迁移到了一个新的monorepo架构仓库。

新仓库基于：<label class="inline-highlight">Vite + React + React-Router6 + Mobx + Unocss + ahooks + Echarts + Scss</label>
            
Vue3之前自己搞个人小项目也玩过，也挺不错，但是既然有选择的话，我还是更愿意选择React。当然也在小组内做了调研，发现大多数都愿意尝试使用React开发，只有极个别的有顾虑，认为Vue2切换到Vue3学习成本更低。

但是其实就我个人的使用体感来说，React并没有难上手的，只要秉持着<label class="inline-highlight">Keep Simple</label>的原则，其实什么框架都无所谓！
`,
        },
        {
            title: "PDF转epub",
            content: `
            帮老婆下载了一个PDF格式的书（医学书可真的是大部头，上来就500+MB），我想，在手机上看PDF的话，好像不是很方便查目录和打标机以及订书签，于是想着将从zlib上下载的PDF转化成epub，于是先用DeftPDF这个网站试试，发现免费版只能支持到50MB<br/><br/>
<iframe src="https://deftpdf.com/" type="website"></iframe>
<br/><br/>
于是果断... 果断放弃，选择Python。Python上有一个库<a href="https://products.aspose.com/words/python-net/conversion/pdf-to-epub/" target="_blank">Aspose</a>
<br/><br/>
<iframe src="https://products.aspose.com/words/python-net/conversion/pdf-to-epub/" type="website"></iframe>
<br/><br/>
这玩意儿很强大，还特别好用，两行代码就搞定了。

<codebox-widget code="${codeContent}" lang="python"></codebox-widget>

不过遗憾的是，我下载的PDF是扫描版，本身的排版就有问题，所以转化出来的内容排版错乱，最后只能放弃。😭
            `,
        },
        {
            title: "壁纸分享",
            content: `<wallpaper-widget images="${[
                wp3,
                wp2,
                wp4,
                wp1,
            ]}"></wallpaper-widget>
            

<div style="text-align:center">望喜之</div>            `,
        },
    ],
};

export default article;
