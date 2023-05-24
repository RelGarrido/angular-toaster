import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToasterContainerComponent } from './toaster-container.component';
import { ToasterService } from './toaster.service';
import { TrustHtmlPipe } from './trust-html.pipe';
import * as i0 from "@angular/core";
export class ToasterModule {
    static forRoot() {
        return {
            ngModule: ToasterModule,
            providers: [ToasterService, ToasterContainerComponent]
        };
    }
    static forChild() {
        return {
            ngModule: ToasterModule,
            providers: [ToasterContainerComponent]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: ToasterModule, declarations: [ToastComponent,
            ToasterContainerComponent,
            TrustHtmlPipe], imports: [CommonModule], exports: [ToasterContainerComponent,
            ToastComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: ToasterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ToastComponent,
                        ToasterContainerComponent,
                        TrustHtmlPipe
                    ],
                    exports: [
                        ToasterContainerComponent,
                        ToastComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMi10b2FzdGVyL3NyYy9saWIvdG9hc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWNsRCxNQUFNLE9BQU8sYUFBYTtJQUN0QixNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDSCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUseUJBQXlCLENBQUM7U0FDekQsQ0FBQTtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNYLE9BQU87WUFDSCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFBO0lBQ0wsQ0FBQzt1R0FiUSxhQUFhO3dHQUFiLGFBQWEsaUJBVGxCLGNBQWM7WUFDZCx5QkFBeUI7WUFDekIsYUFBYSxhQUpQLFlBQVksYUFPbEIseUJBQXlCO1lBQ3pCLGNBQWM7d0dBR1QsYUFBYSxZQVhaLFlBQVk7OzJGQVdiLGFBQWE7a0JBWnpCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsY0FBYzt3QkFDZCx5QkFBeUI7d0JBQ3pCLGFBQWE7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCx5QkFBeUI7d0JBQ3pCLGNBQWM7cUJBQ2pCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcnVzdEh0bWxQaXBlIH0gZnJvbSAnLi90cnVzdC1odG1sLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVG9hc3RDb21wb25lbnQsXHJcbiAgICAgICAgVG9hc3RlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgICAgICBUcnVzdEh0bWxQaXBlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFRvYXN0ZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICAgICAgVG9hc3RDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJNb2R1bGUge1xyXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUb2FzdGVyTW9kdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IFRvYXN0ZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1RvYXN0ZXJTZXJ2aWNlLCBUb2FzdGVyQ29udGFpbmVyQ29tcG9uZW50XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUb2FzdGVyTW9kdWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IFRvYXN0ZXJNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1RvYXN0ZXJDb250YWluZXJDb21wb25lbnRdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gfVxyXG4iXX0=