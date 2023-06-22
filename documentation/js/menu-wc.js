'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-c6a9411b49a8bcaaa80f4e74c2068ec59acb1e82fbf8d208ee83e94df21b2b93f37521c3c517d4950e4617676a41d6567c97c57e2d644405f76f8a303816374f"' : 'data-bs-target="#xs-components-links-module-AppModule-c6a9411b49a8bcaaa80f4e74c2068ec59acb1e82fbf8d208ee83e94df21b2b93f37521c3c517d4950e4617676a41d6567c97c57e2d644405f76f8a303816374f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c6a9411b49a8bcaaa80f4e74c2068ec59acb1e82fbf8d208ee83e94df21b2b93f37521c3c517d4950e4617676a41d6567c97c57e2d644405f76f8a303816374f"' :
                                            'id="xs-components-links-module-AppModule-c6a9411b49a8bcaaa80f4e74c2068ec59acb1e82fbf8d208ee83e94df21b2b93f37521c3c517d4950e4617676a41d6567c97c57e2d644405f76f8a303816374f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-49b6c742204327c738483f4a3810196094875b7c297314f24457984368fe53f132a6bda62c50830e42168c132b3b0588803adc7b6d2dc89d173a5dcee997e969"' : 'data-bs-target="#xs-components-links-module-CoreModule-49b6c742204327c738483f4a3810196094875b7c297314f24457984368fe53f132a6bda62c50830e42168c132b3b0588803adc7b6d2dc89d173a5dcee997e969"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-49b6c742204327c738483f4a3810196094875b7c297314f24457984368fe53f132a6bda62c50830e42168c132b3b0588803adc7b6d2dc89d173a5dcee997e969"' :
                                            'id="xs-components-links-module-CoreModule-49b6c742204327c738483f4a3810196094875b7c297314f24457984368fe53f132a6bda62c50830e42168c132b3b0588803adc7b6d2dc89d173a5dcee997e969"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-OrdersModule-8a74dce6b3b751719d8312b6c8384e7720f6adaea453bdd95cb83645667b22a9edc55dfbd9f229d9f4a8678f16d2dee4070429bc48ac633a381749ece3159bd5"' : 'data-bs-target="#xs-components-links-module-OrdersModule-8a74dce6b3b751719d8312b6c8384e7720f6adaea453bdd95cb83645667b22a9edc55dfbd9f229d9f4a8678f16d2dee4070429bc48ac633a381749ece3159bd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-8a74dce6b3b751719d8312b6c8384e7720f6adaea453bdd95cb83645667b22a9edc55dfbd9f229d9f4a8678f16d2dee4070429bc48ac633a381749ece3159bd5"' :
                                            'id="xs-components-links-module-OrdersModule-8a74dce6b3b751719d8312b6c8384e7720f6adaea453bdd95cb83645667b22a9edc55dfbd9f229d9f4a8678f16d2dee4070429bc48ac633a381749ece3159bd5"' }>
                                            <li class="link">
                                                <a href="components/FormOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PageNotFoundModule-b5bccd6ed6555474af0b2548e35aef87c3458acf714f0e978b206b2df01f83f690fe991cd511bd10cf70243f44ec8eeb5867ceabb33e88fb9d63047b4322ee02"' : 'data-bs-target="#xs-components-links-module-PageNotFoundModule-b5bccd6ed6555474af0b2548e35aef87c3458acf714f0e978b206b2df01f83f690fe991cd511bd10cf70243f44ec8eeb5867ceabb33e88fb9d63047b4322ee02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-b5bccd6ed6555474af0b2548e35aef87c3458acf714f0e978b206b2df01f83f690fe991cd511bd10cf70243f44ec8eeb5867ceabb33e88fb9d63047b4322ee02"' :
                                            'id="xs-components-links-module-PageNotFoundModule-b5bccd6ed6555474af0b2548e35aef87c3458acf714f0e978b206b2df01f83f690fe991cd511bd10cf70243f44ec8eeb5867ceabb33e88fb9d63047b4322ee02"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' : 'data-bs-target="#xs-components-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' :
                                            'id="xs-components-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' :
                                            'id="xs-pipes-links-module-SharedModule-fd5342d6f431f88b2288437110ebb73e32f504fa0751d5a6c3b8ef428de0ed67be41658366d6847933f916d63129c50ab6dee700881adc371656be3ec84d2d26"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});