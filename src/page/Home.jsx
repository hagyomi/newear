import Hero from '../components/Hero/Hero';
import { useRef } from 'react';
import { useForYouTransition } from '../components/ForYou/useForYouTransition';
import ForYouMask from '../components/ForYou/ForYouMask';
import History from '../components/History/History';
import Silhouette from '../components/Silhouette/Silhouette';
import Collaboration from '../components/Collaboration/Collaboration';
import ShopAll from '../components/ShopAll/ShopAll';
import './Home.css';
const imgCon2 = `${import.meta.env.BASE_URL}images/figma/imgCon2.png`;
const imgFrame16 = `${import.meta.env.BASE_URL}images/figma/imgFrame16.png`;
const imgFrame17 = `${import.meta.env.BASE_URL}images/figma/imgFrame17.png`;
const imgFrame18 = `${import.meta.env.BASE_URL}images/figma/imgFrame18.png`;
const imgFrame19 = `${import.meta.env.BASE_URL}images/figma/imgFrame19.png`;
const imgFrame20 = `${import.meta.env.BASE_URL}images/figma/imgFrame20.png`;
const imgImage18 = `${import.meta.env.BASE_URL}images/figma/imgImage18.png`;
const imgImgi1725Hw011 = `${import.meta.env.BASE_URL}images/figma/imgImgi1725Hw011.png`;
const imgVector3 = `${import.meta.env.BASE_URL}images/figma/imgVector3.svg`;

