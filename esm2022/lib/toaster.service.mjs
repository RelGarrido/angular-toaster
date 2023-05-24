import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
// http://stackoverflow.com/questions/26501688/a-typescript-guid-class
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
export class ToasterService {
    addToast;
    _addToast;
    clearToasts;
    _clearToasts;
    removeToast;
    /** @internal */
    _removeToastSubject;
    /**
     * Creates an instance of ToasterService.
     */
    constructor() {
        this.addToast = new Observable((observer) => this._addToast = observer).pipe(share());
        this.clearToasts = new Observable((observer) => this._clearToasts = observer).pipe(share());
        this._removeToastSubject = new Subject();
        this.removeToast = this._removeToastSubject.pipe(share());
    }
    /**
     * Synchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Toast}
     *          The newly created Toast instance with a randomly generated GUID Id.
     */
    pop(type, title, body) {
        const toast = typeof type === 'string' ? { type: type, title: title, body: body } : type;
        if (!toast.toastId) {
            toast.toastId = Guid.newGuid();
        }
        if (!this._addToast) {
            throw new Error('No Toaster Containers have been initialized to receive toasts.');
        }
        this._addToast.next(toast);
        return toast;
    }
    /**
     * Asynchronously create and show a new toast instance.
     *
     * @param {(string | Toast)} type The type of the toast, or a Toast object.
     * @param {string=} title The toast title.
     * @param {string=} body The toast body.
     * @returns {Observable<Toast>}
     *          A hot Observable that can be subscribed to in order to receive the Toast instance
     *          with a randomly generated GUID Id.
     */
    popAsync(type, title, body) {
        setTimeout(() => {
            this.pop(type, title, body);
        }, 0);
        return this.addToast;
    }
    /**
     * Clears a toast by toastId and/or toastContainerId.
     *
     * @param {string} toastId The toastId to clear.
     * @param {number=} toastContainerId
     *        The toastContainerId of the container to remove toasts from.
     */
    clear(toastId, toastContainerId) {
        const clearWrapper = {
            toastId: toastId, toastContainerId: toastContainerId
        };
        this._clearToasts?.next(clearWrapper);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhcjItdG9hc3Rlci9zcmMvbGliL3RvYXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7QUFFdEMsc0VBQXNFO0FBQ3RFLE1BQU0sSUFBSTtJQUNOLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQztZQUNyRSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFFLENBQUM7WUFDeEUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBR0QsTUFBTSxPQUFPLGNBQWM7SUFDdkIsUUFBUSxDQUFvQjtJQUNwQixTQUFTLENBQW1CO0lBRXBDLFdBQVcsQ0FBNEI7SUFDL0IsWUFBWSxDQUEyQjtJQUUvQyxXQUFXLENBQTRCO0lBQ3ZDLGdCQUFnQjtJQUNoQixtQkFBbUIsQ0FBeUI7SUFFNUM7O09BRUc7SUFDSDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQVEsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBZ0IsQ0FBQyxRQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksT0FBTyxFQUFpQixDQUFBO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILEdBQUcsQ0FBQyxJQUF1QixFQUFFLEtBQWMsRUFBRSxJQUFhO1FBQ3RELE1BQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFekYsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDaEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDckY7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsUUFBUSxDQUFDLElBQXVCLEVBQUUsS0FBYyxFQUFFLElBQWE7UUFDM0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxPQUFnQixFQUFFLGdCQUF5QjtRQUM3QyxNQUFNLFlBQVksR0FBa0I7WUFDaEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDdkQsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3pDLENBQUM7dUdBNUVRLGNBQWM7MkdBQWQsY0FBYyxjQURELE1BQU07OzJGQUNuQixjQUFjO2tCQUQxQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3QsIFRvYXN0VHlwZSB9IGZyb20gJy4vdG9hc3QnO1xyXG5pbXBvcnQgeyBJQ2xlYXJXcmFwcGVyIH0gZnJvbSAnLi9jbGVhcldyYXBwZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xyXG5cclxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjUwMTY4OC9hLXR5cGVzY3JpcHQtZ3VpZC1jbGFzc1xyXG5jbGFzcyBHdWlkIHtcclxuICAgIHN0YXRpYyBuZXdHdWlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09PSAneCcgPyByIDogKCByICYgMHgzIHwgMHg4ICk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJTZXJ2aWNlIHtcclxuICAgIGFkZFRvYXN0OiBPYnNlcnZhYmxlPFRvYXN0PjtcclxuICAgIHByaXZhdGUgX2FkZFRvYXN0PzogT2JzZXJ2ZXI8VG9hc3Q+O1xyXG5cclxuICAgIGNsZWFyVG9hc3RzOiBPYnNlcnZhYmxlPElDbGVhcldyYXBwZXI+O1xyXG4gICAgcHJpdmF0ZSBfY2xlYXJUb2FzdHM/OiBPYnNlcnZlcjxJQ2xlYXJXcmFwcGVyPjtcclxuXHJcbiAgICByZW1vdmVUb2FzdDogT2JzZXJ2YWJsZTxJQ2xlYXJXcmFwcGVyPjtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIF9yZW1vdmVUb2FzdFN1YmplY3Q6IFN1YmplY3Q8SUNsZWFyV3JhcHBlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFRvYXN0ZXJTZXJ2aWNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFkZFRvYXN0ID0gbmV3IE9ic2VydmFibGU8VG9hc3Q+KChvYnNlcnZlcjogYW55KSA9PiB0aGlzLl9hZGRUb2FzdCA9IG9ic2VydmVyKS5waXBlKHNoYXJlKCkpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJUb2FzdHMgPSBuZXcgT2JzZXJ2YWJsZTxJQ2xlYXJXcmFwcGVyPigob2JzZXJ2ZXI6IGFueSkgPT4gdGhpcy5fY2xlYXJUb2FzdHMgPSBvYnNlcnZlcikucGlwZShzaGFyZSgpKTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVUb2FzdFN1YmplY3QgPSBuZXcgU3ViamVjdDxJQ2xlYXJXcmFwcGVyPigpXHJcbiAgICAgICAgdGhpcy5yZW1vdmVUb2FzdCA9IHRoaXMuX3JlbW92ZVRvYXN0U3ViamVjdC5waXBlKHNoYXJlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3luY2hyb25vdXNseSBjcmVhdGUgYW5kIHNob3cgYSBuZXcgdG9hc3QgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoc3RyaW5nIHwgVG9hc3QpfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSB0b2FzdCwgb3IgYSBUb2FzdCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IHRpdGxlIFRoZSB0b2FzdCB0aXRsZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYm9keSBUaGUgdG9hc3QgYm9keS5cclxuICAgICAqIEByZXR1cm5zIHtUb2FzdH1cclxuICAgICAqICAgICAgICAgIFRoZSBuZXdseSBjcmVhdGVkIFRvYXN0IGluc3RhbmNlIHdpdGggYSByYW5kb21seSBnZW5lcmF0ZWQgR1VJRCBJZC5cclxuICAgICAqL1xyXG4gICAgcG9wKHR5cGU6IFRvYXN0VHlwZSB8IFRvYXN0LCB0aXRsZT86IHN0cmluZywgYm9keT86IHN0cmluZyk6IFRvYXN0IHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdHlwZSwgdGl0bGU6IHRpdGxlLCBib2R5OiBib2R5IH0gOiB0eXBlO1xyXG5cclxuICAgICAgICBpZiAoIXRvYXN0LnRvYXN0SWQpIHtcclxuICAgICAgICAgICAgdG9hc3QudG9hc3RJZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9hZGRUb2FzdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFRvYXN0ZXIgQ29udGFpbmVycyBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgdG8gcmVjZWl2ZSB0b2FzdHMuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9hZGRUb2FzdC5uZXh0KHRvYXN0KTtcclxuICAgICAgICByZXR1cm4gdG9hc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBc3luY2hyb25vdXNseSBjcmVhdGUgYW5kIHNob3cgYSBuZXcgdG9hc3QgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHsoc3RyaW5nIHwgVG9hc3QpfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSB0b2FzdCwgb3IgYSBUb2FzdCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IHRpdGxlIFRoZSB0b2FzdCB0aXRsZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYm9keSBUaGUgdG9hc3QgYm9keS5cclxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFRvYXN0Pn1cclxuICAgICAqICAgICAgICAgIEEgaG90IE9ic2VydmFibGUgdGhhdCBjYW4gYmUgc3Vic2NyaWJlZCB0byBpbiBvcmRlciB0byByZWNlaXZlIHRoZSBUb2FzdCBpbnN0YW5jZVxyXG4gICAgICogICAgICAgICAgd2l0aCBhIHJhbmRvbWx5IGdlbmVyYXRlZCBHVUlEIElkLlxyXG4gICAgICovXHJcbiAgICBwb3BBc3luYyh0eXBlOiBUb2FzdFR5cGUgfCBUb2FzdCwgdGl0bGU/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRvYXN0PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wKHR5cGUsIHRpdGxlLCBib2R5KTtcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9hc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgYSB0b2FzdCBieSB0b2FzdElkIGFuZC9vciB0b2FzdENvbnRhaW5lcklkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b2FzdElkIFRoZSB0b2FzdElkIHRvIGNsZWFyLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXI9fSB0b2FzdENvbnRhaW5lcklkXHJcbiAgICAgKiAgICAgICAgVGhlIHRvYXN0Q29udGFpbmVySWQgb2YgdGhlIGNvbnRhaW5lciB0byByZW1vdmUgdG9hc3RzIGZyb20uXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKHRvYXN0SWQ/OiBzdHJpbmcsIHRvYXN0Q29udGFpbmVySWQ/OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBjbGVhcldyYXBwZXI6IElDbGVhcldyYXBwZXIgPSB7XHJcbiAgICAgICAgICAgIHRvYXN0SWQ6IHRvYXN0SWQsIHRvYXN0Q29udGFpbmVySWQ6IHRvYXN0Q29udGFpbmVySWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9jbGVhclRvYXN0cz8ubmV4dChjbGVhcldyYXBwZXIpXHJcbiAgICB9XHJcbn1cclxuIl19