/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */html2canvas$1.exports,function(e,t){e.exports=function(){
/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */
//![[link|alias]] [alias](link){num}
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
//!Temporary hack
if(e.activeExcalidrawView=n,n&&(e.lastActiveExcalidrawFilePath=null===(A=n.file)||void 0===A?void 0:A.path),app.isMobile&&n&&!i){const e=document.querySelector("body>.app-container>.mobile-navbar");e&&e instanceof HTMLDivElement&&(e.style.position="relative")}if(app.isMobile&&!n&&i){const e=document.querySelector("body>.app-container>.mobile-navbar");e&&e instanceof HTMLDivElement&&(e.style.position="")}if(i&&i!==n&&(i.leaf!==t&&i.semaphores.dirty&&!i.semaphores.viewunload&&await i.save(!0),i.file&&e.triggerEmbedUpdates(i.file.path)),n&&(!i||i.leaf!==t)){const e=n.file;n.file&&setTimeout((()=>{var t;n&&n._loaded&&(null===(t=n.file)||void 0===t?void 0:t.path)===(null==e?void 0:e.path)&&(n.activeLoader||n.loadSceneFiles())}),2e3)}if(n&&n._loaded&&n.isLoaded&&n.excalidrawAPI&&e.ea.onCanvasColorChangeHook&&e.ea.onCanvasColorChangeHook(e.ea,n,n.excalidrawAPI.getAppState().viewBackgroundColor),e.popScope&&(e.popScope(),e.popScope=null),n){const t=e.app.keymap.getRootScope(),A=t.register(["Mod"],"Enter",(()=>!0));t.keys.unshift(t.keys.pop());const i=t.register(["Mod"],"k",(()=>!0));t.keys.unshift(t.keys.pop());const n=t.register(["Mod"],"f",(()=>{const e=this.app.workspace.getActiveViewOfType(ExcalidrawView);return!!e&&(search(e),!0)}));t.keys.unshift(t.keys.pop());const a=e.forceSaveCommand&&"s"===e.forceSaveCommand.hotkeys[0].key&&e.forceSaveCommand.hotkeys[0].modifiers.includes("Ctrl")?t.register(["Ctrl"],"s",(()=>e.forceSaveActiveView(!1))):void 0;a&&t.keys.unshift(t.keys.pop()),e.popScope=()=>{t.unregister(A),t.unregister(i),t.unregister(n),Boolean(a)&&t.unregister(a)}}}))),e.addFileSaveTriggerEventHandlers();const t=app.metadataCache;t.getCachedFiles().forEach((A=>{var i;const n=null===(i=t.getCache(A))||void 0===i?void 0:i.frontmatter;(n&&void 0!==n[FRONTMATTER_KEY]||A.match(/\.excalidraw$/))&&e.updateFileCache(app.vault.getAbstractFileByPath(A),n)})),this.registerEvent(t.on("changed",((e,t,A)=>this.updateFileCache(e,null==A?void 0:A.frontmatter))))}))}addFileSaveTriggerEventHandlers(){const e=e=>{this.activeExcalidrawView&&this.activeExcalidrawView.semaphores.dirty&&(!e.target||"excalidraw__canvas"!==e.target.className&&!getParentOfClass(e.target,"excalidraw-wrapper"))&&this.activeExcalidrawView.save()};this.app.workspace.containerEl.addEventListener("click",e),this.removeEventLisnters.push((()=>{this.app.workspace.containerEl.removeEventListener("click",e)})),this.registerEvent(this.app.workspace.on("file-menu",(()=>{this.activeExcalidrawView&&this.activeExcalidrawView.semaphores.dirty&&this.activeExcalidrawView.save()}))),this.modalContainerObserver=new MutationObserver((async e=>{1===e.length&&"childList"===e[0].type&&1===e[0].addedNodes.length&&this.activeExcalidrawView&&this.activeExcalidrawView.semaphores.dirty&&this.activeExcalidrawView.save()})),this.modalContainerObserver.observe(document.body,{childList:!0});const t=document.querySelector(".workspace-drawer.mod-left"),A=document.querySelector(".workspace-drawer.mod-right");if(t||A){const e=async e=>{"display: none;"===e[0].oldValue&&this.activeExcalidrawView&&this.activeExcalidrawView.semaphores.dirty&&this.activeExcalidrawView.save()},i={attributeOldValue:!0,attributeFilter:["style"]};t&&(this.workspaceDrawerLeftObserver=new MutationObserver(e),this.workspaceDrawerLeftObserver.observe(t,i)),A&&(this.workspaceDrawerRightObserver=new MutationObserver(e),this.workspaceDrawerRightObserver.observe(A,i))}}updateFileCache(e,t,A=!1){t&&void 0!==t[FRONTMATTER_KEY]?this.excalidrawFiles.add(e):A||"excalidraw"!==e.extension?this.excalidrawFiles.delete(e):this.excalidrawFiles.add(e)}onunload(){this.stylesManager.unload(),this.removeEventLisnters.forEach((e=>e())),destroyExcalidrawAutomate(),this.popScope&&(this.popScope(),this.popScope=null),this.observer.disconnect(),this.themeObserver.disconnect(),this.modalContainerObserver.disconnect(),this.workspaceDrawerLeftObserver&&this.workspaceDrawerLeftObserver.disconnect(),this.workspaceDrawerRightObserver&&this.workspaceDrawerRightObserver.disconnect(),this.fileExplorerObserver&&this.fileExplorerObserver.disconnect(),this.app.workspace.getLeavesOfType("excalidraw").forEach((e=>{this.setMarkdownView(e)})),this.mathjaxDiv&&document.body.removeChild(this.mathjaxDiv),Object.values(this.packageMap).forEach((e=>{delete e.excalidrawLib,delete e.reactDOM,delete e.react}))}async embedDrawing(e){const t=this.app.workspace.getActiveViewOfType(obsidian_module.MarkdownView);if(t&&t.file){const A=this.app.metadataCache.fileToLinktext(e,t.file.path,"excalidraw"===this.settings.embedType),i=t.editor;if("excalidraw"===this.settings.embedType)return i.replaceSelection(this.settings.embedWikiLink?`![[${A}]]`:`![](${encodeURI(A)})`),void i.focus();let n=this.settings.autoExportLightAndDark?getExportTheme(this,e,this.settings.exportWithTheme&&isObsidianThemeDark()?"dark":"light"):"";n=""===n?"":n+".";const a=getIMGFilename(A,n+this.settings.embedType.toLowerCase()),r=getIMGFilename(e.path,n+this.settings.embedType.toLowerCase()),s="dark."===n?"light.":"dark.",o=getIMGFilename(A,s+this.settings.embedType.toLowerCase());this.app.vault.getAbstractFileByPath(r)||(await this.app.vault.create(r,""),await sleep$1(200)),i.replaceSelection(this.settings.embedWikiLink?`![[${a}]]\n%%[[${A}|🖋 Edit in Excalidraw]]${o?", and the [["+o+"|"+s.split(".")[0]+" exported image]]":""}%%`:`![](${encodeURI(a)})\n%%[🖋 Edit in Excalidraw](${encodeURI(A)})${o?", and the ["+s.split(".")[0]+" exported image]("+encodeURI(o)+")":""}%%`),i.focus()}}async loadSettings(e={applyLefthandedMode:!0,reEnableAutosave:!1}){void 0===e.applyLefthandedMode&&(e.applyLefthandedMode=!0),void 0===e.reEnableAutosave&&(e.reEnableAutosave=!1),this.settings=Object.assign({},DEFAULT_SETTINGS,await this.loadData()),this.settings.previewImageType||(void 0===this.settings.displaySVGInPreview?this.settings.previewImageType=PreviewImageType.SVG:this.settings.previewImageType=this.settings.displaySVGInPreview?PreviewImageType.SVGIMG:PreviewImageType.PNG),e.applyLefthandedMode&&setLeftHandedMode(this.settings.isLeftHanded),e.reEnableAutosave&&(this.settings.autosave=!0),this.settings.autosaveInterval=app.isMobile?this.settings.autosaveIntervalMobile:this.settings.autosaveIntervalDesktop}async saveSettings(){await this.saveData(this.settings)}getStencilLibrary(){return""===this.settings.library||"deprecated"===this.settings.library?this.settings.library2:JSON_parse(this.settings.library)}setStencilLibrary(e){this.settings.library="deprecated",this.settings.library2=e}triggerEmbedUpdates(e){const t=new Set;app.workspace.iterateAllLeaves((A=>{const i=app.isMobile?document:A.view.containerEl.ownerDocument;if(!i)return;if(t.has(i))return;t.add(i);const n=i.createEvent("Event");n.initEvent(RERENDER_EVENT,!0,!1),i.querySelectorAll(".excalidraw-embedded-img"+(e?`[fileSource='${e.replaceAll("'","\\'")}']`:"")).forEach((e=>e.dispatchEvent(n)))}))}openDrawing(e,t,A=!1,i,n=!1){let a;"md-properties"===t&&(t="new-tab"),"popout-window"===t&&(a=app.workspace.openPopoutLeaf()),"new-tab"===t&&(a=app.workspace.getLeaf("tab")),a||(a=this.app.workspace.getLeaf(!1),"empty"!==a.view.getViewType()&&"new-pane"===t&&(a=getNewOrAdjacentLeaf(this,a))),a.openFile(e,i&&""!==i?{active:A,eState:{subpath:i}}:{active:A}).then((()=>{if(n&&this.ea.onFileCreateHook)try{this.ea.onFileCreateHook({ea:this.ea,excalidrawFile:e,view:a.view})}catch(e){console.error(e)}}))}async getBlankDrawing(){const e=this.app.metadataCache.getFirstLinkpathDest(obsidian_module.normalizePath(this.settings.templateFilePath),"");if(e&&e instanceof obsidian_module.TFile&&("md"==e.extension&&!this.settings.compatibilityMode||"excalidraw"==e.extension&&this.settings.compatibilityMode)){const t=await this.app.vault.read(e);if(t)return this.settings.matchTheme?changeThemeOfExcalidrawMD(t):t}if(this.settings.compatibilityMode)return this.settings.matchTheme&&isObsidianThemeDark()?DARK_BLANK_DRAWING:BLANK_DRAWING;const t=this.settings.matchTheme&&isObsidianThemeDark()?DARK_BLANK_DRAWING:BLANK_DRAWING;return`${FRONTMATTER}\n${getMarkdownDrawingSection(t,this.settings.compress)}`}async exportSceneToMD(e){var t,A;if(!e)return"";const i=null===(t=JSON_parse(e).elements)||void 0===t?void 0:t.filter((e=>"text"==e.type));let n,a="# Text Elements\n";for(const t of i)n=t.id,t.id.length>8&&(n=nanoid(),e=e.replaceAll(t.id,n)),a+=`${null!==(A=t.originalText)&&void 0!==A?A:t.text} ^${n}\n\n`;return a+getMarkdownDrawingSection(JSON.stringify(JSON_parse(e),null,"\t"),this.settings.compress)}async createDrawing(e,t,A){const i=obsidian_module.normalizePath(t||this.settings.folder);await checkAndCreateFolder(i);const n=getNewUniqueFilepath(this.app.vault,e,i),a=await this.app.vault.create(n,null!=A?A:await this.getBlankDrawing());let r=0;for(;a instanceof obsidian_module.TFile&&!this.isExcalidrawFile(a)&&r++<10;)await sleep$1(50);return r>10&&errorlog({file:a,error:"new drawing not recognized as an excalidraw file",fn:this.createDrawing}),a}async createAndOpenDrawing(e,t,A,i){const n=await this.createDrawing(e,A,i);return this.openDrawing(n,t,!0,void 0,!0),n.path}async setMarkdownView(e){const t=e.view.getState();await e.setViewState({type:"excalidraw",state:{file:null}}),await e.setViewState({type:"markdown",state:t,popstate:!0},{focus:!0})}async setExcalidrawView(e){await e.setViewState({type:"excalidraw",state:e.view.getState(),popstate:!0})}isExcalidrawFile(e){if(!e)return!1;if("excalidraw"===e.extension)return!0;const t=e?this.app.metadataCache.getFileCache(e):null;return!!(null==t?void 0:t.frontmatter)&&!!t.frontmatter[FRONTMATTER_KEY]}async exportLibrary(){this.app.isMobile?new Prompt(this.app,"Please provide a filename","my-library","filename, leave blank to cancel action").openAndGetValue((async e=>{if(!e)return;e=`${e}.excalidrawlib`;const t=obsidian_module.normalizePath(this.settings.folder);await checkAndCreateFolder(t);const A=getNewUniqueFilepath(this.app.vault,e,t);this.app.vault.create(A,this.settings.library),new obsidian_module.Notice(`Exported library to ${A}`,6e3)})):download("data:text/plain;charset=utf-8",encodeURIComponent(JSON.stringify(this.settings.library2,null,"\t")),"my-obsidian-library.excalidrawlib")}}module.exports=ExcalidrawPlugin;