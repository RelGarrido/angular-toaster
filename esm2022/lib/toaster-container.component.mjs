import { Component, Input } from '@angular/core';
import { Transitions } from './transitions';
import { ToasterConfig } from './toaster-config';
import * as i0 from "@angular/core";
import * as i1 from "./toaster.service";
import * as i2 from "@angular/common";
import * as i3 from "./toast.component";
export class ToasterContainerComponent {
    addToastSubscriber;
    clearToastsSubscriber;
    toasterService;
    toasterconfig;
    toasts = [];
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    ngOnInit() {
        this.registerSubscribers();
        if (this.isNullOrUndefined(this.toasterconfig)) {
            this.toasterconfig = new ToasterConfig();
        }
        else {
            this.toasterconfig = new ToasterConfig(this.toasterconfig);
        }
    }
    // event handlers
    click(toast, isCloseButton) {
        if (toast.onClickCallback) {
            toast.onClickCallback(toast);
        }
        const tapToDismiss = !this.isNullOrUndefined(toast.tapToDismiss)
            ? toast.tapToDismiss
            : this.toasterconfig?.tapToDismiss;
        if (tapToDismiss || (toast.showCloseButton && isCloseButton)) {
            this.removeToast(toast);
        }
    }
    childClick($event) {
        this.click($event.value.toast, $event.value.isCloseButton);
    }
    removeToast(toast) {
        const index = this.toasts.indexOf(toast);
        if (index < 0) {
            return;
        }
        ;
        const toastId = this.toastIdOrDefault(toast);
        this.toasts.splice(index, 1);
        if (toast.onHideCallback) {
            toast.onHideCallback(toast);
        }
        this.toasterService._removeToastSubject.next({ toastId: toastId, toastContainerId: toast.toastContainerId });
    }
    // private functions
    registerSubscribers() {
        this.addToastSubscriber = this.toasterService.addToast.subscribe((toast) => {
            this.addToast(toast);
        });
        this.clearToastsSubscriber = this.toasterService.clearToasts.subscribe((clearWrapper) => {
            this.clearToasts(clearWrapper);
        });
    }
    addToast(toast) {
        if (toast.toastContainerId && this.toasterconfig.toastContainerId
            && toast.toastContainerId !== this.toasterconfig.toastContainerId) {
            return;
        }
        ;
        if (!toast.type
            || !this.toasterconfig.typeClasses?.[toast.type]
            || !this.toasterconfig.iconClasses?.[toast.type]) {
            toast.type = this.toasterconfig.defaultToastType || 'success';
        }
        if (this.toasterconfig.preventDuplicates && this.toasts.length > 0) {
            if (toast.toastId && this.toasts.some(t => t.toastId === toast.toastId)) {
                return;
            }
            else if (this.toasts.some(t => t.body === toast.body)) {
                return;
            }
        }
        if (this.isNullOrUndefined(toast.showCloseButton)) {
            if (typeof this.toasterconfig.showCloseButton === 'object') {
                toast.showCloseButton = this.toasterconfig.showCloseButton[toast.type];
            }
            else if (typeof this.toasterconfig.showCloseButton === 'boolean') {
                toast.showCloseButton = this.toasterconfig.showCloseButton;
            }
        }
        if (toast.showCloseButton) {
            toast.closeHtml = toast.closeHtml || this.toasterconfig.closeHtml;
        }
        toast.bodyOutputType = toast.bodyOutputType || this.toasterconfig.bodyOutputType;
        if (this.toasterconfig.newestOnTop) {
            this.toasts.unshift(toast);
            if (this.isLimitExceeded()) {
                this.toasts.pop();
            }
        }
        else {
            this.toasts.push(toast);
            if (this.isLimitExceeded()) {
                this.toasts.shift();
            }
        }
        if (toast.onShowCallback) {
            toast.onShowCallback(toast);
        }
    }
    isLimitExceeded() {
        return this.toasterconfig.limit && this.toasts.length > this.toasterconfig.limit;
    }
    removeAllToasts() {
        for (let i = this.toasts.length - 1; i >= 0; i--) {
            this.removeToast(this.toasts[i]);
        }
    }
    clearToasts(clearWrapper) {
        const toastId = clearWrapper.toastId;
        const toastContainerId = clearWrapper.toastContainerId;
        if (this.isNullOrUndefined(toastContainerId) || (toastContainerId === this.toasterconfig.toastContainerId)) {
            this.clearToastsAction(toastId);
        }
    }
    clearToastsAction(toastId) {
        if (toastId) {
            this.removeToast(this.toasts.filter(t => t.toastId === toastId)[0]);
        }
        else {
            this.removeAllToasts();
        }
    }
    toastIdOrDefault(toast) {
        return toast.toastId || '';
    }
    isNullOrUndefined(value) {
        return value === null || typeof value === 'undefined';
    }
    ngOnDestroy() {
        if (this.addToastSubscriber) {
            this.addToastSubscriber.unsubscribe();
        }
        if (this.clearToastsSubscriber) {
            this.clearToastsSubscriber.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterContainerComponent, deps: [{ token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ToasterContainerComponent, selector: "toaster-container", inputs: { toasterconfig: "toasterconfig" }, ngImport: i0, template: `
        <div class="toast-container" [ngClass]="[toasterconfig.positionClass]">
            <div toastComp *ngFor="let toast of toasts" class="toast" [toast]="toast"
                [toasterconfig]="toasterconfig"
                [@toastState]="toasterconfig.animation || ''"
                [titleClass]="toasterconfig.titleClass || ''"
                [messageClass]="toasterconfig.messageClass || ''"
                [ngClass]="[
                    toasterconfig.iconClasses?.[toast.type],
                    toasterconfig.typeClasses?.[toast.type]
                ]"
                (click)="click(toast)" (clickEvent)="childClick($event)"
                (removeToastEvent)="removeToast($event)"
            >
            </div>
        </div>
        `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.ToastComponent, selector: "[toastComp]", inputs: ["toasterconfig", "toast", "titleClass", "messageClass"], outputs: ["clickEvent", "removeToastEvent"] }], animations: Transitions });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'toaster-container',
                    template: `
        <div class="toast-container" [ngClass]="[toasterconfig.positionClass]">
            <div toastComp *ngFor="let toast of toasts" class="toast" [toast]="toast"
                [toasterconfig]="toasterconfig"
                [@toastState]="toasterconfig.animation || ''"
                [titleClass]="toasterconfig.titleClass || ''"
                [messageClass]="toasterconfig.messageClass || ''"
                [ngClass]="[
                    toasterconfig.iconClasses?.[toast.type],
                    toasterconfig.typeClasses?.[toast.type]
                ]"
                (click)="click(toast)" (clickEvent)="childClick($event)"
                (removeToastEvent)="removeToast($event)"
            >
            </div>
        </div>
        `,
                    animations: Transitions
                }]
        }], ctorParameters: function () { return [{ type: i1.ToasterService }]; }, propDecorators: { toasterconfig: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhcjItdG9hc3Rlci9zcmMvbGliL3RvYXN0ZXItY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULEtBQUssRUFHUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBMEJqRSxNQUFNLE9BQU8seUJBQXlCO0lBQzFCLGtCQUFrQixDQUFNO0lBQ3hCLHFCQUFxQixDQUFNO0lBQzNCLGNBQWMsQ0FBaUI7SUFFOUIsYUFBYSxDQUFrQjtJQUVqQyxNQUFNLEdBQVksRUFBRSxDQUFDO0lBRTVCLFlBQVksY0FBOEI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQzVDO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsS0FBSyxDQUFDLEtBQVksRUFBRSxhQUF1QjtRQUN2QyxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFD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TTtZQUNILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFZO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQVU7UUFDaEMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQztJQUMxRCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQUU7UUFDdkUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FBRTtJQUNqRixDQUFDO3VHQXZKUSx5QkFBeUI7MkZBQXpCLHlCQUF5QixxR0FuQnhCOzs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JMLGljQUNPLFdBQVc7OzJGQUVkLHlCQUF5QjtrQkFyQnJDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JMO29CQUNMLFVBQVUsRUFBRSxXQUFXO2lCQUMxQjtxR0FNWSxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIElucHV0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT25EZXN0cm95XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25zIH0gZnJvbSAnLi90cmFuc2l0aW9ucyc7XHJcbmltcG9ydCB7IElUb2FzdGVyQ29uZmlnLCBUb2FzdGVyQ29uZmlnIH0gZnJvbSAnLi90b2FzdGVyLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlfSBmcm9tICcuL3RvYXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IElDbGVhcldyYXBwZXIgfSBmcm9tICcuL2NsZWFyV3JhcHBlcic7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi90b2FzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndG9hc3Rlci1jb250YWluZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiW3RvYXN0ZXJjb25maWcucG9zaXRpb25DbGFzc11cIj5cclxuICAgICAgICAgICAgPGRpdiB0b2FzdENvbXAgKm5nRm9yPVwibGV0IHRvYXN0IG9mIHRvYXN0c1wiIGNsYXNzPVwidG9hc3RcIiBbdG9hc3RdPVwidG9hc3RcIlxyXG4gICAgICAgICAgICAgICAgW3RvYXN0ZXJjb25maWddPVwidG9hc3RlcmNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgICBbQHRvYXN0U3RhdGVdPVwidG9hc3RlcmNvbmZpZy5hbmltYXRpb24gfHwgJydcIlxyXG4gICAgICAgICAgICAgICAgW3RpdGxlQ2xhc3NdPVwidG9hc3RlcmNvbmZpZy50aXRsZUNsYXNzIHx8ICcnXCJcclxuICAgICAgICAgICAgICAgIFttZXNzYWdlQ2xhc3NdPVwidG9hc3RlcmNvbmZpZy5tZXNzYWdlQ2xhc3MgfHwgJydcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiW1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJjb25maWcuaWNvbkNsYXNzZXM/Llt0b2FzdC50eXBlXSxcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdGVyY29uZmlnLnR5cGVDbGFzc2VzPy5bdG9hc3QudHlwZV1cclxuICAgICAgICAgICAgICAgIF1cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrKHRvYXN0KVwiIChjbGlja0V2ZW50KT1cImNoaWxkQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAocmVtb3ZlVG9hc3RFdmVudCk9XCJyZW1vdmVUb2FzdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgLFxyXG4gICAgYW5pbWF0aW9uczogVHJhbnNpdGlvbnNcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIGFkZFRvYXN0U3Vic2NyaWJlcjogYW55O1xyXG4gICAgcHJpdmF0ZSBjbGVhclRvYXN0c1N1YnNjcmliZXI6IGFueTtcclxuICAgIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHRvYXN0ZXJjb25maWchOiBJVG9hc3RlckNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgdG9hc3RzOiBUb2FzdFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZSA9IHRvYXN0ZXJTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTdWJzY3JpYmVycygpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudG9hc3RlcmNvbmZpZykpIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdGVyY29uZmlnID0gbmV3IFRvYXN0ZXJDb25maWcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyY29uZmlnID0gbmV3IFRvYXN0ZXJDb25maWcodGhpcy50b2FzdGVyY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXZlbnQgaGFuZGxlcnNcclxuICAgIGNsaWNrKHRvYXN0OiBUb2FzdCwgaXNDbG9zZUJ1dHRvbj86IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodG9hc3Qub25DbGlja0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRvYXN0Lm9uQ2xpY2tDYWxsYmFjayh0b2FzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXBUb0Rpc21pc3MgPSAhdGhpcy5pc051bGxPclVuZGVmaW5lZCh0b2FzdC50YXBUb0Rpc21pc3MpXHJcbiAgICAgICAgICAgID8gdG9hc3QudGFwVG9EaXNtaXNzXHJcbiAgICAgICAgICAgIDogdGhpcy50b2FzdGVyY29uZmlnPy50YXBUb0Rpc21pc3M7XHJcblxyXG4gICAgICAgIGlmICh0YXBUb0Rpc21pc3MgfHwgKHRvYXN0LnNob3dDbG9zZUJ1dHRvbiAmJiBpc0Nsb3NlQnV0dG9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRvYXN0KHRvYXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRDbGljaygkZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuY2xpY2soJGV2ZW50LnZhbHVlLnRvYXN0LCAkZXZlbnQudmFsdWUuaXNDbG9zZUJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9hc3QodG9hc3Q6IFRvYXN0KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvYXN0cy5pbmRleE9mKHRvYXN0KTtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7IHJldHVybiB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2FzdElkID0gdGhpcy50b2FzdElkT3JEZWZhdWx0KHRvYXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy50b2FzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHRvYXN0Lm9uSGlkZUNhbGxiYWNrKSB7IHRvYXN0Lm9uSGlkZUNhbGxiYWNrKHRvYXN0KTsgfVxyXG4gICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuX3JlbW92ZVRvYXN0U3ViamVjdC5uZXh0KHsgdG9hc3RJZDogdG9hc3RJZCwgdG9hc3RDb250YWluZXJJZDogdG9hc3QudG9hc3RDb250YWluZXJJZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgcHJpdmF0ZSByZWdpc3RlclN1YnNjcmliZXJzKCkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9hc3RTdWJzY3JpYmVyID0gdGhpcy50b2FzdGVyU2VydmljZS5hZGRUb2FzdC5zdWJzY3JpYmUoKHRvYXN0OiBUb2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvYXN0KHRvYXN0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhclRvYXN0c1N1YnNjcmliZXIgPSB0aGlzLnRvYXN0ZXJTZXJ2aWNlLmNsZWFyVG9hc3RzLnN1YnNjcmliZSgoY2xlYXJXcmFwcGVyOiBJQ2xlYXJXcmFwcGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUb2FzdHMoY2xlYXJXcmFwcGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFRvYXN0KHRvYXN0OiBUb2FzdCkge1xyXG4gICAgICAgIGlmICh0b2FzdC50b2FzdENvbnRhaW5lcklkICYmIHRoaXMudG9hc3RlcmNvbmZpZy50b2FzdENvbnRhaW5lcklkXHJcbiAgICAgICAgICAgICYmIHRvYXN0LnRvYXN0Q29udGFpbmVySWQgIT09IHRoaXMudG9hc3RlcmNvbmZpZy50b2FzdENvbnRhaW5lcklkKSB7IHJldHVybiB9O1xyXG5cclxuICAgICAgICBpZiAoIXRvYXN0LnR5cGVcclxuICAgICAgICAgICAgfHwgIXRoaXMudG9hc3RlcmNvbmZpZy50eXBlQ2xhc3Nlcz8uW3RvYXN0LnR5cGVdXHJcbiAgICAgICAgICAgIHx8ICF0aGlzLnRvYXN0ZXJjb25maWcuaWNvbkNsYXNzZXM/Llt0b2FzdC50eXBlXSkge1xyXG4gICAgICAgICAgICB0b2FzdC50eXBlID0gdGhpcy50b2FzdGVyY29uZmlnLmRlZmF1bHRUb2FzdFR5cGUgfHwgJ3N1Y2Nlc3MnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG9hc3RlcmNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyAmJiB0aGlzLnRvYXN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2FzdC50b2FzdElkICYmIHRoaXMudG9hc3RzLnNvbWUodCA9PiB0LnRvYXN0SWQgPT09IHRvYXN0LnRvYXN0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdHMuc29tZSh0ID0+IHQuYm9keSA9PT0gdG9hc3QuYm9keSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNOdWxsT3JVbmRlZmluZWQodG9hc3Quc2hvd0Nsb3NlQnV0dG9uKSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudG9hc3RlcmNvbmZpZy5zaG93Q2xvc2VCdXR0b24gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5zaG93Q2xvc2VCdXR0b24gPSB0aGlzLnRvYXN0ZXJjb25maWcuc2hvd0Nsb3NlQnV0dG9uW3RvYXN0LnR5cGVdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnRvYXN0ZXJjb25maWcuc2hvd0Nsb3NlQnV0dG9uID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LnNob3dDbG9zZUJ1dHRvbiA9IDxib29sZWFuPnRoaXMudG9hc3RlcmNvbmZpZy5zaG93Q2xvc2VCdXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0b2FzdC5zaG93Q2xvc2VCdXR0b24pIHtcclxuICAgICAgICAgICAgdG9hc3QuY2xvc2VIdG1sID0gdG9hc3QuY2xvc2VIdG1sIHx8IHRoaXMudG9hc3RlcmNvbmZpZy5jbG9zZUh0bWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2FzdC5ib2R5T3V0cHV0VHlwZSA9IHRvYXN0LmJvZHlPdXRwdXRUeXBlIHx8IHRoaXMudG9hc3RlcmNvbmZpZy5ib2R5T3V0cHV0VHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG9hc3RlcmNvbmZpZy5uZXdlc3RPblRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvYXN0cy51bnNoaWZ0KHRvYXN0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMaW1pdEV4Y2VlZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RzLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b2FzdHMucHVzaCh0b2FzdCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTGltaXRFeGNlZWRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvYXN0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodG9hc3Qub25TaG93Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdG9hc3Qub25TaG93Q2FsbGJhY2sodG9hc3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTGltaXRFeGNlZWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2FzdGVyY29uZmlnLmxpbWl0ICYmIHRoaXMudG9hc3RzLmxlbmd0aCA+IHRoaXMudG9hc3RlcmNvbmZpZy5saW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZUFsbFRvYXN0cygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy50b2FzdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVUb2FzdCh0aGlzLnRvYXN0c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJUb2FzdHMoY2xlYXJXcmFwcGVyOiBJQ2xlYXJXcmFwcGVyKSB7XHJcbiAgICAgICAgY29uc3QgdG9hc3RJZCA9IGNsZWFyV3JhcHBlci50b2FzdElkIDtcclxuICAgICAgICBjb25zdCB0b2FzdENvbnRhaW5lcklkID0gY2xlYXJXcmFwcGVyLnRvYXN0Q29udGFpbmVySWQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbE9yVW5kZWZpbmVkKHRvYXN0Q29udGFpbmVySWQpIHx8ICh0b2FzdENvbnRhaW5lcklkID09PSB0aGlzLnRvYXN0ZXJjb25maWcudG9hc3RDb250YWluZXJJZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRvYXN0c0FjdGlvbih0b2FzdElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhclRvYXN0c0FjdGlvbih0b2FzdElkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRvYXN0SWQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVUb2FzdCh0aGlzLnRvYXN0cy5maWx0ZXIodCA9PiB0LnRvYXN0SWQgPT09IHRvYXN0SWQpWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbFRvYXN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvYXN0SWRPckRlZmF1bHQodG9hc3Q6IFRvYXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvYXN0LnRvYXN0SWQgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc051bGxPclVuZGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkVG9hc3RTdWJzY3JpYmVyKSB7IHRoaXMuYWRkVG9hc3RTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7IH1cclxuICAgICAgICBpZiAodGhpcy5jbGVhclRvYXN0c1N1YnNjcmliZXIpIHsgdGhpcy5jbGVhclRvYXN0c1N1YnNjcmliZXIudW5zdWJzY3JpYmUoKTsgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==