import { __decorate, __param } from "tslib";
import { Optional } from '@angular/core';
import { BodyOutputType } from './bodyOutputType';
export const DefaultTypeClasses = {
    error: 'toast-error',
    info: 'toast-info',
    wait: 'toast-wait',
    success: 'toast-success',
    warning: 'toast-warning'
};
export const DefaultIconClasses = {
    error: 'icon-error',
    info: 'icon-info',
    wait: 'icon-wait',
    success: 'icon-success',
    warning: 'icon-warning'
};
let ToasterConfig = class ToasterConfig {
    limit;
    tapToDismiss;
    showCloseButton;
    closeHtml;
    newestOnTop;
    timeout;
    typeClasses;
    iconClasses;
    bodyOutputType;
    bodyTemplate;
    defaultToastType;
    // Options (see CSS):
    // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-center',
    // 'toast-top-left', 'toast-top-center', 'toast-top-right',
    // 'toast-bottom-left', 'toast-bottom-center', 'toast-bottom-right',
    positionClass;
    titleClass;
    messageClass;
    animation;
    preventDuplicates;
    mouseoverTimerStop;
    toastContainerId;
    constructor(configOverrides) {
        configOverrides = configOverrides || {};
        this.limit = configOverrides.limit || null;
        this.tapToDismiss = configOverrides.tapToDismiss != null ? configOverrides.tapToDismiss : true;
        this.showCloseButton = configOverrides.showCloseButton != null ? configOverrides.showCloseButton : false;
        this.closeHtml = configOverrides.closeHtml || '<span>&times;</span>';
        this.newestOnTop = configOverrides.newestOnTop != null ? configOverrides.newestOnTop : true;
        this.timeout = configOverrides.timeout != null ? configOverrides.timeout : 5000;
        this.typeClasses = configOverrides.typeClasses || DefaultTypeClasses;
        this.iconClasses = configOverrides.iconClasses || DefaultIconClasses;
        this.bodyOutputType = configOverrides.bodyOutputType || BodyOutputType.Default;
        this.bodyTemplate = configOverrides.bodyTemplate || 'toasterBodyTmpl.html';
        this.defaultToastType = configOverrides.defaultToastType || 'info';
        this.positionClass = configOverrides.positionClass || 'toast-top-right';
        this.titleClass = configOverrides.titleClass || 'toast-title';
        this.messageClass = configOverrides.messageClass || 'toast-message';
        this.animation = configOverrides.animation || '';
        this.preventDuplicates = configOverrides.preventDuplicates != null ? configOverrides.preventDuplicates : false;
        this.mouseoverTimerStop = configOverrides.mouseoverTimerStop != null ? configOverrides.mouseoverTimerStop : false;
        this.toastContainerId = configOverrides.toastContainerId != null ? configOverrides.toastContainerId : null;
    }
};
ToasterConfig = __decorate([
    __param(0, Optional())
], ToasterConfig);
export { ToasterConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMi10b2FzdGVyL3NyYy9saWIvdG9hc3Rlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYyxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2xELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFzQztJQUNqRSxLQUFLLEVBQUUsYUFBYTtJQUNwQixJQUFJLEVBQUUsWUFBWTtJQUNsQixJQUFJLEVBQUUsWUFBWTtJQUNsQixPQUFPLEVBQUUsZUFBZTtJQUN4QixPQUFPLEVBQUUsZUFBZTtDQUMzQixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQXNDO0lBQ2pFLEtBQUssRUFBRSxZQUFZO0lBQ25CLElBQUksRUFBRSxXQUFXO0lBQ2pCLElBQUksRUFBRSxXQUFXO0lBQ2pCLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLE9BQU8sRUFBRSxjQUFjO0NBQzFCLENBQUM7QUEyQkssSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYTtJQUN0QixLQUFLLENBQWU7SUFDcEIsWUFBWSxDQUFVO0lBQ3RCLGVBQWUsQ0FBMkM7SUFDMUQsU0FBUyxDQUFTO0lBQ2xCLFdBQVcsQ0FBVTtJQUNyQixPQUFPLENBQXlDO0lBQ2hELFdBQVcsQ0FBa0M7SUFDN0MsV0FBVyxDQUFrQztJQUM3QyxjQUFjLENBQWlCO0lBQy9CLFlBQVksQ0FBUztJQUNyQixnQkFBZ0IsQ0FBWTtJQUM1QixxQkFBcUI7SUFDckIscUVBQXFFO0lBQ3JFLDJEQUEyRDtJQUMzRCxvRUFBb0U7SUFDcEUsYUFBYSxDQUFTO0lBQ3RCLFVBQVUsQ0FBUztJQUNuQixZQUFZLENBQVM7SUFDckIsU0FBUyxDQUFTO0lBQ2xCLGlCQUFpQixDQUFVO0lBQzNCLGtCQUFrQixDQUFVO0lBQzVCLGdCQUFnQixDQUFlO0lBRS9CLFlBQXdCLGVBQWdDO1FBQ3BELGVBQWUsR0FBRyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9GLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLElBQUksc0JBQXNCLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzVGLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxXQUFXLElBQUksa0JBQWtCLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxJQUFJLGtCQUFrQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLFlBQVksSUFBSSxzQkFBc0IsQ0FBQztRQUMzRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxhQUFhLElBQUksaUJBQWlCLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxZQUFZLElBQUksZUFBZSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9HLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0csQ0FBQztDQUNKLENBQUE7QUE3Q1ksYUFBYTtJQXdCVCxXQUFBLFFBQVEsRUFBRSxDQUFBO0dBeEJkLGFBQWEsQ0E2Q3pCO1NBN0NZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb2R5T3V0cHV0VHlwZSB9IGZyb20gJy4vYm9keU91dHB1dFR5cGUnO1xyXG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0VHlwZUNsYXNzZXMgOiB7IFtrZXkgaW4gVG9hc3RUeXBlXT8gOiBzdHJpbmcgfSA9IHtcclxuICAgIGVycm9yOiAndG9hc3QtZXJyb3InLFxyXG4gICAgaW5mbzogJ3RvYXN0LWluZm8nLFxyXG4gICAgd2FpdDogJ3RvYXN0LXdhaXQnLFxyXG4gICAgc3VjY2VzczogJ3RvYXN0LXN1Y2Nlc3MnLFxyXG4gICAgd2FybmluZzogJ3RvYXN0LXdhcm5pbmcnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdEljb25DbGFzc2VzIDogeyBba2V5IGluIFRvYXN0VHlwZV0/IDogc3RyaW5nIH0gPSB7XHJcbiAgICBlcnJvcjogJ2ljb24tZXJyb3InLFxyXG4gICAgaW5mbzogJ2ljb24taW5mbycsXHJcbiAgICB3YWl0OiAnaWNvbi13YWl0JyxcclxuICAgIHN1Y2Nlc3M6ICdpY29uLXN1Y2Nlc3MnLFxyXG4gICAgd2FybmluZzogJ2ljb24td2FybmluZydcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvYXN0ZXJDb25maWcge1xyXG4gICAgbGltaXQ/OiBudW1iZXJ8bnVsbDtcclxuICAgIHRhcFRvRGlzbWlzcz86IGJvb2xlYW47XHJcbiAgICBzaG93Q2xvc2VCdXR0b24/OiBib29sZWFufHsgW2tleSBpbiBUb2FzdFR5cGVdPzogYm9vbGVhbn07XHJcbiAgICBjbG9zZUh0bWw/OiBzdHJpbmc7XHJcbiAgICBuZXdlc3RPblRvcD86IGJvb2xlYW47XHJcbiAgICB0aW1lb3V0PzogbnVtYmVyfHsgW2tleSBpbiBUb2FzdFR5cGVdPzogbnVtYmVyIH07XHJcbiAgICB0eXBlQ2xhc3Nlcz86IHsgW2tleSBpbiBUb2FzdFR5cGVdPzogc3RyaW5nIH07XHJcbiAgICBpY29uQ2xhc3Nlcz86IHsgW2tleSBpbiBUb2FzdFR5cGVdPzogc3RyaW5nIH07XHJcbiAgICBib2R5T3V0cHV0VHlwZT86IEJvZHlPdXRwdXRUeXBlO1xyXG4gICAgYm9keVRlbXBsYXRlPzogc3RyaW5nO1xyXG4gICAgZGVmYXVsdFRvYXN0VHlwZT86IFRvYXN0VHlwZTtcclxuICAgIC8vIE9wdGlvbnMgKHNlZSBDU1MpOlxyXG4gICAgLy8gJ3RvYXN0LXRvcC1mdWxsLXdpZHRoJywgJ3RvYXN0LWJvdHRvbS1mdWxsLXdpZHRoJywgJ3RvYXN0LWNlbnRlcicsXHJcbiAgICAvLyAndG9hc3QtdG9wLWxlZnQnLCAndG9hc3QtdG9wLWNlbnRlcicsICd0b2FzdC10b3AtcmlnaHQnLFxyXG4gICAgLy8gJ3RvYXN0LWJvdHRvbS1sZWZ0JywgJ3RvYXN0LWJvdHRvbS1jZW50ZXInLCAndG9hc3QtYm90dG9tLXJpZ2h0JyxcclxuICAgIHBvc2l0aW9uQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICB0aXRsZUNsYXNzPzogc3RyaW5nO1xyXG4gICAgbWVzc2FnZUNsYXNzPzogc3RyaW5nO1xyXG4gICAgYW5pbWF0aW9uPzogc3RyaW5nO1xyXG4gICAgcHJldmVudER1cGxpY2F0ZXM/OiBib29sZWFuO1xyXG4gICAgbW91c2VvdmVyVGltZXJTdG9wPzogYm9vbGVhbjtcclxuICAgIHRvYXN0Q29udGFpbmVySWQ/OiBudW1iZXJ8bnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJDb25maWcgaW1wbGVtZW50cyBJVG9hc3RlckNvbmZpZyB7XHJcbiAgICBsaW1pdD86IG51bWJlcnxudWxsO1xyXG4gICAgdGFwVG9EaXNtaXNzOiBib29sZWFuO1xyXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiBib29sZWFufHsgW2tleSBpbiBUb2FzdFR5cGVdPzogYm9vbGVhbiB9O1xyXG4gICAgY2xvc2VIdG1sOiBzdHJpbmc7XHJcbiAgICBuZXdlc3RPblRvcDogYm9vbGVhbjtcclxuICAgIHRpbWVvdXQ6IG51bWJlcnx7IFtrZXkgaW4gVG9hc3RUeXBlXT86IG51bWJlciB9O1xyXG4gICAgdHlwZUNsYXNzZXM6IHsgW2tleSBpbiBUb2FzdFR5cGVdPzogc3RyaW5nIH07XHJcbiAgICBpY29uQ2xhc3NlczogeyBba2V5IGluIFRvYXN0VHlwZV0/OiBzdHJpbmcgfTtcclxuICAgIGJvZHlPdXRwdXRUeXBlOiBCb2R5T3V0cHV0VHlwZTtcclxuICAgIGJvZHlUZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgZGVmYXVsdFRvYXN0VHlwZTogVG9hc3RUeXBlO1xyXG4gICAgLy8gT3B0aW9ucyAoc2VlIENTUyk6XHJcbiAgICAvLyAndG9hc3QtdG9wLWZ1bGwtd2lkdGgnLCAndG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgnLCAndG9hc3QtY2VudGVyJyxcclxuICAgIC8vICd0b2FzdC10b3AtbGVmdCcsICd0b2FzdC10b3AtY2VudGVyJywgJ3RvYXN0LXRvcC1yaWdodCcsXHJcbiAgICAvLyAndG9hc3QtYm90dG9tLWxlZnQnLCAndG9hc3QtYm90dG9tLWNlbnRlcicsICd0b2FzdC1ib3R0b20tcmlnaHQnLFxyXG4gICAgcG9zaXRpb25DbGFzczogc3RyaW5nO1xyXG4gICAgdGl0bGVDbGFzczogc3RyaW5nO1xyXG4gICAgbWVzc2FnZUNsYXNzOiBzdHJpbmc7XHJcbiAgICBhbmltYXRpb246IHN0cmluZztcclxuICAgIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuO1xyXG4gICAgbW91c2VvdmVyVGltZXJTdG9wOiBib29sZWFuO1xyXG4gICAgdG9hc3RDb250YWluZXJJZD86IG51bWJlcnxudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGNvbmZpZ092ZXJyaWRlcz86IElUb2FzdGVyQ29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnT3ZlcnJpZGVzID0gY29uZmlnT3ZlcnJpZGVzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMubGltaXQgPSBjb25maWdPdmVycmlkZXMubGltaXQgfHwgbnVsbDtcclxuICAgICAgICB0aGlzLnRhcFRvRGlzbWlzcyA9IGNvbmZpZ092ZXJyaWRlcy50YXBUb0Rpc21pc3MgIT0gbnVsbCA/IGNvbmZpZ092ZXJyaWRlcy50YXBUb0Rpc21pc3MgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0Nsb3NlQnV0dG9uID0gY29uZmlnT3ZlcnJpZGVzLnNob3dDbG9zZUJ1dHRvbiAhPSBudWxsID8gY29uZmlnT3ZlcnJpZGVzLnNob3dDbG9zZUJ1dHRvbiA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xvc2VIdG1sID0gY29uZmlnT3ZlcnJpZGVzLmNsb3NlSHRtbCB8fCAnPHNwYW4+JnRpbWVzOzwvc3Bhbj4nO1xyXG4gICAgICAgIHRoaXMubmV3ZXN0T25Ub3AgPSBjb25maWdPdmVycmlkZXMubmV3ZXN0T25Ub3AgIT0gbnVsbCA/IGNvbmZpZ092ZXJyaWRlcy5uZXdlc3RPblRvcCA6IHRydWU7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gY29uZmlnT3ZlcnJpZGVzLnRpbWVvdXQgIT0gbnVsbCA/IGNvbmZpZ092ZXJyaWRlcy50aW1lb3V0IDogNTAwMDtcclxuICAgICAgICB0aGlzLnR5cGVDbGFzc2VzID0gY29uZmlnT3ZlcnJpZGVzLnR5cGVDbGFzc2VzIHx8IERlZmF1bHRUeXBlQ2xhc3NlcztcclxuICAgICAgICB0aGlzLmljb25DbGFzc2VzID0gY29uZmlnT3ZlcnJpZGVzLmljb25DbGFzc2VzIHx8IERlZmF1bHRJY29uQ2xhc3NlcztcclxuICAgICAgICB0aGlzLmJvZHlPdXRwdXRUeXBlID0gY29uZmlnT3ZlcnJpZGVzLmJvZHlPdXRwdXRUeXBlIHx8IEJvZHlPdXRwdXRUeXBlLkRlZmF1bHQ7XHJcbiAgICAgICAgdGhpcy5ib2R5VGVtcGxhdGUgPSBjb25maWdPdmVycmlkZXMuYm9keVRlbXBsYXRlIHx8ICd0b2FzdGVyQm9keVRtcGwuaHRtbCc7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0VG9hc3RUeXBlID0gY29uZmlnT3ZlcnJpZGVzLmRlZmF1bHRUb2FzdFR5cGUgfHwgJ2luZm8nO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25DbGFzcyA9IGNvbmZpZ092ZXJyaWRlcy5wb3NpdGlvbkNsYXNzIHx8ICd0b2FzdC10b3AtcmlnaHQnO1xyXG4gICAgICAgIHRoaXMudGl0bGVDbGFzcyA9IGNvbmZpZ092ZXJyaWRlcy50aXRsZUNsYXNzIHx8ICd0b2FzdC10aXRsZSc7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQ2xhc3MgPSBjb25maWdPdmVycmlkZXMubWVzc2FnZUNsYXNzIHx8ICd0b2FzdC1tZXNzYWdlJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGNvbmZpZ092ZXJyaWRlcy5hbmltYXRpb24gfHwgJyc7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RHVwbGljYXRlcyA9IGNvbmZpZ092ZXJyaWRlcy5wcmV2ZW50RHVwbGljYXRlcyAhPSBudWxsID8gY29uZmlnT3ZlcnJpZGVzLnByZXZlbnREdXBsaWNhdGVzIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3VzZW92ZXJUaW1lclN0b3AgPSBjb25maWdPdmVycmlkZXMubW91c2VvdmVyVGltZXJTdG9wICE9IG51bGwgPyBjb25maWdPdmVycmlkZXMubW91c2VvdmVyVGltZXJTdG9wIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b2FzdENvbnRhaW5lcklkID0gY29uZmlnT3ZlcnJpZGVzLnRvYXN0Q29udGFpbmVySWQgIT0gbnVsbCA/IGNvbmZpZ092ZXJyaWRlcy50b2FzdENvbnRhaW5lcklkIDogbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=