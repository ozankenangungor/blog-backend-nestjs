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
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
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
                                            'data-bs-target="#controllers-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' : 'data-bs-target="#xs-controllers-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' :
                                            'id="xs-controllers-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' : 'data-bs-target="#xs-injectables-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' :
                                        'id="xs-injectables-links-module-AppModule-af0aa4717e1708690246a1018814b3cf0ee56057cb8784226fe2a5dfcf42d7ac65ad97c5440fd8170f6ac87f0ec71b32f7542837afaa6c5301487c7e8d374448"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' :
                                            'id="xs-controllers-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' :
                                        'id="xs-injectables-links-module-AuthModule-74b0af20321bbac8988ee084eb1e6b077f180b6a6cb2b66b582c26c7f2effc1c44d4cbabbea200f6b24888c64f3b8719913da4ef476be9bdc40858481d0db1f6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' :
                                            'id="xs-controllers-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' :
                                        'id="xs-injectables-links-module-PostsModule-d081865a9e53f67609f2f20fdc6eb72b0eda26b7b8c1ecd92eb5596ddd6db073170f6f76cd1e823f67342f17c4b1ccc2bccf4b50b525f420c040f529187f9754"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' :
                                            'id="xs-controllers-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' :
                                        'id="xs-injectables-links-module-UsersModule-69c0988a13fbd6ae57a1112954f82eebb8439cef4c44792ecf14d727e758dd96bd967991d5ad12c63ff47b5c914df7a3d0e86be96a6526d7b13dc92039dc599f"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
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
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
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
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
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
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
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