export default function Home() {
    const transitionRef = useRef(null);
    useForYouTransition(transitionRef);
    return (
        <main id="main-content">
            <Hero />{' '}
            <div
                className="attitude__layer-35 section-flow attitude"
                data-node-id="110:905"
                data-name="con1"
            >
                <div className="attitude__layer-36" data-node-id="110:906" data-name="inner">
                    <p className="attitude__layer-37" data-node-id="110:907">
                        01
                    </p>
                    <div className="attitude__layer-38" data-node-id="110:908">
                        <div className="attitude__layer-39">
                            <img alt="" className="attitude__layer-40" src={imgVector3} />
                        </div>
                    </div>
                    <ul className="attitude__layer-41" data-node-id="110:909">
                        <li className="attitude__layer-42">
                            <span className="attitude__layer-43">{` THE NEW ERA ATTITUDE`}</span>
                        </li>
                    </ul>
                    <p className="attitude__layer-44" data-node-id="110:910">
                        Style Is
                        <br aria-hidden />
                        an Expression.
                    </p>
                    <div className="attitude__layer-45" data-node-id="110:911">
                        <p className="attitude__layer-46">스타일은 자신을 표현하는</p>
                        <p className="attitude__layer-47">또 하나의 언어.</p>
                        <p className="attitude__layer-48">
                            정해진 틀을 넘어, 자신만의 방식으로
                            <br aria-hidden />
                            새로운 스타일의 가능성을 발견하다.
                        </p>
                    </div>
                </div>
            </div>{' '}
            <div
                ref={transitionRef} className="foryou-transition"
            >
            <div className="foryou-transition__stage">
            <div className="foryou__layer-49 section-flow foryou"
                data-node-id="110:912"
                data-name="FW26"
            >
                <ForYouMask />
                <div className="foryou__layer-50" data-node-id="110:913" data-name="inner">
                    <p
                        className="foryou__layer-51"
                        data-node-id="110:914"
                    >
                        FOR YOU
                    </p>
                </div>
            </div>{' '}
            <div
                className="categories__layer-52 section-flow categories"
                data-node-id="110:915"
                data-name="con2"
            >
                <img alt="" className="categories__layer-53" src={imgCon2} />
                <div className="categories__layer-54" data-node-id="110:916" data-name="inner">
                    <div className="categories__layer-55" data-node-id="110:917">
                        <div className="categories__layer-56">
                            <div className="categories__layer-57">
                                <img
                                    alt="뉴에라 헤드웨어"
                                    className="categories__layer-58"
                                    src={imgFrame16}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="categories__layer-59" data-node-id="110:919">
                        <div className="categories__layer-60">
                            <div className="categories__layer-61">
                                <div className="categories__layer-62">
                                    <img
                                        alt="뉴에라 어패럴"
                                        className="categories__layer-63"
                                        src={imgFrame17}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categories__layer-64" data-node-id="110:921">
                        <div className="categories__layer-65">
                            <div className="categories__layer-66">
                                <div className="categories__layer-67">
                                    <img
                                        alt="뉴에라 액세서리"
                                        className="categories__layer-68"
                                        src={imgFrame18}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categories__layer-69" data-node-id="110:923">
                        <div className="categories__layer-70">
                            <div className="categories__layer-71">
                                <div className="categories__layer-72">
                                    <img
                                        alt="뉴에라 키즈"
                                        className="categories__layer-73"
                                        src={imgFrame19}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categories__layer-74" data-node-id="110:925">
                        <div className="categories__layer-75">
                            <div className="categories__layer-76">
                                <div className="categories__layer-77">
                                    <img
                                        alt="뉴에라 블랙라벨"
                                        className="categories__layer-78"
                                        src={imgFrame20}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="categories__layer-79" data-node-id="158:345">
                        <div className="categories__layer-80">
                            <p className="categories__layer-81">HeadWear</p>
                        </div>
                    </div>
                    <div className="categories__layer-82" data-node-id="158:350">
                        <div className="categories__layer-83">
                            <p className="categories__layer-84">apparel</p>
                        </div>
                    </div>
                    <div className="categories__layer-85" data-node-id="158:351">
                        <div className="categories__layer-86">
                            <p className="categories__layer-87">accessories</p>
                        </div>
                    </div>
                    <div className="categories__layer-88" data-node-id="158:352">
                        <div className="categories__layer-89">
                            <p className="categories__layer-90">kids</p>
                        </div>
                    </div>
                    <div className="categories__layer-91" data-node-id="158:353">
                        <div className="categories__layer-92">
                            <p className="categories__layer-93">black label</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <History />{' '}
            <div className="authentic__layer-144 section-flow authentic" data-node-id="110:956">
                <div className="authentic__layer-145" data-node-id="110:957" data-name="inner">
                    <p className="authentic__layer-146" data-node-id="110:958">
                        03
                    </p>
                    <div className="authentic__layer-147" data-node-id="110:959">
                        <div className="authentic__layer-148">
                            <img alt="" className="authentic__layer-149" src={imgVector3} />
                        </div>
                    </div>
                    <ul className="authentic__layer-150" data-node-id="110:960">
                        <li className="authentic__layer-151">
                            <span className="authentic__layer-152">MLB AUTHENTIC COLLECTION</span>
                        </li>
                    </ul>
                    <div className="authentic__layer-153" data-node-id="110:961" />
                    <div className="authentic__layer-154" data-node-id="110:962">
                        <p className="authentic__layer-155">The Authentic</p>
                        <p className="authentic__layer-156">59FIFTY</p>
                    </div>
                    <div
                        className="authentic__layer-157"
                        data-node-id="110:963"
                        data-name="image 18"
                    >
                        <img
                            alt="NEW ERA와 MLB 어센틱 컬렉션"
                            className="authentic__layer-158"
                            src={imgImage18}
                        />
                    </div>
                    <div
                        className="authentic__layer-159"
                        data-node-id="110:964"
                        data-name="imgi_17_25_hw_01 1"
                    >
                        <div className="authentic__layer-160">
                            <img
                                alt="59FIFTY 어센틱 모자 컬렉션"
                                className="authentic__layer-161"
                                src={imgImgi1725Hw011}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Silhouette />
            <Collaboration />
            <ShopAll />
        </main>
    );
}
