"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1488,3441,72],{3441:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(8723),i=t(5113),m=Object.freeze({displayName:"XML",name:"xml",patterns:[{begin:"(<\\?)\\s*([-_a-zA-Z0-9]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml",patterns:[{match:" ([a-zA-Z-]+)",name:"entity.other.attribute-name.xml"},{include:"#doublequotedString"},{include:"#singlequotedString"}]},{begin:"(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.doctype.xml"},3:{name:"variable.language.documentroot.xml"}},end:"\\s*(>)",name:"meta.tag.sgml.doctype.xml",patterns:[{include:"#internalSubset"}]},{include:"#comments"},{begin:"(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"},3:{name:"entity.name.tag.namespace.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)",endCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"punctuation.definition.tag.xml"},3:{name:"entity.name.tag.xml"},4:{name:"entity.name.tag.namespace.xml"},5:{name:"punctuation.separator.namespace.xml"},6:{name:"entity.name.tag.localname.xml"},7:{name:"punctuation.definition.tag.xml"}},name:"meta.tag.no-content.xml",patterns:[{include:"#tagStuff"}]},{begin:"(</?)(?:([-\\w\\.]+)((:)))?([-\\w\\.:]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.namespace.xml"},3:{name:"entity.name.tag.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(/?>)",name:"meta.tag.xml",patterns:[{include:"#tagStuff"}]},{include:"#entity"},{include:"#bare-ampersand"},{begin:"<%@",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java-props.embedded.xml",patterns:[{match:"page|include|taglib",name:"keyword.other.page-props.xml"}]},{begin:"<%[!=]?(?!--)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"(?!--)%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java.embedded.xml",patterns:[{include:"source.java"}]},{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"]]>",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.unquoted.cdata.xml"}],repository:{EntityDecl:{begin:"(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.entity.xml"},3:{name:"punctuation.definition.entity.xml"},4:{name:"variable.language.entity.xml"},5:{name:"keyword.other.entitytype.xml"}},end:"(>)",patterns:[{include:"#doublequotedString"},{include:"#singlequotedString"}]},"bare-ampersand":{match:"&",name:"invalid.illegal.bad-ampersand.xml"},comments:{patterns:[{begin:"<%--",captures:{0:{name:"punctuation.definition.comment.xml"},end:"--%>",name:"comment.block.xml"}},{begin:"\x3c!--",captures:{0:{name:"punctuation.definition.comment.xml"}},end:"--\x3e",name:"comment.block.xml",patterns:[{begin:"--(?!>)",captures:{0:{name:"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]},doublequotedString:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.double.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},entity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.xml"},internalSubset:{begin:"(\\[)",captures:{1:{name:"punctuation.definition.constant.xml"}},end:"(\\])",name:"meta.internalsubset.xml",patterns:[{include:"#EntityDecl"},{include:"#parameterEntity"},{include:"#comments"}]},parameterEntity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)",name:"constant.character.parameter-entity.xml"},singlequotedString:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.single.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},tagStuff:{patterns:[{captures:{1:{name:"entity.other.attribute-name.namespace.xml"},2:{name:"entity.other.attribute-name.xml"},3:{name:"punctuation.separator.namespace.xml"},4:{name:"entity.other.attribute-name.localname.xml"}},match:"(?:^|\\s+)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*="},{include:"#doublequotedString"},{include:"#singlequotedString"}]}},scopeName:"text.xml",embeddedLangs:["java"]}),u=[].concat((0,a.Z)(i.default),[m])},1488:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(8723),i=t(3441),m=Object.freeze({displayName:"XSL",name:"xsl",patterns:[{begin:"(<)(xsl)((:))(template)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.namespace.xml"},3:{name:"entity.name.tag.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(>)",name:"meta.tag.xml.template",patterns:[{captures:{1:{name:"entity.other.attribute-name.namespace.xml"},2:{name:"entity.other.attribute-name.xml"},3:{name:"punctuation.separator.namespace.xml"},4:{name:"entity.other.attribute-name.localname.xml"}},match:" (?:([-_a-zA-Z0-9]+)((:)))?([a-zA-Z-]+)"},{include:"#doublequotedString"},{include:"#singlequotedString"}]},{include:"text.xml"}],repository:{doublequotedString:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.double.xml"},singlequotedString:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.single.xml"}},scopeName:"text.xml.xsl",embeddedLangs:["xml"]}),u=[].concat((0,a.Z)(i.default),[m])}}]);
//# sourceMappingURL=1488.6e1cae14.chunk.js.map