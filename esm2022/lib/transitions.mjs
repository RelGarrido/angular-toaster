import { trigger, state, style, animate, transition, group } from '@angular/animations';
export const Transitions = [
    trigger('toastState', [
        state('flyRight, flyLeft, slideDown, slideDown, slideUp, slideUp, fade', style({ opacity: 1, transform: 'translate(0,0)' })),
        transition('void => flyRight', [
            style({
                opacity: 0,
                transform: 'translateX(100%)',
                height: 0
            }),
            animate('0.15s ease-in', style({
                opacity: 1,
                height: '*'
            })),
            animate('0.25s 15ms ease-in')
        ]),
        transition('flyRight => void', [
            animate('0.25s ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            })),
            animate('0.15s ease-out', style({
                height: 0
            }))
        ]),
        transition('void => flyLeft', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                height: 0
            }),
            animate('0.15s ease-in', style({
                opacity: 1,
                height: '*'
            })),
            animate('0.25s 15ms ease-in')
        ]),
        transition('flyLeft => void', [
            animate('0.25s 10ms ease-out', style({
                opacity: 0,
                transform: 'translateX(-100%)'
            })),
            animate('0.15s ease-out', style({
                height: 0
            }))
        ]),
        transition('void => slideDown', [
            style({
                opacity: 0,
                transform: 'translateY(-500%)',
                height: 0
            }),
            group([
                animate('0.2s ease-in', style({
                    height: '*'
                })),
                animate('0.4s ease-in', style({
                    transform: 'translate(0,0)'
                })),
                animate('0.3s 0.1s ease-in', style({
                    opacity: 1
                }))
            ])
        ]),
        transition('slideDown => void', group([
            animate('0.3s ease-out', style({
                opacity: 0
            })),
            animate('0.4s ease-out', style({
                transform: 'translateY(-500%)'
            })),
            animate('0.2s 0.2s ease-out', style({
                height: 0
            }))
        ])),
        transition('void => slideUp', [
            style({
                opacity: 0,
                transform: 'translateY(1000%)',
                height: 0
            }),
            group([
                animate('0.2s ease-in', style({
                    height: '*'
                })),
                animate('0.5s ease-in', style({
                    transform: 'translate(0,0)'
                })),
                animate('0.3s 0.1s ease-in', style({
                    opacity: 1
                }))
            ])
        ]),
        transition('slideUp => void', group([
            animate('0.3s ease-out', style({
                opacity: 0
            })),
            animate('0.5s ease-out', style({
                transform: 'translateY(1000%)'
            })),
            animate('0.3s 0.15s ease-out', style({
                height: 0
            }))
        ])),
        transition('void => fade', [
            style({
                opacity: 0,
                height: 0
            }),
            animate('0.20s ease-in', style({
                height: '*'
            })),
            animate('0.15s ease-in', style({
                opacity: 1
            }))
        ]),
        transition('fade => void', [
            group([
                animate('0.0s ease-out', style({
                    // reposition the background to prevent
                    // a ghost image during transition
                    'background-position': '-99999px'
                })),
                animate('0.15s ease-out', style({
                    opacity: 0,
                    'background-image': ''
                })),
                animate('0.3s 20ms ease-out', style({
                    height: 0
                }))
            ])
        ])
    ]),
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMi10b2FzdGVyL3NyYy9saWIvdHJhbnNpdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUNwRCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRztJQUN2QixPQUFPLENBQUMsWUFBWSxFQUFFO1FBQ2xCLEtBQUssQ0FBQyxpRUFBaUUsRUFDbkUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGtCQUFrQjtnQkFDN0IsTUFBTSxFQUFFLENBQUM7YUFDWixDQUFDO1lBQ0YsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1NBQ2hDLENBQUM7UUFDRixVQUFVLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGtCQUFrQjthQUNoQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO2dCQUM1QixNQUFNLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQztTQUNOLENBQUM7UUFDRixVQUFVLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsS0FBSyxDQUFD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LEVBQUUsQ0FBQzthQUNaLENBQUM7WUFDRixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztnQkFDM0IsTUFBTSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztnQkFDM0IsT0FBTyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FFTixDQUFDO1FBQ0YsVUFBVSxDQUFDLGNBQWMsRUFBRTtZQUN2QixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7b0JBQzNCLHVDQUF1QztvQkFDdkMsa0NBQWtDO29CQUNsQyxxQkFBcUIsRUFBRSxVQUFVO2lCQUNwQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztvQkFDNUIsT0FBTyxFQUFFLENBQUM7b0JBQ1Ysa0JBQWtCLEVBQUUsRUFBRTtpQkFDekIsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7b0JBQ2hDLE1BQU0sRUFBRSxDQUFDO2lCQUNaLENBQUMsQ0FBQzthQUNOLENBQUM7U0FDTCxDQUFDO0tBQ0wsQ0FBQztDQUNMLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICAgIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgZ3JvdXAgXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhbnNpdGlvbnMgPSBbXHJcbiAgICB0cmlnZ2VyKCd0b2FzdFN0YXRlJywgW1xyXG4gICAgICAgIHN0YXRlKCdmbHlSaWdodCwgZmx5TGVmdCwgc2xpZGVEb3duLCBzbGlkZURvd24sIHNsaWRlVXAsIHNsaWRlVXAsIGZhZGUnLCBcclxuICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScgfSkpLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZmx5UmlnaHQnLCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC4xNXMgZWFzZS1pbicsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcqJ1xyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzAuMjVzIDE1bXMgZWFzZS1pbicpXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignZmx5UmlnaHQgPT4gdm9pZCcsIFtcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC4yNXMgZWFzZS1vdXQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKSdcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcwLjE1cyBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGZseUxlZnQnLCBbXHJcbiAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsIFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcwLjE1cyBlYXNlLWluJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJyonXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC4yNXMgMTVtcyBlYXNlLWluJylcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKCdmbHlMZWZ0ID0+IHZvaWQnLCBbXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzAuMjVzIDEwbXMgZWFzZS1vdXQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLCBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJ1xyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzAuMTVzIGVhc2Utb3V0Jywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gc2xpZGVEb3duJywgW1xyXG4gICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLCBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwMCUpJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZ3JvdXAoW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4ycyBlYXNlLWluJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJyonXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjRzIGVhc2UtaW4nLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMCknXHJcbiAgICAgICAgICAgICAgICB9KSksIFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4zcyAwLjFzIGVhc2UtaW4nLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignc2xpZGVEb3duID0+IHZvaWQnLCBncm91cChbXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1vdXQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC40cyBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwMCUpJ1xyXG4gICAgICAgICAgICB9KSksIFxyXG4gICAgICAgICAgICBhbmltYXRlKCcwLjJzIDAuMnMgZWFzZS1vdXQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXSkpLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gc2xpZGVVcCcsIFtcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCwgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMDAlKScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGdyb3VwKFtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuMnMgZWFzZS1pbicsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcqJ1xyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC41cyBlYXNlLWluJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLDApJ1xyXG4gICAgICAgICAgICAgICAgfSkpLCBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuM3MgMC4xcyBlYXNlLWluJywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ3NsaWRlVXAgPT4gdm9pZCcsIGdyb3VwKFtcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC4zcyBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcwLjVzIGVhc2Utb3V0Jywgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAwJSknXHJcbiAgICAgICAgICAgIH0pKSwgXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzAuM3MgMC4xNXMgZWFzZS1vdXQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgXSkpLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZmFkZScsIFtcclxuICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC4yMHMgZWFzZS1pbicsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJyonXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC4xNXMgZWFzZS1pbicsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ2ZhZGUgPT4gdm9pZCcsIFtcclxuICAgICAgICAgICAgZ3JvdXAoW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4wcyBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXBvc2l0aW9uIHRoZSBiYWNrZ3JvdW5kIHRvIHByZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGdob3N0IGltYWdlIGR1cmluZyB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnLTk5OTk5cHgnXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjE1cyBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJydcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzAuM3MgMjBtcyBlYXNlLW91dCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdKSxcclxuXSJdfQ==