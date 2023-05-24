import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { BodyOutputType } from './bodyOutputType';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./trust-html.pipe";
export class ToastComponent {
    componentFactoryResolver;
    changeDetectorRef;
    ngZone;
    element;
    renderer2;
    toasterconfig;
    toast;
    titleClass;
    messageClass;
    componentBody;
    progressBarWidth = -1;
    bodyOutputType = BodyOutputType;
    clickEvent = new EventEmitter();
    removeToastEvent = new EventEmitter();
    timeoutId = null;
    timeout = 0;
    progressBarIntervalId = null;
    removeToastTick;
    removeMouseOverListener;
    constructor(componentFactoryResolver, changeDetectorRef, ngZone, element, renderer2) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.element = element;
        this.renderer2 = renderer2;
    }
    ngOnInit() {
        if (this.toast.progressBar) {
            this.toast.progressBarDirection = this.toast.progressBarDirection || 'decreasing';
        }
        let timeout = (typeof this.toast.timeout === 'number')
            ? this.toast.timeout : this.toasterconfig.timeout;
        if (typeof timeout === 'object') {
            // @ts-ignore
            timeout = timeout[this.toast.type];
        }
        // @ts-ignore
        this.timeout = timeout;
    }
    ngAfterViewInit() {
        if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
            const component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
            const componentInstance = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
            componentInstance.instance.toast = this.toast;
            this.changeDetectorRef.detectChanges();
        }
        if (this.toasterconfig.mouseoverTimerStop) {
            // only apply a mouseenter event when necessary to avoid
            // unnecessary event and change detection cycles.
            this.removeMouseOverListener = this.renderer2.listen(this.element.nativeElement, 'mouseenter', () => this.stopTimer());
        }
        this.configureTimer();
    }
    click(event, toast) {
        event.stopPropagation();
        this.clickEvent.emit({ value: { toast: toast, isCloseButton: true } });
    }
    stopTimer() {
        this.progressBarWidth = 0;
        this.clearTimers();
    }
    restartTimer() {
        if (this.toasterconfig.mouseoverTimerStop) {
            if (!this.timeoutId) {
                this.configureTimer();
            }
        }
        else if (this.timeout && !this.timeoutId) {
            this.removeToast();
        }
    }
    ngOnDestroy() {
        if (this.removeMouseOverListener) {
            this.removeMouseOverListener();
        }
        this.clearTimers();
    }
    configureTimer() {
        if (!this.timeout || this.timeout < 1) {
            return;
        }
        if (this.toast.progressBar) {
            this.removeToastTick = new Date().getTime() + this.timeout;
            this.progressBarWidth = -1;
        }
        this.ngZone.runOutsideAngular(() => {
            this.timeoutId = window.setTimeout(() => {
                this.ngZone.run(() => {
                    this.changeDetectorRef.markForCheck();
                    this.removeToast();
                });
            }, this.timeout);
            if (this.toast.progressBar) {
                this.progressBarIntervalId = window.setInterval(() => {
                    this.ngZone.run(() => {
                        this.updateProgressBar();
                    });
                }, 10);
            }
        });
    }
    updateProgressBar() {
        if (this.progressBarWidth === 0 || this.progressBarWidth === 100) {
            return;
        }
        this.progressBarWidth = ((this.removeToastTick - new Date().getTime()) / this.timeout) * 100;
        if (this.toast.progressBarDirection === 'increasing') {
            this.progressBarWidth = 100 - this.progressBarWidth;
        }
        if (this.progressBarWidth < 0) {
            this.progressBarWidth = 0;
        }
        if (this.progressBarWidth > 100) {
            this.progressBarWidth = 100;
        }
    }
    clearTimers() {
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }
        if (this.progressBarIntervalId) {
            window.clearInterval(this.progressBarIntervalId);
        }
        this.timeoutId = null;
        this.progressBarIntervalId = null;
    }
    removeToast() {
        this.removeToastEvent.emit(this.toast);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToastComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: ToastComponent, selector: "[toastComp]", inputs: { toasterconfig: "toasterconfig", toast: "toast", titleClass: "titleClass", messageClass: "messageClass" }, outputs: { clickEvent: "clickEvent", removeToastEvent: "removeToastEvent" }, host: { listeners: { "mouseleave": "restartTimer()" } }, viewQueries: [{ propertyName: "componentBody", first: true, predicate: ["componentBody"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: `
    <div class="toast-content">
      <div [ngClass]="titleClass">{{toast.title}}</div>
      <div [ngClass]="messageClass" [ngSwitch]="toast.bodyOutputType">
        <div *ngSwitchCase="bodyOutputType.Component" #componentBody></div>
        <div *ngSwitchCase="bodyOutputType.TrustedHtml" [innerHTML]="toast.body | trustHtml"></div>
        <div *ngSwitchCase="bodyOutputType.Default">{{toast.body}}</div>
      </div>
    </div>
    <button class="toast-close-button" *ngIf="toast.showCloseButton" (click)="click($event, toast)"
      [innerHTML]="toast.closeHtml | trustHtml">
    </button>
    <div *ngIf="toast.progressBar">
      <div class="toast-progress-bar" [style.width]="progressBarWidth + '%'"></div>
    </div>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "pipe", type: i2.TrustHtmlPipe, name: "trustHtml" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[toastComp]',
                    template: `
    <div class="toast-content">
      <div [ngClass]="titleClass">{{toast.title}}</div>
      <div [ngClass]="messageClass" [ngSwitch]="toast.bodyOutputType">
        <div *ngSwitchCase="bodyOutputType.Component" #componentBody></div>
        <div *ngSwitchCase="bodyOutputType.TrustedHtml" [innerHTML]="toast.body | trustHtml"></div>
        <div *ngSwitchCase="bodyOutputType.Default">{{toast.body}}</div>
      </div>
    </div>
    <button class="toast-close-button" *ngIf="toast.showCloseButton" (click)="click($event, toast)"
      [innerHTML]="toast.closeHtml | trustHtml">
    </button>
    <div *ngIf="toast.progressBar">
      <div class="toast-progress-bar" [style.width]="progressBarWidth + '%'"></div>
    </div>`
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { toasterconfig: [{
                type: Input
            }], toast: [{
                type: Input
            }], titleClass: [{
                type: Input
            }], messageClass: [{
                type: Input
            }], componentBody: [{
                type: ViewChild,
                args: ['componentBody', { read: ViewContainerRef, static: false }]
            }], clickEvent: [{
                type: Output
            }], removeToastEvent: [{
                type: Output
            }], restartTimer: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhcjItdG9hc3Rlci9zcmMvbGliL3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUdULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQXFCbEQsTUFBTSxPQUFPLGNBQWM7SUF1QmY7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQTFCRCxhQUFhLENBQWtCO0lBQy9CLEtBQUssQ0FBUztJQUNkLFVBQVUsQ0FBVTtJQUNwQixZQUFZLENBQVU7SUFDd0MsYUFBYSxDQUFvQjtJQUVqRyxnQkFBZ0IsR0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5QixjQUFjLEdBQUcsY0FBYyxDQUFDO0lBR2hDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWhDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFFNUMsU0FBUyxHQUFtQixJQUFJLENBQUM7SUFDakMsT0FBTyxHQUFXLENBQUMsQ0FBQztJQUNwQixxQkFBcUIsR0FBbUIsSUFBSSxDQUFDO0lBQzdDLGVBQWUsQ0FBVTtJQUV6Qix1QkFBdUIsQ0FBYztJQUU3QyxZQUNVLHdCQUFrRCxFQUNsRCxpQkFBb0MsRUFDcEMsTUFBYyxFQUNkLE9BQW1CLEVBQ25CLFNBQW9CO1FBSnBCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzNCLENB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QUNWO3FOQUVVLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDaUUsYUFBYTtzQkFBbkYsU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFNOUQsVUFBVTtzQkFEaEIsTUFBTTtnQkFHQSxnQkFBZ0I7c0JBRHRCLE1BQU07Z0JBbUVQLFlBQVk7c0JBRFgsWUFBWTt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3RvYXN0JztcclxuaW1wb3J0IHsgQm9keU91dHB1dFR5cGUgfSBmcm9tICcuL2JvZHlPdXRwdXRUeXBlJztcclxuaW1wb3J0IHsgSVRvYXN0ZXJDb25maWcsIFRvYXN0ZXJDb25maWcgfSBmcm9tICcuL3RvYXN0ZXItY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3RvYXN0Q29tcF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidG9hc3QtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cInRpdGxlQ2xhc3NcIj57e3RvYXN0LnRpdGxlfX08L2Rpdj5cclxuICAgICAgPGRpdiBbbmdDbGFzc109XCJtZXNzYWdlQ2xhc3NcIiBbbmdTd2l0Y2hdPVwidG9hc3QuYm9keU91dHB1dFR5cGVcIj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJib2R5T3V0cHV0VHlwZS5Db21wb25lbnRcIiAjY29tcG9uZW50Qm9keT48L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJib2R5T3V0cHV0VHlwZS5UcnVzdGVkSHRtbFwiIFtpbm5lckhUTUxdPVwidG9hc3QuYm9keSB8IHRydXN0SHRtbFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cImJvZHlPdXRwdXRUeXBlLkRlZmF1bHRcIj57e3RvYXN0LmJvZHl9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInRvYXN0LWNsb3NlLWJ1dHRvblwiICpuZ0lmPVwidG9hc3Quc2hvd0Nsb3NlQnV0dG9uXCIgKGNsaWNrKT1cImNsaWNrKCRldmVudCwgdG9hc3QpXCJcclxuICAgICAgW2lubmVySFRNTF09XCJ0b2FzdC5jbG9zZUh0bWwgfCB0cnVzdEh0bWxcIj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGRpdiAqbmdJZj1cInRvYXN0LnByb2dyZXNzQmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1wcm9ncmVzcy1iYXJcIiBbc3R5bGUud2lkdGhdPVwicHJvZ3Jlc3NCYXJXaWR0aCArICclJ1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgdG9hc3RlcmNvbmZpZyE6IElUb2FzdGVyQ29uZmlnO1xyXG4gIEBJbnB1dCgpIHRvYXN0ITogVG9hc3Q7XHJcbiAgQElucHV0KCkgdGl0bGVDbGFzcyE6IHN0cmluZztcclxuICBASW5wdXQoKSBtZXNzYWdlQ2xhc3MhOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZCgnY29tcG9uZW50Qm9keScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KSBjb21wb25lbnRCb2R5ITogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgcHVibGljIHByb2dyZXNzQmFyV2lkdGg6IG51bWJlciA9IC0xO1xyXG4gIHB1YmxpYyBib2R5T3V0cHV0VHlwZSA9IEJvZHlPdXRwdXRUeXBlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY2xpY2tFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcmVtb3ZlVG9hc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8VG9hc3Q+KCk7XHJcblxyXG4gIHByaXZhdGUgdGltZW91dElkPzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXJJbnRlcnZhbElkPzogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSByZW1vdmVUb2FzdFRpY2shOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlTW91c2VPdmVyTGlzdGVuZXIhOiAoKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnRvYXN0LnByb2dyZXNzQmFyKSB7XHJcbiAgICAgIHRoaXMudG9hc3QucHJvZ3Jlc3NCYXJEaXJlY3Rpb24gPSB0aGlzLnRvYXN0LnByb2dyZXNzQmFyRGlyZWN0aW9uIHx8ICdkZWNyZWFzaW5nJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGltZW91dCA9ICh0eXBlb2YgdGhpcy50b2FzdC50aW1lb3V0ID09PSAnbnVtYmVyJylcclxuICAgICAgPyB0aGlzLnRvYXN0LnRpbWVvdXQgOiB0aGlzLnRvYXN0ZXJjb25maWcudGltZW91dDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHRpbWVvdXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGltZW91dCA9IHRpbWVvdXRbdGhpcy50b2FzdC50eXBlXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMudG9hc3QuYm9keU91dHB1dFR5cGUgPT09IHRoaXMuYm9keU91dHB1dFR5cGUuQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudG9hc3QuYm9keSk7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudEluc3RhbmNlOiBhbnkgPSB0aGlzLmNvbXBvbmVudEJvZHkuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCwgdW5kZWZpbmVkLCB0aGlzLmNvbXBvbmVudEJvZHkuaW5qZWN0b3IpO1xyXG4gICAgICBjb21wb25lbnRJbnN0YW5jZS5pbnN0YW5jZS50b2FzdCA9IHRoaXMudG9hc3Q7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRvYXN0ZXJjb25maWcubW91c2VvdmVyVGltZXJTdG9wKSB7XHJcbiAgICAgIC8vIG9ubHkgYXBwbHkgYSBtb3VzZWVudGVyIGV2ZW50IHdoZW4gbmVjZXNzYXJ5IHRvIGF2b2lkXHJcbiAgICAgIC8vIHVubmVjZXNzYXJ5IGV2ZW50IGFuZCBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlcy5cclxuICAgICAgdGhpcy5yZW1vdmVNb3VzZU92ZXJMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIyLmxpc3RlbihcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAnbW91c2VlbnRlcicsXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zdG9wVGltZXIoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29uZmlndXJlVGltZXIoKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCB0b2FzdDogVG9hc3QpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbGlja0V2ZW50LmVtaXQoeyB2YWx1ZTogeyB0b2FzdDogdG9hc3QsIGlzQ2xvc2VCdXR0b246IHRydWUgfSB9KTtcclxuICB9XHJcblxyXG4gIHN0b3BUaW1lcigpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCA9IDA7XHJcbiAgICB0aGlzLmNsZWFyVGltZXJzKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICByZXN0YXJ0VGltZXIoKSB7XHJcbiAgICBpZiAodGhpcy50b2FzdGVyY29uZmlnLm1vdXNlb3ZlclRpbWVyU3RvcCkge1xyXG4gICAgICBpZiAoIXRoaXMudGltZW91dElkKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmVUaW1lcigpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGltZW91dCAmJiAhdGhpcy50aW1lb3V0SWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmVUb2FzdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yZW1vdmVNb3VzZU92ZXJMaXN0ZW5lcikge1xyXG4gICAgICB0aGlzLnJlbW92ZU1vdXNlT3Zlckxpc3RlbmVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyVGltZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyZVRpbWVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnRpbWVvdXQgfHwgdGhpcy50aW1lb3V0IDwgMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9hc3QucHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgdGhpcy5yZW1vdmVUb2FzdFRpY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMudGltZW91dDtcclxuICAgICAgdGhpcy5wcm9ncmVzc0JhcldpZHRoID0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlVG9hc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgdGhpcy50aW1lb3V0KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRvYXN0LnByb2dyZXNzQmFyKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckludGVydmFsSWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc0JhcldpZHRoID09PSAwIHx8IHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCA9PT0gMTAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2dyZXNzQmFyV2lkdGggPSAoKHRoaXMucmVtb3ZlVG9hc3RUaWNrIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gdGhpcy50aW1lb3V0KSAqIDEwMDtcclxuXHJcbiAgICBpZiAodGhpcy50b2FzdC5wcm9ncmVzc0JhckRpcmVjdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCA9IDEwMCAtIHRoaXMucHJvZ3Jlc3NCYXJXaWR0aDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2dyZXNzQmFyV2lkdGggPCAwKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc0JhcldpZHRoID4gMTAwKSB7XHJcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXJXaWR0aCA9IDEwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJUaW1lcnMoKSB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0SWQpIHtcclxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9ncmVzc0JhckludGVydmFsSWQpIHtcclxuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5wcm9ncmVzc0JhckludGVydmFsSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcclxuICAgIHRoaXMucHJvZ3Jlc3NCYXJJbnRlcnZhbElkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlVG9hc3QoKSB7XHJcbiAgICB0aGlzLnJlbW92ZVRvYXN0RXZlbnQuZW1pdCh0aGlzLnRvYXN0KTtcclxuICB9XHJcbn1cclxuIl19