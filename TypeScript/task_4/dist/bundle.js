/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cTeacher: () => (/* binding */ cTeacher),
/* harmony export */   cpp: () => (/* binding */ cpp),
/* harmony export */   java: () => (/* binding */ java),
/* harmony export */   react: () => (/* binding */ react)
/* harmony export */ });
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var cTeacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10
};
// --- TEST C++ ---
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// --- TEST Java ---
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// --- TEST React ---
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ0xPLElBQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5DLElBQU0sUUFBUSxHQUFxQjtJQUN4QyxTQUFTLEVBQUUsV0FBVztJQUN0QixRQUFRLEVBQUUsT0FBTztJQUNqQixtQkFBbUIsRUFBRSxFQUFFO0NBQ3hCLENBQUM7QUFFRixtQkFBbUI7QUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBRXZDLG9CQUFvQjtBQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFFeEMscUJBQXFCO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5leHBvcnQgY29uc3QgY3BwID0gbmV3IFN1YmplY3RzLkNwcCgpO1xuZXhwb3J0IGNvbnN0IGphdmEgPSBuZXcgU3ViamVjdHMuSmF2YSgpO1xuZXhwb3J0IGNvbnN0IHJlYWN0ID0gbmV3IFN1YmplY3RzLlJlYWN0KCk7XG5cbmV4cG9ydCBjb25zdCBjVGVhY2hlcjogU3ViamVjdHMuVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnR3VpbGxhdW1lJyxcbiAgbGFzdE5hbWU6ICdTYWx2YScsXG4gIGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwXG59O1xuXG4vLyAtLS0gVEVTVCBDKysgLS0tXG5jb25zb2xlLmxvZygnQysrJyk7XG5jcHAuc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coY3BwLmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG5cbi8vIC0tLSBURVNUIEphdmEgLS0tXG5jb25zb2xlLmxvZygnSmF2YScpO1xuamF2YS5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2coamF2YS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG4vLyAtLS0gVEVTVCBSZWFjdCAtLS1cbmNvbnNvbGUubG9nKCdSZWFjdCcpO1xucmVhY3Quc2V0VGVhY2hlcihjVGVhY2hlcik7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==